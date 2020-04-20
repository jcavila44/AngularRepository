import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { DeseosService } from '../services/deseos.service';



@NgModule({
  declarations: [
    ListasComponent,
    DeseosService
  ],
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {

  constructor(private _deseosServices: DeseosService) {

  }
}
