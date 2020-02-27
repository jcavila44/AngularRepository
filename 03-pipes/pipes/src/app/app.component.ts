import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})
export class AppComponent {
  nombre      : string    = "Captán América";
  minombre    : string    = "JoSe CaRLoS";
  arreglo     : string[]  = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot', 'Thanos'];
  PI          : number    = Math.PI;
  porcentaje  : number    = 0.235;
  salario     : number    = 12345;
  fecha       : Date      = new Date();
  activar     : boolean   = true;
  idioma      : string    = 'fr';
  videoUrl    : string    = 'https://www.youtube.com/embed/beGjncfEPt8';

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Sisas sisas, llegó la info");
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 'Cra 70 # 12 - 04'
    }
  }


}
