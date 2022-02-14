import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from 'src/app/services/selected-product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(private selectedProductService : SelectedProductService) { }

  ngOnInit(): void {
    this.selectedProductService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    });
  }

}
