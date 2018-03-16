System.register(['angular2/core', './components/parking.component', './components/generete-parking.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, parking_component_1, generete_parking_component_1;
    var ParkingApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        template: "\n  <generate-parking></generate-parking>\n        <parking class=\"parking\"></parking>\n    ",
                        directives: [ generete_parking_component_1.GenerateParking, parking_component_1.Parking],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParkingApp);
                return ParkingApp;
            })();
            exports_1("ParkingApp", ParkingApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFya2luZ0FwcCIsIlBhcmtpbmdBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQVdJQTtnQkFBZUMsQ0FBQ0E7Z0JBWHBCRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsUUFBUUEsRUFBRUEsMktBS1RBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxvQ0FBV0EsRUFBRUEsNENBQWVBLEVBQUVBLDJCQUFPQSxDQUFDQTtxQkFDdERBLENBQUNBOzsrQkFHREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQVpBLEFBWUNBLElBQUE7WUFaRCxtQ0FZQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0dlbmVyYXRlQ2FyfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhdGUtY2FyLmNvbXBvbmVudCdcbmltcG9ydCB7UGFya2luZ30gZnJvbSAnLi9jb21wb25lbnRzL3BhcmtpbmcuY29tcG9uZW50J1xuLy9pbXBvcnQge0Nhcn0gZnJvbSAnLi9jb21wb25lbnRzL2Nhci5jb21wb25lbnQnXG5pbXBvcnQge0dlbmVyYXRlUGFya2luZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyZXRlLXBhcmtpbmcuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPlBhcmtpbmcgQ2FyPC9oMT5cbiAgICAgICAgPGdlbmVyYXRlLWNhcj48L2dlbmVyYXRlLWNhcj5cbiAgICAgICAgPGdlbmVyYXRlLXBhcmtpbmc+PC9nZW5lcmF0ZS1wYXJraW5nPlxuICAgICAgICA8cGFya2luZyBjbGFzcz1cInBhcmtpbmdcIj48L3Bhcmtpbmc+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbR2VuZXJhdGVDYXIsIEdlbmVyYXRlUGFya2luZywgUGFya2luZ10sXG59KVxuZXhwb3J0IGNsYXNzIFBhcmtpbmdBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
