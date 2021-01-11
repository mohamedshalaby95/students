import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe'
})
export class CustomepipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return value.toUpperCase();
  }

}
