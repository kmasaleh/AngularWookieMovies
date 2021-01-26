import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';


/**
 * @class
 * @description A component that displays a summary information about the movie 
 * inside the list
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  /**
   * @member 
   * @description an input property to hold the movie 
   */
  @Input() movie:Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
