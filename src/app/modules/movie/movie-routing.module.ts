import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "../../components/main-page/main-page.component";
import {MoviesComponent} from "./components/movies/movies.component";

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: '', redirectTo: 'popular', pathMatch: 'full'},
      {path: 'popular', component: MoviesComponent},
      {path: 'current', component: MoviesComponent},
      {path: 'upcoming', component: MoviesComponent},
      {path: 'best', component: MoviesComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
