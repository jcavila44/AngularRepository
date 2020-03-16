import { ListaItem } from './lista-item.model';


export class Lista {


    id: number;
    tituto: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];


    constructor(titulo: string) {
        
        this.tituto = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }


}