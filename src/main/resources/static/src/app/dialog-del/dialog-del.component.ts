import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-dialog-del',
  templateUrl: './dialog-del.component.html',
  styleUrls: ['./dialog-del.component.scss']
})
export class DialogDelComponent{

  datar: Tourist;
  dialogTitle: String;
  constructor(
    public dialogRef: MatDialogRef<DialogDelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tourist) {
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
