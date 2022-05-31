import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IUser} from "../interfaces/user-interface";
import {IGenre, IMovieResponce} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  registeredUser = new BehaviorSubject<IUser>({} as IUser);
  popularMovies = new BehaviorSubject<IMovieResponce[]>([{}] as IMovieResponce[]);
  currentMovies = new BehaviorSubject<IMovieResponce[]>([{}] as IMovieResponce[]);
  upcomingMovies = new BehaviorSubject<IMovieResponce[]>([{}] as IMovieResponce[]);
  bestMovies = new BehaviorSubject<IMovieResponce[]>([{}] as IMovieResponce[]);
  genres = new BehaviorSubject<IGenre[]>([] as IGenre[]);

}
