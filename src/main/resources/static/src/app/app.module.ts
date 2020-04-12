import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{
  MatDialogModule, MatTableModule, MatPaginatorModule,
  MatIconModule, MatFormFieldModule, MatInputModule,
  MatCardModule, MatOptionModule, MatSelectModule, MatDividerModule,
  MatExpansionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSliderModule
} from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatButtonModule} from '@angular/material/button';
import { DialogDelComponent } from './dialog-del/dialog-del.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { DialogNotesComponent } from './dialog-notes/dialog-notes.component';
import { UserflightsComponent } from './userflights/userflights.component';
import { FlightListComponent } from './flightlist/flightlist.component';
import { DelFlightDialogComponent } from './del-flight-dialog/del-flight-dialog.component';
import { DialogNewFlightComponent } from './dialog-new-flight/dialog-new-flight.component';
import {NgxMatDatetimePickerModule,NgxMatTimepickerModule} from 'ngx-mat-datetime-picker';
import { FlightUsersComponent } from './flight-users/flight-users.component';
import { MainSearchComponent } from './main-search/main-search.component';


const material = [
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DialogExampleComponent,
    DialogDelComponent,
    AccountComponent,
    UserPostsComponent,
    DialogNotesComponent,
    UserflightsComponent,
    FlightListComponent,
    DelFlightDialogComponent,
    DialogNewFlightComponent,
    FlightUsersComponent,
    MainSearchComponent
  ],
  entryComponents: [DialogExampleComponent, DialogDelComponent, DialogNotesComponent, DelFlightDialogComponent, DialogNewFlightComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DialogExampleComponent,
    DialogDelComponent,
    DelFlightDialogComponent,
    AppRoutingModule,
  ]
})
export class AppModule { }
