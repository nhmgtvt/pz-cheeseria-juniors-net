import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { CheesesTabComponent } from './cheeses-tab/cheeses-tab.component';
import { CheeseDetailComponent } from './cheese-detail/cheese-detail.component';
import { PurchasedCheesesComponent } from './purchased-cheeses/purchased-cheeses.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CheesesTabComponent, CheeseDetailComponent, PurchasedCheesesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
    NoopAnimationsModule,
    MatDialogModule,
    NgxSkeletonLoaderModule.forRoot(),
    NgxPaginationModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [CheeseDetailComponent]
})
export class AppModule {}
