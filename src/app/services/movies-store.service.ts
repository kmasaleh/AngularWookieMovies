import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Movie } from '../classes/movie';
import { MoviesDataService } from './movies-data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService  {
  
  private subject = new BehaviorSubject<Movie[]> ([]) ;
  Movies$ : Observable<Movie[]> = this.subject.asObservable();

  constructor(private movisDataService:MoviesDataService) {
     this.loadAll();
   }

   private loadAll(keywords:string=""){

    setTimeout(()=>{

      let subscription :Subscription = 
      this.movisDataService.getMovies(keywords)
       .subscribe(movies=> { 
         this.subject.next(movies);
         subscription.unsubscribe();
       });
 

    },10);
 
   }
   
   load = (keywords:string)=>{
      this.loadAll(keywords);
   }
}
