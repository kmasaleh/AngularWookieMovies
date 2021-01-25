import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from './../../app/classes/movie';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http:HttpClient) { 

  }

  getMovies = ()=>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Authorization':'Bearer Wookie2019'
      })};
    let url =' https://wookie.codesubmit.io/movies?';
    
    return this.http.get(url,httpOptions)
      .pipe(map((response:any)=> {return response.movies;}))
      .pipe(map(jsonMovies=> {return Movie.asMovies(jsonMovies);}))
      ;

  }

}
