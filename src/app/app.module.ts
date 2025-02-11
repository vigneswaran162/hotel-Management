import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { CalendarModule } from 'primeng/calendar';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomBookingComponent,
    HomeComponent,
    RoomDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxDatePickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule,
    MatButtonModule,
    MatStepperModule,
    OverlayPanelModule,
    StepperModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
