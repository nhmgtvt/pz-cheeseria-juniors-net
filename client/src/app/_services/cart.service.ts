import { Injectable } from '@angular/core';
import { ProductsService } from './cheeses.service';
import { CartModelPublic, PurchasedCheese } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    let purchased_cheeses = [];
    for (let key in this.cartDataClient) {
      purchased_cheeses.push({"cheeseId": Number(key), "quantity": this.cartDataClient[key]} as PurchasedCheese);
    }
    this.PostPurchasedCheeses(purchased_cheeses).subscribe(result => { 
      //empty the cart
      for (let key in this.cartDataClient) {
        delete this.cartDataClient[key];
      }
      this.cartDataObs$.next(this.cartDataClient);
      }, error => console.error(error));
  } 

  PostPurchasedCheeses(item: PurchasedCheese[]): Observable<PurchasedCheese[]> {
    var url = this.server_url + '/PurchasedCheeses';
    return this.http.post<PurchasedCheese[]>(url, item);
    }
    
  GetPurchasedCheeses(): Observable<any> {
    return this.http.get<PurchasedCheese[]>(this.server_url + '/PurchasedCheeses');
  }

}
