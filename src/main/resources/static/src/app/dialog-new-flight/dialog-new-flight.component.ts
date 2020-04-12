import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Flights } from '../flights';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-dialog-new-flight',
  templateUrl: './dialog-new-flight.component.html',
  styleUrls: ['./dialog-new-flight.component.scss']
})
export class DialogNewFlightComponent {

  dialogTitle: String = "Add new Flight";
  dateControl1 = new FormControl(moment());
  dateControl2 = new FormControl(moment());
  datar: Flights;



  constructor(
    public dialogRef: MatDialogRef<DialogNewFlightComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Flights) {
    this.datar = data;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }


  onConfifmClick(): void {
    console.log(this.dateControl1.value.toISOString());
    this.datar.departure_date_and_time = this.dateControl1.value.toISOString();
    this.datar.arrival_date_and_time = this.dateControl2.value.toISOString();
    if (this.datar.departure_date_and_time != null
      && this.datar.arrival_date_and_time != null
      && this.datar.number_of_seats != null
      && this.datar.ticket_price != null) {
      this.dialogRef.close(this.datar);
    } 
    else{
      this.dialogRef.close(null);
    }
  }


}
