import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './currency.component';
import { CurrencyService } from '../services/currency.service';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ],
  providers: [CurrencyService]
})
export class CurrencyModule { }
