import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  str1: String = '';
  constructor() { }

  ngOnInit() {
    this.func1();
  }
  func1 () {
    for (let i = 0; i < 100; i++) {
      if (i % 3 === 0) {
        this.str1 += i + 'Hello';
      }
      if (i % 5 === 0 && i % 3 !== 0) {
        this.str1 += i + 'Word';
      }
      if (i % 5 === 0 && i % 3 === 0) {
        this.str1 += i + 'HelloWord';
      }
    }
    console.log(this.str1);
  }

}
