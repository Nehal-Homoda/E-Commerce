import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  addProductForm:FormGroup;
constructor(){
  this.addProductForm=new FormGroup({
    id:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    photo:new FormControl(''),
    category:new FormControl(''),
    price:new FormControl(),
    quantityInStock:new FormControl(),
  })

}
}
