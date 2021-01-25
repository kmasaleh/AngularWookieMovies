import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { Movie } from 'src/app/classes/movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private dataService :MoviesDataService){
  }
  movies : Movie[] ;
  dataLoaded :boolean =false;
  ngOnInit(){
    this.dataService.getMovies().subscribe(data=>{
      this.movies = data;  
      this.dataLoaded = true;
      
    });
  }

}
