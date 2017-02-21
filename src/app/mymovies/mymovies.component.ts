import { Component, OnInit } from '@angular/core';
import { MymoviesService } from '../mymovies.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-mymovies',
  templateUrl: './mymovies.component.html',
  styleUrls: ['./mymovies.component.css']
})
export class MymoviesComponent implements OnInit {

  setBackground():string{
        return "background-image: url(" + this.cover + ");";
  }

  movies: any = [];

  public new_movie;

  public title;
  public genre;
  public director;
  public cover;
  public year;
  public description;
  public imdb;
  public tomatoes;

  constructor(private _movieService: MymoviesService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this._movieService.getMovies().subscribe(
      data => { this.movies = data },
      err => console.error(err),
      () => console.log('done loading movies')
    );
  }

  createMovie(title,genre,cover,director,year,description,imdb,tomatoes) {
    let movie = {
      title: title,
      genre: genre,
      cover: cover,
      director: director,
      year: year,
      description: description,
      imdb: imdb,
      tomatoes: tomatoes
    };
    this._movieService.createMovie(movie).subscribe(
       data => {
         // refresh the list
         this.getMovies();
         return true;
       },
       error => {
         console.error("Error saving movie!");
         return Observable.throw(error);
       }
    );
  }
 
  updateMovie(title,genre,cover,director,year,description,imdb,tomatoes) {
    let movie = {
      title: title,
      genre: genre,
      cover: cover,
      director: director,
      year: year,
      description: description,
      imdb: imdb,
      tomatoes: tomatoes
    };
    this._movieService.updateMovie(movie).subscribe(
       data => {
         // refresh the list
         this.getMovies();
         return true;
       },
       error => {
         console.error("Error saving movie!");
         return Observable.throw(error);
       }
    );
  }
 
  deleteMovie(movie) {
    if (confirm("Are you sure you want to delete " + movie.title + "?")) {
      this._movieService.deleteMovie(movie).subscribe(
         data => {
           // refresh the list
           this.getMovies();
           return true;
         },
         error => {
           console.error("Error deleting movie!");
           return Observable.throw(error);
         }
      );
    }
  }

}
