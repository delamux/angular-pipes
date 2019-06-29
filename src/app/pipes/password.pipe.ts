import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, isActive: boolean): any {
    value = isActive ? value : '*****';

    return value;
  }

}
