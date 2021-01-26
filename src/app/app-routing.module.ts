import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


const routes: Routes = [
  {  path:'moviedetail/:id', component : MovieDetailComponent ,pathMatch:'full'},
  {  path:'home',component:MovieListComponent},
  {  path:'',redirectTo:'/home',pathMatch:'full'  },
  {  path:'MovieList',component : MovieListComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
