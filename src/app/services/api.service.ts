import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IGenreResponce} from "../interfaces/genre-responce-interface";
import {IMovie, IMovieDetailsResponce, IMovieResponce} from "../interfaces";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient,
              private _stor: StorageService) {
  }

  getAllGenres(): Observable<IGenreResponce> {
    return this._httpClient
      .get<IGenreResponce>(urls.genres,
        {
          params: {...this._stor.movieRequestParams.getValue()}
        });
  };

  getMoviesByCategory(category: string, page: number): Observable<IMovieResponce> {

    const fetchPath = (category === 'discover') ? urls.discover : [urls.movies, category].join('/');

    return this._httpClient
      .get<IMovieResponce>(fetchPath,
        {
          params: {...this._stor.movieRequestParams.getValue()}
        });
  };

  getMovieById(id: string): Observable<IMovieDetailsResponce> {
    const fetchPath = [urls.movies, id].join('/');
    return this._httpClient.get<IMovieDetailsResponce>(fetchPath, {
      params: {...this._stor.movieRequestParams.getValue()}
    });
  }
}
