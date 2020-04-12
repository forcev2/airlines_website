import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersInter } from '../list/list.component';
import { Tourist } from '../tourist';
import { MAT_DIALOG_DATA, MatDialogRef, MatRadioButton } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})

export class DialogExampleComponent {


  datar: Tourist;
  dialogTitle: String;
  serializedDate1 = new FormControl();


  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) {
    this.dialogTitle = data.title;
    this.datar = data.userData;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }


  onConfifmClick(): void {
    console.log(this.datar)
    if (this.datar.name != null
      && this.datar.surname != null
      && this.datar.gender != null
      && this.datar.notes != null
      && this.datar.country != null
      && this.serializedDate1 != null) {

      this.datar.date_of_birth = this.serializedDate1.value.toISOString();
      this.dialogRef.close(this.datar);
    }
    else {
      this.dialogRef.close(null);
    }
  }

}

export interface Data {
  userData: Tourist;
  title: String;
}


