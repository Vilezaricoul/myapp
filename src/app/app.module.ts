import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/school/app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CentralComponent } from './pages/centlar/central.component';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import { ProductService } from './pages/listofcours/productservice';

import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { CoursesComponent } from './pages/listofcours/cours.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/registery/register.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CentralComponent,
    CoursesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
