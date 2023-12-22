import { Component, signal } from '@angular/core';
import { ImgItem } from '../../../../../../models/images';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

  imgFriends =signal<ImgItem[]>([
    {
      route:'../../../../../../../assets/img/',
      name:'user-2.jpg',
      alt:'Friend 2'
    },
    {
      route:'../../../../../../../assets/img/',
      name:'user-4.jpg',
      alt:'Friend 4'
    },
    {
      route:'../../../../../../../assets/img/',
      name:'user-5.jpg',
      alt:'Friend 5'
    },
    {
      route:'../../../../../../../assets/img/',
      name:'user-6.jpg',
      alt:'Friend 6'
    },
  ])

}
