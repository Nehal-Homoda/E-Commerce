import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
//import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
