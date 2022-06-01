import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {MovieCategoriesEnum, urls} from "../constants";
import {IGenreResponce} from "../interfaces/genre-responce-interface";
import {IMovieResponce} from "../interfaces";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient,
              private _storage: StorageService) {
  }

  getAllGenres(): Observable<IGenreResponce> {
    return this._httpClient
      .get<IGenreResponce>(urls.genres,
        {
          params: {...this._storage.genreRequestParams.getValue()}
        });
  };

  getMoviesByCategory(category: MovieCategoriesEnum): Observable<IMovieResponce> {
    const fetchPath = [urls.movies, category].join('/');
    return this._httpClient
      .get<IMovieResponce>(fetchPath,
        {
          params: {...this._storage.movieRequestParams.getValue()}
        });
  };
}
