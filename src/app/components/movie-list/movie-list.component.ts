import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { Movie } from 'src/app/classes/movie';
import { MoviesStoreService } from 'src/app/services/movies-store.service';
import { Subscription } from 'rxjs';



/**
 * @class
 * @description A component that displays all the retrieve movies into a lists
 */


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
  
})
export class MovieListComponent implements OnInit,OnDestroy {

movies : Movie[] ;
dataLoaded :boolean =false;
loading:boolean = false;
categories ;
subscription :Subscription;
  
  constructor( private dataService :MoviesStoreService){
  }
  
  
  /**
   * @member
   * @description called when component is initialized, then we listen to the data store for any updates
   * when the data reach the component,it cahces it locally then updates the UI. 
  */ 

  ngOnInit(){
    //this.loading =true;
    this.dataLoaded = false;
    this .subscription = this.dataService.Movies$.subscribe(data=>{
    this.loading =false;
    this.movies = data;  
    //this.loading = false;
    this.dataLoaded = true;
    this.setupCategories();
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

/**
 * @method
 * @description Partion the movies into categoris by looping the whole array and examining the genre
 * for each movie and store it inside the spesific category list
*/
  setupCategories(){
    this.categories=null;
    
    this.categories = new Map<string,Array<Movie>>();
    this.movies.forEach(movie => {
      movie.genres.forEach(genre=>{
        if(this.categories.has(genre))
          this.categories.get(genre).push(movie);
        else{
          let arrayOfMovies = new Array<Movie>();
          arrayOfMovies.push(movie);
          this.categories.set(genre,arrayOfMovies);
          }
      });
    });
  }

}
