import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-hozzaadas',
  templateUrl: './hozzaadas.component.html',
  styleUrls: ['./hozzaadas.component.css']
})
export class HozzaadasComponent implements OnInit {

  form! : FormGroup<any>

  constructor(
    private fb : FormBuilder,
    private productsService : ProductsService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      size: [''],
      is_available: ['']
    })
  }

  create(){

    let product = {
      name: "this.form.controls['name'].value",
      price: 12,
      size: 99,
      is_available: 1
    }

    this.productsService.create(product).subscribe(res => {
      console.log(res);
      this.form = this.fb.group({
        name: [''],
        price: [''],
        size: [''],
        is_available: ['']
      })
    })
  }

}
