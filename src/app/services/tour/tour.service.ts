import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { CommonService } from "../shared/common.service";

@Injectable()
export class TourService {
    private data: any;
    tour: any;

    private str: string;
    toursUrl = 'https://my-json-server.typicode.com/tagdevteam/AssignmentApi/tours';

    private selectedTour = new BehaviorSubject<any>(this.tour);
    currentTour = this.selectedTour.asObservable();


    constructor(public http: Http,
                public commonService: CommonService) {

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

    getTourId(id: number) {
      if(id) {
        this.data.filter( (tour) => {
          if (tour.Id === id) {
            this.tour = tour;
            this.selectedTour.next(this.tour);
          }
        });
      }
    }



    getAll() {
      return this.http.get(this.toursUrl)
        .map(res => {
          this.data = res.json();
          console.log('this.data ', this.data);
          return this.data;
        })

    }
}
