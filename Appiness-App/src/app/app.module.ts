import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterial } from './app-material.module';
import { UserManagementModule } from './components/user-management/user-management.module';
import { PracticeModule } from './components/practice/practice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterial,
    FormsModule,
    UserManagementModule,
    PracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
