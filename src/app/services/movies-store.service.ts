import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Movie } from '../classes/movie';
import { MoviesDataService } from './movies-data.service';



/**
 * @class
 * @description Data store service that caches the actula data into RxJx subjects.
 * It delivers the data from the cache every time the client is asking for it without the need 
 * to go back to the server wasting nework cycles and time.
 * when the client needs a new fresh data based on internal state changes the service will force 
 * a round trip to the backend to fetch a new copy from the data
 */

@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService  {
  
  private subject = new BehaviorSubject<Movie[]> ([]) ;
  Movies$ : Observable<Movie[]> = this.subject.asObservable();

  constructor(private movisDataService:MoviesDataService) {
     this.loadAll();
   }

 /**
   * @method loadAll
   * @description Calls the data service to fetch data from the back end.
  */ 
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

    /**
   * @method loadA
   * @description Called by the client to enforce data refreshment.
  */ 
   load = (keywords:string)=>{
      this.loadAll(keywords);
   }
}
