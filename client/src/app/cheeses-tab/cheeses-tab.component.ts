import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/cheeses.service';
import { CartService } from '../_services/cart.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CheeseDetailComponent } from '../cheese-detail/cheese-detail.component';
@Component({
  selector: 'app-cheeses-tab',
  templateUrl: './cheeses-tab.component.html',
  styleUrls: ['./cheeses-tab.component.css'],
})
export class CheesesTabComponent implements OnInit {
  cheeses: [] = [];
  products: [] = [];
  cheeseDialog: MatDialogRef<CheeseDetailComponent>;

  contentLoadedSups: boolean = false;
  contentLoadedProds: boolean = false;
  _currency = 'CDF';
  serverMsg: string;
  errorMsg: any;
  currency: Object;
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private dialogModel: MatDialog
  ) { }

  ngOnInit() {
    //fetch products
    this.productService.getCheeses().subscribe((prods) => {
      this.products = prods;
      this.contentLoadedProds = true;
    });
  }

  //Add to cart function
  addToCart(id: number) {
    console.log('Added to cart');
    console.log(id);
    this.cartService.AddProductToCart(id);
  }

  openDialog(id: number) {
    this.cheeseDialog = this.dialogModel.open(CheeseDetailComponent, {
      data: {
        'cheese': this.products[id-1],
      },
    }
    );
  }
}
