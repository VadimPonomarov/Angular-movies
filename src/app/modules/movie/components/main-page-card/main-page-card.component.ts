import {Component, Input, OnInit} from '@angular/core';


import {IMovie} from "../../../../interfaces";

@Component({
  selector: 'app-main-page-card',
  templateUrl: './main-page-card.component.html',
  styleUrls: ['./main-page-card.component.scss']
})
export class MainPageCardComponent implements OnInit {

  @Input() movie: IMovie;
  backgroundPicture: string;

  constructor() {
  }

  ngOnInit(): void {
    this.backgroundPicture = [
      'https://www.themoviedb.org/t/p/w500',
      this.movie.poster_path
    ].join('/');
  }

}
