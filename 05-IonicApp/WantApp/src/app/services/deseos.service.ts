import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    console.log("servicio inicializado");
    const lista1 = new Lista("Recolectar Piedras del Infinito");
    const lista2 = new Lista("Liquidar a todos");
    this.listas.push(lista1, lista2);
    console.log(this.listas);

  }




}
