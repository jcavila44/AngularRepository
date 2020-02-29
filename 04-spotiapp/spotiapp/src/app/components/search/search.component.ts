import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[];

  constructor(private _spotifyService: SpotifyService) { }

  // ngOnInit() {
  // }

  buscar(termino: any) {
    this._spotifyService.getArtista(termino)
      .subscribe((data: any) => {
        this.artistas = data;
        // console.log(data);
      });
  }

}
