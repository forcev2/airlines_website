import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatTableDataSource, MatPaginator, MAT_DIALOG_DATA } from '@angular/material'
import { ViewChild, Injectable } from '@angular/core';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogDelComponent } from '../dialog-del/dialog-del.component';
import {Tourist} from '../tourist';
import { DialogNotesComponent } from '../dialog-notes/dialog-notes.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  brews: Object;
  users: Users;
  tourists: Tourist[];

  constructor(
    private _http: HttpService,
    private dialog: MatDialog
  ) { }



  displayedColumns: string[] = ['tourist_id','first_name', 'last_name', 'gender','country','date_of_birth', 'notes', 'edit', 'delete'];
  // dataSource = new MatTableDataSource<UsersInter>(this.users);
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this._http.getTouristList().subscribe((tourist: Tourist[]) => {
      this.tourists = tourist;
      this.dataSource = new MatTableDataSource<Tourist>(tourist);
      this.dataSource.paginator = this.paginator;
      console.log("well...", this.tourists);
    });

  }

  opD() {
    console.log(this.users);
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


  openDialogDelete(user: Tourist) {
    const dialogRef = this.dialog.open( DialogDelComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log("delete", result);
        this._http.delTourist(result, this);
      }
    });
  }

  dialogNewUser() {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '350px',
      data: { title: 'Add new tourist', userData: {} }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._http.addTourist(result, this);
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


export interface TouristResponse {
  result: Tourist[],
}


export interface Users {
  result: UsersInter[];
}

export interface UsersInter {
  id: String;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
}

//QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa Access-token
