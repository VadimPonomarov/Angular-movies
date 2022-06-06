import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IMovie, IMovieDetailsResponce} from "../../../../interfaces";
import {ApiService} from "../../../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Output() details = new EventEmitter();
  movieDetails: IMovieDetailsResponce;
  curMovieId: string;

  constructor(private _apiService: ApiService,
              private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(({id}) => {
      this.curMovieId = id;
      _apiService.getMovieById(this.curMovieId).subscribe(movie => {
        this.movieDetails = movie;
        this.details.emit(movie);
      });
    });


  }
}
