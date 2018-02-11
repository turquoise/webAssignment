import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { CommonService, TourService } from "../../services/services";

@Component({
  selector: 'app-tour-travellers',
  templateUrl: './tour-travellers.component.html',
  styleUrls: ['./tour-travellers.component.css']
})

export class TourTravellersComponent implements OnInit {

  selectedTravellers: any;
  selectedTrip: any;
  trip: any;
  travellerTrips = [];

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private tourService: TourService )
    {
      this.commonService.setTourId(this.route);
    }

    ngOnInit() {
      this.getTour();
      this.getTrip();

    }

    getTour() {
      this.tourService.currentTour.subscribe( data => {
        this.selectedTravellers = data.Travellers;
        this.selectedTrip = data.Trips;
        console.log('this.selectedTravelers from travellers ', this.selectedTravellers);
        console.log('this.selectedTrip from travellers ', this.selectedTrip);
      });
    }

    getTrip() {
      this.selectedTrip.map( data => {
        const tripData = data;
        this.trip = data.Travellers;
        //console.log('tripData from travellers', tripData);
        this.trip.map( res => {
          const tripId = res;
          //console.log('const tripId ', tripId);
          this.selectedTravellers.map(result => {
            const traveller = result;
            //console.log('traveller ', traveller);
            if (traveller.Id === tripId) {
              //console.log('traveller.Id, traveller.Name, tripData.Company ', traveller.Id, traveller.Name, tripData.Company);
              this.travellerTrips.push({'Id': traveller.Id, 'Name': traveller.Name, 'Company': tripData.Company});
              console.log('this.travellerTrips ', this.travellerTrips);
            }
          })
        });
      })

    }



  travellerClicked(event, traveller) {
    this.selectedTravellers = traveller;
  }
}
