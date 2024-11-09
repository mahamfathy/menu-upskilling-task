import { Component } from '@angular/core';
import { IMeal } from '../shared/interfaces/IMeal';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  meals!: Array<IMeal>;
}
