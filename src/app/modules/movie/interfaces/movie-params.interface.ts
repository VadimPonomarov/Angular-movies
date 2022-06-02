import {LanguagesEnum} from "../../../constants";

export interface IMovieParams {
  api_key: string;
  language: string;
  page?: number;
}
