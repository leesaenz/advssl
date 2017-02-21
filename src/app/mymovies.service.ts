import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MymoviesService {

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get('/api/movies')
    .map((res: Response) => res.json());
  }

  createMovie(movie) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(movie);
    return this.http.post('/api/movies/', body, options)
    .map((res: Response) => res.json());
  }

  updateMovie(movie) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(movie);
    return this.http.put('/api/movies/' + movie._id, body, options)
    .map((res: Response) => res.json());
  }

  deleteMovie(movie) {
    return this.http.delete('/api/movies/' + movie._id);
  }

}
