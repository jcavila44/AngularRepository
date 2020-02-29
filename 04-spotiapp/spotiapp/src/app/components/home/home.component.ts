import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  paises: any[];
  nuevasCanciones: any[];

  constructor(private _serviceSpotify: SpotifyService) {
    this._serviceSpotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
      });
  }
}
