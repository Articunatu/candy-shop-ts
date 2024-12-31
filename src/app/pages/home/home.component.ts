import { Component, OnInit } from '@angular/core';
import { Candy, CandyExtended } from '../../models/candy.model';
import { GenericService } from '../../services/generic.service';
import { ProductResponseModel } from '../../services/response-models';
import { mapApiResponseToCandy } from '../../services/mapping';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  candiesOnSale: Candy[] = [];
  candiesFound: boolean = true;
  selectedCandy: CandyExtended | null = null;  

  constructor(private service: GenericService<ProductResponseModel, number>) {}

  ngOnInit(): void {
    this.listAllCandies();
  }

  listAllCandies(): void {
    this.service.findValues('products').subscribe(response => {
      if (response.status === 'success') {
        this.candiesOnSale = mapApiResponseToCandy(response.data).filter(candy => candy.isOnSale);
      } else {
        this.candiesFound = false;
      }
    });
  }
}
