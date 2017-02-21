import { Component } from '@angular/core';
import { MymoviesService } from './mymovies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieDB';

  ngOnInit() {
  }
}
