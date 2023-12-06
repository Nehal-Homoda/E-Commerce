import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { IAddProduct } from '../models/iadd-product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  bodyParam: IProduct = {
    id: '',
    name: '',
    photo: '',
    category: '',
    price: 0,
    quantityInStock: 0,
  };
  body: string = '';
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      'https://coolproductsapp.azurewebsites.net/api/Products'
    );
  }

  getProductById(proId: string): Observable<IProduct> {
    // note
    return this.httpClient.get<IProduct>(
      `https://coolproductsapp.azurewebsites.net/api/Products/${proId}`
    );
  }
  addProduct(prod: IAddProduct): Observable<void> {
    return this.httpClient.post<void>(
      `https://coolproductsapp.azurewebsites.net/api/Products`,
      prod
    );
  }
  editProduct(id: string, editedProduct: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(
      `https://coolproductsapp.azurewebsites.net/api/Products/${id}`,
      editedProduct
    );
  }

  // getProductByCategoryId(catName: string): IProduct[] {
  //   return this.products.filter(products => products.category == catName)
  // }
  // addProduct(prod: IProduct) {
  //   this.products.push(prod);

  // }
  // editProduct(productId:string,editedProduct:IProduct):Observable<IProduct> {
  //   // this.bodyParam.id=editedProduct.id;
  //   // this.bodyParam.name=editedProduct.name;
  //   // this.bodyParam.photo=editedProduct.photo;
  //   // this.bodyParam.price=editedProduct.price;
  //   // this.bodyParam.quantityInStock=editedProduct.quantityInStock;
  //   this.bodyParam=editedProduct;
  //   this.body=this.bodyParam.toString();
  //   const params=new HttpParams().set('edited',this.body);
  //   //this.httpClient.put<IProduct>(`https://coolproductsapp.azurewebsites.net/api/Products/${productId}`+params)

  //return this.httpClient.put(`https://coolproductsapp.azurewebsites.net/api/Products/${productId},${editedProduct}`)
}
// deleteProduct(product: IProduct) {
//   let productIndex = this.products.findIndex(prod => prod.id == product.id);
//   this.products.splice(productIndex, 1);

// }
//}
