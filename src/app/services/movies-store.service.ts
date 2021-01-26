import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../classes/movie';
import { MoviesDataService } from './movies-data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService {

  private subject = new BehaviorSubject<Movie[]> ([]) ;
  Movies$ : Observable<Movie[]> = this.subject.asObservable();

  constructor(private movisDataService:MoviesDataService) {
     this.loadAll();
   }

   private loadAll(keywords:string=""){
    this.movisDataService.getMovies().subscribe(movies=>this.subject.next(movies));
   }
   
   load = (keywords:string)=>{
      this.loadAll(keywords);
   }
}
