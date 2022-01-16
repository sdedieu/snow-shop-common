import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnowShopLibService {

  cartItemCount$ = new BehaviorSubject(0);

  constructor() { }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount$.asObservable();
  }

  increment(): void {
    this.cartItemCount$.next(this.cartItemCount$.value + 1);
  }
}
