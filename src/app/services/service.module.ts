import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SharedService,
  SidebarService
 } from './service.index';

const services = [
  SettingsService,
  SharedService,
  SidebarService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ ...services ]
})
export class ServiceModule { }
