import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsComponent } from './schools.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideDatabase } from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { environment } from 'src/environments/environment';

describe('SchoolsComponent', () => {
  let component: SchoolsComponent;
  let fixture: ComponentFixture<SchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)), 
        provideDatabase(() => getDatabase()),
        ButtonModule,
      ],
      providers: [
        MessageService,
      ],
      declarations: [ SchoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
