(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-restore-password-restore-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/restore-password/restore-password/restore-password.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/restore-password/restore-password/restore-password.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-wrapper w-100 h-100\">\n    <div class=\"authentication-container\" [class.wider]=\"isSuccessful | async\">\n        <div content class=\"w-100\">\n            <div class=\"row h-100\">\n                <div class=\"col-lg-12\" *ngIf=\"!(isSuccessful | async) && !(failed | async)\">\n                    <div toolbar>\n                        <h2 class=\"h2 text-center\">{{ 'Restore.CreateNew' | translate }}</h2>\n                    </div>\n                    <p class=\"reset-instructions\">Enter a new password for {{ email }}</p>\n                    <form [formGroup]=\"form\" (ngSubmit)=\"submit(model)\">\n                        <formly-form [form]=\"form\" [fields]=\"fields\" [model]=\"model\">\n                            <button type=\"submit\" [disabled]=\"!form.valid || (submitBtnDissabled | async)\" class=\"btn btn-secondary w-100\">\n                                Save\n                            </button>\n                        </formly-form>\n                    </form>\n                </div>\n                <div class=\"message-with-note col-lg-12 h-100\" *ngIf=\"(isSuccessful | async)\">\n                    <div class=\"key-note__wr\">\n                        <img class=\"key-note\" [src]=\"icKeyNote\" alt=\"key note\">\n                    </div>\n                    <h2 class=\"h2 text-center\">Password changed</h2>\n                    <p class=\"text\">Your Pannotation password has been successfully reset.</p>\n                    <p class=\"below-auth text-center\"><a [routerLink]=\"['/sign-in']\">Sign in</a> to your account</p>\n                </div>\n                <div class=\"message-with-note col-lg-12 h-100\" *ngIf=\"(failed | async)\">\n                    <div class=\"key-note__wr\">\n                        <img class=\"key-note\" [src]=\"icKeyNote\" alt=\"key note\">\n                    </div>\n                    <p class=\"text\">{{ 'Restore.Expired' | translate }}</p>\n                    <p class=\"below-auth text-center\"><a [routerLink]=\"['/sign-in']\">Sign in</a> to your account</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/restore-password/restore-password.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/restore-password/restore-password.module.ts ***!
  \*******************************************************************/
/*! exports provided: RestorePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordModule", function() { return RestorePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm2015/ngx-formly-bootstrap.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restore-password/restore-password.component */ "./src/app/views/restore-password/restore-password/restore-password.component.ts");
/* harmony import */ var _restore_password_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restore-password.router */ "./src/app/views/restore-password/restore-password.router.ts");
/* harmony import */ var _services_verifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/verifications.service */ "./src/app/services/verifications.service.ts");
/* harmony import */ var _libs_view_container_view_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/view-container/view-container.module */ "./src/app/libs/view-container/view-container.module.ts");












let RestorePasswordModule = class RestorePasswordModule {
};
RestorePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
                validationMessages: [
                    { name: 'required', message: 'This field is required' },
                ],
            }),
            _libs_view_container_view_container_module__WEBPACK_IMPORTED_MODULE_11__["ViewContainerModule"],
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_restore_password_router__WEBPACK_IMPORTED_MODULE_9__["RestorePasswordRouter"])
        ],
        providers: [_services_verifications_service__WEBPACK_IMPORTED_MODULE_10__["VerificationsService"]],
        declarations: [_restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__["RestorePasswordComponent"]]
    })
], RestorePasswordModule);



/***/ }),

/***/ "./src/app/views/restore-password/restore-password.router.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/restore-password/restore-password.router.ts ***!
  \*******************************************************************/
/*! exports provided: RestorePasswordRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordRouter", function() { return RestorePasswordRouter; });
/* harmony import */ var _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restore-password/restore-password.component */ "./src/app/views/restore-password/restore-password/restore-password.component.ts");

const RestorePasswordRouter = [
    {
        path: '',
        component: _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_0__["RestorePasswordComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/restore-password/restore-password/restore-password.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/restore-password/restore-password/restore-password.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.reset-instructions {\n  margin-bottom: 30px;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: center;\n  font-weight: 500;\n  color: #393e41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL3Jlc3RvcmUtcGFzc3dvcmQvcmVzdG9yZS1wYXNzd29yZC9yZXN0b3JlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9yZXN0b3JlLXBhc3N3b3JkL3Jlc3RvcmUtcGFzc3dvcmQvcmVzdG9yZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBYUEsV0FBQTtBQWdCQSxtQkFBQTtBQVNBLGdCQUFBO0FBQ0E7RUF4QkksWUF5Qm9CO0VBeEJwQixtQkFBQTtFQUNBLGtCQUhxQztFQUlyQyxtQkFKcUM7RUEyQnJDLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUMvQko7QURpQ0k7RUFDSSx5QkFqREs7RUFrREwscUJBbERLO0VBbURMLGNBbERBO0FDbUJSO0FEaUNRO0VBQ0kseUJBcERJO0VBcURKLHFCQXJESTtBQ3NCaEI7QURtQ0k7RUFDSSx5QkExRFE7RUEyRFIscUJBM0RRO0FDMEJoQjtBRG1DUTtFQUNJLHlCQWhFQztFQWlFRCxxQkFqRUM7QUNnQ2I7QURxQ0k7RUFDSSxjQWpFSztFQWtFTCx5QkFBQTtBQ25DUjtBRHFDUTtFQUNJLGlCQUFBO0FDbkNaO0FEdUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDckNSO0FEeUNBO0VBQ0ksY0FBQTtBQ3RDSjtBRHlDQTtFQUNJLHdCQUFBO0FDdENKO0FEeUNBO0VBQ0ksaUJBQUE7RUFDQSxjQTdGWTtFQStGWixtQ0FBQTtBQ3ZDSjtBRHlDSTtFQUNJLGNBcEdLO0FDNkRiO0FEMkNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDeENKO0FEMkNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUN4Q0o7QUQyQ0EsbUJBQUE7QUFDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FDeENKO0FEMkNBO0VBQ0ksZUFBQTtBQ3hDSjtBQ3hHQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNGTlk7QUNpSGhCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVzdG9yZS1wYXNzd29yZC9yZXN0b3JlLXBhc3N3b3JkL3Jlc3RvcmUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWQVJJQUJMRVMgKi9cbiRvcmFuZ2UtcmVkOiAjZWU0MDM2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGNoYXJjb2FsLWdyZXk6ICMzOTNlNDE7XG4kdmVyeS1saWdodC1waW5rOiAjZDlkOWQ5O1xuJGRpbS1ncmV5OiAjMjEyMTIxO1xuJGJyb3duLWdyZXk6ICNhMGEwYTA7XG4kYnJvd25pc2gtZ3JleTogIzYyNjI2MjtcbiRsaWdodC1ncmV5OiAjOTk5OTk5O1xuJHBlYWNoeS1waW5rOiAjZmY4Zjg5O1xuJGxpZ2h0LXBpbms6ICNlZWVlZWU7XG4kZGFyay1ncmV5OiAjM2IzYjNiO1xuXG4vKiBNSVhJTlMgKi9cbkBtaXhpbiBidG4taGVpZ2h0KCRoZWlnaHQsICRidG4tcGFkZGluZzogMzBweCkge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkaGVpZ2h0IC8gMjtcbiAgICBwYWRkaW5nLWxlZnQ6ICRidG4tcGFkZGluZztcbiAgICBwYWRkaW5nLXJpZ2h0OiAkYnRuLXBhZGRpbmc7XG59XG5cbkBtaXhpbiBtdWx0aWxpbmUtZWxsaXBzaXMoJGxpbmVDbGFtcCkge1xuICAgIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lQ2xhbXA7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLyogQ0xBU1MgVkFSSUFCTEVTKi9cblxuJWZsZXgtY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gICAgQGluY2x1ZGUgYnRuLWhlaWdodCg1MHB4KTtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xuXG4gICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aGl0ZSB7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGJyb3duLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgIH1cbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1e1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbn1cbiIsIi8qIFZBUklBQkxFUyAqL1xuLyogTUlYSU5TICovXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xufVxuLmJ0bi13aGl0ZSB7XG4gIGNvbG9yOiAjYTBhMGEwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjYTBhMGEwO1xufVxuLmJ0bi13aGl0ZTpob3ZlciB7XG4gIGJvcmRlci13aWR0aDogM3B4O1xufVxuLmJ0bi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzM5M2U0MTtcbiAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNlZTQwMzY7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1IHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4ucmVzZXQtaW5zdHJ1Y3Rpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzkzZTQxO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlLnNjc3MnO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9iYXNlLnNjc3NcIjtcblxuLnJlc2V0LWluc3RydWN0aW9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/restore-password/restore-password/restore-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/restore-password/restore-password/restore-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RestorePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordComponent", function() { return RestorePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _restore_password_configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restore-password.configs */ "./src/app/views/restore-password/restore-password/restore-password.configs.ts");
/* harmony import */ var _services_verifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/verifications.service */ "./src/app/services/verifications.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _core_classes_form_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/classes/form-base */ "./src/app/core/classes/form-base.ts");










let RestorePasswordComponent = class RestorePasswordComponent extends _core_classes_form_base__WEBPACK_IMPORTED_MODULE_9__["FormBase"] {
    constructor(activatedRoute, router, translate, notificationService, verificationsService) {
        super();
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.translate = translate;
        this.notificationService = notificationService;
        this.verificationsService = verificationsService;
        this.icKeyNote = '/assets/img/ic-key-note-light-gray.svg';
        this.isSuccessful = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.failed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.initForm();
    }
    submit({ password }) {
        this.submitBtnDissabled.next(true);
        this.verificationsService.restore(this.email, this.token, password)
            .subscribe(() => {
            this.notificationService.open('Password.Successful');
            this.submitBtnDissabled.next(false);
            this.router.navigate(['/sign-in']);
        }, () => this.submitBtnDissabled.next(false));
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.model = Object(_restore_password_configs__WEBPACK_IMPORTED_MODULE_6__["getModel"])();
        this.fields = Object(_restore_password_configs__WEBPACK_IMPORTED_MODULE_6__["getFields"])(this.translate);
        this.email = this.activatedRoute.snapshot.queryParamMap.get('email');
        this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
        this.verifyToken();
    }
    verifyToken() {
        if (!this.token || !this.email) {
            this.failed.next(true);
            return;
        }
        this.verificationsService.verifyToken(this.email, this.token)
            .subscribe(() => {
            // do nothing
        }, () => this.failed.next(true));
    }
};
RestorePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _services_verifications_service__WEBPACK_IMPORTED_MODULE_7__["VerificationsService"] }
];
RestorePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restore-password',
        template: __webpack_require__(/*! raw-loader!./restore-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/restore-password/restore-password/restore-password.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ../../../../styles/shared/auth.styles.scss */ "./src/styles/shared/auth.styles.scss"), __webpack_require__(/*! ./restore-password.component.scss */ "./src/app/views/restore-password/restore-password/restore-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
        _services_verifications_service__WEBPACK_IMPORTED_MODULE_7__["VerificationsService"]])
], RestorePasswordComponent);



/***/ }),

/***/ "./src/app/views/restore-password/restore-password/restore-password.configs.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/restore-password/restore-password/restore-password.configs.ts ***!
  \*************************************************************************************/
/*! exports provided: getFields, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFields", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");

function getFields(translator) {
    return [
        {
            key: 'password',
            validators: {
                fieldMatch: {
                    expression: (control) => {
                        const value = control.value;
                        return value.confirmPassword === value.password
                            // avoid displaying the message error when values are empty
                            || !value.password;
                    },
                    message: () => translator.instant('Validation.Common.PasswordsDontMatch'),
                    errorPath: 'confirmPassword',
                },
            },
            fieldGroup: [
                {
                    key: 'password',
                    type: 'input',
                    className: 'auth-field',
                    templateOptions: {
                        type: 'password',
                        label: 'New Password',
                        placeholder: 'Enter new password',
                        required: true,
                        hideRequiredMarker: true,
                        minLength: _app_constants__WEBPACK_IMPORTED_MODULE_0__["PASSWORD_MIN_LENGTH"],
                        maxLength: _app_constants__WEBPACK_IMPORTED_MODULE_0__["PASSWORD_MAX_LENGTH"],
                        pattern: _app_constants__WEBPACK_IMPORTED_MODULE_0__["PASSWORD_PATTERN"]
                    },
                    validation: {
                        messages: {
                            pattern: () => translator.instant('Validation.Common.Password'),
                            minlength: () => translator.instant('Validation.Common.PassLength'),
                            maxlength: () => translator.instant('Validation.Common.PassLength'),
                        }
                    }
                },
                {
                    key: 'confirmPassword',
                    type: 'input',
                    className: 'auth-field',
                    templateOptions: {
                        type: 'password',
                        label: 'Confirm new password',
                        placeholder: 'Confirm new password',
                        required: true,
                        hideRequiredMarker: true
                    },
                },
            ],
        },
    ];
}
function getModel() {
    return {
        password: {
            password: '',
            confirmPassword: ''
        },
    };
}


/***/ })

}]);
//# sourceMappingURL=views-restore-password-restore-password-module-es2015.js.map