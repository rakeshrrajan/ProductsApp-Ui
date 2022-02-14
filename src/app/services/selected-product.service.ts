import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {

  public selectedProductList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.selectedProductList.push(...product);
    this.productList.next(product);
  }
  addtoSelectedProductList(product : any){
    this.selectedProductList.push(product);
    this.productList.next(this.selectedProductList);
    this.getTotalPrice();
    console.log(this.selectedProductList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.selectedProductList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeSelectedProduct(product: any){
    this.selectedProductList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.selectedProductList.splice(index,1);
      }
    })
    this.productList.next(this.selectedProductList);
  }
  removeAllSelectedProduct(){
    this.selectedProductList = []
    this.productList.next(this.selectedProductList);
  }
}
