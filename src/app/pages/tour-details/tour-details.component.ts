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
