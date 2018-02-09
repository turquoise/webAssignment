import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { CommonService } from "../shared/common.service";

@Injectable()
export class TourService {
    private data: any;
    private str: string;

    constructor(public http: Http,
                public commonService: CommonService) {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

    getAll() {
      const URL = 'https://my-json-server.typicode.com/tagdevteam/AssignmentApi/tours';
      return this.http.get(URL)
        .map(res => {
          const data = res.json();
          console.log('data ', data);
          return data;
        })
        // .subscribe(data => {
        //   console.log('data ', data);
        //   this.data = data;
        // });
    }    
}
