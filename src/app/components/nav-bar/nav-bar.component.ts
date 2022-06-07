import {Component} from '@angular/core';

import {AuthService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  user: string;

  constructor(private _authService: AuthService) {

    if (_authService.getGuestFromLocal()) {
      const {username} = _authService.getGuestFromLocal() as IUser | any;
      this.user = username;
    }
  }
}
