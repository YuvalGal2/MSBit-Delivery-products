import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../shared/products.service';
import { Product } from './product/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList:Product[]; 
  displayEditMode:boolean = false;
  constructor(private productService:ProductsService) { }
  ngOnInit() {
    this.productService.editedProduct.subscribe((editingStatus) => {
      this.displayEditMode = editingStatus.editMode;
    })
   this.productService.getProducts().subscribe(((response:Product[]) => {
      this.productsList = response;
   }))
  }
  handleDelete(id:number): void {
    this.productsList = this.productService.removeProductById(id);
  }
}
