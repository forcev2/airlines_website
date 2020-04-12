import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Flights } from '../flights';
import { Tourist } from '../tourist';
import { FlightsWithAvSeats } from '../flights-with-av-seats';
import { FlightListComponent } from '../flightlist/flightlist.component';
import { DialogNotesComponent } from '../dialog-notes/dialog-notes.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-flight-users',
  templateUrl: './flight-users.component.html',
  styleUrls: ['./flight-users.component.scss']
})
export class FlightUsersComponent implements OnInit {

  id: String;
  flight: FlightsWithAvSeats;
  passengers: Tourist[];
  searched_tourists: Tourist[];
  searchQuery: String;

  constructor(
    public _http: HttpService,
    private _Activatedroute: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("flight_id");
    this._http.getFlightWithAvSeats(this.id).subscribe((gotFl: FlightsWithAvSeats) => {
      this.flight = gotFl;
    });

    this.getBookedFlights();
  }

  deletePassenger(passenger: Tourist) {
    this._http.deleteFlightFromUser(passenger.tourist_id.toString(), this.id).subscribe((id: Number) => {
      this.ngOnInit();
    });
  }


  getBookedFlights() {
    this._http.getTouristsOfFlight(this.id).subscribe((tourists: Tourist[]) => {
      this.passengers = tourists;
    });
  }

  searchTourists() {
    if (this.searchQuery) {
      this._http.searchTourists(this.searchQuery).subscribe((tourists: Tourist[]) => {
        this.searched_tourists = tourists;
      });
    }
  }

  openDialogNotes(user: Tourist) {
    console.log(user)
    const dialogRef = this.dialog.open(DialogNotesComponent, {
      data: user,
    });
  }

  addFlightToTourist(tourist_id: String) {
    this._http.addTouristToFlight(tourist_id, this.id).subscribe((id: Number) => {

      this.ngOnInit();
      this.searchTourists();
    });
  }

}
