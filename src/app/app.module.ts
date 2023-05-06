import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/school/app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CentralComponent } from './pages/centlar/central.component';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';

import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { CoursesComponent } from './pages/listofcours/courses.component';
import { LoginComponent } from './pages/login/login.component';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CentralComponent,
    CoursesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    ToastModule,
    CardModule,
    TabViewModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
