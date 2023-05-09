import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product-list.service';
import { IUserData } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab: number = 0;
  userData: IUserData;
  products: Product[];

  get myCourses(): Product[] {
    return this.userData && this.products ? this.products.filter(p => this.userData.productIds.includes(p.id)) : [];
  }

  constructor(
    private firebaseServise: FirebaseService,
    private userService: UserService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data);
    this.userService.getUserData((data: IUserData) => this.userData = data);
  }

  logout() {
    this.firebaseServise.logout();
  }
}
