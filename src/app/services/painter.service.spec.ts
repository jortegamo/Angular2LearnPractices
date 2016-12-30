/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainterService } from './painter.service';

describe('PainterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainterService]
    });
  });

  it('should ...', inject([PainterService], (service: PainterService) => {
    expect(service).toBeTruthy();
  }));
});
