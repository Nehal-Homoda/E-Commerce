import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { EditproductComponent } from './editproduct/editproduct.component';
import { deleteproductDialog } from './deleteproductDialog/deleteproductDialog.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductListComponent } from './product-list/product-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditproductComponent,
    deleteproductDialog,
    AddProductComponent,
    ProductListComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
   
  ],

})
export class ProductsModule { }
