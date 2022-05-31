import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesMainComponent } from './components/movies-main/movies-main.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesMainComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
