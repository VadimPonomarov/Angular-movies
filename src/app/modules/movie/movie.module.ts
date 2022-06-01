import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MoviesMainComponent} from './components/movies-main/movies-main.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesMainComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgbPaginationModule,
  ]
})
export class MovieModule {
}
