import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Flights } from '../flights';
import { Tourist } from '../tourist';
import { FlightsWithAvSeats } from '../flights-with-av-seats';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-userflights',
  templateUrl: './userflights.component.html',
  styleUrls: ['./userflights.component.scss']
})
export class UserflightsComponent implements OnInit {

  id: String;
  user: Tourist;
  user_flights: Flights[];
  avaible_flights: FlightsWithAvSeats[];
  serializedDate1 = new FormControl((new Date()));
  serializedDate2 = new FormControl((new Date()));



  constructor(
    public _http: HttpService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("tourist_id");
    this._http.getTouristById(this.id).subscribe((gotUsr: Tourist) => {
      this.user = gotUsr;
      console.log("got user ", this.user);
      console.log(this.user.surname);
    });

    this.getBookedFlights();
  }

  deleteBookedFlight(flight: Flights){
    this._http.deleteFlightFromUser(this.id, flight.flight_id.toString()).subscribe((id: Number) => {

      this.getBookedFlights();
      this.getFlightsByDate();
    });
  }

  getBookedFlights(){
    this._http.getTouristFlights(this.id).subscribe((flights: Flights[]) => {
      this.user_flights = flights;
      console.log("got flights: ", flights);
      console.log(this.user_flights);
    });
  }

  getFlightsByDate(){
    var departure: String = this.serializedDate1.value.toISOString();
    var departure2: String = this.serializedDate2.value.toISOString();
    this._http.getFlightByDate(departure, departure2).subscribe((flights: FlightsWithAvSeats[]) => {
      this.avaible_flights = flights;
    });
  }

  addFlightToTourist(flight_id: String){
    this._http.addTouristToFlight(this.id, flight_id).subscribe((id: Number) => {
      
      this.getBookedFlights();
      this.getFlightsByDate();
    });
  }


}
