import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FirebaseService } from 'src/app/services/firebase.service';

interface ICourse {
  name: string;
  description: string;
  img: string;
  raiting: number;
  markCount: number;
}

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent {
  courses: ICourse[] = [
    {
      name: 'Программирование для всех',
      description: 'Предложено Ташкентским университетом информационных технологий',
      img: '../../../assets/img/hedu/TATU.png',
      raiting: 4.8,
      markCount: 4386
    },
    {
      name: 'Программирование для всех',
      description: 'Предложено Ташкентским университетом информационных технологий',
      img: '../../../assets/img/hedu/TATU.png',
      raiting: 4.8,
      markCount: 4386
    },
    {
      name: 'Программирование для всех',
      description: 'Предложено Ташкентским университетом информационных технологий',
      img: '../../../assets/img/hedu/TATU.png',
      raiting: 4.8,
      markCount: 4386
    },
    {
      name: 'Программирование для всех',
      description: 'Предложено Ташкентским университетом информационных технологий',
      img: '../../../assets/img/hedu/TATU.png',
      raiting: 4.8,
      markCount: 4386
    },
    {
      name: 'Программирование для всех',
      description: 'Предложено Ташкентским университетом информационных технологий',
      img: '../../../assets/img/hedu/TATU.png',
      raiting: 4.8,
      markCount: 4386
    },
    {
      name: 'Программирование для всех',
      description: 'Предложено Ташкентским университетом информационных технологий',
      img: '../../../assets/img/hedu/TATU.png',
      raiting: 4.8,
      markCount: 4386
    }
  ];
  universityTypes = ['type1', 'type2', 'type3'];
  disciplines = ['discipline1', 'discipline2', 'discipline3'];
  areas = ['Московская область', 'Республика Татарстан'];

  form = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    jobPlace: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['',[Validators.required]],
    universityName: ['', [Validators.required]],
    universityType: ['', [Validators.required]],
    discipline: ['', [Validators.required]],
    area: ['', [Validators.required]],
    other: [''],
  });

  visibleCourseDialog = false;
  visibleCourse: ICourse;

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {}

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
        default:
          error = 'Неизвестная ошибка';
      }

      return error;
    }).join('<br>');
  }

  showCourseDialog(course: ICourse) {
    this.visibleCourseDialog = true;
    this.visibleCourse = course;
  }

  start() {
    this.router.navigate([this.firebaseService.isLoggedIn ? 'courses' : 'login']);
  }

  save() {
    this.form.reset();
    this.form.markAsPristine();
    this.messageService.add({ key: 'tc', severity: 'success', detail: 'Данные отправлены администратору, мы свяжемся с вами в ближайшее время' });
  }
}
