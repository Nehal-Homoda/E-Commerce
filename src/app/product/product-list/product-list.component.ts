import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
//import { IProduct } from 'src/app/models/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:IProduct[];
constructor(productService:ProductServiceService){
 this.products=productService.getAllProducts();  
}
ngOnInit(): void {
  
}
showDetails(){

}
}
