import { Component } from '@angular/core';
import { CandyCardComponent } from '../../components/candy-card/candy-card.component';
import { CandyList } from '../../models/view-models/candy-list';
import { GenericService } from '../../services/generic.service';
import { mapApiResponseToCandiesByCategory, mapApiResponseToCategories } from '../../services/mapping';
import { ProductsByTagResponseModel } from '../../services/response-models';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
})
export class CandyListComponent {

  constructor(private service : GenericService<ProductsByTagResponseModel, Number>) { }

  candyList: CandyList = {
    candies: [],
    currentCategory: {
      id: 0,
      title: ""
    }
  }
  errorMessage = "";
  candiesByCategoryFound = true;

  async listCandiesByCategory(): Promise<void> {
    try {
      this.service.findValues("tags", this.candyList.currentCategory.id).subscribe(response => {
        if (response.status === "success") {
          this.candyList = mapApiResponseToCandiesByCategory(response.data[0]);
        } 
        else {
          this.candiesByCategoryFound = false;
          this.errorMessage = response.message;
        }
      });
    } catch (error) {
      this.candiesByCategoryFound = false;
    }
    
  }
}
