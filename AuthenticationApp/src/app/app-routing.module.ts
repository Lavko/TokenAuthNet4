import {RegisterPageComponent} from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './helpers/auth.guard';
import {SecretComponent} from './secret/secret.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminSecretPageComponent} from "./admin-secret-page/admin-secret-page.component";
import {Role} from "./models/role.enum";

const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.User, Role.Admin]
    }
  },
  {
    path: 'admin',
    component: AdminSecretPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin]
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
