import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CommonComponent } from './components/common/common.component';
import { DeviceComponent } from './components/admin/device/device.component';
import { UserComponent } from './components/admin/user/user.component';
import { InfoComponent } from './components/admin/info/info.component';
import { CheckComponent } from './components/common/check/check.component';
import { AlterComponent } from './components/common/alter/alter.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RecordComponent } from './components/admin/record/record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CommonComponent,
    DeviceComponent,
    UserComponent,
    InfoComponent,
    CheckComponent,
    AlterComponent,
    RecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
