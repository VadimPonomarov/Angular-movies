import {Component, Input} from '@angular/core';
import {IMovie} from "../../../../interfaces";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() movie: IMovie;
}
