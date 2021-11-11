import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemsCount$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.fetchCartItemsCount()
   }

   fetchCartItemsCount(){
   /* this.http.get<{count: number}>('http://localhost:3000/cart/count').subscribe(
      response => this.cartItemsCount$.next(response.count)
    ); */
   }
}
