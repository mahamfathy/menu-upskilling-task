import { Component } from '@angular/core';
import { IReview } from '../shared/interfaces/IReview';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  reviews: IReview[] = [
    {
      name: 'Kathryn Murphy',
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      ratingImage: '../../../../assets/img/stars.png',
    },
    {
      name: 'Kathryn Murphy',
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      ratingImage: '../../../../assets/img/stars.png',
    },
    {
      name: 'Kathryn Murphy',
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      ratingImage: '../../../../assets/img/stars.png',
    },
    {
      name: 'Kathryn Murphy',
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      ratingImage: '../../../../assets/img/stars.png',
    },
  ];
}
