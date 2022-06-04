import {Component} from '@angular/core';
import {StorageService} from "../../services";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private _store: StorageService) {
    _store.hideSidebarTools.subscribe(() => {
      document.getElementById('sidebar')?.classList.toggle('hidden');
    });
  }
}
