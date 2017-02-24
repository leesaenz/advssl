import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UpcomingService {

  constructor(private http: Http) {}
  
  getUpcomingMovies() {
    return this.http.get('/api/upcoming')
    .map(res => res.json());
  }
}
