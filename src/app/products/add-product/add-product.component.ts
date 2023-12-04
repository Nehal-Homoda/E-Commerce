import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { IAddProduct } from 'src/app/models/iadd-product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  addProductForm: FormGroup;
  isLoad = false;
  //formData: IProduct;
  //submit:boolean=false;
  constructor(private product: ProductServiceService, private router: Router) {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.max(1000)]),
      quantityInStock: new FormControl(0),
    });
    // this.formData = {
    //   id: this.addProductForm.get('id')?.value,
    //   name: this.addProductForm.get('name')?.value,
    //   photo: this.addProductForm.get('photo')?.value,
    //   category: this.addProductForm.get('category')?.value,
    //   price: this.addProductForm.get('price')?.value,
    //   quantityInStock: this.addProductForm.get('quantityInStock')?.value,
    // }
  }
  submit() {
    if (this.addProductForm.invalid) return;
    const productToAdd: IAddProduct = {
      name: this.addProductForm.get('name')?.value,
      photo: this.addProductForm.get('photo')?.value,
      category: this.addProductForm.get('category')?.value,
      price: this.addProductForm.get('price')?.value,
      quantityInStock: this.addProductForm.get('quantityInStock')?.value,
    };
    this.isLoad = true;
    this.product.addProduct(productToAdd).subscribe(() => {
      console.log('product added');
      this.isLoad = false;
      this.router.navigateByUrl(`/product/product`);
    });
  }
}
