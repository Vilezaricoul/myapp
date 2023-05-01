import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  isLoggedIn = false
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseAuth : AngularFireAuth) {}
  async singin(email: string, password: string){
    console.log(email, password)
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  async singup(email: string, password: string){
    console.log(email, password)
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    this.isLoggedIn = false;
    localStorage.removeItem('user')
  }


}
