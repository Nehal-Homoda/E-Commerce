import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproductDialog.component.html',
  styleUrls: ['./deleteproductDialog.component.css']
})
export class deleteproductDialog implements OnInit {
  selectedPro:IProduct;
constructor( private proService:ProductServiceService,private activatedRoute:ActivatedRoute){
  this.selectedPro={
    id:"",
    name:"",
    photo:"", 
    category:"",
    price:0,
    quantityInStock:0
   }
}
routeId:string=""
ngOnInit(): void {
  
  this.activatedRoute.paramMap.subscribe((map)=>{
    this.routeId=map.get('id')!;
    //console.log(this.routeId);
    this.proService.getProductById(this.routeId).subscribe((prodToDelete)=>{
      this.selectedPro=prodToDelete;
    })
  })
}

}
