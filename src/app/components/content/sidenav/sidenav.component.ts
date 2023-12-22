import { Component, inject, signal } from '@angular/core';
import { MenuItem } from '../../../models/menuitem';

import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule

  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  router=inject(Router)

  menuItems = signal<MenuItem[]>([
    {
      icon:'icon-home',
      label:'Hotel',
      route:'hotel'
    },
    {
      icon:'icon-aircraft-take-off',
      label:'Flights',
      route:'flights'
    },
    {
      icon:'icon-key',
      label:'Car Rental',
      route:'car-rental'
    },
    {
      icon:'icon-map',
      label:'Tours',
      route:'tours'
    },
  ]);

  selectedItem: any;

  selectItem(item: any): void {
    this.selectedItem = item;
}




}
