import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserData {
  productIds: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _userId: string;

  get userId(): string {
    if (!this._userId) {
      this._userId = JSON.parse(localStorage.getItem('user'))?.uid;
    }

    return this._userId;
  }

  constructor(private db: Database, private messageService: MessageService) {}

  addUserProduct(productId: string) {
    return set(ref(this.db, 'users/' + this.userId), {productIds: [productId]})
      .then(this.successCallback.bind(this))
      .catch(this.errorCallback.bind(this));
  }

  getUserProducts(callback: Function) {
    const starCountRef = ref(this.db, 'users/' + this.userId);
    onValue(starCountRef, (snapshot) => {
      callback(snapshot.val());
    });
  }

  updateUserProducts(productIds: string[]) {
    return update(ref(this.db, 'users/' + this.userId), {productIds})
      .then(this.successCallback.bind(this))
      .catch(this.errorCallback.bind(this));;
  }

  deleteUserProduct(productId: string) {
    this.getUserProducts((data: UserData) => {
      data.productIds.filter(el => el !== productId);
      this.updateUserProducts(data.productIds.filter(el => el !== productId));
    });
  }

  private successCallback(): void {
    this.messageService.add({ key: 'tc', severity: 'success', detail: 'Курс успешно добавлен!' });
  }

  private errorCallback(err: HttpErrorResponse): void {
    this.messageService.add({ key: 'tc', severity: 'error', detail: err.message });
  }
}
