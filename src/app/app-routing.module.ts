import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { HomeComponent } from './home/home.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

const routes: Routes = [
  {
     path: '',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
