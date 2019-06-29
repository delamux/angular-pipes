import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.toLocaleLowerCase()
      .split(' ')
      .map( (word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  }
}
