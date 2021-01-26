import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from './../../app/classes/movie';
import { map,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


/**
 * @class
 * @description Data service that communicates the back end REST API to fetch the movies data
 */

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  endPoint :string = 'https://wookie.codesubmit.io/movies?q=';
  constructor(private http:HttpClient) { 

  }

 /**
   * @method getMovies
   * @description issues an HTTP request by the appropriate headers to fetch the movies
  */ 
  getMovies = (keywords:string="")=>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Authorization':'Bearer Wookie2019'
      })};
    
      let url =`${this.endPoint}${keywords}` ;
    
    return this.http.get(url,httpOptions)
      .pipe(
            map((response:any)=> {return response.movies;}),
            catchError(err=>{
              return throwError(err);
            }))
      .pipe(map(jsonMovies=> {return Movie.asMovies(jsonMovies);}))
   }


}
