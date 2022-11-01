import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedCheesesComponent } from './purchased-cheeses.component';

describe('PurchasedCheesesComponent', () => {
  let component: PurchasedCheesesComponent;
  let fixture: ComponentFixture<PurchasedCheesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedCheesesComponent ]
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
