import { Component } from '@angular/core';
import { DescriptionComponent } from "./description/description.component";
import { UserReviewsComponent } from "./user-reviews/user-reviews.component";

@Component({
    selector: 'app-detail',
    standalone: true,
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss',
    imports: [DescriptionComponent, UserReviewsComponent]
})
export class DetailComponent {

}
