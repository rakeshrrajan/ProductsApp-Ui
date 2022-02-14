import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SelectedProductService } from 'src/app/services/selected-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any ;

  constructor(private productService : ProductService, private selectedProductService : SelectedProductService) { }

  ngOnInit(): void {

    this.productService.getProduct()
    .subscribe(res=>{
      this.productList = res;      
      this.productList.forEach((a:any) => {       
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
  }

  addtocart(item: any){
    this.selectedProductService.addtoSelectedProductList(item);
  }

}
