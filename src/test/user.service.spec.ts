import { TestBed } from '@angular/core/testing';

import { UserService } from '../app/services/user.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { IProfile } from 'src/app/model/user.model';

describe('UserService', () => {
  let service: UserService;
  const userId = 'testUid';
  const testProfile: IProfile = {
    name: 'test',
    surname: 'test',
    phone: '8 900 800 80 80'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)), 
        provideDatabase(() => getDatabase()),
      ],
      providers: [MessageService]
    });
    service = TestBed.inject(UserService);
    localStorage.removeItem('user');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('userId should be undefined', () => {
    expect(service.userId).toBeUndefined();
  });

  it('should not call firebase functions', (done) => {
    service.addUserProfile(testProfile);

    service.getUserData((data) => {
      expect(data).toBeNull();
      done();
    });
  });
});
