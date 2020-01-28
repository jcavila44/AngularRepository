import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        autor: 'Larry Capija',
        mensaje: 'Mañana es mañana, hoy es hoy'
    };
    personajes: string[] = ['Michael Jackson', 'Ronaldinho', 'Messi Xikito'];
}
