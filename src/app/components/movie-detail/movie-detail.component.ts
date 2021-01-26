import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/classes/movie';
import { MoviesStoreService } from 'src/app/services/movies-store.service';

/**
 * @class
 * @description A component that displays a detailed information about the movie 
 * 
 */
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit ,OnDestroy{
  subsciption :Subscription;
  movie:Movie = null;
  constructor( private router: ActivatedRoute,private MoviesStore :MoviesStoreService) { 

  }

  /**
   * @member
   * @description called when component is initialized, then we query the router parameers to 
   * fetch the id of the movie and get the whole object from the data store to display its information
   */
  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      let id= this.router.snapshot.paramMap.get("id");
      this.subsciption = this.MoviesStore.Movies$
        .pipe( map(s=>s.filter(e=>e.id===id)))
        .subscribe( (data:Movie[]) =>  { 
          this.movie=data[0];
        });
    });
  }
  ngOnDestroy(){
    this.subsciption?.unsubscribe();
  }
}
