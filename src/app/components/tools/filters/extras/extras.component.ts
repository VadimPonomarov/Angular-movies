import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Options} from '@angular-slider/ngx-slider';
import {EventListener} from "@angular-slider/ngx-slider/event-listener";
import {Observable, of} from "rxjs";
import {nextMonthDisabled} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {

  value1: number = 10;
  title1 = 'Пользовательский ретинг';
  options1: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true
  };

  minValue2: number = 0;
  maxValue2: number = 500;
  title2 = 'Минимальное количество голосов пользователей';
  options2: Options = {
    floor: 0,
    ceil: 500,
    step: 50,
    showTicks: true
  };

  minValue3: number = 0;
  maxValue3: number = 400;
  title3 = 'Длительность';
  options3: Options = {
    floor: 0,
    ceil: 400,
    step: 50,
    showTicks: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }

};
