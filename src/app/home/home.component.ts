import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currencies : any[];
  totalRecords: any;
  maxSize = 6;
  currentPage = 0;
  isLoaded: boolean = false;
  items = ['id' ,'code' , 'name' , 'type' ];
  fieldSearch: string = "";
  fieldName: string = null;
  isEmpty : boolean = false;
  constructor(private _currencyService : CurrencyService , private _router: Router) { }

  ngOnInit() {
    this.initDataCurrencies();
  }
  initDataCurrencies(){
      this._currencyService.getAllCurrencies(this.maxSize , this.fieldName , this.fieldSearch).subscribe(data =>{     
      this.totalRecords = Object.keys(data).length* this.maxSize;
      this.currencies = data[this.currentPage +""];
      this.isEmpty = Object.keys(data).length ===  0 ? true : false; 
      this.isLoaded = true; 
    });
  }
  paginate(event : any){
    this.currentPage = event.page ; 
    this.maxSize = event.rows;
    this.initDataCurrencies();
  }
  filterbyField(index: number){
    this.fieldName = this.items[index];
    this.initDataCurrencies();
  }
  goToDetailsCurrency(currency: any){
    this._router.navigate(["currency", currency.id]);
  }
}
