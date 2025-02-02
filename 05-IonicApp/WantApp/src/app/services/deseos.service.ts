import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista("Recolectar Piedras del Infinito");
    const lista2 = new Lista("Liquidar a todos");
    this.listas.push(lista1, lista2);
    this.cargarStorage();
  }


  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }



  obtenerLista(id: string | number) {
    id = Number(id);

    return this.listas.find(data => data.id === id)
  }




  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }


}
