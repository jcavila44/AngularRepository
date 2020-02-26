import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})

export class HeroeSearchComponent {

  heroe: any = {};
  param: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.buscarHeroes(params['texto']);
      this.param = params['texto'];
    })
  }

  verHeroe = (idx: number) => {
    this._router.navigate(['/heroe', idx]);
  }

  

}
