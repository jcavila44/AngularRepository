import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPass'
})
export class ShowPassPipe implements PipeTransform {

  transform(value: string, arg: string): string {
    return (arg) ? '*'.repeat(value.length) : value;


    // var response = "";
    // if (arg) {
    //   var arraNom = value.split('');
    //   for (let index = 0; index < arraNom.length; index++) {
    //     response += "*";
    //   }
    // } else {
    //   response = value;
    // }
    // return response;
  }

}
