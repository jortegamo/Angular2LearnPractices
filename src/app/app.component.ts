import { Component } from '@angular/core';

import { Painter } from './interfaces/painter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string;

  constructor(){
    this.title = 'Famous Painters';
  }
}
