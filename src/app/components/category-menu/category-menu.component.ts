import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { TagResponseModel } from '../../services/response-models';
import { mapApiResponseToCategories } from '../../services/mapping';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
})
export class CategoryMenuComponent implements OnInit{
  categories: Category[] = [];

  constructor(private service: GenericService<TagResponseModel, number>, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories(); 
  }

  loadCategories(): void {
    this.service.findValues('categories').subscribe(response => {
      if (response.status === 'success' && response.data.length > 0) {
        this.categories = mapApiResponseToCategories(response.data);
      }
    });
  }

  onCategoryClick(category: Category): void {
    this.router.navigate(['/list'], { queryParams: { categoryId: category.id } });
  }

  viewAllCandies(): void {
    this.router.navigate(['/list'], { queryParams: { categoryId: 0 } });
  }
}
