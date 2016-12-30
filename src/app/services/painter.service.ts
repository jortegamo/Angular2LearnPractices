import { Injectable } from '@angular/core';

import { Painter } from '../interfaces/painter';
import { PAINTERS } from '../mocks/painters.mock';

@Injectable()
export class PainterService {

  getPainters(): Promise<Painter[]>{
    return Promise.resolve(PAINTERS);
  }

  getLaggedPainters(): Promise<Painter[]> {
    return new Promise<Painter[]> (resolve =>
      setTimeout(() => resolve(PAINTERS),3000)
    )
  }

}
