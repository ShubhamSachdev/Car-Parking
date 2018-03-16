System.register(['angular2/core', 'angular2/common', '../services/parking.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, parking_service_1;
    var GenerateParking;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (parking_service_1_1) {
                parking_service_1 = parking_service_1_1;
            }],
        execute: function() {
            GenerateParking = (function () {
                function GenerateParking(_fb, _parkingService) {
                    this._fb = _fb;
                    this._parkingService = _parkingService;
                    this.parkingForm = this._fb.group({
                        total: new common_1.Control('10', common_1.Validators.required),
                        disabled: new common_1.Control(''),
                        truck: new common_1.Control('')
                    }, { validator: this.validateInputPlaces });
                }
                GenerateParking.prototype.onCreateParking = function (pForm) {
                    this._parkingService.generateParking(pForm);
                    this.pSedan = pForm.total - pForm.disabled;
                    this.pDisabled = pForm.disabled;
                    this.pTruck = pForm.truck;
                    this.aSedan = this._parkingService.availableSedans;
                    this.aDisabled = this._parkingService.availableDisables;
                    this.aTruck = this._parkingService.availableTruck;
                };
                GenerateParking.prototype.validateInputPlaces = function (group) {
                    var total = group.controls['total'].value || 0, disabled = group.controls['disabled'].value || 0, truck = group.controls['truck'].value || 0, valid = true;
                    if (total < (disabled + truck) || disabled < 0 || truck < 0) {
                        valid = false;
                    }
                    if (valid) {
                        return null;
                    }
                    return {
                        validateInputPlaces: true
                    };
                };
                GenerateParking = __decorate([
                    core_1.Component({
                        selector: 'generate-parking',
                        template: "\n        <h2><b>Create Parking</b></h2>\n        <div class=\"generate-parking\">\n            <form [ngFormModel]=\"parkingForm\" (ngSubmit)=\"onCreateParking(parkingForm.value)\">\n                <input required name=\"total\"    type=\"number\" placeholder=\"Total\"       ngControl=\"total\"/>\n                <input          name=\"disabled\" type=\"number\" placeholder=\"Disabled\"    ngControl=\"disabled\"/>\n                <input          name=\"truck\"    type=\"number\" placeholder=\"Truck\"       ngControl=\"truck\"/>\n                <span class=\"parking-error\" *ngIf=\"!parkingForm.valid\">Sum ( Disabled + Truck ) must be less than - Total</span>\n                <button [disabled]=\"!parkingForm.valid\" type=\"submit\">Generate</button>\n            </form>\n            <table>\n                <tr>\n                    <td></td>\n                    <td>Sedan places</td>\n                    <td>Disabled places</td>\n                    <td>Track places</td>\n                </tr>\n                <tr>\n                    <td>Parking places</td>\n                    <td>{{pSedan || 0}}</td>\n                    <td>{{pDisabled || 0}}</td>\n                    <td>{{pTruck || 0}}</td>\n                </tr>\n                <tr>\n                    <td>PLaces left</td>\n                    <td>{{aSedan || 0}}</td>\n                    <td>{{aDisabled || 0}}</td>\n                    <td>{{aTruck || 0}}</td>\n                </tr>\n            </table>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, parking_service_1.ParkingService])
                ], GenerateParking);
                return GenerateParking;
            })();
            exports_1("GenerateParking", GenerateParking);
        }
    }
});
