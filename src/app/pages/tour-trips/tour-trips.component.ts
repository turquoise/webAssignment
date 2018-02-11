import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { CommonService, TourService } from "../../services/services";
import { fadeInContent } from '@angular/material';

@Component({
  selector: 'app-tour-trips',
  templateUrl: './tour-trips.component.html',
  styleUrls: ['./tour-trips.component.css']
})
export class TourTripsComponent implements OnInit {
  selectedTrip: any;
  trips: any;
  selectedTravellers: any;
  travellers: any = [];
  subscription: Subscription;
  result: any = [];

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private tourService: TourService )
    {
      this.commonService.setTourId(this.route);
    }

    ngOnInit() {
      this.getTour();
    }

    getTour() {
      this.tourService.currentTour.subscribe( data => {
        this.selectedTrip = data.Trips;
        this.selectedTravellers = data.Travellers;
        //console.log('this.selectedTrip from trips ', this.selectedTrip);
        //console.log('this.selectedTravellers from trips ', this.selectedTravellers);
      });
    }


    serviceClicked(event, service) {
      this.selectedTrip = service;
    }



}
