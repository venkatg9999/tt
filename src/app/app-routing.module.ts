import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChequeslistComponent } from './chequeslist/chequeslist.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorchecksdetailsComponent } from './vendorchecksdetails/vendorchecksdetails.component';
import { SinglechequeprintComponent } from './singlechequeprint/singlechequeprint.component';
import { MulticheckComponent } from './multicheck/multicheck.component';
import { Multicheck2Component } from './multicheck2/multicheck2.component';



const routes: Routes = [
  {path:'cheques',component:ChequeslistComponent},
{path:'vendor',component:VendorComponent},
{path:'vendorcheckdetails/:name',component:VendorchecksdetailsComponent},
{path:'singlecheck/:data',component:SinglechequeprintComponent},
{path:'multicheck/:data',component:MulticheckComponent},
{path:'multicheck2',component:Multicheck2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
