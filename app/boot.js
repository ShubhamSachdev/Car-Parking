System.register(['angular2/platform/browser', "./app.component", './services/parking.service.js'], function(exports_1) {
    var browser_1, app_component_1, parking_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (parking_service_1_1) {
                parking_service_1 = parking_service_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.ParkingApp, [parking_service_1.ParkingService]);
        }
    }
});
