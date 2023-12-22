import { Routes } from '@angular/router';
import { HotelComponent } from './components/content/main/hotel/hotel.component';

export const routes: Routes = [

    {
        path:"", pathMatch:'full', redirectTo:"home"
    },

    {
        path:"home", loadComponent:() => import('./components/content/main/main.component').then(c=> c.MainComponent )
    },

    {
        path:'hotel', loadComponent:() => import('./components/content/main/hotel/hotel.component').then(c=>c.HotelComponent)
    },

    {
        path:'flights', loadComponent:() => import('./components/content/main/flights/flights.component').then(c=>c.FlightsComponent)
    },

    {
        path:'car-rental', loadComponent:() => import('./components/content/main/car-rental/car-rental.component').then(c=>c.CarRentalComponent)
    },

    {
        path:'tours', loadComponent:() => import('./components/content/main/tours/tours.component').then(c=>c.ToursComponent)
    },
];
