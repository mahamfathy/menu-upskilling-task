import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { InfoComponent } from '../info/info.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainPageComponent,
    InfoComponent,
    AboutUsComponent,
    RecipesComponent,
    ReviewsComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
