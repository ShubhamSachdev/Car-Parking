import {Component} from 'angular2/core';
import {Parking} from './components/parking.component'
//import {Car} from './components/car.component'
import {GenerateParking} from './components/generete-parking.component'

@Component({
    selector: 'app',
    template: `
        <generate-car></generate-car>
        <generate-parking></generate-parking>
        <parking class="parking"></parking>
    `,
    directives: [GenerateParking, Parking],
})
export class ParkingApp {
    constructor() {}
}