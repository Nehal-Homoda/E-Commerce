import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private products: IProduct[];
  constructor() {
    this.products = [
      { id: 100, name: "butterflay Necklace", price: 300, quantity: 5, imgUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", categoryId: 1 },
      { id: 200, name: "Pave Ring", price: 200, quantity: 0, imgUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", categoryId: 2 },
      { id: 300, name: "Sun Bracelet", price: 300, quantity: 4, imgUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", categoryId: 3 },
      { id: 300, name: "Hoops Earnings", price: 200, quantity: 2, imgUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", categoryId: 4 }

    ]
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }


  getProductById(proId: number): IProduct {
    // note
    return this.products.find(product => product.id == proId)!;
  }


  getProductByCategoryId(catId: number): IProduct[] {
    return this.products.filter(products => products.categoryId == catId)
  }
  addProduct(prod: IProduct) {
    this.products.push(prod);

  }
  editProduct(product: IProduct) {
    let productIndex = this.products.findIndex(prod => prod.id == product.id);
    this.products[productIndex] = product


  }
  deleteProduct(product: IProduct) {
    let productIndex = this.products.findIndex(prod => prod.id == product.id);
    this.products.splice(productIndex, 1);

  }
}
