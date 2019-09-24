import { NgModule } from '@angular/core';
import { NoPageFondComponent } from './no-page-fond/no-page-fond.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const components = [
  NoPageFondComponent,
  HeaderComponent,
  SidebarComponent,
  BreadcrumbsComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
