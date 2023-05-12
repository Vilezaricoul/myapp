import { TestBed } from '@angular/core/testing';

import { FirebaseService } from '../app/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('FirebaseService', () => {
  let service: FirebaseService;
  let mock: AngularFireAuth;
  const email: string = 'email';
  const password: string = 'password';
  const authStub: any = {
    signInWithEmailAndPassword: () => Promise.resolve(),
    createUserWithEmailAndPassword: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
      ],
      providers: [
        MessageService,
        {provide: AngularFireAuth, useValue: authStub},
      ]
    });
    service = TestBed.inject(FirebaseService);
    mock = TestBed.inject(AngularFireAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check login should be false', () => {
    expect(service.isLoggedIn).toBeFalsy();
  });

  it('should call signInWithPasswordAndEmail', () => {
    const spy = spyOn(mock, 'signInWithEmailAndPassword').and.callThrough();
    service.singin('email', 'password');
    expect(spy).toHaveBeenCalledWith(email, password);
  });

  it('should call createUserWithEmailAndPassword', () => {
    const spy = spyOn(mock, 'createUserWithEmailAndPassword').and.callThrough();
    service.singup('email', 'password');
    expect(spy).toHaveBeenCalledWith(email, password);
  });

  it('should call signOut', () => {
    const spy = spyOn(mock, 'signOut').and.callThrough();
    service.logout();
    expect(spy).toHaveBeenCalled();
  });
});
