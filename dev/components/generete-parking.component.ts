import {Component, OnInit, OnChanges} from 'angular2/core';
import {Validators, FormBuilder, ControlGroup, Control} from 'angular2/common';

import {ParkingService} from '../services/parking.service';

@Component({
    selector: 'generate-parking',
    template: `
        <h2><b>Create Parking</b></h2>
        <div class="generate-parking">
            <form [ngFormModel]="parkingForm" (ngSubmit)="onCreateParking(parkingForm.value)">
                <input required name="total"    type="number" placeholder="Total"       ngControl="total"/>
                <input          name="disabled" type="number" placeholder="Disabled"    ngControl="disabled"/>
                <input          name="truck"    type="number" placeholder="Truck"       ngControl="truck"/>
                <span class="parking-error" *ngIf="!parkingForm.valid">Sum ( Disabled + Truck ) must be less than - Total</span>
                <button [disabled]="!parkingForm.valid" type="submit">Generate</button>
            </form>
            <table>
                <tr>
                    <td></td>
                    <td>Sedan places</td>
                    <td>Disabled places</td>
                    <td>Track places</td>
                </tr>
                <tr>
                    <td>Parking places</td>
                    <td>{{pSedan || 0}}</td>
                    <td>{{pDisabled || 0}}</td>
                    <td>{{pTruck || 0}}</td>
                </tr>
                <tr>
                    <td>PLaces left</td>
                    <td>{{aSedan || 0}}</td>
                    <td>{{aDisabled || 0}}</td>
                    <td>{{aTruck || 0}}</td>
                </tr>
            </table>
        </div>
    `
})

export class GenerateParking {

    private pSedan: number;
    private pDisabled: number;
    private pTruck: number;

    private aSedan: number;
    private aDisabled: number;
    private aTruck: number;

    public parkingForm: ControlGroup;

    constructor(private _fb: FormBuilder,
                private _parkingService: ParkingService) {

        this.parkingForm = this._fb.group({
            total: new Control('10', Validators.required),
            disabled: new Control(''),
            truck: new Control('')
        }, {validator: this.validateInputPlaces});
    }

    onCreateParking(pForm) {
        this._parkingService.generateParking(pForm);

        this.pSedan = pForm.total - pForm.disabled;
        this.pDisabled = pForm.disabled;
        this.pTruck = pForm.truck;

        this.aSedan = this._parkingService.availableSedans;
        this.aDisabled = this._parkingService.availableDisables;
        this.aTruck = this._parkingService.availableTruck;
    }

    validateInputPlaces(group: ControlGroup) {
        var total = group.controls['total'].value || 0,
            disabled = group.controls['disabled'].value || 0,
            truck = group.controls['truck'].value || 0,

            valid = true;

        if ( total < (disabled + truck) || disabled < 0 || truck < 0 ) {
            valid = false;
        }
        if ( valid ) {
            return null;
        }

        return {
            validateInputPlaces: true
        };
    }
}