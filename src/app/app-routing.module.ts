import { NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CentralComponent } from './pages/centlar/central.component';
import { CoursesComponent } from './pages/list-of-courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { UniversitiesComponent } from './pages/universities/universities.component';
import { AppComponent } from './app.component';


const appRoutes: Routes =[
  { path: 'courses', component: CoursesComponent},
  { path: '', component: CentralComponent},
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent},
  { path: 'schools', component: SchoolsComponent},
  { path: 'universities', component: UniversitiesComponent},
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
