import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
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
