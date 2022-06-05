import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {PaginationComponent} from './components/pagination/pagination.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {MoviesMainComponent} from "./components/pages/movies-main/movies-main.component";
import {MoviesComponent} from "./components/pages/movies/movies.component";
import {MainPageCardComponent} from './components/main-page-card/main-page-card.component';
import { MovieComponent } from './components/pages/movie/movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesMainComponent,
    PaginationComponent,
    MainPageCardComponent,
    MovieComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgbPaginationModule,
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule {
}
