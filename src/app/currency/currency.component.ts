import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencyCurrent: any = null;
  constructor(private _currencyService: CurrencyService, private _activateRouter: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    let id = this._activateRouter.snapshot.params['id'];
    this._currencyService.getCurrencyById(id).subscribe(data =>{
      console.log('current data' ,data );
      this.currencyCurrent = data;
    },
    error =>{

    });
  }
  back(){
     this._router.navigate(['/']);
  }
}
