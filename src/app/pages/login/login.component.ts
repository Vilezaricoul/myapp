import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username?: String;
  password?:String;
  constructor(){

  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.username+ " "+ this.password);
  }

}
