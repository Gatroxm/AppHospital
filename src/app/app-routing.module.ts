import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPageFondComponent } from './shared/no-page-fond/no-page-fond.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'progress', component: ProgressComponent
      },
      {
        path: 'graficas1', component: Graficas1Component
      },
      {
         path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', component: NoPageFondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }