import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/core-components/login/login.component';
import { DashboardComponent } from './components/core-components/dashboard/dashboard.component';
import { SignupComponent } from './components/core-components/signup/signup.component';
import { UserComponent } from './components/core-components/user/user.component';
import { AdminComponent } from './components/core-components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'newUser', component: SignupComponent },
  { path: 'lobby', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
