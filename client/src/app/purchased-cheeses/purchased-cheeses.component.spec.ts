import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from '../_services/cheeses.service';
import { PurchasedCheesesComponent } from './purchased-cheeses.component';
import { HttpClientModule } from '@angular/common/http';
describe('PurchasedCheesesComponent', () => {
  let component: PurchasedCheesesComponent;
  let fixture: ComponentFixture<PurchasedCheesesComponent>;
  let service : ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedCheesesComponent ],
      imports: [HttpClientModule],
      providers: [ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedCheesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
