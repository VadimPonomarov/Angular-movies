import {Component, OnInit} from '@angular/core';
import {IGenre} from "../../../../interfaces";
import {MovieService} from "../../../../services";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];
  title = 'Жанры';
  active: number[] = [];

  constructor(private _movieService: MovieService) {
    this._movieService.getAll().subscribe(genres => {
      this.genres = genres.genres;
    });
  }

  ngOnInit(): void {
  }

  handleClick(id: number) {
    const button = document.getElementById(id.toString());
    button?.classList.toggle('active');
    const res = this.active.find(el => el === id);
    if (res) {
      this.active = this.active.filter(el => el !== id);
    } else {
      this.active.push(id);
    }
  }
}
