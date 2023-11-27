import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductListComponent } from './product-list/product-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    EditproductComponent,
    DeleteproductComponent,
    AddProductComponent,
    ProductListComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],

})
export class ProductsModule { }
