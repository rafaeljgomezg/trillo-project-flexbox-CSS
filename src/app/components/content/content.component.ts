import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MainComponent } from "./main/main.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    imports: [
        MatSidenavModule,
        SidenavComponent,
        MainComponent,
        RouterOutlet
    ]
})
export class ContentComponent {

}
