import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { TourService, CommonService } from "../../services/services";

@Component({
  selector: 'app-tour-contact',
  templateUrl: './tour-contact.component.html',
  styleUrls: ['./tour-contact.component.css']
})
export class TourContactComponent implements OnInit {
  selectedContacts: any;
  subscription: Subscription;

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
      this.selectedContacts = data.Contact;
      console.log('this.selectedTour from contacts ', this.selectedContacts);
    });
  }

}
