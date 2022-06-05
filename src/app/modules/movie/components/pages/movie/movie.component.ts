import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ApiService, StorageService} from "../../../../../services";
import {IMovie} from "../../../../../interfaces";
import {urls} from "../../../../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  curMovieId: string;
  curCategory: string;
  movie: IMovie;
  imgUrl: string;
  bgImgUrl: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _store: StorageService, private _apiService: ApiService) {

    this._store.hideSidebarTools.next(true);
    this._activatedRoute.params.subscribe(({id}) => this.curMovieId = id);
    this.movie = _store.currentMovieStore.getValue();
    this.imgUrl = [urls.movie, this.movie.poster_path].join('/');
    this.bgImgUrl = [urls.movie_bg, this.movie.backdrop_path].join('/');

    this._activatedRoute.url.subscribe(urlSegment => {
      this.curCategory = urlSegment[0].path;
    });

    if (!this.movie) {
      this._store.getMovieById(this.curMovieId, this.curCategory);
      _apiService.getMovieById(this.curMovieId)
        .subscribe(movie => {
          this._store.currentMovieStore.next(movie);
          this.movie = this._store.currentMovieStore.getValue();
        });
    }
  }
}
