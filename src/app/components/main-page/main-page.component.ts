import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services";
import {urls} from "../../constants";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  hidden: boolean;

  constructor(private _store: StorageService) {
    this.hidden = _store.hideSidebarTools.getValue();
    this._store.hideSidebarTools.subscribe(value => this.hidden = value);
  }
}
