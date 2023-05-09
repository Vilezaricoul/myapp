import {Component} from '@angular/core';
import { ProductService } from '../../services/product-list.service';
import {MessageService, SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/model/product.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'magazine',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent { 
    products: Product[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder?: number;

    sortField?: string;
    sortKey: any;
    userProducts: string[];
    
    constructor(
        private productService: ProductService,
        private primengConfig: PrimeNGConfig,
        private userService: UserService,
        private firebaseService: FirebaseService,
        private messageService: MessageService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.productService.getProducts().then(data => {
            this.products = data;
        });

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.primengConfig.ripple = true;

        if (this.firebaseService.isLoggedIn) {
            this.getCurrentUserProducts();
        }
    }
    
    onSortChange(event: { value: any; }) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    updateProfile(product: Product) {
        if (!this.firebaseService.isLoggedIn) {
            this.router.navigate(['login']);
            return;
        }

        if (this.userProducts?.find(productId => productId === product.id)) {
            this.messageService.add({ key: 'tc', severity: 'warn', detail: 'Этот курс уже был ранее добавлен' });
            return;
        }

        this.userProducts ? 
            this.userService.updateUserProducts([...this.userProducts, product.id]) :
            this.userService.addUserProduct(product.id);
    }

    private getCurrentUserProducts(): void {
        this.userService.getUserProducts((productIds: string[]) => {
            this.userProducts = productIds || null;
        });
    }
}