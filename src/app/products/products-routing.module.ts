import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AddProductComponent } from './add-product/add-product.component';

//lazy Loading
const routes: Routes = [
  {path:'product',component:ProductListComponent},
  {path:'add/addProduct',component:AddProductComponent},
  {path:'details/:id',component:ShowDetailsComponent},
  {path:'edit/:id',component:EditproductComponent},
  {path:'delete/:id',component:DeleteproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
