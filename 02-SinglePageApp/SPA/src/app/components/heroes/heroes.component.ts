import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heores: Heroe[] = [];

  constructor(private _heroesServices: HeroesService, private _Router: Router) {
  }

  ngOnInit() {
    this.heores = this._heroesServices.getHeores();
  }


  verHeroe(id: number) {
    this._Router.navigate(['/heroe', id]);
  }

}
