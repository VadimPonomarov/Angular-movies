import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from "../../components/main-page/main-page.component";
import {MoviesComponent} from "./components/pages/movies/movies.component";
import {MovieResolver} from "./resolvers";

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {
        path: 'popular', component: MoviesComponent,
        resolve: {movieResponce: MovieResolver}
      },
      {path: 'now_playing', component: MoviesComponent},
      {path: 'upcoming', component: MoviesComponent},
      {path: 'top_rated', component: MoviesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
