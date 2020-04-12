import { Component, OnInit } from '@angular/core';
import{ MatDialog } from '@angular/material';
import { DialogExampleComponent} from '../dialog-example/dialog-example.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor(public dialog: MatDialog){}


  ngOnInit() {
  }

  countClick(){
    this.clickCounter += 1;
  }

  setClasses(){
    let myClasses = {
      active: this.clickCounter > 4,
      noactive: this.clickCounter <= 4,

    }

    return myClasses;
  }



  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }


}