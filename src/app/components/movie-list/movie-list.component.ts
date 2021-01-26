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
categories : string[]=[];
subscription :Subscription;
  constructor( 
    //private dataService :MoviesDataService
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
        this.ff();
      
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  ff = ()=>{
    this.movies.forEach(element => {
      this.categories = [...this.categories,...element.genres];
      for(var i=0; i<this.categories.length; ++i) {
        for(var j=i+1; j<this.categories.length; ++j) {
            if(this.categories[i] === this.categories[j])
              this.categories.splice(j--, 1);
        }
    }
    
    });
  }



}
