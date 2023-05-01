import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseServises: FirebaseService){

  }

  logout(){
    this.firebaseServises.logout()
    this.isLogout.emit()
  }
}
