import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PainterListComponent } from '../components/painter-list/painter-list.component';
import { PainterDetailComponent} from '../components/painter-detail/painter-detail.component';
import { PainterService} from '../services/painter.service';

@NgModule({
    imports: [FormsModule,CommonModule],
    declarations: [PainterListComponent,PainterDetailComponent],
    exports: [PainterListComponent],
    providers: [PainterService]
})

export class PainterListModule{}