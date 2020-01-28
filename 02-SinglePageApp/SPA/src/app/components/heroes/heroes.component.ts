import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heores: Heroe[];

  constructor(private _heroesServices: HeroesService) {
  }

  ngOnInit() {
    this.heores = this._heroesServices.getHeores();
  }


}
