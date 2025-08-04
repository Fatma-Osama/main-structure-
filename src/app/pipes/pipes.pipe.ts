import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curencyPipe',
  standalone: true
})
export class curencyPipe implements PipeTransform {

  transform(value: number, unit: string): number {
    if(unit == 'eg'){

      return value / 50;
    }
     else if (unit == '$'){
      return value * 50

     } else  return value

  }

}
