import {bootstrap} from 'angular2/platform/browser';
import {ParkingApp} from "./app.component";
import {ParkingService} from './services/parking.service';
//noinspection TypeScriptValidateTypes
bootstrap(ParkingApp, [ParkingService]);
