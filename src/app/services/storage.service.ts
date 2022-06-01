import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IUser} from "../interfaces/user-interface";
import {IGenre, IMovie, IMovieResponce} from "../interfaces";
import {IMovieParams} from "../modules/movie/interfaces";
import {API_KEYS, LanguagesEnum, MovieCategoriesEnum} from "../constants";
import {IGenresParams} from "../modules/movie/interfaces/genres-params.interface";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  registeredUser = new BehaviorSubject<IUser>({} as IUser);
  moviesPopular = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  moviesNowPlaying = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  moviesUpcoming = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  moviesLatest = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  genres = new BehaviorSubject<IGenre[]>([] as IGenre[]);
  genreRequestParams = new BehaviorSubject<IGenresParams>(
    {
      api_key: API_KEYS.api_key,
      language: LanguagesEnum.russian,
    } as IGenresParams
  );
  movieRequestParams = new BehaviorSubject<IMovieParams>(
    {
      api_key: API_KEYS.api_key,
      language: LanguagesEnum.russian,
      page: 1
    } as IMovieParams
  );

  saveMovieResponce(imovieResponce: IMovieResponce, curCategory: string): any {
    switch (curCategory) {
      case 'popular': {
        if (!this.moviesPopular.getValue().find(el => el.page === imovieResponce.page)) {
          const newValue = [...this.moviesPopular.getValue(), imovieResponce];
          this.moviesPopular.next([...newValue]);
        }
        break;
      }
      case 'upcoming': {
        if (!this.moviesUpcoming.getValue().find(el => el.page === imovieResponce.page)) {
          const newValue = [...this.moviesUpcoming.getValue(), imovieResponce];
          this.moviesUpcoming.next([...newValue]);
        }
        break;
      }
      case 'latest': {
        if (!this.moviesLatest.getValue().find(el => el.page === imovieResponce.page)) {
          const newValue = [...this.moviesLatest.getValue(), imovieResponce];
          this.moviesLatest.next([...newValue]);
        }
        break;
      }
      case 'now_playing': {
        if (!this.moviesNowPlaying.getValue().find(el => el.page === imovieResponce.page)) {
          const newValue = [...this.moviesNowPlaying.getValue(), imovieResponce];
          this.moviesNowPlaying.next([...newValue]);
        }
        break;
      }
      default:
        console.log('There is not such a case');
    }
  }

  getMovieList(pageArr: number[], curCategory: MovieCategoriesEnum): IMovie[] {
    let curStore;
    const movieArr: IMovie[] = [];

    switch (curCategory) {
      case MovieCategoriesEnum.latest:
        curStore = this.moviesLatest;
        break;
      case MovieCategoriesEnum.now_playing:
        curStore = this.moviesNowPlaying;
        break;
      case MovieCategoriesEnum.upcoming:
        curStore = this.moviesUpcoming;
        break;
      default:
        curStore = this.moviesPopular;
        break;
    }

    const movieList = curStore.getValue().filter(el => el.page in pageArr);

    if (movieList) {
      movieList.forEach(el => el.results.forEach(el1 => movieArr.push(el1)));
    }

    return movieArr;
  }

}
