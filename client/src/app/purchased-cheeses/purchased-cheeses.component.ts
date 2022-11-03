import { Component, OnInit } from '@angular/core';
import {PurchasedCheese} from '../_models/cart'
import { Cheese } from '../_models/cheese';
import { CartService } from '../_services/cart.service';
import { ProductsService } from '../_services/cheeses.service';
@Component({
  selector: 'app-purchased-cheeses',
  templateUrl: './purchased-cheeses.component.html',
  styleUrls: ['./purchased-cheeses.component.css']
})
export class PurchasedCheesesComponent implements OnInit {
  products: Cheese[] = [];
  purchasedData: PurchasedCheese[] = [];
  contentLoadedPurchased: boolean = false;
  

  constructor(private productService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
      
    });
    this.cartService.GetPurchasedCheeses().subscribe(result => {
      this.purchasedData = result;
      
      }, error => console.error(error));
      this.contentLoadedPurchased = true;
  }

  getDetails(id:number): Cheese {
    const details = this.products.filter(
      (product) => product.id === id
    );
    return details[0];
  }

}
