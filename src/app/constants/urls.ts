import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  auth: 'https://www.themoviedb.org/pusher/auth',
  guest_session: 'https://api.themoviedb.org/3/authentication/guest_session/new'
};
