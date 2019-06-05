import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserRegisterComponent, UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    // HttpModule
  ],
  exports: [UserRegisterComponent, UserListComponent]
})
export class UserManagementModule { }
