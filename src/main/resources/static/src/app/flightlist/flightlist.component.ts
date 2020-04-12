import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatTableDataSource, MatPaginator, MAT_DIALOG_DATA } from '@angular/material'
import { ViewChild, Injectable } from '@angular/core';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogDelComponent } from '../dialog-del/dialog-del.component';
import {Tourist} from '../tourist';
import { DialogNotesComponent } from '../dialog-notes/dialog-notes.component';
import {Flights} from '../flights';
import { DelFlightDialogComponent } from '../del-flight-dialog/del-flight-dialog.component';
import { DialogNewFlightComponent } from '../dialog-new-flight/dialog-new-flight.component';

@Component({
  selector: 'app-list',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.scss']
})

export class FlightListComponent implements OnInit {

  brews: Object;
  flights: Flights[];

  constructor(
    private _http: HttpService,
    private dialog: MatDialog
  ) { }



  displayedColumns: string[] = ['flight_id','departure_date', 'arrival_date', 'number_of_seats', 'ticket_price', 'edit', 'delete'];
  // dataSource = new MatTableDataSource<UsersInter>(this.users);
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this._http.getFlightsList().subscribe((flights: Flights[]) => {
      this.flights = flights;
      this.dataSource = new MatTableDataSource<Flights>(flights);
      this.dataSource.paginator = this.paginator;
      console.log("well...", this.flights);
    });
  }

  opD() {
    console.log(this.flights);
  }

  /*
  openDialog(user: UsersInter) {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '350px',
      data: { title: 'Edit user', userData: { id: user.id, address: user.address, phone: user.phone, first_name: user.first_name, last_name: user.last_name, email: user.email } },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._http.putUser(result, this);
      }
    });
  }

  */


  openDialogDelete(flight: Flights) {
    const dialogRef = this.dialog.open( DelFlightDialogComponent, {
      data: flight,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log("delete", result);
        //this._http.delTourist(result, this);
      }
    });
  }

  dialogNewFlight() {
    const dialogRef = this.dialog.open(DialogNewFlightComponent, {
      width: '350px',
      data: { }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != null) {
        this._http.addNewFlight(result, this);
      }
    });
  }

  openDialogNotes(user: Tourist){
    console.log(user)
    const dialogRef = this.dialog.open( DialogNotesComponent, {
      data: user,
    });
  }

}



//QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa Access-token
