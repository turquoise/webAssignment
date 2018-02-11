import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
  //selectedTour: any;
  tourId: any;
  data: any;

  constructor() {
  }


  setTourId(route) {
    if (!this.tourId) {
      route.parent.params.subscribe(params => {
        this.tourId = params['id'];
      });
    }
  }
}
