import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IMovie, IMovieResponce} from "../../../../interfaces";
import {MovieCategoriesEnum} from "../../../../constants";
import {ApiService, StorageService} from "../../../../services";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  curCategory = MovieCategoriesEnum.popular;
  curPage: number[] = [];
  currentMovieList: IMovie[];

  constructor(private _activatedRoute: ActivatedRoute,
              private _apiServise: ApiService,
              private _storage: StorageService,
              private _router: Router) {

    _activatedRoute.url
      .subscribe(urlSegment => {
        const curCategory = urlSegment[0].path as MovieCategoriesEnum;
        _apiServise.getMoviesByCategory(curCategory)
          .subscribe(movies => {
            this.storeMovieResponce(movies, curCategory);
            this.setCurrentMovieList([1, 2, 3], MovieCategoriesEnum.popular);
          });
      });
  }

  ngOnInit(): void {
  }

  setCurrentMovieList(pageArr: number[], curCategory: MovieCategoriesEnum): void {
    const res = this._storage.getMovieList(pageArr, curCategory);
    console.log(res);
  };

  setCurPages(curPage: number): void {
    if (!this.curPage.find(el => el === curPage)) {
      this.curPage.push(curPage);
    }
  }

  storeMovieResponce(imovieResponce: IMovieResponce, curCategory: string): void {
    this._storage.saveMovieResponce(imovieResponce, curCategory);
  }

  setCurCategory(category: MovieCategoriesEnum): void {
    this.curCategory = category;
  }

}
