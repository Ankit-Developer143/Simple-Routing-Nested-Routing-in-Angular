import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TelivisionComponent } from './product/telivision/telivision.component';

const routes: Routes = [
  { path: '',children:[
  { path: '', component:ProductComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'television', component: TelivisionComponent },
  { path: 'mobile', component: MobileComponent },

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
