import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IUser} from "../interfaces/user-interface";
import {IGenre, IMovie, IMovieDiscoverParams, IMovieResponce} from "../interfaces";
import {API_KEYS, LanguagesEnum, MovieCategoriesEnum} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  refreshMovies = new BehaviorSubject<boolean>(false);
  registeredUser = new BehaviorSubject<IUser>({} as IUser);
  moviesPopular = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  moviesNowPlaying = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  moviesUpcoming = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  moviesBest = new BehaviorSubject<IMovieResponce[]>([] as IMovieResponce[]);
  genres = new BehaviorSubject<IGenre[]>([] as IGenre[]);
  movieRequestParams = new BehaviorSubject<Partial<IMovieDiscoverParams>>(
    {
      api_key: API_KEYS.api_key,
      language: LanguagesEnum.russian,
      page: 1
    }
  );

  saveMovieResponce(imovieResponce: IMovieResponce, curCategory: string): void {

    const curStore = this.getStoreByCategory(curCategory);

    if (!curStore.getValue()
      .find(el => el.page === imovieResponce.page)) {
      const newValue = [...curStore.getValue(), imovieResponce];
      curStore.next([...newValue]);
    }
  }

  getMovieList(pageArr: number[], curCategory: string): IMovie[] {

    const movieArr: IMovie[] = [];
    const curStore = this.getStoreByCategory(curCategory);


    const movieListFiltered = curStore.getValue()
      .filter(pages => pages.page in pageArr);

    if (movieListFiltered) {
      movieListFiltered
        .forEach(page => page.results
          .forEach(movie => movieArr.push(movie)
          )
        );
    }
    return movieArr;
  }

  getStoreByCategory(curCategory: string): BehaviorSubject<IMovieResponce[]> {
    let curStore = this.moviesPopular;

    switch (curCategory) {
      case MovieCategoriesEnum.top_rated:
        curStore = this.moviesBest;
        break;
      case MovieCategoriesEnum.now_playing:
        curStore = this.moviesNowPlaying;
        break;
      case MovieCategoriesEnum.upcoming:
        curStore = this.moviesUpcoming;
        break;
      default:
        curStore = this.moviesPopular;
    }
    return curStore;
  }
}
