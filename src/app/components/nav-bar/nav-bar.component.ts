import {Component} from '@angular/core';
import {AuthService} from "../../services";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private _authService: AuthService) {
  }



}
