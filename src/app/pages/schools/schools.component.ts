import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent {
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  connect() {
    this.router.navigate([this.firebaseService.isLoggedIn ? 'courses' : 'login']);
  }
}
