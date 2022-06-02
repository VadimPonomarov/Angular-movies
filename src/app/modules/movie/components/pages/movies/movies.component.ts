import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovie, IMovieResponce} from "../../../../../interfaces";
import {ApiService, StorageService} from "../../../../../services";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  curCategory: string;
  curPage: number;
  currentMovieList: IMovie[];

  constructor(private _activatedRoute: ActivatedRoute,
              private _apiServise: ApiService,
              private _store: StorageService) {

    this._activatedRoute.url
      .subscribe(urlSegment => {
        this.curCategory = urlSegment[0].path;
        this._apiServise.getMoviesByCategory(this.curCategory, this.curPage)
          .subscribe(movies => {
            this.storeMovieResponce(movies, this.curCategory);
          });
      });

    _apiServise.getMoviesByCategory(this.curCategory, this.curPage)
      .subscribe(movies => {
        console.log(movies);
        this.storeMovieResponce(movies, this.curCategory);
      });
  }

  ngOnInit(): void {
    this._activatedRoute.data
      .subscribe(({movieResponce}) =>
        this.currentMovieList = movieResponce
      );
    this._store.refreshMovies.subscribe(() => {
      this._apiServise.getMoviesByCategory(this.curCategory, this.curPage)
        .subscribe(movies => {
          this.storeMovieResponce(movies, this.curCategory);
          this.getCurMovieListByPageArr([1, 2, 3, 4, 5], this.curCategory);
        });
    });
  }

  storeMovieResponce(imovieResponce: IMovieResponce, curCategory: string): void {
    this._store.saveMovieResponce(imovieResponce, curCategory);
  }

  getCurMovieListByPageArr(pageArr: number[] = [this.curPage], curCategory: string): void {
    this.currentMovieList = this._store.getMovieList(pageArr, curCategory);
  };

}
