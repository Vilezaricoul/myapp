import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection = this.firestore.collection('Products')
  constructor(private firestore: AngularFirestore) {}

  addProduct(product: Product) {
    return this.productsCollection.add({...product});
  }

  getProducts() {
    return this.productsCollection.snapshotChanges();
  }

  updateProduct(product: Product) {
    this.firestore.doc('Products/' + product.id).update({...product});
  }

  deleteProduct(productId: string) {
    this.firestore.doc('Products/' + productId).delete();
  }
}
