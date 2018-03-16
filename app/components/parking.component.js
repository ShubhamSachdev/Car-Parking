System.register(['angular2/core', '../services/parking.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, parking_service_1;
    var ParkingPlacePipe, Parking;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (parking_service_1_1) {
                parking_service_1 = parking_service_1_1;
            }],
        execute: function() {
            ParkingPlacePipe = (function () {
                function ParkingPlacePipe() {
                }
                ParkingPlacePipe.prototype.transform = function (value, args) {
                    if (args[0] === 'left') {
                        return value.filter(function (item) { return item.id % 2; });
                    }
                    if (args[0] === 'right') {
                        return value.filter(function (item) { return item.id % 2 == 0; });
                    }
                };
                ParkingPlacePipe = __decorate([
                    core_1.Pipe({
                        name: 'placePipe'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParkingPlacePipe);
                return ParkingPlacePipe;
            })();
            exports_1("ParkingPlacePipe", ParkingPlacePipe);
            Parking = (function () {
                function Parking(_parkingService, differs) {
                    var _this = this;
                    this._parkingService = _parkingService;
                    this.parkingPlaces = [];
                    _parkingService.parking.subscribe(function (newParking) { return _this.parkingPlaces = newParking; });
                    this.differ = differs.find([]).create(null);
                    this._parkingService.setData();
                }
                Parking.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.parkingPlaces), that = this;
                    if (changes !== null) {
                        setTimeout(function () {
                            var viewPlaces = document.querySelectorAll('.parking-place');
                            that._parkingService.setOffsetPlace(viewPlaces);
                        }, 100);
                    }
                };
                Parking = __decorate([
                    core_1.Component({
                        selector: 'parking',
                        pipes: [ParkingPlacePipe],
                        template: "\n        <div class=\"parking-left\">\n            <div *ngFor=\"#place of parkingPlaces | placePipe:'left'\" class=\"parking-place\" (change)=\"test1()\"><span>{{place.id}} - <span class=\"place-type\">{{place.type}}</span></span></div>\n        </div>\n        <div class=\"parking-right\">\n            <div *ngFor=\"#place of parkingPlaces | placePipe:'right'\" class=\"parking-place\"><span>{{place.id}} - <span class=\"place-type\">{{place.type}}</span></span></div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [parking_service_1.ParkingService, core_1.IterableDiffers])
                ], Parking);
                return Parking;
            })();
            exports_1("Parking", Parking);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFya2luZ1BsYWNlUGlwZSIsIlBhcmtpbmdQbGFjZVBpcGUuY29uc3RydWN0b3IiLCJQYXJraW5nUGxhY2VQaXBlLnRyYW5zZm9ybSIsIlBhcmtpbmciLCJQYXJraW5nLmNvbnN0cnVjdG9yIiwiUGFya2luZy5uZ0RvQ2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBQTtnQkFhQUMsQ0FBQ0E7Z0JBUkdELG9DQUFTQSxHQUFUQSxVQUFXQSxLQUFTQSxFQUFFQSxJQUFJQTtvQkFDdEJFLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLE1BQU9BLENBQUNBLENBQUNBLENBQUNBO3dCQUN2QkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsSUFBSUEsSUFBSUEsT0FBQUEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBWEEsQ0FBV0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlDQSxDQUFDQTtvQkFDREEsRUFBRUEsQ0FBQ0EsQ0FBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsT0FBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxJQUFJQSxJQUFJQSxPQUFBQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFoQkEsQ0FBZ0JBLENBQUNBLENBQUNBO29CQUNuREEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQVpMRjtvQkFBQ0EsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLElBQUlBLEVBQUVBLFdBQVdBO3FCQUNwQkEsQ0FBQ0E7O3FDQVdEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELCtDQWFDLENBQUE7WUFFRDtnQkFpQklHLGlCQUFxQkEsZUFBK0JBLEVBQUVBLE9BQXdCQTtvQkFqQmxGQyxpQkFzQ0NBO29CQXJCd0JBLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFnQkE7b0JBSDVDQSxrQkFBYUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBSXZCQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxVQUFVQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxVQUFVQSxFQUEvQkEsQ0FBK0JBLENBQUNBLENBQUNBO29CQUVqRkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRTVDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQUVERCwyQkFBU0EsR0FBVEE7b0JBQ0lFLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLEVBQzlDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFFaEJBLEVBQUVBLENBQUNBLENBQUVBLE9BQU9BLEtBQUtBLElBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUVyQkEsVUFBVUEsQ0FBQ0E7NEJBQ1AsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFFLFVBQVUsQ0FBRSxDQUFDO3dCQUN0RCxDQUFDLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO29CQUVaQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBckNMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxTQUFTQTt3QkFDbkJBLEtBQUtBLEVBQUVBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7d0JBQ3pCQSxRQUFRQSxFQUFFQSxpZkFPVEE7cUJBQ0pBLENBQUNBOzs0QkEyQkRBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtZQXRDRCw2QkFzQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BhcmtpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIERvQ2hlY2ssIEl0ZXJhYmxlRGlmZmVyc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xuXG5pbXBvcnQge1BhcmtpbmdTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9wYXJraW5nLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3BsYWNlUGlwZSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXJraW5nUGxhY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcbiAgICB0cmFuc2Zvcm0oIHZhbHVlOmFueSwgYXJncyApIHtcbiAgICAgICAgaWYgKCBhcmdzWzBdID09PSAnbGVmdCcgKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChpdGVtKT0+IGl0ZW0uaWQgJSAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGFyZ3NbMF0gPT09ICdyaWdodCcgKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChpdGVtKT0+IGl0ZW0uaWQgJSAyID09IDApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhcmtpbmcnLFxuICAgIHBpcGVzOiBbUGFya2luZ1BsYWNlUGlwZV0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcmtpbmctbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjcGxhY2Ugb2YgcGFya2luZ1BsYWNlcyB8IHBsYWNlUGlwZTonbGVmdCdcIiBjbGFzcz1cInBhcmtpbmctcGxhY2VcIiAoY2hhbmdlKT1cInRlc3QxKClcIj48c3Bhbj57e3BsYWNlLmlkfX0gLSA8c3BhbiBjbGFzcz1cInBsYWNlLXR5cGVcIj57e3BsYWNlLnR5cGV9fTwvc3Bhbj48L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFya2luZy1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjcGxhY2Ugb2YgcGFya2luZ1BsYWNlcyB8IHBsYWNlUGlwZToncmlnaHQnXCIgY2xhc3M9XCJwYXJraW5nLXBsYWNlXCI+PHNwYW4+e3twbGFjZS5pZH19IC0gPHNwYW4gY2xhc3M9XCJwbGFjZS10eXBlXCI+e3twbGFjZS50eXBlfX08L3NwYW4+PC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFBhcmtpbmcgaW1wbGVtZW50cyBEb0NoZWNrIHtcblxuICAgIHByaXZhdGUgcGFya2luZ1BsYWNlcyA9IFtdO1xuICAgIHByaXZhdGUgZGlmZmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfcGFya2luZ1NlcnZpY2U6IFBhcmtpbmdTZXJ2aWNlLCBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMgKSB7XG4gICAgICAgIF9wYXJraW5nU2VydmljZS5wYXJraW5nLnN1YnNjcmliZShuZXdQYXJraW5nID0+IHRoaXMucGFya2luZ1BsYWNlcyA9IG5ld1BhcmtpbmcpO1xuXG4gICAgICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgdGhpcy5fcGFya2luZ1NlcnZpY2Uuc2V0RGF0YSgpO1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMucGFya2luZ1BsYWNlcyksXG4gICAgICAgICAgICB0aGF0ID0gdGhpcztcblxuICAgICAgICBpZiAoIGNoYW5nZXMgIT09IG51bGwgKSB7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgdmlld1BsYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJraW5nLXBsYWNlJyk7XG4gICAgICAgICAgICAgICAgdGhhdC5fcGFya2luZ1NlcnZpY2Uuc2V0T2Zmc2V0UGxhY2UoIHZpZXdQbGFjZXMgKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
