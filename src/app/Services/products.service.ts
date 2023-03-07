import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = "https://www.tothpeter-api.hu/productCRUD/products"

  constructor(
    private xhttp : HttpClient
  ) { }

  getAllProducts() : Observable<any> {
    return this.xhttp.get(this.apiUrl);
  }

  getProductById(id : number) : Observable<any> {
    return this.xhttp.get(`${this.apiUrl}/${id}`);
  }

  delete(id : number) : Observable<any>{
    return this.xhttp.delete(`${this.apiUrl}/${id}`);
  }

  create(product : any) : Observable<any>{
    return this.xhttp.post(this.apiUrl, product);
  }

  update(product : any) : Observable<any>{
    return this.xhttp.patch(`${this.apiUrl}/${product.id}`, product);
  }


}
