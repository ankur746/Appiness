import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppMaterial } from 'src/app/app-material.module';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

@NgModule({
  declarations: [UserRegisterComponent, UserListComponent, AdminRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppMaterial
  ],
  exports: [UserRegisterComponent, UserListComponent]
})
export class UserManagementModule { }
