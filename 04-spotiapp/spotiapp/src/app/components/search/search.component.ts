import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {
  }

  // ngOnInit() {
  // }

  buscar(termino: any) {
    if (termino) {
      this.loading = true;
      this._spotifyService.getArtistas(termino)
        .subscribe((data: any) => {
          this.artistas = data;
          this.loading = false;
        });
    } else {
      this.artistas = [];
    }

  }

}
