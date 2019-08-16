import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path :'' , 
  loadChildren : "./home/home.module#HomeModule"
},
{
  path :'currency/:id' , 
  loadChildren : "./currency/currency.module#CurrencyModule"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
