import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as md5 from 'md5';

import {ISessionIdResponce, IUser} from "../interfaces";
import {StorageService} from "./storage.service";
import {API_KEYS, urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _storage: StorageService, private _httpClient: HttpClient) {
  }

  registerGuest(user: IUser): void {
    const passwordCrypto = md5(user.password);
    this._storage.registeredUser.next({...user, password: passwordCrypto});
    this.setNewSession();
    this._storage.registeredUser.subscribe({
      next: value => console.log(value)
    });
  }

  setNewSession(): void {
    this._httpClient
      .get<ISessionIdResponce>(urls.guest_session, {params: {api_key: API_KEYS.api_key}})
      .subscribe(sessionData => this.setSessionId(sessionData.guest_session_id));
  }

  setSessionId(sessionId: string): void {
    this._storage.registeredUser
      .next({...this._storage.registeredUser.getValue(), session: sessionId});
  }

  getSessionId(): string | undefined {
    return this._storage.registeredUser.getValue().session;
  }

  removeSessionId(): void {
    this.setSessionId('');
  }
}
