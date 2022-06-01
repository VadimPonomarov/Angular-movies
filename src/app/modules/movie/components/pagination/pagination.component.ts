import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page = 1;
  maxSize = 5;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleChange($event: number) {
    console.log($event);
  }
}
