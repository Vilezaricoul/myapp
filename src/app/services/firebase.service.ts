import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  get isLoggedIn(): boolean {
    return !!JSON.parse(localStorage.getItem('user'));
  }

  constructor(
    public firebaseAuth: AngularFireAuth,
    public afs: AngularFirestore,
  ) {}

  async singin(email: string, password: string){
    console.log(email, password)
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res=>{
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  async singup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
