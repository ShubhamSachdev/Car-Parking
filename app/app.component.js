System.register(['angular2/core', './components/parking-search.component', './components/parking.component', './components/generete-parking.component'], function(exports_1, context_1) {
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
    var core_1, parking_search_component_1, parking_component_1, generete_parking_component_1;
    var ParkingApp, routes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (parking_search_component_1_1) {
                parking_search_component_1 = parking_search_component_1_1;
            },
            function (parking_component_1_1) {
                parking_component_1 = parking_component_1_1;
            },
            function (generete_parking_component_1_1) {
                generete_parking_component_1 = generete_parking_component_1_1;
            }],
        execute: function() {
            ParkingApp = (function () {
                function ParkingApp() {
                }
                ParkingApp = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n        <parking-search></parking-search>\n        <router-outlet></router-outlet>\n    ",
                        directives: [generete_parking_component_1.GenerateParking, parking_component_1.Parking, parking_search_component_1.ParkingSearch],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParkingApp);
                return ParkingApp;
            }());
            exports_1("ParkingApp", ParkingApp);
            routes = [
                {
                    path: 'ft',
                    component: parking_search_component_1.ParkingSearch
                },
                {
                    path: 'sd',
                    component: generete_parking_component_1.GenerateParking
                }
            ];
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztvQkFxQk0sTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztZQUpaO2dCQUNJO2dCQUFlLENBQUM7Z0JBWHBCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLDRGQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDRDQUFlLEVBQUMsMkJBQU8sRUFBRSx3Q0FBYSxDQUFDO3FCQUN2RCxDQUFDOzs4QkFBQTtnQkFLRixpQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsbUNBRUMsQ0FBQTtZQUVLLE1BQU0sR0FBRTtnQkFDVjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixTQUFTLEVBQUUsd0NBQWE7aUJBQ3pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFNBQVMsRUFBRSw0Q0FBZTtpQkFDM0I7YUFDRixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BhcmtpbmdTZWFyY2h9IGZyb20gJy4vY29tcG9uZW50cy9wYXJraW5nLXNlYXJjaC5jb21wb25lbnQnXG5pbXBvcnQge1Bhcmtpbmd9IGZyb20gJy4vY29tcG9uZW50cy9wYXJraW5nLmNvbXBvbmVudCdcbi8vaW1wb3J0IHtDYXJ9IGZyb20gJy4vY29tcG9uZW50cy9jYXIuY29tcG9uZW50J1xuaW1wb3J0IHtHZW5lcmF0ZVBhcmtpbmd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmV0ZS1wYXJraW5nLmNvbXBvbmVudCdcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cGFya2luZy1zZWFyY2g+PC9wYXJraW5nLXNlYXJjaD5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0dlbmVyYXRlUGFya2luZyxQYXJraW5nLCBQYXJraW5nU2VhcmNoXSxcbn0pXG4vLyA8Z2VuZXJhdGUtcGFya2luZz48L2dlbmVyYXRlLXBhcmtpbmc+XG4vLyAgICAgICAgIDxwYXJraW5nIGNsYXNzPVwicGFya2luZ1wiPjwvcGFya2luZz5cbmV4cG9ydCBjbGFzcyBQYXJraW5nQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmNvbnN0IHJvdXRlcyA9W1xuICAgIHtcbiAgICAgIHBhdGg6ICdmdCcsXG4gICAgICBjb21wb25lbnQ6IFBhcmtpbmdTZWFyY2hcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdzZCcsXG4gICAgICBjb21wb25lbnQ6IEdlbmVyYXRlUGFya2luZ1xuICAgIH1cbiAgXSJdfQ==
