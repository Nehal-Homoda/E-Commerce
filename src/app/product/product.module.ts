import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
//import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ShowDetailsComponent } from './show-details/show-details.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
   
  ],
  exports:[ProductListComponent],
  
})
export class ProductModule { }
