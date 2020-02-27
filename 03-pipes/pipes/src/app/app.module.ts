import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import LocalEs from '@angular/common/locales/es';
import LocalFr from '@angular/common/locales/fr';

registerLocaleData(LocalEs);
registerLocaleData(LocalFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomsegurpPipe } from './pipes/domsegurp.pipe';
import { ShowPassPipe } from './pipes/show-pass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomsegurpPipe,
    ShowPassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
