import {Component} from 'angular2/core';
import {ParkingSearch} from './components/parking-search.component'
import {Parking} from './components/parking.component'
//import {Car} from './components/car.component'
import {GenerateParking} from './components/generete-parking.component'
import {RouterModule} from '@angular/router'

@Component({
    selector: 'app',
    template: `
        <parking-search></parking-search>
        <router-outlet></router-outlet>
    `,
    directives: [GenerateParking,Parking, ParkingSearch],
})
// <generate-parking></generate-parking>
//         <parking class="parking"></parking>
export class ParkingApp {
    constructor() {}
}

const routes =[
    {
      path: 'ft',
      component: ParkingSearch
    },
    {
      path: 'sd',
      component: GenerateParking
    }
  ]