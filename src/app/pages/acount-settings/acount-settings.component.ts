import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent {

  constructor( public ajustes: SettingsService ) { }

  cambiarColor(link: any, tema: string) {
    this.aplicarCheck(link);
    this.ajustes.aplicarTema( tema );
  }
  aplicarCheck( link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for ( const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
