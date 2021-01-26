import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { Subscription } from 'rxjs';
import { Movie } from './classes/movie';
import { MoviesDataService } from './services/movies-data.service';
import { MoviesStoreService } from './services/movies-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'AngularWookieMovies';
  loading:boolean = false;
  textToFind:string;
  subscription :Subscription;
  constructor(private moviesStore: MoviesStoreService,private router:Router){

  }

  ngOnInit(){
    this.subscription = this.moviesStore.Movies$.subscribe(data=>{
     this.loading=false;
     

    });
    this.loadData();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  loadData = ()=>{
    this.loading =true;
    this.moviesStore.load(this.textToFind);
  }
  onFind = ()=>{
    this.loadData();
    this.router.navigateByUrl('/home');
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


