import { Component, signal } from '@angular/core';
import { ImgItem } from '../../../../../models/images';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  imgItems=signal<ImgItem[]>([
    {
      route:'../../../../assets/img/',
      name:'hotel-1.jpg',
      alt: 'Photo of Hotel 1'
    },
    {
      route:'../../../../assets/img/',
      name:'hotel-2.jpg',
      alt: 'Photo of Hotel 2'
    },
    {
      route:'../../../../assets/img/',
      name:'hotel-3.jpg',
      alt: 'Photo of Hotel 3'
    },
  ])

}
