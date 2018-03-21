System.register(['angular2/core', 'rxjs/Observable', '../services/parkin-place.model'], function(exports_1, context_1) {
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
    var core_1, Observable_1, parkin_place_model_1;
    var ParkingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (parkin_place_model_1_1) {
                parkin_place_model_1 = parkin_place_model_1_1;
            }],
        execute: function() {
            ParkingService = (function () {
                function ParkingService() {
                    var _this = this;
                    this.placesAvailable = true;
                    this.fullPlaces = null;
                    this._parking = [];
                    this.parking = new Observable_1.Observable(function (observer) { return _this._parkingObservable = observer; });
                }
                ParkingService.prototype.setData = function () {
                    this._parking = [
                        new parkin_place_model_1.ParkingPlace(1, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(2, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(3, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(4, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(5, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(6, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(7, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(8, 'disabled'),
                        new parkin_place_model_1.ParkingPlace(9, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(10, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(11, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(12, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(13, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(14, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(15, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(16, 'sedan'),
                        new parkin_place_model_1.ParkingPlace(17, 'truck'),
                        new parkin_place_model_1.ParkingPlace(18, 'truck'),
                        new parkin_place_model_1.ParkingPlace(19, 'truck'),
                        new parkin_place_model_1.ParkingPlace(20, 'truck'),
                    ];
                    this.getParkingCount(this._parking);
                    this._parkingObservable.next(this._parking);
                };
                ParkingService.prototype.generateParking = function (pForm) {
                    this._parking = [];
                    this.fullPlaces = null;
                    for (var i = 1, max = pForm.total; i <= max; i++) {
                        this._parking.push(new parkin_place_model_1.ParkingPlace(i, 'sedan'));
                    }
                    if (!!pForm.disabled) {
                        var disabledArr = this._parking.slice(0, pForm.disabled);
                        disabledArr.forEach(function (place) {
                            place['type'] = 'disabled';
                        });
                    }
                    if (!!pForm.truck) {
                        var truckArr = this._parking.slice(pForm.total - pForm.truck);
                        truckArr.forEach(function (place) {
                            place['type'] = 'truck';
                        });
                    }
                    this.getParkingCount(this._parking);
                    //console.log( this.placesAvailable, this.fullPlaces );
                    this._parkingObservable.next(this._parking);
                };
                // parkingCar( car ) {
                //     var parking = this._parking;
                //     for ( var place in parking ) {
                //         if ( parking[place].car === null ) {
                //             if ( parking[place].type === 'disabled' && car.type === 'Disabled') {
                //                 parking[place].car = car;
                //                 this.availableDisables -= 1;
                //                 break;
                //             }
                //             if ( parking[place].type === 'sedan' &&
                //                     (car.type === 'Disabled' || car.type === 'Sedan')) {
                //                 parking[place].car = car;
                //                 this.availableDisables -= 1;
                //                 this.availableSedans -= 1;
                //                 break;
                //             }
                //             if ( parking[place].type === 'truck' &&
                //                     (car.type === 'Truck' || car.type === 'Disabled' || car.type === 'Sedan')) {
                //                 parking[place].car = car;
                //                 this.availableDisables -= 1;
                //                 this.availableSedans -= 1;
                //                 this.availableTruck -= 1;
                //                 break;
                //             }
                //         }
                //     }
                //     if (!this.availableDisables && !this.availableSedans && !this.availableTruck) {
                //         this.fullPlaces = '';
                //     } else if ( !this.availableDisables && car.type === 'Disabled' ) {
                //         this.fullPlaces = car.type;
                //     } else if ( !this.availableSedans && car.type === 'Sedan' ) {
                //         this.fullPlaces = car.type;
                //     } else if ( !this.availableTruck && car.type === 'Truck' ) {
                //         this.fullPlaces = car.type;
                //     }
                //     console.dir( this._parking, '- Parking Collection' );
                //     console.log( 'Places left: ', 'Disabled -', this.availableDisables, 'Sedan -',this.availableSedans, 'Truck -', this.availableTruck);
                //     this._parkingObservable.next(this._parking);
                // }
                ParkingService.prototype.getParkingCount = function (attrs) {
                    this.totalCount = 0;
                    this.disabledCount = 0;
                    this.truckCount = 0;
                    for (var k in attrs) {
                        if (attrs[k].hasOwnProperty('type') && attrs[k].type === 'disabled') {
                            this.disabledCount += 1;
                        }
                        if (attrs[k].hasOwnProperty('type') && attrs[k].type === 'truck') {
                            this.truckCount += 1;
                        }
                    }
                    this.totalCount = attrs.length;
                    this.availableDisables = this.totalCount;
                    this.availableSedans = this.totalCount - this.disabledCount;
                    this.availableTruck = this.truckCount;
                };
                ParkingService.prototype.setOffsetPlace = function (viewPlaces) {
                    var places = this._parking, offTop;
                    for (var i = 0, max = viewPlaces.length; i < max; i++) {
                        // For Chrome offsetTop
                        offTop = (viewPlaces[0].offsetTop === 285) ? viewPlaces[i].offsetTop - 28 : viewPlaces[i].offsetTop;
                        for (var k in places) {
                            if (viewPlaces[i].children[0] !== 'undefined' && parseInt(viewPlaces[i].children[0].textContent) === places[k].id) {
                                places[k].offset['left'] = viewPlaces[i].offsetLeft + (viewPlaces[i].offsetWidth / 2);
                                places[k].offset['top'] = offTop + (viewPlaces[i].offsetHeight / 2);
                                if (places[i].id % 2) {
                                    places[i].offset.position = 'left';
                                }
                                else {
                                    places[i].offset.position = 'right';
                                }
                                break;
                            }
                        }
                    }
                };
                ParkingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ParkingService);
                return ParkingService;
            }());
            exports_1("ParkingService", ParkingService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Bhcmtpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFtQkk7b0JBbkJKLGlCQXFMQztvQkF6S1Usb0JBQWUsR0FBWSxJQUFJLENBQUM7b0JBQ2hDLGVBQVUsR0FBVyxJQUFJLENBQUM7b0JBSXpCLGFBQVEsR0FBZSxFQUFFLENBQUM7b0JBRzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO2dCQUNsRixDQUFDO2dCQUVELGdDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRzt3QkFDWixJQUFJLGlDQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQzt3QkFDL0IsSUFBSSxpQ0FBWSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7d0JBQy9CLElBQUksaUNBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO3dCQUMvQixJQUFJLGlDQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQzt3QkFDL0IsSUFBSSxpQ0FBWSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7d0JBQy9CLElBQUksaUNBQVksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO3dCQUMvQixJQUFJLGlDQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQzt3QkFDL0IsSUFBSSxpQ0FBWSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7d0JBQy9CLElBQUksaUNBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO3dCQUM1QixJQUFJLGlDQUFZLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQzt3QkFDN0IsSUFBSSxpQ0FBWSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7d0JBQzdCLElBQUksaUNBQVksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO3dCQUM3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RyxNQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUVwRSxFQUFFLENBQUMsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQTtnQ0FDdEMsQ0FBQztnQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDSixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7Z0NBQ3ZDLENBQUM7Z0NBQ0QsS0FBSyxDQUFDOzRCQUNWLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBNUtMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXNMYixxQkFBQztZQUFELENBckxBLEFBcUxDLElBQUE7WUFyTEQsMkNBcUxDLENBQUEiLCJmaWxlIjoic2VydmljZXMvcGFya2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xuXG5pbXBvcnQge1BhcmtpbmdQbGFjZX0gZnJvbSAnLi4vc2VydmljZXMvcGFya2luLXBsYWNlLm1vZGVsJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElQYXJraW5nIHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiBudW1iZXIsXG4gICAgICAgIGxlZnQ6IG51bWJlcixcbiAgICAgICAgcG9zaXRpb246IHN0cmluZ1xuICAgIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhcmtpbmdTZXJ2aWNlIHtcblxuICAgIC8vIFBhcmtpbmcgcGxhY2UgY291bnRcbiAgICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBkaXNhYmxlZENvdW50OiBudW1iZXI7XG4gICAgcHVibGljIHRydWNrQ291bnQ6IG51bWJlcjtcblxuICAgIC8vIEF2YWlsYWJsZSBwYXJraW5nIHBsYWNlc1xuICAgIHB1YmxpYyBhdmFpbGFibGVEaXNhYmxlczogbnVtYmVyO1xuICAgIHB1YmxpYyBhdmFpbGFibGVTZWRhbnM6IG51bWJlcjtcbiAgICBwdWJsaWMgYXZhaWxhYmxlVHJ1Y2s6IG51bWJlcjtcblxuICAgIHB1YmxpYyBwbGFjZXNBdmFpbGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBmdWxsUGxhY2VzOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHVibGljIHBhcmtpbmc6IE9ic2VydmFibGU8SVBhcmtpbmdbXT47XG4gICAgcHJpdmF0ZSBfcGFya2luZ09ic2VydmFibGU6IGFueTtcbiAgICBwcml2YXRlIF9wYXJraW5nOiBJUGFya2luZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXJraW5nID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4gdGhpcy5fcGFya2luZ09ic2VydmFibGUgPSBvYnNlcnZlcik7XG4gICAgfVxuXG4gICAgc2V0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5fcGFya2luZyA9IFtcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoMSwgJ2Rpc2FibGVkJyksXG4gICAgICAgICAgICBuZXcgUGFya2luZ1BsYWNlKDIsICdkaXNhYmxlZCcpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSgzLCAnZGlzYWJsZWQnKSxcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoNCwgJ2Rpc2FibGVkJyksXG4gICAgICAgICAgICBuZXcgUGFya2luZ1BsYWNlKDUsICdkaXNhYmxlZCcpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSg2LCAnZGlzYWJsZWQnKSxcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoNywgJ2Rpc2FibGVkJyksXG4gICAgICAgICAgICBuZXcgUGFya2luZ1BsYWNlKDgsICdkaXNhYmxlZCcpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSg5LCAnc2VkYW4nKSxcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoMTAsICdzZWRhbicpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSgxMSwgJ3NlZGFuJyksXG4gICAgICAgICAgICBuZXcgUGFya2luZ1BsYWNlKDEyLCAnc2VkYW4nKSxcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoMTMsICdzZWRhbicpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSgxNCwgJ3NlZGFuJyksXG4gICAgICAgICAgICBuZXcgUGFya2luZ1BsYWNlKDE1LCAnc2VkYW4nKSxcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoMTYsICdzZWRhbicpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSgxNywgJ3RydWNrJyksXG4gICAgICAgICAgICBuZXcgUGFya2luZ1BsYWNlKDE4LCAndHJ1Y2snKSxcbiAgICAgICAgICAgIG5ldyBQYXJraW5nUGxhY2UoMTksICd0cnVjaycpLFxuICAgICAgICAgICAgbmV3IFBhcmtpbmdQbGFjZSgyMCwgJ3RydWNrJyksXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5nZXRQYXJraW5nQ291bnQodGhpcy5fcGFya2luZyk7XG5cbiAgICAgICAgdGhpcy5fcGFya2luZ09ic2VydmFibGUubmV4dCh0aGlzLl9wYXJraW5nKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVBhcmtpbmcocEZvcm0pIHtcbiAgICAgICAgdGhpcy5fcGFya2luZyA9IFtdO1xuICAgICAgICB0aGlzLmZ1bGxQbGFjZXMgPSBudWxsO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBtYXggPSBwRm9ybS50b3RhbDsgaSA8PSBtYXg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcGFya2luZy5wdXNoKCBuZXcgUGFya2luZ1BsYWNlKGksICdzZWRhbicpICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhIXBGb3JtLmRpc2FibGVkICkge1xuICAgICAgICAgICAgbGV0IGRpc2FibGVkQXJyID0gdGhpcy5fcGFya2luZy5zbGljZSgwLCBwRm9ybS5kaXNhYmxlZCk7XG4gICAgICAgICAgICBkaXNhYmxlZEFyci5mb3JFYWNoKGZ1bmN0aW9uKHBsYWNlKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VbJ3R5cGUnXSA9ICdkaXNhYmxlZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCAhIXBGb3JtLnRydWNrICkge1xuICAgICAgICAgICAgdmFyIHRydWNrQXJyID0gdGhpcy5fcGFya2luZy5zbGljZShwRm9ybS50b3RhbCAtIHBGb3JtLnRydWNrKTtcbiAgICAgICAgICAgIHRydWNrQXJyLmZvckVhY2goZnVuY3Rpb24ocGxhY2UpIHtcbiAgICAgICAgICAgICAgICBwbGFjZVsndHlwZSddID0gJ3RydWNrJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UGFya2luZ0NvdW50KCB0aGlzLl9wYXJraW5nICk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyggdGhpcy5wbGFjZXNBdmFpbGFibGUsIHRoaXMuZnVsbFBsYWNlcyApO1xuICAgICAgICB0aGlzLl9wYXJraW5nT2JzZXJ2YWJsZS5uZXh0KHRoaXMuX3BhcmtpbmcpO1xuICAgIH1cblxuICAgIC8vIHBhcmtpbmdDYXIoIGNhciApIHtcbiAgICAvLyAgICAgdmFyIHBhcmtpbmcgPSB0aGlzLl9wYXJraW5nO1xuXG4gICAgLy8gICAgIGZvciAoIHZhciBwbGFjZSBpbiBwYXJraW5nICkge1xuICAgIC8vICAgICAgICAgaWYgKCBwYXJraW5nW3BsYWNlXS5jYXIgPT09IG51bGwgKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCBwYXJraW5nW3BsYWNlXS50eXBlID09PSAnZGlzYWJsZWQnICYmIGNhci50eXBlID09PSAnRGlzYWJsZWQnKSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgcGFya2luZ1twbGFjZV0uY2FyID0gY2FyO1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZURpc2FibGVzIC09IDE7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGlmICggcGFya2luZ1twbGFjZV0udHlwZSA9PT0gJ3NlZGFuJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgKGNhci50eXBlID09PSAnRGlzYWJsZWQnIHx8IGNhci50eXBlID09PSAnU2VkYW4nKSkge1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhcmtpbmdbcGxhY2VdLmNhciA9IGNhcjtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVEaXNhYmxlcyAtPSAxO1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZVNlZGFucyAtPSAxO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBpZiAoIHBhcmtpbmdbcGxhY2VdLnR5cGUgPT09ICd0cnVjaycgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIChjYXIudHlwZSA9PT0gJ1RydWNrJyB8fCBjYXIudHlwZSA9PT0gJ0Rpc2FibGVkJyB8fCBjYXIudHlwZSA9PT0gJ1NlZGFuJykpIHtcblxuICAgIC8vICAgICAgICAgICAgICAgICBwYXJraW5nW3BsYWNlXS5jYXIgPSBjYXI7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlRGlzYWJsZXMgLT0gMTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVTZWRhbnMgLT0gMTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVUcnVjayAtPSAxO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGlmICghdGhpcy5hdmFpbGFibGVEaXNhYmxlcyAmJiAhdGhpcy5hdmFpbGFibGVTZWRhbnMgJiYgIXRoaXMuYXZhaWxhYmxlVHJ1Y2spIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZnVsbFBsYWNlcyA9ICcnO1xuICAgIC8vICAgICB9IGVsc2UgaWYgKCAhdGhpcy5hdmFpbGFibGVEaXNhYmxlcyAmJiBjYXIudHlwZSA9PT0gJ0Rpc2FibGVkJyApIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZnVsbFBsYWNlcyA9IGNhci50eXBlO1xuICAgIC8vICAgICB9IGVsc2UgaWYgKCAhdGhpcy5hdmFpbGFibGVTZWRhbnMgJiYgY2FyLnR5cGUgPT09ICdTZWRhbicgKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZ1bGxQbGFjZXMgPSBjYXIudHlwZTtcbiAgICAvLyAgICAgfSBlbHNlIGlmICggIXRoaXMuYXZhaWxhYmxlVHJ1Y2sgJiYgY2FyLnR5cGUgPT09ICdUcnVjaycgKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZ1bGxQbGFjZXMgPSBjYXIudHlwZTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGNvbnNvbGUuZGlyKCB0aGlzLl9wYXJraW5nLCAnLSBQYXJraW5nIENvbGxlY3Rpb24nICk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCAnUGxhY2VzIGxlZnQ6ICcsICdEaXNhYmxlZCAtJywgdGhpcy5hdmFpbGFibGVEaXNhYmxlcywgJ1NlZGFuIC0nLHRoaXMuYXZhaWxhYmxlU2VkYW5zLCAnVHJ1Y2sgLScsIHRoaXMuYXZhaWxhYmxlVHJ1Y2spO1xuXG4gICAgLy8gICAgIHRoaXMuX3BhcmtpbmdPYnNlcnZhYmxlLm5leHQodGhpcy5fcGFya2luZyk7XG5cbiAgICAvLyB9XG5cbiAgICBnZXRQYXJraW5nQ291bnQoIGF0dHJzOiBhbnkgKSB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudHJ1Y2tDb3VudCA9IDA7XG5cbiAgICAgICAgZm9yICggdmFyIGsgaW4gYXR0cnMgKSB7XG4gICAgICAgICAgICBpZiAoIGF0dHJzW2tdLmhhc093blByb3BlcnR5KCd0eXBlJykgJiYgYXR0cnNba10udHlwZSA9PT0gJ2Rpc2FibGVkJyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkQ291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggYXR0cnNba10uaGFzT3duUHJvcGVydHkoJ3R5cGUnKSAmJiBhdHRyc1trXS50eXBlID09PSAndHJ1Y2snICkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJ1Y2tDb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IGF0dHJzLmxlbmd0aDtcblxuICAgICAgICB0aGlzLmF2YWlsYWJsZURpc2FibGVzID0gdGhpcy50b3RhbENvdW50O1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVNlZGFucyA9IHRoaXMudG90YWxDb3VudCAtIHRoaXMuZGlzYWJsZWRDb3VudDtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVUcnVjayA9IHRoaXMudHJ1Y2tDb3VudDtcbiAgICB9XG5cbiAgICBzZXRPZmZzZXRQbGFjZSh2aWV3UGxhY2VzKSB7XG4gICAgICAgIHZhciBwbGFjZXMgPSB0aGlzLl9wYXJraW5nLFxuICAgICAgICAgICAgb2ZmVG9wOiBudW1iZXI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXggPSB2aWV3UGxhY2VzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vIEZvciBDaHJvbWUgb2Zmc2V0VG9wXG4gICAgICAgICAgICBvZmZUb3AgPSAoIHZpZXdQbGFjZXNbMF0ub2Zmc2V0VG9wID09PSAyODUgKSA/IHZpZXdQbGFjZXNbaV0ub2Zmc2V0VG9wIC0gMjggOiB2aWV3UGxhY2VzW2ldLm9mZnNldFRvcFxuXG4gICAgICAgICAgICBmb3IgKCB2YXIgayBpbiBwbGFjZXMgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB2aWV3UGxhY2VzW2ldLmNoaWxkcmVuWzBdICE9PSAndW5kZWZpbmVkJyAmJiBwYXJzZUludCggdmlld1BsYWNlc1tpXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCApID09PSBwbGFjZXNba10uaWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlc1trXS5vZmZzZXRbJ2xlZnQnXSA9IHZpZXdQbGFjZXNbaV0ub2Zmc2V0TGVmdCArICh2aWV3UGxhY2VzW2ldLm9mZnNldFdpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlc1trXS5vZmZzZXRbJ3RvcCddID0gb2ZmVG9wICsgKHZpZXdQbGFjZXNbaV0ub2Zmc2V0SGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBwbGFjZXNbaV0uaWQgJSAyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzW2ldLm9mZnNldC5wb3NpdGlvbiA9ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzW2ldLm9mZnNldC5wb3NpdGlvbiA9ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaW5kQ2FyT25QYXJraW5nKCBjYXIgKSB7XG4gICAgLy8gICAgIHZhciBwbGFjZXMgPSB0aGlzLl9wYXJraW5nO1xuICAgIC8vICAgICBmb3IgKHZhciBpIGluIHBsYWNlcykge1xuICAgIC8vICAgICAgICAgaWYgKCBwbGFjZXNbaV0uY2FyICE9PSBudWxsICYmIHBsYWNlc1tpXS5jYXJbJ2lkJ10gPT09IGNhci5pZCkge1xuICAgIC8vICAgICAgICAgICAgIGNhci5hbmltYXRpb24gPSBwbGFjZXNbaV0ub2Zmc2V0O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxufSJdfQ==
