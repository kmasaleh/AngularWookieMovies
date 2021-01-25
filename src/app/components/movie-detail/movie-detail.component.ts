import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie
  constructor( private router: ActivatedRoute) { }

  //movie:Movie;
  ngOnInit(): void {

    //var cc = this.router.getCurrentNavigation().extras.state
    this.router.queryParams.subscribe(params => {
    //  this.movie = params['movie'];
    });
  }

}
