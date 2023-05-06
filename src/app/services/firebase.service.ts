import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  get isLoggedIn(): boolean {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  constructor(private firebaseAuth: AngularFireAuth, private messageService: MessageService) {}

  singin(email: string, password: string): Promise<any> {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(this.setUserToStorage.bind(this))
      .catch(this.showError.bind(this));
  }

  singup(email: string, password: string): Promise<any> {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(this.setUserToStorage.bind(this))
      .catch(this.showError.bind(this));
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
  }

  private setUserToStorage({ user }) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private showError(err: HttpErrorResponse) {
    this.messageService.add({ key: 'tc', severity: 'error', detail: err.message })
  }
}
