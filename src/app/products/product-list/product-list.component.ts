import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
//import { IProduct } from 'src/app/models/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isLoad: boolean = true;
  productId: string = "";
  constructor(private productService: ProductServiceService, private router: Router) {

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(prod => {
      this.products = prod;
      this.isLoad = false;
    });
  }
  toDetailsPage(proId: string) {
    // this.productService.getProductById(proId).subscribe(prodId=>{
    //   this.productId=prodId.id;
    // })
    this.router.navigateByUrl(`/product/details/${proId}`)
  }
  toEditPage(proId:string){
    
  }
  toAddPage(){
    this.router.navigateByUrl(`/product/add/addProduct`)
  }

}
