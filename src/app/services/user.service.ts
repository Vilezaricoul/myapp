import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';

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

  constructor(private db: Database) {}

  addUserProduct(productId: string) {
    return set(ref(this.db, 'users/' + this.userId), {productIds: [productId]});
  }

  getUserProducts(callback: Function) {
    const starCountRef = ref(this.db, 'users/' + this.userId);
    onValue(starCountRef, (snapshot) => {
      callback(snapshot.val());
    });
  }

  updateUserProducts(productIds: string[]) {
    return update(ref(this.db, 'users/' + this.userId), {productIds});
  }

  deleteUserProduct(productId: string) {
    this.getUserProducts((data: UserData) => {
      data.productIds.filter(el => el !== productId);
      this.updateUserProducts(data.productIds.filter(el => el !== productId));
    });
  }
}
