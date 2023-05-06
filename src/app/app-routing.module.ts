import { NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './pages/school/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CentralComponent } from './pages/centlar/central.component';
import { CoursesComponent } from './pages/listofcours/courses.component';
import { LoginComponent } from './pages/login/login.component';


const appRoutes: Routes =[
  { path: 'courses', component: CoursesComponent},
  { path: '', component: CentralComponent},
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [ CommonModule, BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
