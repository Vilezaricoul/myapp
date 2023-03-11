import { Component } from '@angular/core';
interface City {
  name: string,
  code: string,
  inactive: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'myapp';
  cities: City[];

  selectedCity: City | undefined;

  constructor() {
      this.cities = [
          {name: 'RU', code: 'NY', inactive: false},
          {name: 'ENG', code: 'RM', inactive: true},

      ];
  }
}
