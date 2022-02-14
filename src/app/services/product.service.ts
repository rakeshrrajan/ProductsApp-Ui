import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl:string = environment.apiUrl;
  constructor(private httpClient : HttpClient) { }

  getProduct(){
    return this.httpClient.get<any>(this.apiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
