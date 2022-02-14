import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from 'src/app/services/selected-product.service';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  constructor(private selectedProductService : SelectedProductService) { }

  ngOnInit(): void {
    this.selectedProductService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.selectedProductService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.selectedProductService.removeSelectedProduct(item);
  }

  clearAll(){
    this.selectedProductService.removeAllSelectedProduct();
  }
}
