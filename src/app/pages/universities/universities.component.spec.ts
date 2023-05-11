import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesComponent } from './universities.component';
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
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';

describe('UniversitiesComponent', () => {
  let component: UniversitiesComponent;
  let fixture: ComponentFixture<UniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)), 
        provideDatabase(() => getDatabase()),
        ButtonModule,
        DialogModule,
        CarouselModule,
        InputMaskModule,
        DropdownModule,
        InputTextModule,
        RatingModule,
      ],
      providers: [
        MessageService,
      ],
      declarations: [ UniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
