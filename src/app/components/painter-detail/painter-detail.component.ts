import { Component } from '@angular/core';

import { Painter } from '../../interfaces/painter';

@Component({
  inputs: ['painter'],
  selector: 'app-painter-detail',
  templateUrl: './painter-detail.component.html',
  styleUrls: ['./painter-detail.component.css'],
  providers: []
})

export class PainterDetailComponent {
  public painter: Painter;
}
