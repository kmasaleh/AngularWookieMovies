import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


const routes: Routes = [
  {  path:'MovieList',component:MovieListComponent},
  {  path:'MovieDetail',component:MovieDetailComponent},
  {path:'home',component:MovieListComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
