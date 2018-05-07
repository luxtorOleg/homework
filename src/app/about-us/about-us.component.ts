import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.func1();
  }
  func1 () {
    for (let i = 1; i <= 100; i++) {
      let str1 = '' + i;
      if (i % 3 === 0 && i % 5 !== 0) {
        str1 += 'Hello ';
      }
      if (i % 5 === 0 && i % 3 !== 0) {
        str1 += 'Word ';
      }
      if (i % 5 === 0 && i % 3 === 0) {
        str1 += 'HelloWord ';
      }
      console.log(str1);
    }
  }

}
