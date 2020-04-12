import { Component, OnInit } from '@angular/core';
import { UsersInter } from '../list/list.component';
import { HttpService }from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: UsersInter;
  posts: Posts;
  id: String;

  newPost: SinglePost = {
    title: "",
    body: "",
    id:"",
    user_id: "",
  }


  constructor(
    public _http: HttpService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("tourist_id");
    this._http.getUser(this.id).subscribe((gotUsr: GtUsr) => {
      this.user = gotUsr.result;
      console.log("got user " , this.user);
      console.log(this.user.first_name);
    });

    this._http.getPosts(this.id).subscribe((gotPosts: Posts) => {
      this.posts = gotPosts;
      console.log("got posts: ", gotPosts);
      console.log(this.posts.result);
    });
  }
  
  createPost(){
    console.log(this.newPost);
    this._http.addPost(this.id, this.newPost, this);
    this.clearPost();
  }

  clearPost(){
    this.newPost.body = "";
    this.newPost.title = "";
  }

}

export interface GtUsr{
  result: UsersInter,
}

export interface Posts{
  result: SinglePost[]
}

export interface SinglePost{
  title: String,
  body: String,
  user_id: String,
  id: String,
}