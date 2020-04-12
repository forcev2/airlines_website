import { Component, OnInit, Inject } from '@angular/core';
import { Flights } from '../flights';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-del-flight-dialog',
  templateUrl: './del-flight-dialog.component.html',
  styleUrls: ['./del-flight-dialog.component.scss']
})
export class DelFlightDialogComponent implements OnInit {

  datar: Flights;

  constructor(
    public dialogRef: MatDialogRef<DelFlightDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Flights) {
      console.log("deltete", data);
    this.datar = data;
  }

  Cancel(){
    this.dialogRef.close(null);
  }

  confirmClick(){
    console.log("2" , this.datar);
    this.dialogRef.close(this.datar);
  }

  ngOnInit() {
  }
}
