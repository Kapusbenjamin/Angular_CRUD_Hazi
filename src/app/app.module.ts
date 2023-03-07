import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { HozzaadasComponent } from './Components/hozzaadas/hozzaadas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModositasComponent } from './Components/modositas/modositas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    HozzaadasComponent,
    ModositasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
