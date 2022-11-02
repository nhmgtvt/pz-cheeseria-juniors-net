import { Injectable } from '@angular/core';
import { ProductsService } from './cheeses.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Data variable to store the cart information on the client's local storage
  private cartDataClient: CartModelPublic = {};
  private server_url = environment.serverURL;

  /*OBSERVABLES FOR THE COMPONENT TO SUBSCRIBE */
  cartTotals$ = new BehaviorSubject<number>(0);
  cartDataObs$ = new BehaviorSubject<CartModelPublic>(this.cartDataClient);
  productData$ = new BehaviorSubject<Cheese[]>([]);

  constructor(private productsService: ProductsService, 
              private http: HttpClient
    ) {
    //fetch cheeses
    this.productsService.getCheeses().subscribe((prods) => {
      this.productData$.next(prods);
    });
  }

  AddProductToCart(id: Number) {
    // if not in cart
    const stringID = id.toString();
    if (this.cartDataClient[stringID] === undefined) {
      // add to cart
      this.cartDataClient[stringID] = 1;
    } else {
      this.cartDataClient[stringID]++;
    }
    this.cartDataObs$.next(this.cartDataClient);
    // console.log(this.cartDataClient);
  }

  // For incrementing and decrementing items in the cart
  // if count is positive, increment, otherwise decrement
  ModifyProductCount(id: string, count: number) {
    if (count > 0) {
      this.cartDataClient[id]++;
      this.cartDataObs$.next(this.cartDataClient);
      return;
    }

    // subtract one
    if (this.cartDataClient[id] > 1) {
      this.cartDataClient[id]--;
      this.cartDataObs$.next(this.cartDataClient);
      return;
    }

    delete this.cartDataClient[id];
    this.cartDataObs$.next(this.cartDataClient);
  }

  Purchase(){
    console.log("Cheese purchase");
    //call backend service and clear cart if success
    try {
    let purchased_cheeses = [];
    for (let key in this.cartDataClient) {
      purchased_cheeses.push({"cheeseId": Number(key), "quantity": this.cartDataClient[key]});
      delete this.cartDataClient[key];
      this.cartDataObs$.next(this.cartDataClient);
    }
    //call backend
      const request = this.http.post(this.server_url + '/PurchasedCheeses', purchased_cheeses);
      request.subscribe();
      //delete this.cartDataClient;
      console.log(this.cartDataClient);
      
    //  
    } catch (error) {
      console.log(error);
    }
  } 

}
