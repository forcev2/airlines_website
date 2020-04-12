import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersInter } from './list/list.component';
import { ListComponent } from './list/list.component';
import { SinglePost, AccountComponent } from './account/account.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { Tourist } from './tourist';
import { Flights } from './flights';
import { FlightListComponent } from './flightlist/flightlist.component';


//QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa Access-token
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa'
    })
  };
  usr: userNew;
  postNew: Post;
  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getUsers() {
    return this.http.get('https://gorest.co.in/public-api/users?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa');
  }

  putUser(user: UsersInter, forUpdate: ListComponent) {
    console.log('https://gorest.co.in/public-api/users/'
      + user.id
      + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa');
    return this.http.patch('https://gorest.co.in/public-api/users/'
      + user.id
      + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      user).subscribe(
        response => {
          console.log("recievd ok response");
          forUpdate.ngOnInit();

        },
        error => { console.log(error) }
      );
  }

  addUser(user: UsersInter, forUpdate: ListComponent) {
    this.usr = {
      address: user.address,
      dob: "1991-04-30",
      email: user.email,
      first_name: user.first_name,
      gender: "female",
      last_name: user.last_name,
      phone: user.phone,
      status: "inactive",
      website: "http://www.cartwright.info/et-aut-dolor-officiis-vero-aliquid-ipsam.html",
    }
    return this.http.post('https://gorest.co.in/public-api/users?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      this.usr, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );

  }

  delUser(user: UsersInter, forUpdate: ListComponent) {
    console.log("4", user.id)
    return this.http.delete('https://gorest.co.in/public-api/users/'
      + user.id
      + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa').subscribe(
        response => {
          console.log("recievd ok response");
          forUpdate.ngOnInit();

        },
        error => { console.log(error) }
      );
  }

  getUser(id: String) {
    return this.http.get('https://gorest.co.in/public-api/users/' + id + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa')
  }

  getPosts(id: String) {
    console.log("IDDDD " + id);
    return this.http.get('https://gorest.co.in/public-api/posts?user_id=' + id + '&access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa')
  }

  getAllPosts() {
    return this.http.get('https://gorest.co.in/public-api/posts?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa')
  }

  addPost(user_id: String, post: SinglePost, forUpdate: AccountComponent) {
    this.postNew = {
      user_id: Number(user_id),
      title: post.title,
      body: post.body,
    }

    return this.http.post('https://gorest.co.in/public-api/posts?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      this.postNew, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response to post", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );
  }

  addCreatePost(user_id: String, post: SinglePost, forUpdate: UserPostsComponent) {
    this.postNew = {
      user_id: Number(user_id),
      title: post.title,
      body: post.body,
    }

    return this.http.post('https://gorest.co.in/public-api/posts?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      this.postNew, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response to post", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );
  }

  getComments(postId: String, forUpdate: UserPostsComponent) {
    console.log("IDDDD " + postId);
    return this.http.get('https://gorest.co.in/public-api/comments?post_id=' + postId + '&access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa');
  }


  //Tourist
  getTouristList() {
    return this.http.get('http://localhost:8080/management/getTouristList');
  }

  addTourist(tourist: Tourist, forUpdate: ListComponent) {
    return this.http.post('http://localhost:8080/management/addNewTourist',
      tourist, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );
  }

  delTourist(user: Tourist, forUpdate: ListComponent) {
    console.log("delete", user.tourist_id)
    return this.http.delete('http://localhost:8080//management/deleteTourist?tourist_id='
      + user.tourist_id).subscribe(
        response => {
          console.log("recievd ok response");
          forUpdate.ngOnInit();

        },
        error => { console.log(error) }
      );
  }

  getTouristFlights(tourist_id: String) {
    return this.http.get('http://localhost:8080/management/getTouristFlights?tourist_id=' + tourist_id);
  }

  getTouristById(tourist_id: String) {
    return this.http.get('http://localhost:8080/management/getTouristById?tourist_id=' + tourist_id);
  }

  deleteFlightFromUser(tourist_id: String, flight_id: String) {
    return this.http.delete('http://localhost:8080/management/deleteUserFromFlight?tourist_id=' + tourist_id + '&flight_id=' + flight_id);
  }


  addTouristToFlight(tourist: String, flight: String){
    var add: Transaction_add = {tourist_id : Number(tourist), flight_id : Number(flight)};
    return this.http.post('http://localhost:8080/management/addTouristToFlight',
      add, this.httpOptions);
  }

  getTouristsOfFlight(flight_id: String){
    return this.http.get('http://localhost:8080/management/getTouristsOfFlight?flight_id='+flight_id);
  }


  //Flights
  getFlightsList(){
    return this.http.get('http://localhost:8080/management/getFlightsList')
  }

  getFlightWithAvSeats(flight_id: String){
    console.log(flight_id);
    return this.http.get('http://localhost:8080/management/getFlightWithAvSeats?flight_id='+flight_id);
  }

  getFlightByDate(departure: String, departure2: String) {
    console.log("first: " + departure, "second: "+ departure2);
    return this.http.get('http://localhost:8080/management/searchFlightsByDates?departure=' + departure + '&departure2=' + departure2);
  }


  searchTourists(searchQuery: String){
    searchQuery = searchQuery.toLowerCase();
    return this.http.get('http://localhost:8080/management/searchTourists?search='+searchQuery);
  }

  addNewFlight(flight: Flights, fl: FlightListComponent){
    return this.http.post('http://localhost:8080/management/addNewFlight', flight, this.httpOptions).subscribe(
      response => {
        console.log("recievd ok response", response);
        fl.ngOnInit();
      },
      error => { console.log(error) }
    );
  }

  searchFlightsQuery(start: String, end: String, ticket_price: Number, hour_greater: String, hour_less: String) {
    console.log("first: " + start, "second: "+ end);
    return this.http.get('http://localhost:8080/management/searchFlightsByQuery?start=' + start + '&end=' + 
      end + "&ticket_price=" + ticket_price + "&hour_greater=" + hour_greater + "&hour_less=" + hour_less);
  }
}

export interface Transaction_add {
  tourist_id: Number, 
  flight_id: Number,
}

export interface Post {
  user_id: Number,
  title: String,
  body: String,
}

export interface userNew {
  address: String,
  dob: String,
  email: String,
  first_name: String,
  gender: String,
  last_name: String,
  phone: String,
  status: String,
  website: String,
}



