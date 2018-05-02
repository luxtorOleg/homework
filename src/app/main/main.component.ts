import { Component, OnInit } from '@angular/core';
import {toPromise} from 'rxjs/operator/toPromise';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

import {User} from '../User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public counter: number;

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  doAsyncTask(): Promise <TimerObservable> {
      return this.onlyTimer().toPromise();
  }
  onlyTimer(): any {
    setTimeout(() => {
      this.counter++;
    }, 4000);
  }

  plusOneFunc() {
    this.counter++;
  }
}
