import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { IProfile, IUserData } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get userId(): string {
    return JSON.parse(localStorage.getItem('user'))?.uid;
  }

  constructor(private db: Database, private messageService: MessageService) {}

  getUserData(callback: (data: IUserData) => void) {
    const starCountRef = ref(this.db, `users/${this.userId}`);
    onValue(starCountRef, (snapshot) => {
      callback(snapshot.val());
    });
  }

  deleteUserData(callback: (data: IUserData) => void) {
    return update(ref(this.db, 'users/' + this.userId), {})
      .catch(this.errorCallback.bind(this));
  }

  // products menthods
  addUserProduct(productId: string) {
    return set(ref(this.db, `users/${this.userId}/productIds`), [productId])
      .then(this.successCallback.bind(this, 'Курс успешно добавлен!'))
      .catch(this.errorCallback.bind(this));
  }

  getUserProducts(callback: (ids: string[]) => void) {
    const starCountRef = ref(this.db, `users/${this.userId}/productIds`);
    onValue(starCountRef, (snapshot) => {
      callback(snapshot.val());
    });
  }

  updateUserProducts(productIds: string[], message = 'Курс успешно добавлен!') {
    return update(ref(this.db, 'users/' + this.userId), {productIds})
      .then(this.successCallback.bind(this))
      .catch(this.errorCallback.bind(this));
  }

  deleteUserProduct(productId: string) {
    this.getUserProducts((productIds: string[]) => {
      this.updateUserProducts(
        productIds.filter(el => el !== productId), 
        'Курс удален из вашего списка!'
      );
    });
  }

  // profile methods
  addUserProfile(profile: IProfile) {
    return set(ref(this.db, `users/${this.userId}/profile`), profile)
      .catch(this.errorCallback.bind(this));
  }

  updateUserProfile(profile: IProfile) {
    return update(ref(this.db, `users/${this.userId}/profile`), profile)
      .then(this.successCallback.bind(this, 'Данные обновлены'))
      .catch(this.errorCallback.bind(this));
  }

  private successCallback(detail: string = 'Success'): void {
    this.messageService.add({ key: 'tc', severity: 'success', detail });
  }

  private errorCallback(err: HttpErrorResponse): void {
    this.messageService.add({ key: 'tc', severity: 'error', detail: err.message });
  }
}
