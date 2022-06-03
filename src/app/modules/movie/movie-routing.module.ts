import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from "../../components/main-page/main-page.component";
import {MoviesComponent} from "./components/pages/movies/movies.component";
import {MovieResolver} from "./resolvers";

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      //{path: '', redirectTo: 'discover', pathMatch: 'full'},
      {path: 'popular', component: MoviesComponent, resolve: {moviesArr: MovieResolver}},
      {path: 'now_playing', component: MoviesComponent, resolve: {moviesArr: MovieResolver}},
      {path: 'upcoming', component: MoviesComponent, resolve: {moviesArr: MovieResolver}},
      {path: 'top_rated', component: MoviesComponent, resolve: {moviesArr: MovieResolver}},
      {path: 'discover', component: MoviesComponent, resolve: {moviesArr: MovieResolver}},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
