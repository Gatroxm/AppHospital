import { NgModule } from '@angular/core';
import { NoPageFondComponent } from './no-page-fond/no-page-fond.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const components = [
  NoPageFondComponent,
  HeaderComponent,
  SidebarComponent,
  BreadcrumbsComponent
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
