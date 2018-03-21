System.register(['angular2/core', '../services/parking.service'], function(exports_1, context_1) {
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
            }());
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
            }());
            exports_1("Parking", Parking);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtnQkFTQSxDQUFDO2dCQVJHLG9DQUFTLEdBQVQsVUFBVyxLQUFTLEVBQUUsSUFBSTtvQkFDdEIsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7b0JBQzlDLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7b0JBQ25ELENBQUM7Z0JBQ0wsQ0FBQztnQkFaTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0YsSUFBSSxFQUFFLFdBQVc7cUJBQ3BCLENBQUM7O29DQUFBO2dCQVdGLHVCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwrQ0FTQyxDQUFBO1lBY0Q7Z0JBS0ksaUJBQXFCLGVBQStCLEVBQUUsT0FBd0I7b0JBTGxGLGlCQTBCQztvQkFyQndCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFINUMsa0JBQWEsR0FBRyxFQUFFLENBQUM7b0JBSXZCLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLEVBQS9CLENBQStCLENBQUMsQ0FBQztvQkFFakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCwyQkFBUyxHQUFUO29CQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDOUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFaEIsRUFBRSxDQUFDLENBQUUsT0FBTyxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7d0JBRXJCLFVBQVUsQ0FBQzs0QkFDUCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs0QkFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUUsVUFBVSxDQUFFLENBQUM7d0JBQ3RELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFWixDQUFDO2dCQUNMLENBQUM7Z0JBckNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUN6QixRQUFRLEVBQUUsaWZBT1Q7cUJBQ0osQ0FBQzs7MkJBQUE7Z0JBMkJGLGNBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELDZCQTBCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFya2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgRG9DaGVjaywgSXRlcmFibGVEaWZmZXJzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXG5cbmltcG9ydCB7UGFya2luZ1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3Bhcmtpbmcuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAncGxhY2VQaXBlJ1xufSlcblxuZXhwb3J0IGNsYXNzIFBhcmtpbmdQbGFjZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSggdmFsdWU6YW55LCBhcmdzICkge1xuICAgICAgICBpZiAoIGFyZ3NbMF0gPT09ICdsZWZ0JyApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5pZCAlIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggYXJnc1swXSA9PT0gJ3JpZ2h0JyApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5pZCAlIDIgPT0gMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGFya2luZycsXG4gICAgcGlwZXM6IFtQYXJraW5nUGxhY2VQaXBlXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFya2luZy1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNwbGFjZSBvZiBwYXJraW5nUGxhY2VzIHwgcGxhY2VQaXBlOidsZWZ0J1wiIGNsYXNzPVwicGFya2luZy1wbGFjZVwiIChjaGFuZ2UpPVwidGVzdDEoKVwiPjxzcGFuPnt7cGxhY2UuaWR9fSAtIDxzcGFuIGNsYXNzPVwicGxhY2UtdHlwZVwiPnt7cGxhY2UudHlwZX19PC9zcGFuPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXJraW5nLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNwbGFjZSBvZiBwYXJraW5nUGxhY2VzIHwgcGxhY2VQaXBlOidyaWdodCdcIiBjbGFzcz1cInBhcmtpbmctcGxhY2VcIj48c3Bhbj57e3BsYWNlLmlkfX0gLSA8c3BhbiBjbGFzcz1cInBsYWNlLXR5cGVcIj57e3BsYWNlLnR5cGV9fTwvc3Bhbj48L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUGFya2luZyBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gICAgcHJpdmF0ZSBwYXJraW5nUGxhY2VzID0gW107XG4gICAgcHJpdmF0ZSBkaWZmZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9wYXJraW5nU2VydmljZTogUGFya2luZ1NlcnZpY2UsIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyApIHtcbiAgICAgICAgX3BhcmtpbmdTZXJ2aWNlLnBhcmtpbmcuc3Vic2NyaWJlKG5ld1BhcmtpbmcgPT4gdGhpcy5wYXJraW5nUGxhY2VzID0gbmV3UGFya2luZyk7XG5cbiAgICAgICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcblxuICAgICAgICB0aGlzLl9wYXJraW5nU2VydmljZS5zZXREYXRhKCk7XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCkge1xuICAgICAgICB2YXIgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5wYXJraW5nUGxhY2VzKSxcbiAgICAgICAgICAgIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGlmICggY2hhbmdlcyAhPT0gbnVsbCApIHtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB2aWV3UGxhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcmtpbmctcGxhY2UnKTtcbiAgICAgICAgICAgICAgICB0aGF0Ll9wYXJraW5nU2VydmljZS5zZXRPZmZzZXRQbGFjZSggdmlld1BsYWNlcyApO1xuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICB9XG4gICAgfVxufSJdfQ==
