import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-modositas',
  templateUrl: './modositas.component.html',
  styleUrls: ['./modositas.component.css']
})
export class ModositasComponent implements OnInit {

  form! : FormGroup<any>
  product! : any

  constructor(
    private fb : FormBuilder,
    private productsService : ProductsService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      size: [''],
      is_available: ['']
    })

    this.form.controls['id'].valueChanges.subscribe(() => {
      if(!this.product){
        this.getProduct(this.form.controls['id'].value)
      }
    })

  }

  getProduct(id : number){
    this.productsService.getProductById(id).subscribe(res => {
      console.log(res);
      this.product = res;
      this.form.setValue({
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        size: this.product.size,
        is_available: this.product.is_available
      })
    })
  }

  update(){
    this.productsService.update(this.form.value).subscribe(res => {
      console.log(res);

    })
  }

}
