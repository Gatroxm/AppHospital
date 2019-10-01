import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { ChartsModule } from 'ng2-charts';
// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
// temporales
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
const components = [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
];

@NgModule({
    declarations: [
        ...components,
        GraficaDonaComponent
    ],
    imports: [
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        ...components,
        ChartsModule
    ]
})

export class PagesModule {}
