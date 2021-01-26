import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { Movie } from 'src/app/classes/movie';
import { MoviesStoreService } from 'src/app/services/movies-store.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
  
})
export class MovieListComponent implements OnInit {
loading:boolean = false;
movies : Movie[] ;
dataLoaded :boolean =false;
categories : string[]=[];

  constructor( 
    //private dataService :MoviesDataService
    private dataService :MoviesStoreService
    )
    {
  }
  ngOnInit(){
    this.loading =true;
    this.dataLoaded = false;
    this.dataService.Movies$.subscribe(data=>{
      this.loading =false;
      this.movies = data;  
      this.loading = false;
      this.dataLoaded = true;
      this.ff();
    });
    
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
  textToFind:string;
  onFind = ()=>{
    this.loading =true;
    this.dataLoaded = false;

    //this.dataService.getMovies(this.textToFind).subscribe(data=>{
      this.dataService.load(this.textToFind);
  }

  onKeyup = ($event)=>{
    if ($event.keyCode === 13) {
      // Cancel the default action, if needed
      $event.preventDefault();
      // Trigger the search
      this.onFind();
    }
  }




}
