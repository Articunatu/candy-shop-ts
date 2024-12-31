import { Component, OnInit } from '@angular/core';
import { CandyExtended } from '../../models/candy.model';
import { GenericService } from '../../services/generic.service';
import { ProductExtendedResponseModel } from '../../services/response-models';
import { mapApiResponseToCandyExtended } from '../../services/mapping';  // Ensure this is imported

@Component({
  selector: 'app-candy-details',
  templateUrl: './candy-details.component.html',
})
export class CandyDetailsComponent implements OnInit {
  selectedCandy: CandyExtended | null = null; 

  constructor(private service: GenericService<ProductExtendedResponseModel, number>) {}

  ngOnInit(): void {
    this.loadCandyDetails();
  }

  loadCandyDetails(): void {
    this.service.findValues('products', this.selectedCandy?.id).subscribe(response => {
      if (response.status === 'success' && response.data.length > 0) {
        this.selectedCandy = mapApiResponseToCandyExtended(response.data[0]);
      }
    });
  }

  // addToCart(selectedCandy?: CandyExtended): void {
  //   console.log(`Candy with ID ${selectedCandy?.id} added to the cart.`);
  // }
}
