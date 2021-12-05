import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CommonComponent } from './components/common/common.component';
import { DeviceComponent } from './components/admin/device/device.component';
import { UserComponent } from './components/admin/user/user.component';
import { InfoComponent } from './components/admin/info/info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/:name', component: AdminComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'device', component: DeviceComponent },
      { path: 'user', component: UserComponent },
      { path: '**', redirectTo: 'info' }
    ]
  },
  {
    path: 'common/:name', component: CommonComponent,
    children: []
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }