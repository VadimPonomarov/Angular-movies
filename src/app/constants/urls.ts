import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  auth: 'https://www.themoviedb.org/pusher/auth',
  guest_session: 'https://api.themoviedb.org/3/authentication/guest_session/new',
  background_pictures: 'https://image.tmdb.org/t/p/w500',
  genres: 'https://api.themoviedb.org/3/genre/movie/list'
};
