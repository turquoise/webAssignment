import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TourDetailsComponent, TourHomeComponent, ToursComponent,
         TourTripsComponent, TourTravellersComponent, TourContactComponent, NotfoundComponent } from './pages/pages';

import { TourService, CommonService } from "./services/services";
import { RoutingModule } from "./routing/routing.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
         MatTabsModule, MatGridListModule, MatListModule, MatInputModule, MatSelectModule,
         MatTableModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TourHomeComponent,
    TourDetailsComponent,
    ToursComponent,
    TourTripsComponent,
    TourTravellersComponent,
    TourContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [
    TourService,
    CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
