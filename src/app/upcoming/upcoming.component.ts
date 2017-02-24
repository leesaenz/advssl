import { Component, OnInit } from '@angular/core';
import { UpcomingService } from '../upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  
  movies: any = [];

  constructor(private _upcomingService: UpcomingService) {}

  ngOnInit() {
    this.getUpcoming();
  }

  getUpcoming() {
    this._upcomingService.getUpcomingMovies().subscribe(
      data => { this.movies = data },
      err => console.error(err),
      () => console.log('done loading movies')
    );
  }
}