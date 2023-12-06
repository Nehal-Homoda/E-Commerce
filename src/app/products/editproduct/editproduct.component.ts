import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddProduct } from 'src/app/models/iadd-product';
import { IProduct } from 'src/app/models/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent implements OnInit {
  editForm: FormGroup;
  //isLoad:boolean=true;
  idFromRoute: string = '';
  //currentPro:IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prod: ProductServiceService,
    router: Router
  ) {
    this.editForm = new FormGroup({
      name: new FormControl(''),
      photo: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.max(1000)]),
      quantityInStock: new FormControl(0),
    });
    // this.currentPro = {
    //   id: '',
    //   name: '',
    //   photo: '',
    //   category: '',
    //   price: 0,
    //   quantityInStock: 0,
    // };
  }

  public ngOnInit(): void {
    // get the id from the url
    this.activatedRoute.paramMap.subscribe((map) => {
      this.idFromRoute = map.get('id')!;
      this.prod.getProductById(this.idFromRoute).subscribe((productById) => {
        this.editForm.patchValue(productById);
        //   {
        //   name: productById.name,
        //   photo: productById.photo,
        //   category: productById.category,
        //   price: productById.price,
        //   quantityInStock: productById.quantityInStock,

        // }

        //this.currentPro=productById;
      });
    });
  }
  save() {
    const editedProd: IProduct = {
      id: this.idFromRoute,
      name: this.editForm.get('name')?.value,
      photo: this.editForm.get('photo')?.value,
      category: this.editForm.get('category')?.value,
      price: this.editForm.get('price')?.value,
      quantityInStock: this.editForm.get('quantityInStock')?.value,
    };
    this.prod
      .editProduct(this.idFromRoute, editedProd)
      .subscribe((editedPro) => {
        console.log('edited');
      });
  }
}
