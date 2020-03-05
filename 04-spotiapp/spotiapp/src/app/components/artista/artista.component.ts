import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service'
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {


  artista: any = {};
  loading: boolean;
  topTracks: any[];

  constructor(private _router: ActivatedRoute, private _services: SpotifyService) {
    this.loading = true;
    this._router.params.subscribe(response => {
      this.getArtista(response['id']);
      this.getTopTraks(response['id']);
    })

  }

  getArtista(id: string) {
    this._services.getArtista(id).subscribe(response => {
      this.artista = response;
      this.loading = false;
      console.log(response);
    })
  }


  getTopTraks(id: string) {
    this._services.getTopTraks(id).subscribe(response => {
      this.topTracks = response;
      console.log(response);
    })


  }


}
