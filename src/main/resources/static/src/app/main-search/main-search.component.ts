import { Component, OnInit } from '@angular/core';
import { ClassType } from '../class-type';
import { FlightsWithAvSeats } from '../flights-with-av-seats';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { FlightWithDateDiffrence } from '../flight-with-date-diffrence';
import * as moment from 'moment';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {

  filter_by_price: boolean = false;
  show_unavaible: boolean = true;
  show_after_search: boolean = true;
  ticket_max_price: Number = 1000;
  serializedDate1: FormControl = new FormControl((new Date()));
  serializedDate2: FormControl = new FormControl((new Date()));
  num_of_people: Number = 2;
  hour_greater: String = "00:00";
  hour_less: String = "23:59";
  flights: FlightsWithAvSeats[];
  num_people_after_search: Number;
  flights_dif: FlightWithDateDiffrence[] = [];

  class_types: ClassType[] = [
    { value: 'every', viewValue: 'Any' },
    { value: 'economy', viewValue: 'Economy' },
    { value: 'economy_premium', viewValue: 'Economy Premium' },
    { value: 'business', viewValue: 'Business' },
    { value: 'first', viewValue: 'First' },
  ];

  choosenClass = this.class_types[0];

  constructor(
    public _http: HttpService,
    private _Activatedroute: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

  formatLabel(value: number) {
    if (value == 1000) {
      return "max";
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  search() {
    var start: String = this.serializedDate1.value.toISOString();
    var end: String = this.serializedDate2.value.toISOString();
    var ticket_price = this.ticket_max_price;
    var hour_greater = this.hour_greater;
    var hour_less = this.hour_less;
    this.flights_dif = [];
    this.num_people_after_search = this.num_of_people;
    this.show_after_search = this.show_unavaible;

    if (!this.filter_by_price) {
      ticket_price = 999999;
    }

    this._http.searchFlightsQuery(start, end, ticket_price, hour_greater, hour_less).subscribe((flights: FlightsWithAvSeats[]) => {
      this.flights = flights;
      for (var i = 0; i < flights.length; i++) {
        this.flights_dif.push({flight: flights[i], date_diffrence : this.calculateDiffrence(flights[i].arrival_date_and_time, flights[i].departure_date_and_time)});
      }
    });

  }

  calculateDiffrence(start_date: Date, end_date: Date) {
    var a = moment(start_date);
    var b = moment(end_date);
    var diffc = a.diff(b, 'days');

    return diffc.toString();
  }


}
