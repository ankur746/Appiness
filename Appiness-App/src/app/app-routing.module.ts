import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './components/user-management/user-register/user-register.component';
import { UserListComponent } from './components/user-management/user-list/user-list.component';

const routes: Routes = [
  {path: 'UserRegister', component: UserRegisterComponent},
  { path: 'UserList', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
