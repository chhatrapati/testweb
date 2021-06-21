(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-complete-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/complete-profile/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/complete-profile/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-wrapper w-100 h-100 overflow-auto\">\n        <div class=\"authentication-container\">\n            <div content class=\"w-100\">\n                <div class=\"row h-100\">\n                    <div class=\"col-lg-12\">\n                        <div toolbar>\n                            <div class=\"header-label text-center\">Step {{ fillingStep | async }} of 2</div>\n                            <h2 class=\"h2 mt-2 mb-4 font-bold text-center\">Complete Profile</h2>\n                            <div *ngIf=\"checkFillingStep(1)\">\n                                <app-photo [photo]=\"photo | async\"></app-photo>\n                                <div class=\"photo-buttons-wrapper\">\n                                    <div class=\"upload-btn-wrapper\">\n                                        <input #imageInput (change)=\"changePhotoHandler($event.target.files[0])\" class=\"text-center image-upload-input\" type=\"file\" name=\"pic\" accept=\"image/jpeg,image/png,image/jpg\" />\n                                        <div class=\"photo-upload-btn text-center\">Upload photo</div>\n                                    </div>\n                                    <button class=\"delete-photo-btn text-center p-0\" (click)=\"deletePhotoHandler()\" [class.d-none]=\"photo.value == undefined\">Delete photo</button>\n                                </div>\n                                <span class=\"error-message text-center\">{{ photoErrorMessage | async }}</span>\n                                <form [formGroup]=\"formStep1\" (ngSubmit)=\"submitFirstStep(model)\">\n                                    <formly-form [form]=\"formStep1\" [fields]=\"fieldsStep1\" [model]=\"model\">\n                                        <button type=\"submit\" [disabled]=\"!formStep1.valid\" class=\"btn btn-primary block full-width m-b\">\n                                            Continue\n                                        </button>\n                                    </formly-form>\n                                </form>\n                            </div>\n                            <div *ngIf=\"checkFillingStep(2)\">\n                                <form [formGroup]=\"formStep2\" (ngSubmit)=\"submitSecondStep(model)\">\n                                    <formly-form [form]=\"formStep2\" [fields]=\"fieldsStep2\" [model]=\"model\">\n                                        <button type=\"submit\" [disabled]=\"!formStep2.valid\" class=\"btn btn-primary block full-width m-b submit-step-2\">\n                                            Complete Registration\n                                        </button>\n                                    </formly-form>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/resolvers/common-info.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/resolvers/common-info.resolver.ts ***!
  \***************************************************/
/*! exports provided: CommonInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonInfoResolver", function() { return CommonInfoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common-info.service */ "./src/app/services/common-info.service.ts");



var CommonInfoResolver = /** @class */ (function () {
    function CommonInfoResolver(commonInfoService) {
        this.commonInfoService = commonInfoService;
    }
    CommonInfoResolver.prototype.resolve = function (route, state) {
        return this.commonInfoService.getCountries();
    };
    CommonInfoResolver.ctorParameters = function () { return [
        { type: _services_common_info_service__WEBPACK_IMPORTED_MODULE_2__["CommonInfoService"] }
    ]; };
    CommonInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_info_service__WEBPACK_IMPORTED_MODULE_2__["CommonInfoService"]])
    ], CommonInfoResolver);
    return CommonInfoResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/profile.resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/resolvers/profile.resolver.ts ***!
  \***********************************************/
/*! exports provided: ProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolver", function() { return ProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var ProfileResolver = /** @class */ (function () {
    function ProfileResolver(authService) {
        this.authService = authService;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        return this.authService.getProfile();
    };
    ProfileResolver.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    ProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileResolver);
    return ProfileResolver;
}());



/***/ }),

/***/ "./src/app/views/complete-profile/profile.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/complete-profile/profile.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _profile_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.router */ "./src/app/views/complete-profile/profile.router.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/views/complete-profile/profile/profile.component.ts");
/* harmony import */ var _components_photo_photo_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/photo/photo.module */ "./src/app/components/photo/photo.module.ts");
/* harmony import */ var _services_common_info_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/common-info.service */ "./src/app/services/common-info.service.ts");
/* harmony import */ var _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resolvers/common-info.resolver */ "./src/app/resolvers/common-info.resolver.ts");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/dropdown/dropdown.component */ "./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var _components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/dropdown/dropdown.module */ "./src/app/components/dropdown/dropdown.module.ts");
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm5/angular-cropperjs.js");
/* harmony import */ var _components_modals_modals_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/modals/modals.module */ "./src/app/components/modals/modals.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _resolvers_profile_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../resolvers/profile.resolver */ "./src/app/resolvers/profile.resolver.ts");




















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_profile_router__WEBPACK_IMPORTED_MODULE_8__["ProfileRouter"]),
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
                    validationMessages: [
                        { name: 'required', message: 'This field is required' },
                    ],
                    types: [
                        { name: 'dropdown', component: _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["DropdownComponent"] },
                    ],
                }),
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
                _components_photo_photo_module__WEBPACK_IMPORTED_MODULE_10__["PhotoModule"],
                angular_cropperjs__WEBPACK_IMPORTED_MODULE_16__["AngularCropperjsModule"],
                _components_modals_modals_module__WEBPACK_IMPORTED_MODULE_17__["ModalsModule"]
            ],
            providers: [
                _services_common_info_service__WEBPACK_IMPORTED_MODULE_11__["CommonInfoService"],
                _services_images_service__WEBPACK_IMPORTED_MODULE_15__["ImagesService"],
                _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_12__["CommonInfoResolver"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _resolvers_profile_resolver__WEBPACK_IMPORTED_MODULE_19__["ProfileResolver"]
            ],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/views/complete-profile/profile.router.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/complete-profile/profile.router.ts ***!
  \**********************************************************/
/*! exports provided: ProfileRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRouter", function() { return ProfileRouter; });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/views/complete-profile/profile/profile.component.ts");
/* harmony import */ var _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resolvers/common-info.resolver */ "./src/app/resolvers/common-info.resolver.ts");
/* harmony import */ var src_app_resolvers_profile_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvers/profile.resolver */ "./src/app/resolvers/profile.resolver.ts");



var ProfileRouter = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        resolve: {
            countriesList: _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_1__["CommonInfoResolver"],
            userData: src_app_resolvers_profile_resolver__WEBPACK_IMPORTED_MODULE_2__["ProfileResolver"]
        }
    }
];


/***/ }),

/***/ "./src/app/views/complete-profile/profile/profile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/complete-profile/profile/profile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.header-label {\n  font-size: 14px;\n  color: #999999;\n  font-weight: 500;\n}\n.photo-buttons-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.upload-btn-wrapper {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.image-upload-input {\n  width: 100px;\n  display: block;\n  margin: 10px auto 10px auto;\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.photo-upload-btn {\n  width: 100px;\n  margin: 10px auto 10px auto;\n  color: #393e41;\n  font-size: 14px;\n}\n.delete-photo-btn {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 100px;\n  color: #ee4036;\n  font-size: 14px;\n  background-color: transparent;\n  border: none;\n}\n.error-message {\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n  margin: -10px auto 15px auto;\n  display: block;\n}\n@media (max-width: 576px) {\n  .submit-step-2 {\n    padding-top: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL2NvbXBsZXRlLXByb2ZpbGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jb21wbGV0ZS1wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zdGRpbiIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBYUEsV0FBQTtBQWdCQSxtQkFBQTtBQVNBLGdCQUFBO0FBQ0E7RUF4QkksWUF5Qm9CO0VBeEJwQixtQkFBQTtFQUNBLGtCQUhxQztFQUlyQyxtQkFKcUM7RUEyQnJDLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUMvQko7QURpQ0k7RUFDSSx5QkFqREs7RUFrREwscUJBbERLO0VBbURMLGNBbERBO0FDbUJSO0FEaUNRO0VBQ0kseUJBcERJO0VBcURKLHFCQXJESTtBQ3NCaEI7QURtQ0k7RUFDSSx5QkExRFE7RUEyRFIscUJBM0RRO0FDMEJoQjtBRG1DUTtFQUNJLHlCQWhFQztFQWlFRCxxQkFqRUM7QUNnQ2I7QURxQ0k7RUFDSSxjQWpFSztFQWtFTCx5QkFBQTtBQ25DUjtBRHFDUTtFQUNJLGlCQUFBO0FDbkNaO0FEdUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDckNSO0FEeUNBO0VBQ0ksY0FBQTtBQ3RDSjtBRHlDQTtFQUNJLHdCQUFBO0FDdENKO0FEeUNBO0VBQ0ksaUJBQUE7RUFDQSxjQTdGWTtFQStGWixtQ0FBQTtBQ3ZDSjtBRHlDSTtFQUNJLGNBcEdLO0FDNkRiO0FEMkNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDeENKO0FEMkNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUN4Q0o7QUQyQ0EsbUJBQUE7QUFDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FDeENKO0FEMkNBO0VBQ0ksZUFBQTtBQ3hDSjtBQ3hHQTtFQUNJLGVBQUE7RUFDQSxjRkdTO0VFRlQsZ0JBQUE7QUQyR0o7QUN4R0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUQyR0o7QUN4R0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FEMkdKO0FDeEdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUQyR0o7QUN4R0E7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjRjVCWTtFRTZCWixlQUFBO0FEMkdKO0FDeEdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjRnRDUztFRXVDVCxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FEMkdKO0FDeEdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBRDJHSjtBRS9JUTtFRHVDUjtJQUVRLGdCQUFBO0VEMkdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb21wbGV0ZS1wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZBUklBQkxFUyAqL1xuJG9yYW5nZS1yZWQ6ICNlZTQwMzY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kY2hhcmNvYWwtZ3JleTogIzM5M2U0MTtcbiR2ZXJ5LWxpZ2h0LXBpbms6ICNkOWQ5ZDk7XG4kZGltLWdyZXk6ICMyMTIxMjE7XG4kYnJvd24tZ3JleTogI2EwYTBhMDtcbiRicm93bmlzaC1ncmV5OiAjNjI2MjYyO1xuJGxpZ2h0LWdyZXk6ICM5OTk5OTk7XG4kcGVhY2h5LXBpbms6ICNmZjhmODk7XG4kbGlnaHQtcGluazogI2VlZWVlZTtcbiRkYXJrLWdyZXk6ICMzYjNiM2I7XG5cbi8qIE1JWElOUyAqL1xuQG1peGluIGJ0bi1oZWlnaHQoJGhlaWdodCwgJGJ0bi1wYWRkaW5nOiAzMHB4KSB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRoZWlnaHQgLyAyO1xuICAgIHBhZGRpbmctbGVmdDogJGJ0bi1wYWRkaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZztcbn1cblxuQG1peGluIG11bHRpbGluZS1lbGxpcHNpcygkbGluZUNsYW1wKSB7XG4gICAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVDbGFtcDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuXG4lZmxleC1jZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgICBAaW5jbHVkZSBidG4taGVpZ2h0KDUwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG5cbiAgICAmLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXdoaXRlIHtcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkYnJvd24tZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgfVxufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwe1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwe1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjV7XG4gICAgcGFkZGluZzogMCAyNXB4O1xufVxuIiwiLyogVkFSSUFCTEVTICovXG4vKiBNSVhJTlMgKi9cbi8qIENMQVNTIFZBUklBQkxFUyovXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG59XG4uYnRuLXdoaXRlIHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNhMGEwYTA7XG59XG4uYnRuLXdoaXRlOmhvdmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG59XG4uYnRuLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2VlNDAzNjtcbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjUge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5oZWFkZXItbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucGhvdG8tYnV0dG9ucy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW1hZ2UtdXBsb2FkLWlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBob3RvLXVwbG9hZC1idG4ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcbiAgY29sb3I6ICMzOTNlNDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlbGV0ZS1waG90by1idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjZWU0MDM2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBtYXJnaW46IC0xMHB4IGF1dG8gMTVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zdWJtaXQtc3RlcC0yIHtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2Jhc2UnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmUuc2Nzcyc7XG5cbi5oZWFkZXItbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBob3RvLWJ1dHRvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW1hZ2UtdXBsb2FkLWlucHV0IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBob3RvLXVwbG9hZC1idG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlbGV0ZS1waG90by1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIG1hcmdpbjogLTEwcHggYXV0byAxNXB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdWJtaXQtc3RlcC0yIHtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHNtYWxsKSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgfVxufSIsIiRicmVha3BvaW50czogKFxuICAgIC8vIGJhc2ljOlxuICAgIG1vYmlsZTogMzIwcHgsXG4gICAgZXh0cmEtc21hbGw6IDM3N3B4LFxuICAgIHNtYWxsOiA1NzZweCxcbiAgICBtZWRpdW06IDc2N3B4LFxuICAgIGxhcmdlOiA5OTFweCxcbiAgICBleHRyYS1sYXJnZTogMTIwMHB4LFxuICAgIGlwYWQtbGFuZHNjYXBlOiAxMDI1cHgsXG4gICAgbGFwdG9wOiAxMzY2cHhcbik7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KX0pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEB3YXJuIFwiTm8gc3VjaCBicmVha3BvaW50IGluIHRoZSBtYXA6IGAjeyRicmVha3BvaW50fWAuIFwiO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/complete-profile/profile/profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/complete-profile/profile/profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var _models_image_image_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/image/image-type */ "./src/app/models/image/image-type.ts");
/* harmony import */ var _core_helpers_files_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/helpers/files-helper */ "./src/app/core/helpers/files-helper.ts");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var _components_modals_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/modals/image-crop/image-crop.component */ "./src/app/components/modals/image-crop/image-crop.component.ts");
/* harmony import */ var _profile_configs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile.configs */ "./src/app/views/complete-profile/profile/profile.configs.ts");
/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile.model */ "./src/app/views/complete-profile/profile/profile.model.ts");















var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(translate, activatedRoute, router, usersService, imagesService, sessionsStorage, modalService) {
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersService = usersService;
        this.imagesService = imagesService;
        this.sessionsStorage = sessionsStorage;
        this.modalService = modalService;
        this.fillingStep = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_profile_model__WEBPACK_IMPORTED_MODULE_14__["FillingStep"].step1);
        this.photo = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](undefined);
        this.fileReader = new FileReader();
        this.photoErrorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        var _a = activatedRoute.snapshot.data, countriesList = _a.countriesList, userData = _a.userData;
        this.countriesList = countriesList;
        this.userData = userData;
        this.sessionsStorage.updateUserInfo(userData);
        this.initForm();
    }
    ProfileComponent.prototype.initForm = function () {
        this.formStep1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.formStep2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.model = this.getModel();
        this.fieldsStep1 = Object(_profile_configs__WEBPACK_IMPORTED_MODULE_13__["getFieldsStep1"])(this.translate, this.userData);
        this.fieldsStep2 = Object(_profile_configs__WEBPACK_IMPORTED_MODULE_13__["getFieldsStep2"])(this.countriesList);
    };
    ProfileComponent.prototype.submitFirstStep = function (model) {
        if (model.isComposer === false) {
            model.idCode = null;
        }
        this.fillingStep.next(_profile_model__WEBPACK_IMPORTED_MODULE_14__["FillingStep"].step2);
    };
    ProfileComponent.prototype.submitSecondStep = function (model) {
        var _this = this;
        if (model.mobileNumber === '') {
            model.mobileNumber = null;
        }
        if (model.state === '') {
            model.state = null;
        }
        if (this.photo.getValue()) {
            var body = new FormData();
            var photoFile = _core_helpers_files_helper__WEBPACK_IMPORTED_MODULE_10__["FilesHelper"].dataUrlToFile(this.photo.getValue());
            body.append('file', photoFile);
            this.imagesService.uploadImage(body, _models_image_image_type__WEBPACK_IMPORTED_MODULE_9__["ImageType"].Avatar)
                .subscribe(function (data) {
                model.imageId = data.data.id;
                _this.usersService.editProfile(model)
                    .subscribe(function (user) {
                    _this.sessionsStorage.updateUserInfo(user);
                    _this.router.navigate(['/']);
                });
            });
        }
        else {
            this.usersService.editProfile(model)
                .subscribe(function (user) {
                _this.sessionsStorage.updateUserInfo(user);
                _this.router.navigate(['/']);
            });
        }
    };
    ProfileComponent.prototype.changePhotoHandler = function (file) {
        var _this = this;
        this.photoErrorMessage.next('');
        var ext = file['name'].substring(file['name'].lastIndexOf('.') + 1).toLowerCase();
        if (ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg') {
            this.photoErrorMessage.next('Incorrect image format. Allowed formats is jpg, jpeg, png');
            return;
        }
        // 10 Mb
        if (file.size > 10485760) {
            this.photoErrorMessage.next('File is too large. Max file size is 10 Mb');
            return;
        }
        var img = new Image();
        img.onload = function () {
            if (img.width < 150 || img.height < 150) {
                _this.photoErrorMessage.next('Minimum size of avatar should be 150x150');
                return;
            }
            _this.fileReader.onload = function () {
                var dialogRef = _this.modalService.show(_components_modals_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_12__["ImageCropComponent"], {
                    initialState: {
                        imageSource: _this.fileReader.result,
                    },
                    class: 'image-crop',
                });
                dialogRef.content.imageCropped
                    .subscribe(function (e) {
                    _this.imageInput.nativeElement.value = '';
                    _this.photo.next(e);
                });
                _this.modalService.onHidden
                    .subscribe(function () { return _this.imageInput.nativeElement.value = ''; });
            };
            _this.fileReader.readAsDataURL(file);
        };
        img.src = URL.createObjectURL(file);
    };
    ProfileComponent.prototype.deletePhotoHandler = function () {
        this.photo.next(null);
    };
    ProfileComponent.prototype.checkFillingStep = function (step) {
        return this.fillingStep.getValue() === step;
    };
    ProfileComponent.prototype.getModel = function () {
        return {
            firstName: this.userData.firstName || '',
            lastName: this.userData.lastName || '',
            phoneNumber: '',
            mobileNumber: null,
            idCode: null,
            country: '',
            state: '',
            city: '',
            address: '',
            zip: '',
            isComposer: false,
            imageId: null
        };
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] },
        { type: _services_images_service__WEBPACK_IMPORTED_MODULE_8__["ImagesService"] },
        { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_11__["SessionStorage"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "imageInput", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/complete-profile/profile/profile.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ../../../../styles/shared/auth.styles.scss */ "./src/styles/shared/auth.styles.scss"), __webpack_require__(/*! ./profile.component.scss */ "./src/app/views/complete-profile/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            _services_images_service__WEBPACK_IMPORTED_MODULE_8__["ImagesService"],
            _core_session_session_storage__WEBPACK_IMPORTED_MODULE_11__["SessionStorage"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/complete-profile/profile/profile.configs.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/complete-profile/profile/profile.configs.ts ***!
  \*******************************************************************/
/*! exports provided: getFieldsStep1, getFieldsStep2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldsStep1", function() { return getFieldsStep1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldsStep2", function() { return getFieldsStep2; });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");

function getFieldsStep1(translator, userData) {
    return [
        {
            key: 'firstName',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'firstName',
                label: 'First name',
                placeholder: 'Enter your first name',
                minLength: 1,
                maxLength: 50,
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                required: true,
                hideRequiredMarker: true,
            },
            validation: {
                messages: {
                    minlength: function () { return translator.instant('Validation.Common.NameRequired'); },
                    maxlength: function () { return translator.instant('Validation.Common.NameLength'); },
                    pattern: function () { return 'First name is required'; }
                }
            }
        },
        {
            key: 'lastName',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'lastName',
                label: 'Last name',
                placeholder: 'Enter your last name',
                minLength: 1,
                maxLength: 50,
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                required: true,
                hideRequiredMarker: true,
            },
            validation: {
                messages: {
                    minlength: function () { return translator.instant('Validation.Common.SurnameRequired'); },
                    maxlength: function () { return translator.instant('Validation.Common.NameLength'); },
                    pattern: function () { return 'Last name is required'; }
                }
            }
        },
        {
            key: 'phoneNumber',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'tel',
                label: 'Phone number',
                placeholder: '+11231231234',
                minLength: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["PHONE_MIN_LENGTH"],
                maxLength: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["PHONE_MAX_LENGTH"],
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["PHONE_PATTERN"],
                required: true,
                hideRequiredMarker: true,
                keypress: function (field, event) {
                    if ((event.charCode < 48 || event.charCode > 57) && event.charCode !== 43) {
                        event.preventDefault();
                    }
                }
            },
            validation: {
                messages: {
                    minlength: function () { return 'Invalid phone number'; },
                    maxlength: function () { return 'Invalid phone number'; },
                    pattern: function () { return 'Invalid phone number'; }
                }
            }
        },
        {
            key: 'mobileNumber',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'tel',
                label: 'Mobile number',
                placeholder: '+11231231234',
                minLength: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["PHONE_MIN_LENGTH"],
                maxLength: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["PHONE_MAX_LENGTH"],
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["PHONE_PATTERN"],
                hideRequiredMarker: true,
                keypress: function (field, event) {
                    if ((event.charCode < 48 || event.charCode > 57) && event.charCode !== 43) {
                        event.preventDefault();
                    }
                }
            },
            validation: {
                messages: {
                    minlength: function () { return 'Invalid mobile number'; },
                    maxlength: function () { return 'Invalid mobile number'; },
                    pattern: function () { return 'Invalid mobile number'; }
                }
            }
        },
        {
            key: 'isComposer',
            type: 'checkbox',
            className: 'auth-field auth-checkbox d-inline-block',
            defaultValue: false,
            templateOptions: {
                type: 'isComposer',
                hideRequiredMarker: true,
                label: 'Contributor',
            }
        },
        {
            key: 'question',
            type: 'input',
            className: 'question-label',
            templateOptions: {
                type: 'question',
                label: '',
                hideRequiredMarker: true,
                tooltip: 'Test this out You can write HTML in here'
            },
            template: "<img src=\"/assets/img/question.png\" /><div class=\"question-tooltip\">Contributor - Add your music scores,\n                        dissertations and other material for sale on the site</div>"
        },
        {
            key: 'idCode',
            type: 'input',
            className: 'auth-field',
            defaultValue: null,
            templateOptions: {
                type: 'idCode',
                label: 'Driver license / ID',
                placeholder: 'Enter your driver license',
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                minLength: 1,
                maxLength: 50,
                required: true,
                hideRequiredMarker: true,
            },
            hideExpression: 'model.isComposer != true',
            validation: {
                messages: {
                    minlength: function () { return 'Invalid driver license/ID'; },
                    maxlength: function () { return 'Invalid driver license/ID'; },
                    pattern: function () { return 'Driver license/ID is required'; }
                }
            }
        }
    ];
}
function getFieldsStep2(countries) {
    return [
        {
            key: 'address',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'address',
                label: 'Street address',
                placeholder: 'Enter your street address',
                minLength: 1,
                maxLength: 50,
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                required: true,
                hideRequiredMarker: true,
            },
            validation: {
                messages: {
                    minlength: function () { return 'Street address must be from 1 to 50 symbols'; },
                    maxlength: function () { return 'Street address must be from 1 to 50 symbols'; },
                    pattern: function () { return 'Invalid address'; }
                }
            }
        },
        {
            key: 'country',
            type: 'dropdown',
            className: 'auth-field countries-dropdown',
            templateOptions: {
                type: 'country',
                label: 'Country',
                required: true,
                hideRequiredMarker: true,
                options: countries.map(function (c) { return c.name; }),
                defaultValue: 'Country'
            },
        },
        {
            key: 'city',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'city',
                label: 'City',
                placeholder: 'Enter your city',
                minLength: 1,
                maxLength: 50,
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                required: true,
                hideRequiredMarker: true,
            },
            validation: {
                messages: {
                    minlength: function () { return 'City must be from 1 to 50 symbols'; },
                    maxlength: function () { return 'City must be from 1 to 50 symbols'; },
                    pattern: function () { return 'Invalid city'; }
                }
            }
        },
        {
            key: 'state',
            type: 'input',
            className: 'auth-field complete-profile-state d-inline-block col-md-7 pl-0 mb-4',
            templateOptions: {
                type: 'state',
                label: 'State',
                placeholder: 'Enter your state',
                minLength: 1,
                maxLength: 50,
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                hideRequiredMarker: true,
            },
            validation: {
                messages: {
                    minlength: function () { return 'State must be from 1 to 50 symbols'; },
                    maxlength: function () { return 'State must be from 1 to 50 symbols'; },
                    pattern: function () { return 'Invalid state'; }
                }
            }
        },
        {
            key: 'zip',
            type: 'input',
            className: 'auth-field complete-profile-zip d-inline-block col-md-5 pr-0 mb-4 align-top',
            templateOptions: {
                type: 'zip',
                label: 'ZIP-code',
                placeholder: 'ZIP-code',
                minLength: 1,
                maxLength: 15,
                pattern: src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_SPACES_ONLY"],
                required: true,
                hideRequiredMarker: true,
            },
            validation: {
                messages: {
                    minlength: function () { return 'ZIP-code must be from 1 to 50 symbols'; },
                    maxlength: function () { return 'ZIP-code must be from 1 to 50 symbols'; },
                    pattern: function () { return 'Invalid ZIP-code'; }
                }
            }
        },
    ];
}


/***/ }),

/***/ "./src/app/views/complete-profile/profile/profile.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/complete-profile/profile/profile.model.ts ***!
  \*****************************************************************/
/*! exports provided: FillingStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillingStep", function() { return FillingStep; });
var FillingStep;
(function (FillingStep) {
    FillingStep[FillingStep["step1"] = 1] = "step1";
    FillingStep[FillingStep["step2"] = 2] = "step2";
})(FillingStep || (FillingStep = {}));


/***/ })

}]);
//# sourceMappingURL=views-complete-profile-profile-module-es5.js.map