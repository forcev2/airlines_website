import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AccountComponent } from './account/account.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserflightsComponent } from './userflights/userflights.component';
import { FlightListComponent } from './flightlist/flightlist.component';
import { FlightUsersComponent } from './flight-users/flight-users.component';
import { MainSearchComponent } from './main-search/main-search.component';

const routes: Routes = [
  {path: 'touristlist', component: ListComponent},
  {path: 'flightlist', component: FlightListComponent},
  {path: 'user_flights/:tourist_id', component: UserflightsComponent},
  {path: 'flight_users/:flight_id', component: FlightUsersComponent},
  {path: 'search_main', component: MainSearchComponent},
  {path: '', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
