import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HozzaadasComponent } from './Components/hozzaadas/hozzaadas.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ModositasComponent } from './Components/modositas/modositas.component';

const routes: Routes = [
  {path: "", component: ListProductsComponent},
  {path: "addProduct", component: HozzaadasComponent},
  {path: "updateProduct", component: ModositasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
