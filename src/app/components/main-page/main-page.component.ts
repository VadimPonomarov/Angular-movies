import {AfterViewInit, Component} from '@angular/core';

import {StorageService} from "../../services";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit{
  hidden: boolean = true;
  constructor(private _store: StorageService) {

  }

  ngAfterViewInit(): void {
    this._store.hideSidebarTools.subscribe(value => this.hidden = value);
  }
}
