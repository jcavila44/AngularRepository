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
  loading: boolean;
  error: boolean;
  errorMensaje: string;

  constructor(private _serviceSpotify: SpotifyService) {

    this.error = false;
    this.loading = true;

    this._serviceSpotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (dataError) => {
        this.loading = false;
        this.errorMensaje = dataError.error.error.message;
        this.error = true;
      });
  }
}
