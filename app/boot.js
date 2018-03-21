System.register(['angular2/platform/browser', "./app.component", './services/parking.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLHNDQUFzQztZQUN0QyxtQkFBUyxDQUFDLDBCQUFVLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtQYXJraW5nQXBwfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhcmtpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3Bhcmtpbmcuc2VydmljZSc7XG5cbi8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5ib290c3RyYXAoUGFya2luZ0FwcCwgW1BhcmtpbmdTZXJ2aWNlXSk7XG5cbiJdfQ==
