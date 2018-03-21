System.register(['angular2/core', 'angular2/common', '../services/parking.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("GenerateParking", GenerateParking);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VuZXJldGUtcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5Q0E7Z0JBWUkseUJBQW9CLEdBQWdCLEVBQ2hCLGVBQStCO29CQUQvQixRQUFHLEdBQUgsR0FBRyxDQUFhO29CQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBRS9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQzlCLEtBQUssRUFBRSxJQUFJLGdCQUFPLENBQUMsSUFBSSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUM3QyxRQUFRLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDekIsS0FBSyxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLENBQUM7cUJBQ3pCLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQUs7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUU1QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUM7b0JBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCw2Q0FBbUIsR0FBbkIsVUFBb0IsS0FBbUI7b0JBQ25DLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFDMUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFDaEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFFMUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFFakIsRUFBRSxDQUFDLENBQUUsS0FBSyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzVELEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ2xCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUUsS0FBTSxDQUFDLENBQUMsQ0FBQzt3QkFDVixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUVELE1BQU0sQ0FBQzt3QkFDSCxtQkFBbUIsRUFBRSxJQUFJO3FCQUM1QixDQUFDO2dCQUNOLENBQUM7Z0JBdkZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLDgrQ0ErQlQ7cUJBQ0osQ0FBQzs7bUNBQUE7Z0JBc0RGLHNCQUFDO1lBQUQsQ0FwREEsQUFvREMsSUFBQTtZQXBERCw2Q0FvREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dlbmVyZXRlLXBhcmtpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuaW1wb3J0IHtQYXJraW5nU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvcGFya2luZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZW5lcmF0ZS1wYXJraW5nJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+PGI+Q3JlYXRlIFBhcmtpbmc8L2I+PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYXRlLXBhcmtpbmdcIj5cbiAgICAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJwYXJraW5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvbkNyZWF0ZVBhcmtpbmcocGFya2luZ0Zvcm0udmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIG5hbWU9XCJ0b3RhbFwiICAgIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlRvdGFsXCIgICAgICAgbmdDb250cm9sPVwidG90YWxcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0ICAgICAgICAgIG5hbWU9XCJkaXNhYmxlZFwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkRpc2FibGVkXCIgICAgbmdDb250cm9sPVwiZGlzYWJsZWRcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0ICAgICAgICAgIG5hbWU9XCJ0cnVja1wiICAgIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlRydWNrXCIgICAgICAgbmdDb250cm9sPVwidHJ1Y2tcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYXJraW5nLWVycm9yXCIgKm5nSWY9XCIhcGFya2luZ0Zvcm0udmFsaWRcIj5TdW0gKCBEaXNhYmxlZCArIFRydWNrICkgbXVzdCBiZSBsZXNzIHRoYW4gLSBUb3RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhcGFya2luZ0Zvcm0udmFsaWRcIiB0eXBlPVwic3VibWl0XCI+R2VuZXJhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U2VkYW4gcGxhY2VzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPkRpc2FibGVkIHBsYWNlczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFjayBwbGFjZXM8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+UGFya2luZyBwbGFjZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3twU2VkYW4gfHwgMH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7cERpc2FibGVkIHx8IDB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BUcnVjayB8fCAwfX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+UExhY2VzIGxlZnQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3thU2VkYW4gfHwgMH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7YURpc2FibGVkIHx8IDB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2FUcnVjayB8fCAwfX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVQYXJraW5nIHtcblxuICAgIHByaXZhdGUgcFNlZGFuOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwRGlzYWJsZWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHBUcnVjazogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBhU2VkYW46IG51bWJlcjtcbiAgICBwcml2YXRlIGFEaXNhYmxlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgYVRydWNrOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgcGFya2luZ0Zvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wYXJraW5nU2VydmljZTogUGFya2luZ1NlcnZpY2UpIHtcblxuICAgICAgICB0aGlzLnBhcmtpbmdGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgdG90YWw6IG5ldyBDb250cm9sKCcxMCcsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IG5ldyBDb250cm9sKCcnKSxcbiAgICAgICAgICAgIHRydWNrOiBuZXcgQ29udHJvbCgnJylcbiAgICAgICAgfSwge3ZhbGlkYXRvcjogdGhpcy52YWxpZGF0ZUlucHV0UGxhY2VzfSk7XG4gICAgfVxuXG4gICAgb25DcmVhdGVQYXJraW5nKHBGb3JtKSB7XG4gICAgICAgIHRoaXMuX3BhcmtpbmdTZXJ2aWNlLmdlbmVyYXRlUGFya2luZyhwRm9ybSk7XG5cbiAgICAgICAgdGhpcy5wU2VkYW4gPSBwRm9ybS50b3RhbCAtIHBGb3JtLmRpc2FibGVkO1xuICAgICAgICB0aGlzLnBEaXNhYmxlZCA9IHBGb3JtLmRpc2FibGVkO1xuICAgICAgICB0aGlzLnBUcnVjayA9IHBGb3JtLnRydWNrO1xuXG4gICAgICAgIHRoaXMuYVNlZGFuID0gdGhpcy5fcGFya2luZ1NlcnZpY2UuYXZhaWxhYmxlU2VkYW5zO1xuICAgICAgICB0aGlzLmFEaXNhYmxlZCA9IHRoaXMuX3BhcmtpbmdTZXJ2aWNlLmF2YWlsYWJsZURpc2FibGVzO1xuICAgICAgICB0aGlzLmFUcnVjayA9IHRoaXMuX3BhcmtpbmdTZXJ2aWNlLmF2YWlsYWJsZVRydWNrO1xuICAgIH1cblxuICAgIHZhbGlkYXRlSW5wdXRQbGFjZXMoZ3JvdXA6IENvbnRyb2xHcm91cCkge1xuICAgICAgICB2YXIgdG90YWwgPSBncm91cC5jb250cm9sc1sndG90YWwnXS52YWx1ZSB8fCAwLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBncm91cC5jb250cm9sc1snZGlzYWJsZWQnXS52YWx1ZSB8fCAwLFxuICAgICAgICAgICAgdHJ1Y2sgPSBncm91cC5jb250cm9sc1sndHJ1Y2snXS52YWx1ZSB8fCAwLFxuXG4gICAgICAgICAgICB2YWxpZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCB0b3RhbCA8IChkaXNhYmxlZCArIHRydWNrKSB8fCBkaXNhYmxlZCA8IDAgfHwgdHJ1Y2sgPCAwICkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHZhbGlkICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsaWRhdGVJbnB1dFBsYWNlczogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbn0iXX0=
