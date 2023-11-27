import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  //private products: IProduct[];
  constructor(private httpClient:HttpClient) {
  }
  getAllProducts():Observable<IProduct[]> {
     return this.httpClient.get<IProduct[]>("https://coolproductsapp.azurewebsites.net/api/Products");
  }


  getProductById(proId:string): Observable<IProduct>{
    // note
    return this.httpClient.get<IProduct>(`https://coolproductsapp.azurewebsites.net/api/Products/${proId}`);
  }


  // getProductByCategoryId(catName: string): IProduct[] {
  //   return this.products.filter(products => products.category == catName)
  // }
  // addProduct(prod: IProduct) {
  //   this.products.push(prod);

  // }
  // editProduct(product: IProduct) {
  //   let productIndex = this.products.findIndex(prod => prod.id == product.id);
  //   this.products[productIndex] = product


  // }
  // deleteProduct(product: IProduct) {
  //   let productIndex = this.products.findIndex(prod => prod.id == product.id);
  //   this.products.splice(productIndex, 1);

  // }
}
