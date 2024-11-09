import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  foodTitle: string = 'bread';
  images: Array<any> = [
    '../../assets/img/image1.png',
    '../../assets/img/image2.png',
    '../../assets/img/image3.png',
    '../../assets/img/image4.png',
  ];
}
