import { Component, signal } from '@angular/core';
import { Review } from '../../../../../../models/users';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss'
})
export class UserReviewsComponent {


  reviewItems=signal<Review[]>([
    {
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremquearchitecto dicta animi, totam, itaque officia ex.',
      route:'../../../../../../../assets/img/',
      photoName:'user-1.jpg',
      name:'Nick Smith',
      date:'Feb 23rd, 2017',
      rating: 7.8
    },
    {
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.',
      route:'../../../../../../../assets/img/',
      photoName:'user-2.jpg',
      name:'Mary Thomas',
      date:'Sept  13th, 2017',
      rating: 9.3
    },

  ])
}
