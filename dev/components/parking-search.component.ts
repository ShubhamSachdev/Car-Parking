import {Component, OnInit, OnChanges} from 'angular2/core';
import {Validators, FormBuilder, ControlGroup, Control} from 'angular2/common';
// import {Router} from 'angular2/router';
@Component({
    selector: 'parking-search',
    template: `
<form (ngSubmit)="onFindParking()">
<h2>Car Parking</h2>
<div> Welcome *USER*</div>
<div>
  State: 
    <select>
        <option value="Karnataka">Karnataka</option>
        <option value="AP">AP</option>
      </select>
</div>

<div>
    City: 
      <select>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
  </div>
    <div>
        Office: 
          <select>
              <option value="TEKsystems, WhiteField">TEKsystems, WhiteField</option>
            </select>
      </div>
      <div>
          Timing: 
            <select>
                <option value="11">11:00 am - 8:00 pm</option>
              </select>
        </div>
        <div>
        <button type="submit">Check</button>
        <button >Clear</button>
        </div>
        

</form>
`
})

export class ParkingSearch{
    constructor(){
    }

    onFindParking(){
        // this.router.navigate(['/sd']);
        alert("No parking found");
    }
}

