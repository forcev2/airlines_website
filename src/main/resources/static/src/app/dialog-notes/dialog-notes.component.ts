import { Component, Inject } from '@angular/core';
import {Tourist} from '../tourist';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-notes',
  templateUrl: './dialog-notes.component.html',
  styleUrls: ['./dialog-notes.component.scss']
})
export class DialogNotesComponent {

  datar: Tourist;
  constructor(
    public dialogRef: MatDialogRef<DialogNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tourist) {
      console.log("deltete", data);
    this.datar = data;
  }

  Cancel(){
    this.dialogRef.close(null);
  }

  ngOnInit(){

  }
}
