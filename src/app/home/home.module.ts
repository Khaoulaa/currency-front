import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CurrencyService } from '../services/currency.service';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers :[CurrencyService]
})
export class HomeModule { }
