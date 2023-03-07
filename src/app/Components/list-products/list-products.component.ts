import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : any[] = []
  columns = ["id", "name", "size", "price", "is_available"]

  constructor(
    private productsService : ProductsService
  ){}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }

  delete(id : number){
    this.productsService.delete(id).subscribe(res => {
      console.log(res);
      this.getAllProducts()
    })
  }

}
