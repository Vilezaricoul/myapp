import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
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
  isSingedIn = false
  
  selectedCity: City | undefined;

  constructor(public firebaseService: FirebaseService) {
      this.cities = [
          {name: 'RU', code: 'NY', inactive: false},
          {name: 'ENG', code: 'RM', inactive: true},

      ];
      if(localStorage.getItem('user')!== null){
        this.isSingedIn = true
      } else{
        this.isSingedIn = false
      }
  }

}
