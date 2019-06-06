import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './components/user-management/user-register/user-register.component';
import { UserListComponent } from './components/user-management/user-list/user-list.component';
import { AdminRegisterComponent } from './components/user-management/admin-register/admin-register.component';

const routes: Routes = [
  {path: '', component: UserListComponent },
  {path: 'UserRegister', component: UserRegisterComponent},
  {path: 'UserList', component: UserListComponent},
  {path: 'AdminRegister', component: AdminRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
