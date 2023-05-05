import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  title= 'firebase-angular-auth'
  username?: string;
  password?:string;
  isSingedIn = false

  constructor(public firebaseservises: FirebaseService){}

  ngOnInit(){
    if(localStorage.getItem('user')!== null){
      this.isSingedIn = true
    } else{
      this.isSingedIn = false
    }
  }

  onSubmit(){
    console.log(this.username+ " "+ this.password);
  }

  onSignUp(email: string, password: string){
    this.firebaseservises.singup(email, password)
    if(this.firebaseservises.isLoggedIn){
      this.isSingedIn = true
    }
  }

  onSignIn(email: string, password: string){
    this.firebaseservises.singin(email, password).then(() => {
      if(this.firebaseservises.isLoggedIn){
        this.isSingedIn = true
      }
    })

  }

  handleLogout(){
    this.isSingedIn = false;
  }



}
