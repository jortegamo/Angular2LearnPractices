import { Component, OnInit } from '@angular/core';

import { Painter } from '../../interfaces/painter';
import { PainterService } from '../../services/painter.service';

@Component({
  selector: 'app-painter-list',
  templateUrl: './painter-list.component.html',
  styleUrls: ['./painter-list.component.css']
})

export class PainterListComponent implements OnInit {
  public painters: Painter[];
  public selectedPainter: Painter;

  constructor(private service: PainterService){}

  getPainters(): void {
    this.service.getPainters().then(p=> this.painters = p);
  }
  
  ngOnInit(): void {
    this.getPainters();
  }

  onSelect(p: Painter): void { 
    this.selectedPainter = p;
  }

}
