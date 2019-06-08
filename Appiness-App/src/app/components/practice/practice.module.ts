import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [DirectiveComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [DirectiveComponent]
})
export class PracticeModule { }
