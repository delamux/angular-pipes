import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'delAmux';
  capitalizeMe = 'luis dEl amo sOro';
  arrayNumbers = [0, 1, 2, 3, 4, 5];
  PI = Math.PI;
  aNumber = 0.234456;
  salary = 40450.65;
  hero = {
    name: 'Peter Parker',
    alias: 'Spiderman',
    age: 16,
    address: {
      street: 'my street',
      number: 20
    }
  };

  promiseValue = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('The data arrived'), 3500);
  });

  actualDate = new Date();
  video = '7vLKG01mYFw';

}
