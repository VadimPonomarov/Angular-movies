import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService, StorageService} from "../../../../../services";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _apiServise: ApiService,
              private _store: StorageService) {
  }

  ngOnInit(): void {
    this._activatedRoute.url.subscribe(() => {
      //this._store.hideSidebarTools.next(false);
      const sideBar = document.getElementById('sidebar');
      if (!sideBar?.classList.contains('hidden')) {
        sideBar?.classList.add('hidden');
        this._store.hideSidebarTools.next(!this._store.hideSidebarTools.getValue());
      }
    });
  }

}
