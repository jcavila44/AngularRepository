import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
    public _deseosServices: DeseosService,
    private _router: Router,
    private alertController: AlertController
  ) {

  }

  async agregarLista() {
    // this._router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs:
        [
          {
            name: 'titulo',
            type: 'text',
            placeholder: 'Nombre de la lista'
          }
        ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            this._deseosServices.crearLista(data.titulo);
          }
        }
      ]

    });

    await alert.present();
  }

}
