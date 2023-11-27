//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  id:string="";
  selectedProduct:IProduct={
    id:"",
    name:"",
    photo:"", 
    category:"",
    price:0,
    quantityInStock:0
  } 
  isLoad:boolean=true;
  constructor(private activateRoute: ActivatedRoute, private productService: ProductServiceService) { }
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get("id")!;
    this.productService.getProductById(this.id).subscribe(prod=>{
     this.selectedProduct.id=prod.id;
     this.selectedProduct.name=prod.name;
     this.selectedProduct.photo=prod.photo;
     this.selectedProduct.price=prod.price;
     this.selectedProduct.quantityInStock=prod.quantityInStock;
     this.selectedProduct.category=prod.category;
     
    //  return this.selectedProduct;

    this.isLoad=false;
    })
    

  }
}

