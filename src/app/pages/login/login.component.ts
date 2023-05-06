import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

function checkPasswordsValidatorFn(group: AbstractControl):  ValidationErrors | null { 
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;
  return password === confirmPassword ? null : { notSame: true };
}

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: this.fb.control<string>('', [Validators.required, Validators.email]),
    password: this.fb.control<string>('', [Validators.required]),
  });

  registerForm: FormGroup = this.fb.group({
    email: this.fb.control<string>('', [Validators.required, Validators.email]),
    name: this.fb.control<string>('', [Validators.required]),
    surname: this.fb.control<string>(''),
    passwords: this.fb.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: ['']
      }, {
        validators: checkPasswordsValidatorFn
      }
    )
  });

  get isSingedIn(): boolean {
    return this.firebaseservises.isLoggedIn;
  }

  constructor(
    private firebaseservises: FirebaseService,
    private fb: FormBuilder,
  ){}

  signUp(){
    const values = this.registerForm.getRawValue();
    this.firebaseservises.singup(values.email, values.passwords.password);
  }

  signIn() {
    const { email, password } = this.loginForm.getRawValue();
    this.firebaseservises.singin(email, password);
  }

  getErrors(errors: {[key: string]: string | boolean}): string {
    return Object.keys(errors).map(key => {
      let error: string;
      switch (key) {
        case 'required':
          error = 'Поле обязательно для заполнения';
          break;
        case 'email':
          error = 'Введенное значение не соответствует email формату';
          break;
        case 'notSame':
          error = 'Пароли не совпадают';
          break;
        default:
          error = 'Неизвестная ошибка';
      }

      return error;
    }).join('<br>');
  }
}
