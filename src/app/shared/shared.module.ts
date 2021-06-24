import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [CommonModule, FormsModule, NgbModule, PageNotFoundComponent],
})
export class SharedModule {}
