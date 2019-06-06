import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule
  ],
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class AppMaterial { }
