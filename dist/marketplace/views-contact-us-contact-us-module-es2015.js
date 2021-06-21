(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/contact-us/contact-us.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/contact-us/contact-us.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-us\">\n    <div class=\"container\">\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div>\n                    <h3 class=\"typography-heading-level-3-web charcoal-grey mb-4\">\n                        Contact Us\n                    </h3>\n                    <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"submit(model)\">\n                        <formly-form [form]=\"contactUsForm\" [fields]=\"fields\" [model]=\"model\">\n                            <div class=\"form-actions d-flex justify-content-end\">\n                                <button type=\"submit\" [disabled]=\"!contactUsForm.valid\" class=\"btn btn-secondary d-inline-block w-100 mt-3\">\n                                    Send\n                                </button>\n                            </div>\n                        </formly-form>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/helpers/form-helper.ts":
/*!*********************************************!*\
  !*** ./src/app/core/helpers/form-helper.ts ***!
  \*********************************************/
/*! exports provided: resetForm, getCurrentYearLastDigits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return resetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentYearLastDigits", function() { return getCurrentYearLastDigits; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

function resetForm(form) {
    Object.keys(form.controls).forEach(key => {
        const control = form.get(key);
        control.reset();
        control.markAsPristine();
        control.markAsUntouched();
        control.markAsPending();
        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
            resetForm(control);
        }
    });
}
function getCurrentYearLastDigits() {
    const fullYear = new Date().getFullYear().toString();
    const lastDigits = fullYear.slice(fullYear.length - 2);
    return parseInt(lastDigits, 10);
}


/***/ }),

/***/ "./src/app/services/system.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/system.service.ts ***!
  \********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");





let SystemService = class SystemService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/system/contact-us';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    postContactForm(payload) {
        return this.httpClient
            .post(this.apiEndpoint, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data.data.message));
    }
};
SystemService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SystemService);



/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXVzIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuIiwiLmNvbnRhY3QtdXMge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _contact_us_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us.config */ "./src/app/views/contact-us/contact-us.config.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _core_helpers_form_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/helpers/form-helper */ "./src/app/core/helpers/form-helper.ts");








let ContactUsComponent = class ContactUsComponent {
    constructor(toasterService, changeDetectionRef, systemService, translationService) {
        this.toasterService = toasterService;
        this.changeDetectionRef = changeDetectionRef;
        this.systemService = systemService;
        this.translationService = translationService;
        this.initForm();
    }
    submit(form) {
        this.systemService.postContactForm(form)
            .subscribe((message) => {
            this.toasterService.pop('success', message);
            Object(_core_helpers_form_helper__WEBPACK_IMPORTED_MODULE_7__["resetForm"])(this.contactUsForm);
            this.changeDetectionRef.detectChanges();
        });
    }
    initForm() {
        this.contactUsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.model = Object(_contact_us_config__WEBPACK_IMPORTED_MODULE_5__["getModel"])();
        this.fields = Object(_contact_us_config__WEBPACK_IMPORTED_MODULE_5__["getFields"])(this.translationService);
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/contact-us/contact-us.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/views/contact-us/contact-us.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_system_service__WEBPACK_IMPORTED_MODULE_6__["SystemService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/views/contact-us/contact-us.config.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.config.ts ***!
  \*******************************************************/
/*! exports provided: getFields, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFields", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validation */ "./src/app/validation/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");


function getFields(translator) {
    return [
        {
            key: 'firstName',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'text',
                name: 'firstName',
                label: 'First Name',
                placeholder: 'Enter your first name',
                minLength: 1,
                maxLength: 50,
                required: true,
                hideRequiredMarker: true,
            },
            validators: {
                required: (ctrl) => ctrl.value && !!ctrl.value.trim().length
            },
            validation: {
                messages: {
                    minlength: () => translator.instant('Validation.Common.NameRequired'),
                    maxlength: () => translator.instant('Validation.Common.NameLength')
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
                required: true,
                hideRequiredMarker: true,
            },
            validators: {
                required: (ctrl) => ctrl.value && !!ctrl.value.trim().length
            },
            validation: {
                messages: {
                    minlength: () => translator.instant('Validation.Common.SurnameRequired'),
                    maxlength: () => translator.instant('Validation.Common.NameLength')
                }
            }
        },
        {
            key: 'email',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'email',
                label: 'Email',
                maxLength: 129,
                placeholder: 'Enter your email',
                required: true,
                hideRequiredMarker: true,
            },
            validators: {
                email: (ctrl) => _app_constants__WEBPACK_IMPORTED_MODULE_1__["EMAIL_PATTERN"].test(ctrl.value)
            },
            expressionProperties: {
                'templateOptions.label': () => translator.instant('SignIn.Form.EmailLabel'),
                'templateOptions.placeholder': () => translator.instant('SignIn.Form.EmailPlaceholder')
            },
            validation: {
                messages: {
                    required: Object(_validation__WEBPACK_IMPORTED_MODULE_0__["requiredFieldMessage"])(translator),
                    email: Object(_validation__WEBPACK_IMPORTED_MODULE_0__["invalidEmailMessage"])(translator)
                }
            }
        },
        {
            key: 'subject',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'text',
                name: 'subject',
                label: 'Subject',
                maxLength: 50,
                placeholder: 'Enter subject',
                required: true,
                hideRequiredMarker: true,
            },
            validators: {
                required: (ctrl) => ctrl.value && !!ctrl.value.trim().length
            }
        },
        {
            key: 'message',
            type: 'textarea',
            className: 'auth-field',
            templateOptions: {
                name: 'message',
                label: 'Message',
                placeholder: 'Enter message',
                required: true,
                maxLength: 750,
                hideRequiredMarker: true,
                grow: false,
                rows: 6
            },
            validators: {
                required: (ctrl) => ctrl.value && !!ctrl.value.trim().length
            }
        },
    ];
}
function getModel() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    };
}


/***/ }),

/***/ "./src/app/views/contact-us/contact-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm2015/ngx-formly-bootstrap.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/views/contact-us/contact-us.component.ts");
/* harmony import */ var _contact_us_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us.routing */ "./src/app/views/contact-us/contact-us.routing.ts");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/system.service */ "./src/app/services/system.service.ts");










let ContactUsModule = class ContactUsModule {
};
ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_contact_us_routing__WEBPACK_IMPORTED_MODULE_8__["ContactUsRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forRoot({
                validationMessages: [
                    { name: 'required', message: 'This field is required' },
                ],
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormlyBootstrapModule"],
        ],
        providers: [_services_system_service__WEBPACK_IMPORTED_MODULE_9__["SystemService"]]
    })
], ContactUsModule);



/***/ }),

/***/ "./src/app/views/contact-us/contact-us.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.routing.ts ***!
  \********************************************************/
/*! exports provided: ContactUsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutes", function() { return ContactUsRoutes; });
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/views/contact-us/contact-us.component.ts");

const ContactUsRoutes = [
    {
        path: '',
        component: _contact_us_component__WEBPACK_IMPORTED_MODULE_0__["ContactUsComponent"],
    }
];


/***/ })

}]);
//# sourceMappingURL=views-contact-us-contact-us-module-es2015.js.map