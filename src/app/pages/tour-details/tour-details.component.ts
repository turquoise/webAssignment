import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import { TourService, CommonService } from "../../services/services";

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  selectedTour: any;
  tourId: any;
  subscription: Subscription;
  message;

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

  getColor() {
    if (this.tourId) {
      if (this.tourId === 1) {
        return '#e81d86';
      } else if (this.tourId === 2) {
        return '#3c95c1';
      } else if (this.tourId === 3) {
        return '#5f2b7d';
      }
    }
  }

  getImage() {
    if (this.tourId) {
      if (this.tourId === 1) {
        return '/assets/images/tour1.png';
      } else if (this.tourId === 2) {
        return '/assets/images/tour2.png';
      } else if (this.tourId === 3) {
        return '/assets/images/tour3.png';
      }
    }
  }

  getTour() {
    this.tourId = +this.route.snapshot.paramMap.get('id');
    console.log('tourId ', this.tourId);
    this.tourService.getTourId(this.tourId);

    this.tourService.currentTour.subscribe( data => {
      this.selectedTour = data;
      console.log('this.selectedTour from details ', this.selectedTour);
    });


  }


}
