import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule
  ],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss'
})
export class MainFooterComponent {

}
