import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CommonService {
  //selectedTour: any;
  selectedTour = new Subject<any>();
  tourId: any;

  constructor() {
  }

  sendTour(tour: any) {
    this.selectedTour.next(tour);
  }

  // receiveTour(): Observable<any> {
  //   return this.selectedTour.asObservable();
  // }

  getTour(): Observable<any> {
    return this.selectedTour.asObservable();
  }

  setTourId(route) {
    if (!this.tourId) {
      route.parent.params.subscribe(params => {
        this.tourId = params['id'];
      });
    }
  }
}
