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
      if(!isNaN(this.form.controls['id'].value)){
        this.getProduct(this.form.controls['id'].value)
      }
    })

  }

  getProduct(id : number){
    this.productsService.getProductById(id).subscribe(res => {
      console.log(res);
      this.product = res;
      this.form.controls['name'].setValue(this.product.name)
      this.form.controls['price'].setValue(this.product.price)
      this.form.controls['size'].setValue(this.product.size)
      this.form.controls['is_available'].setValue(this.product.is_available)
    })
  }

  update(){
    this.productsService.update(this.form.value).subscribe(res => {
      console.log(res);
    })
  }

}
