import { Component, OnInit } from '@angular/core';
import { IMeal } from '../shared/interfaces/IMeal';
import { MealsService } from '../shared/services/meals.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  meals!: Array<IMeal>;

  constructor(private mealsService: MealsService) {}
  ngOnInit(): void {
    this.mealsService
      .getMeals()
      .subscribe((meal: Array<IMeal>) => (this.meals = meal));
    console.log('Meals data:', this.meals);
  }
}
