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

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService)
    {
      this.commonService.setTourId(this.route);
    }

  ngOnInit() {
    this.getTour();

  }

  getTour() {
    //this.commonService.getTour();
    this.subscription = this.commonService.getTour().subscribe( tour => {
      this.selectedTour = tour;
      //console.log('tour details ', this.selectedTour);
    });
  }
}
