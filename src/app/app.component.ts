import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Movie } from './classes/movie';
import { MoviesDataService } from './services/movies-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularWookieMovies';
}


