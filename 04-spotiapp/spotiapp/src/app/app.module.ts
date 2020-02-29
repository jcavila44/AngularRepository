import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importando rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Permitir hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

// Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Import Services
import { SpotifyService } from './services/spotify.service';

// Import Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
