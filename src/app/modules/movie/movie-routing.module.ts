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
      {path: 'popular', component: MoviesComponent},
      {path: 'now_playing', component: MoviesComponent},
      {path: 'upcoming', component: MoviesComponent},
      {path: 'top_rated', component: MoviesComponent},
      {path: 'discover', component: MoviesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
