import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'magazine',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent { 
    products: Product[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder?: number;

    sortField?: string;
sortKey: any;

    constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.productService.getProducts().then(data => {
            this.products = data
            console.log(data)
        });

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.primengConfig.ripple = true;
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
}