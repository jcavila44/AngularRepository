import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domsegurp'
})
export class DomsegurpPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {
  }

  transform(value: string): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
