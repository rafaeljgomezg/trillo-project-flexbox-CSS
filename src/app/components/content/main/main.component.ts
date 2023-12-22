import { Component, signal } from '@angular/core';
import { MainHeaderComponent } from "./common/main-header/main-header.component";
import { DetailComponent } from "./common/detail/detail.component";
import { MainFooterComponent } from "./common/main-footer/main-footer.component";


@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [MainHeaderComponent, DetailComponent, MainFooterComponent]
})
export class MainComponent {

  

}
