import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UserData, UserService } from '../services/user.service';
import { Product } from '../model/product.model';
import { ProductService } from '../pages/listofcours/productservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab: number = 0;
  userData: UserData;
  products: Product[];

  get myCourses(): Product[] {
    return this.userData && this.products ? this.products.filter(p => this.userData.productIds.includes(p.id)) : [];
  }

  @Output() isLogout = new EventEmitter<void>();

  constructor(
    private firebaseServise: FirebaseService,
    private userService: UserService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data);
    this.userService.getUserProducts((data: UserData) => this.userData = data);
  }

  logout(){
    this.firebaseServise.logout()
    this.isLogout.emit()
  }
}
