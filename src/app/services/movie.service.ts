import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API_KEYS, urls} from "../constants";
import {IGenreResponce} from "../interfaces/genre-responce-interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<IGenreResponce> {
    return this._httpClient
      .get<IGenreResponce>(urls.genres, {params: {api_key: API_KEYS.api_key, language: 'ru-RU'}});
  };
}
