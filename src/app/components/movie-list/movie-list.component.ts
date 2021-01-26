import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { Movie } from 'src/app/classes/movie';
import { MoviesStoreService } from 'src/app/services/movies-store.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
  
})
export class MovieListComponent implements OnInit,OnDestroy {

movies : Movie[] ;
dataLoaded :boolean =false;
loading:boolean = false;
categories0 : string[]=[];
subscription :Subscription;
  constructor( 
    
    private dataService :MoviesStoreService
    )
    {
  }
  ngOnInit(){
    this.loading =true;
    this.dataLoaded = false;
    this .subscription = this.dataService.Movies$.subscribe(data=>{
      
        this.loading =false;
        this.movies = data;  
        this.loading = false;
        this.dataLoaded = true;
        this.setupCategories();
  //      this.ff();
      
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  categories ;
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

/*
  ff = ()=>{
    this.movies.forEach(element => {
      this.categories0= [...this.categories,...element.genres];
      for(var i=0; i<this.categories0.length; ++i) {
        for(var j=i+1; j<this.categories0.length; ++j) {
            if(this.categories[i] === this.categories[j])
              this.categories0.splice(j--, 1);
        }
    }
    
    });
  }
*/


}
