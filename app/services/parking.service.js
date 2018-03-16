System.register(['angular2/core', 'rxjs/Observable', '../services/parkin-place.model'], function(exports_1) {
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
                // ParkingService.prototype.parkingCar = function (car) {
                //     var parking = this._parking;
                //     for (var place in parking) {
                //         if (parking[place].car === null) {
                //             if (parking[place].type === 'disabled' && car.type === 'Disabled') {
                //                 parking[place].car = car;
                //                 this.availableDisables -= 1;
                //                 break;
                //             }
                //             if (parking[place].type === 'sedan' &&
                //                 (car.type === 'Disabled' || car.type === 'Sedan')) {
                //                 parking[place].car = car;
                //                 this.availableDisables -= 1;
                //                 this.availableSedans -= 1;
                //                 break;
                //             }
                //             if (parking[place].type === 'truck' &&
                //                 (car.type === 'Truck' || car.type === 'Disabled' || car.type === 'Sedan')) {
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
                //     }
                //     else if (!this.availableDisables && car.type === 'Disabled') {
                //         this.fullPlaces = car.type;
                //     }
                //     else if (!this.availableSedans && car.type === 'Sedan') {
                //         this.fullPlaces = car.type;
                //     }
                //     else if (!this.availableTruck && car.type === 'Truck') {
                //         this.fullPlaces = car.type;
                //     }
                //     console.dir(this._parking, '- Parking Collection');
                //     console.log('Places left: ', 'Disabled -', this.availableDisables, 'Sedan -', this.availableSedans, 'Truck -', this.availableTruck);
                //     this._parkingObservable.next(this._parking);
                // };
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
            })();
            exports_1("ParkingService", ParkingService);
        }
    }
});
