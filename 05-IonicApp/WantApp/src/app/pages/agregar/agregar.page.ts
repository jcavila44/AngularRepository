import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string = "";

  constructor(private _deseosServices: DeseosService, private _router: ActivatedRoute) {

    const listaId = this._router.snapshot.paramMap.get('listaId');
    this.lista = this._deseosServices.obtenerLista(listaId);

  }

  ngOnInit() {
  }

  agregarItem() {

    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = "";
    this._deseosServices.guardarStorage();
  }


  cambioCheck(item: ListaItem) {

    const pendientes = this.lista.items.filter(data => !data.completado).length;

    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this._deseosServices.guardarStorage();


    console.log(this._deseosServices.listas);
  }


  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this._deseosServices.guardarStorage();
  }


}
