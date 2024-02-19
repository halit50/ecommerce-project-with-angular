import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = [];

  private urlApi: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // getProducts(): Promise<Product[]>{
  //   return new Promise((resolve, reject) => {
  //     if (this.products.length){
  //       resolve(this.products)
  //     }else {
  //       reject([])
  //     }
  //   })
  // }

  getNumber(): Observable<Number>{
    return of(45);
  }

  getSecond(): Observable<Number> {
    return interval(1000);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi);
  }

  addProduct(product: Product){

  }

}
