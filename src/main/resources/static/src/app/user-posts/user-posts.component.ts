import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Users, UsersInter } from '../list/list.component';
import { Posts, SinglePost } from '../account/account.component';
import { debug } from 'util';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})

export class UserPostsComponent implements OnInit {

  users: Users;
  posts: Posts;
  selected: String;
  user: UsersInter;
  postedUsers: UserPost[] = []; 
  posted: UserPost;
  completePost: PostWithUser[] = []; ///Final Interface for posts
  isDataLoaded: Boolean;
  comments: Comments[] = [];


  newPost: SinglePost = {
    title: "",
    body: "",
    id: "",
    user_id: "",
  }

  constructor(
    private _http: HttpService,
  ) { }

  ngOnInit() {
    this.isDataLoaded = false;
    this._http.getUsers().subscribe((users: Users) => {
      this.users = users;
      console.log("well...", users.result);
    });
    var i = 0;

    this._http.getAllPosts().subscribe((posts: Posts) => {
      this.posts = posts;
      for (let userId of posts.result) {
        this._http.getUser(userId.user_id).subscribe((user: Us) => {
          this.completePost.push({user: { first_name: user.result.first_name, last_name: user.result.last_name, email: user.result.email },
             post: userId,
             toggle: false,
             status: "show comments"
            });
        });
        this._http.getComments(userId.id, this).subscribe((comments: Comments) => {
          this.comments[i] = comments;
          console.log(i , " = ", comments);
          if(i >= 19){
            console.log("NOW!", i)

            this.isDataLoaded = true;
          }
          i += 1;
        });
      }
      console.log("posted_users", this.postedUsers);
      console.log("well...", posts.result);
      console.log("final...", this.completePost);
      console.log("comments...", this.comments);
    });
  }
  createPost() {
    console.log(this.newPost);
    this._http.addCreatePost(this.selected, this.newPost, this);
    this.clearPost();
  }

  clearPost() {
    this.newPost.body = "";
    this.newPost.title = "";
    this.selected = "";
  }

  pr(user: UsersInter) {
    console.log(user);
  }

  hideme = [];

  showComments(expansion){
    expansion.toggle = !expansion.toggle;
    expansion.status = expansion.toggle ? 'hide comments' : 'show comments';
  }

  getComments(id, i){
    this._http.getComments(id, this)
  }

}

export interface PostWithUser{
  user: UserPost;
  post: SinglePost;
  toggle: Boolean;
  status: String;
}

export interface UserPost {
  email: String,
  first_name: String,
  last_name: String,
}

export interface Us{
  result: UsersInter;
}

export interface Comment{
  body: String;
  name: String;
  email: String;
}

export interface Comments{
  result: Comment[];
}