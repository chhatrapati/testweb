(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-subscription-subscription-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/subscription/subscription.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/subscription/subscription.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #subscribeTemplate let-inverted=\"inverted\" let-title=\"title\" let-description=\"description\"\n             let-price=\"price\" let-btnLabel=\"btnLabel\" let-btnAction=\"btnAction\">\n    <div class=\"col-12 col-lg-8 col-xl-6\">\n        <div class=\"subscribe-card\" [class.inverted]=\"inverted\">\n            <div class=\"key-note__wr\">\n                <img class=\"key-note\" [src]=\"icKeyNote\" alt=\"key note\">\n            </div>\n            <p class=\"subscribe-card__title\">{{title}}</p>\n            <p class=\"subscribe-card__description\">{{description}}</p>\n            <p class=\"subscribe-card__price\">${{price}}</p>\n            <div class=\"subscribe-card__agreement-block\">\n                <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\"\n                           class=\"custom-control-input\"\n                           (change)=\"subscriptionCheckboxChange()\"\n                           [value]=\"(subscriptionCheckbox | async)\"\n                           id=\"customControlAutosizing\">\n                    <label class=\"custom-control-label\" for=\"customControlAutosizing\">\n                    </label>\n                    <p class=\"brown-grey\">I agree to the <a routerLink=\"/subscription-agreement\">Subscription Agreement</a> and the <a\n                        routerLink=\"/upload-agreement\">Upload Agreement</a></p>\n                </div>\n                <button class=\"btn btn-primary\" (click)=\"handleOption()\" [disabled]=\"!(subscriptionCheckbox | async)\">{{btnLabel}}</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #faqTemplate let-question=\"question\">\n    <div class=\"faq-elem\">\n        <div class=\"faq-elem__head d-flex flex-row\" (click)=\"question.toggle()\">\n            <div class=\"faq-elem__button\">\n                <button type=\"button\" class=\"btn btn-icon\" aria-label=\"Left Align\"\n                        [attr.aria-expanded]=\"!(question.isCollapsed | async)\" aria-controls=\"collapseBasic\">\n                    <span class=\"fa fa-lg fa-plus\" *ngIf=\"(question.isCollapsed | async)\" aria-hidden=\"true\"></span>\n                    <span class=\"fa fa-lg fa-minus\" *ngIf=\"!(question.isCollapsed | async)\" aria-hidden=\"true\"></span>\n                </button>\n            </div>\n            <div class=\"faq-elem__title\">{{question.title}}</div>\n        </div>\n        <div id=\"collapseBasic\" [collapse]=\"(question.isCollapsed | async)\">\n            <div class=\"faq-elem__text\">{{question.text}}</div>\n        </div>\n    </div>\n</ng-template>\n\n<div class=\"container\" *ngIf=\"!subscriptionStatus || !subscriptionStatus.isSubscribed\">\n    <div class=\"subscribe-row row d-flex justify-content-center\">\n        <div class=\"col-12\">\n            <h1 class=\"h1\">Subscribe:</h1>\n        </div>\n        <ng-container *ngFor=\"let subscription of subscriptionContext\"\n                      [ngTemplateOutlet]=\"subscribeTemplate\"\n                      [ngTemplateOutletContext]=\"subscription\"></ng-container>\n    </div>\n    <!--<div class=\"faq-row row\">\n        <div class=\"col-12\">\n            <h2 class=\"h2\">Frequently asked questions:</h2>\n        </div>\n        <div class=\"faq-column col-md-6 col-12\">\n            <ng-container *ngFor=\"let question of faqContext.slice(0, 4)\"\n                          [ngTemplateOutlet]=\"faqTemplate\"\n                          [ngTemplateOutletContext]=\"{question: question}\"></ng-container>\n        </div>\n        <div class=\"faq-column col-md-6 col-12\">\n            <ng-container *ngFor=\"let question of faqContext.slice(4, 8)\"\n                          [ngTemplateOutlet]=\"faqTemplate\"\n                          [ngTemplateOutletContext]=\"{question: question}\"></ng-container>\n        </div>\n    </div>-->\n</div>\n<div *ngIf=\"subscriptionStatus && subscriptionStatus.isSubscribed\">\n    <app-active-subscription [dateFrom]=\"subscriptionStatus.startDate\" [dateTo]=\"subscriptionStatus.endDate\"></app-active-subscription>\n</div>\n"

/***/ }),

/***/ "./src/app/guards/subscribed.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/subscribed.guard.ts ***!
  \********************************************/
/*! exports provided: SubscribedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribedGuard", function() { return SubscribedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var _core_enums_profile_tabs_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/enums/profile-tabs.enum */ "./src/app/core/enums/profile-tabs.enum.ts");





var SubscribedGuard = /** @class */ (function () {
    function SubscribedGuard(sessionStorage, router) {
        this.sessionStorage = sessionStorage;
        this.router = router;
    }
    SubscribedGuard.prototype.canActivate = function (next, state) {
        var user = this.sessionStorage.userStorage;
        if (user && user.isSubscribed) {
            this.router.navigate(['/profile'], { queryParams: { active: _core_enums_profile_tabs_enum__WEBPACK_IMPORTED_MODULE_4__["ProfileTabs"].Subscription } });
            return;
        }
        return true;
    };
    SubscribedGuard.ctorParameters = function () { return [
        { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SubscribedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubscribedGuard);
    return SubscribedGuard;
}());



/***/ }),

/***/ "./src/app/models/faq/faq.ts":
/*!***********************************!*\
  !*** ./src/app/models/faq/faq.ts ***!
  \***********************************/
/*! exports provided: Faq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var Faq = /** @class */ (function () {
    function Faq(title, text) {
        this.title = title;
        this.text = text;
        this.isCollapsed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
    }
    Faq.prototype.toggle = function () {
        this.isCollapsed.next(!this.isCollapsed.getValue());
    };
    Faq.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Faq;
}());



/***/ }),

/***/ "./src/app/views/subscription/subscription-router.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/subscription/subscription-router.module.ts ***!
  \******************************************************************/
/*! exports provided: subscriptionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionRoutes", function() { return subscriptionRoutes; });
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription.component */ "./src/app/views/subscription/subscription.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkout/checkout.component */ "./src/app/views/checkout/checkout.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resolvers/common-info.resolver */ "./src/app/resolvers/common-info.resolver.ts");
/* harmony import */ var _core_enums_checkout_page_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/enums/checkout-page.enum */ "./src/app/core/enums/checkout-page.enum.ts");
/* harmony import */ var src_app_resolvers_subscription_status_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/resolvers/subscription-status.resolver */ "./src/app/resolvers/subscription-status.resolver.ts");
/* harmony import */ var _guards_subscribed_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards/subscribed.guard */ "./src/app/guards/subscribed.guard.ts");







var subscriptionRoutes = [
    {
        path: '',
        component: _subscription_component__WEBPACK_IMPORTED_MODULE_0__["SubscriptionComponent"],
        resolve: {
            subscriptionStatus: src_app_resolvers_subscription_status_resolver__WEBPACK_IMPORTED_MODULE_5__["SubscriptionStatusResolver"],
        }
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_subscribed_guard__WEBPACK_IMPORTED_MODULE_6__["SubscribedGuard"]],
        resolve: {
            countriesList: _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_3__["CommonInfoResolver"],
        },
        data: {
            page: _core_enums_checkout_page_enum__WEBPACK_IMPORTED_MODULE_4__["CheckoutPage"].Subscription
        }
    }
];


/***/ }),

/***/ "./src/app/views/subscription/subscription.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/subscription/subscription.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n:host {\n  display: block;\n  margin-top: 60px;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n@media (max-width: 991px) {\n  :host {\n    margin-bottom: 15px;\n  }\n}\n.h1 {\n  font-family: \"Avenir\", sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 30px;\n  color: #393e41;\n  margin-bottom: 60px;\n}\n.subscribe-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 115px;\n  position: relative;\n  border-radius: 5px;\n  background-color: #ffffff;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n.subscribe-card > *:not(.key-note) {\n  z-index: 2;\n}\n.subscribe-card__title {\n  color: #393e41;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.subscribe-card__description {\n  max-width: 380px;\n  color: #a0a0a0;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  margin-bottom: 60px;\n}\n.subscribe-card__price {\n  color: #393e41;\n  font-size: 45px;\n  font-weight: 800;\n  line-height: 55px;\n  margin-bottom: 60px;\n}\n.subscribe-card__agreement-block {\n  padding: 40px;\n  background-color: #4b4b4b;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .subscribe-card__agreement-block {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .subscribe-card__agreement-block > button {\n    margin-top: 30px;\n  }\n}\n.subscribe-card__agreement-block .custom-control {\n  margin-right: 40px;\n  display: flex;\n}\n@media (max-width: 767px) {\n  .subscribe-card__agreement-block .custom-control {\n    margin-right: 0;\n  }\n}\n.subscribe-card__agreement-block .custom-control > p {\n  margin-bottom: 0;\n}\n.subscribe-card__agreement-block .custom-control > p > a {\n  color: white;\n}\n.subscribe-card__agreement-block .custom-control-label {\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n}\n.subscribe-card__agreement-block .custom-control-label::before, .subscribe-card__agreement-block .custom-control-label::after {\n  top: 3px;\n  transition: none;\n  box-shadow: none !important;\n  width: 24px;\n  height: 24px;\n  left: -35px;\n  cursor: pointer;\n}\n.subscribe-card__agreement-block .custom-control-label::before {\n  border: #393e41 solid 1px;\n}\n.subscribe-card__agreement-block .custom-control-input:checked ~ .custom-control-label::before {\n  border-color: #393e41;\n  background-color: #ffffff;\n}\n.subscribe-card__agreement-block .custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  border-color: #393e41;\n  background-color: #ffffff;\n}\n.subscribe-card.inverted {\n  background-color: #3B3B3B;\n}\n.subscribe-card.inverted .subscribe-card__title, .subscribe-card.inverted .subscribe-card__price {\n  color: #ffffff;\n}\n.key-note {\n  width: 102px;\n  height: 262px;\n}\n.key-note__wr {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  padding-top: 95px;\n  align-items: center;\n  z-index: 1;\n}\n.subscribe-row, .faq-row {\n  margin-bottom: 120px;\n}\n@media (max-width: 991px) {\n  .subscribe-row, .faq-row {\n    margin-bottom: 15px;\n  }\n}\n.question__title {\n  color: #393E41;\n  font-family: \"Avenir\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 2.29px;\n  line-height: 30px;\n  text-transform: uppercase;\n}\n.faq-elem {\n  margin-bottom: 35px;\n}\n.faq-elem__head {\n  cursor: pointer;\n}\n.faq-elem__button .btn {\n  color: #ee4036;\n  margin-right: 30px;\n}\n.faq-elem__title {\n  color: #393e41;\n  font-family: \"Avenir\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 2.29px;\n  line-height: 30px;\n  text-transform: uppercase;\n}\n@media (max-width: 767px) {\n  .faq-elem__title {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n.faq-elem__text {\n  padding-top: 15px;\n  padding-left: 50px;\n  color: #a0a0a0;\n  font-size: 14px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3RkaW4iLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3JjL3N0eWxlcy9ndWlkZS9fbWlzYy5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBU0EsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUNtQlI7QURpQ1E7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDc0JoQjtBRG1DSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUMwQmhCO0FEbUNRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ2dDYjtBRHFDSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDbkNSO0FEcUNRO0VBQ0ksaUJBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQ1I7QUR5Q0E7RUFDSSxjQUFBO0FDdENKO0FEeUNBO0VBQ0ksd0JBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZ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TCxrQkFBQTtBRGlGUjtBQzlFSTtFQUNJLGNGeE1RO0VFeU1SLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRGdGUjtBR2xSUTtFRjRMSjtJQVNRLGVBQUE7SUFDQSxpQkFBQTtFRGlGVjtBQUNGO0FDOUVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNGck5LO0VFc05MLGVBQUE7RUFDQSxpQkFBQTtBRGdGUiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWQVJJQUJMRVMgKi9cbiRvcmFuZ2UtcmVkOiAjZWU0MDM2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGNoYXJjb2FsLWdyZXk6ICMzOTNlNDE7XG4kdmVyeS1saWdodC1waW5rOiAjZDlkOWQ5O1xuJGRpbS1ncmV5OiAjMjEyMTIxO1xuJGJyb3duLWdyZXk6ICNhMGEwYTA7XG4kYnJvd25pc2gtZ3JleTogIzYyNjI2MjtcbiRsaWdodC1ncmV5OiAjOTk5OTk5O1xuJHBlYWNoeS1waW5rOiAjZmY4Zjg5O1xuJGxpZ2h0LXBpbms6ICNlZWVlZWU7XG4kZGFyay1ncmV5OiAjM2IzYjNiO1xuXG4vKiBNSVhJTlMgKi9cbkBtaXhpbiBidG4taGVpZ2h0KCRoZWlnaHQsICRidG4tcGFkZGluZzogMzBweCkge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkaGVpZ2h0IC8gMjtcbiAgICBwYWRkaW5nLWxlZnQ6ICRidG4tcGFkZGluZztcbiAgICBwYWRkaW5nLXJpZ2h0OiAkYnRuLXBhZGRpbmc7XG59XG5cbkBtaXhpbiBtdWx0aWxpbmUtZWxsaXBzaXMoJGxpbmVDbGFtcCkge1xuICAgIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lQ2xhbXA7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLyogQ0xBU1MgVkFSSUFCTEVTKi9cblxuJWZsZXgtY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gICAgQGluY2x1ZGUgYnRuLWhlaWdodCg1MHB4KTtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xuXG4gICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aGl0ZSB7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGJyb3duLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgIH1cbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1e1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbn1cbiIsIi8qIFZBUklBQkxFUyAqL1xuLyogTUlYSU5TICovXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xufVxuLmJ0bi13aGl0ZSB7XG4gIGNvbG9yOiAjYTBhMGEwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjYTBhMGEwO1xufVxuLmJ0bi13aGl0ZTpob3ZlciB7XG4gIGJvcmRlci13aWR0aDogM3B4O1xufVxuLmJ0bi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzM5M2U0MTtcbiAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNlZTQwMzY7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1IHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICA6aG9zdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4uaDEge1xuICBmb250LWZhbWlseTogXCJBdmVuaXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMzOTNlNDE7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zdWJzY3JpYmUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5zdWJzY3JpYmUtY2FyZCA+ICo6bm90KC5rZXktbm90ZSkge1xuICB6LWluZGV4OiAyO1xufVxuLnN1YnNjcmliZS1jYXJkX190aXRsZSB7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnN1YnNjcmliZS1jYXJkX19kZXNjcmlwdGlvbiB7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIGNvbG9yOiAjYTBhMGEwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4uc3Vic2NyaWJlLWNhcmRfX3ByaWNlIHtcbiAgY29sb3I6ICMzOTNlNDE7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4uc3Vic2NyaWJlLWNhcmRfX2FncmVlbWVudC1ibG9jayB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnN1YnNjcmliZS1jYXJkX19hZ3JlZW1lbnQtYmxvY2sge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc3Vic2NyaWJlLWNhcmRfX2FncmVlbWVudC1ibG9jayA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuLnN1YnNjcmliZS1jYXJkX19hZ3JlZW1lbnQtYmxvY2sgLmN1c3RvbS1jb250cm9sIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zdWJzY3JpYmUtY2FyZF9fYWdyZWVtZW50LWJsb2NrIC5jdXN0b20tY29udHJvbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4uc3Vic2NyaWJlLWNhcmRfX2FncmVlbWVudC1ibG9jayAuY3VzdG9tLWNvbnRyb2wgPiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zdWJzY3JpYmUtY2FyZF9fYWdyZWVtZW50LWJsb2NrIC5jdXN0b20tY29udHJvbCA+IHAgPiBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN1YnNjcmliZS1jYXJkX19hZ3JlZW1lbnQtYmxvY2sgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cbi5zdWJzY3JpYmUtY2FyZF9fYWdyZWVtZW50LWJsb2NrIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuc3Vic2NyaWJlLWNhcmRfX2FncmVlbWVudC1ibG9jayAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgdG9wOiAzcHg7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGVmdDogLTM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdWJzY3JpYmUtY2FyZF9fYWdyZWVtZW50LWJsb2NrIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyOiAjMzkzZTQxIHNvbGlkIDFweDtcbn1cbi5zdWJzY3JpYmUtY2FyZF9fYWdyZWVtZW50LWJsb2NrIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uc3Vic2NyaWJlLWNhcmRfX2FncmVlbWVudC1ibG9jayAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6bm90KDpkaXNhYmxlZCk6YWN0aXZlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uc3Vic2NyaWJlLWNhcmQuaW52ZXJ0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0IzQjNCO1xufVxuLnN1YnNjcmliZS1jYXJkLmludmVydGVkIC5zdWJzY3JpYmUtY2FyZF9fdGl0bGUsIC5zdWJzY3JpYmUtY2FyZC5pbnZlcnRlZCAuc3Vic2NyaWJlLWNhcmRfX3ByaWNlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5rZXktbm90ZSB7XG4gIHdpZHRoOiAxMDJweDtcbiAgaGVpZ2h0OiAyNjJweDtcbn1cbi5rZXktbm90ZV9fd3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDk1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zdWJzY3JpYmUtcm93LCAuZmFxLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zdWJzY3JpYmUtcm93LCAuZmFxLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4ucXVlc3Rpb25fX3RpdGxlIHtcbiAgY29sb3I6ICMzOTNFNDE7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjI5cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmFxLWVsZW0ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmZhcS1lbGVtX19oZWFkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZhcS1lbGVtX19idXR0b24gLmJ0biB7XG4gIGNvbG9yOiAjZWU0MDM2O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uZmFxLWVsZW1fX3RpdGxlIHtcbiAgY29sb3I6ICMzOTNlNDE7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAyLjI5cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mYXEtZWxlbV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxufVxuLmZhcS1lbGVtX190ZXh0IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9iYXNlXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmVcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ3VpZGUvbWlzY1wiO1xuXG4ka2V5LW5vdGUtd2lkdGg6IDEwMnB4O1xuJGtleS1ub3RlLWhlaWdodDogMjYycHg7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgQGluY2x1ZGUgaGVpZ2h0LTEwMDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG59XG5cbi5oMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zdWJzY3JpYmUtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDExNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblxuICAgID4gKjpub3QoLmtleS1ub3RlKSB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgICBjb2xvcjogJGJyb3duLWdyZXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB9XG5cbiAgICAmX19hZ3JlZW1lbnQtYmxvY2sge1xuICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG5cbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAmID4gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmN1c3RvbS1jb250cm9sIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmID4gcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgICAgICYgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYtbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG5cbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogIzM5M2U0MSBzb2xpZCAxcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWlucHV0IHtcbiAgICAgICAgICAgICAgICAmOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5pbnZlcnRlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjNCM0I7XG5cbiAgICAgICAgLnN1YnNjcmliZS1jYXJkIHtcbiAgICAgICAgICAgICZfX3RpdGxlLCAmX19wcmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4ua2V5LW5vdGUge1xuICAgIHdpZHRoOiAka2V5LW5vdGUtd2lkdGg7XG4gICAgaGVpZ2h0OiAka2V5LW5vdGUtaGVpZ2h0O1xuXG4gICAgJl9fd3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy10b3A6IDk1cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxufVxuXG4uc3Vic2NyaWJlLXJvdywgLmZhcS1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbn1cblxuLnF1ZXN0aW9uIHtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMzkzRTQxO1xuICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXJcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi4yOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5cbi5mYXEtZWxlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcblxuICAgICZfX2hlYWQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIC5idG4ge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuMjlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG59XG4iLCJAbWl4aW4gaGVpZ2h0LTEwMCgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbn1cblxuQG1peGluIGJsb2NrLXNoYWRvdygpIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbiIsIiRicmVha3BvaW50czogKFxuICAgIC8vIGJhc2ljOlxuICAgIG1vYmlsZTogMzIwcHgsXG4gICAgZXh0cmEtc21hbGw6IDM3N3B4LFxuICAgIHNtYWxsOiA1NzZweCxcbiAgICBtZWRpdW06IDc2N3B4LFxuICAgIGxhcmdlOiA5OTFweCxcbiAgICBleHRyYS1sYXJnZTogMTIwMHB4LFxuICAgIGlwYWQtbGFuZHNjYXBlOiAxMDI1cHgsXG4gICAgbGFwdG9wOiAxMzY2cHhcbik7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KX0pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEB3YXJuIFwiTm8gc3VjaCBicmVha3BvaW50IGluIHRoZSBtYXA6IGAjeyRicmVha3BvaW50fWAuIFwiO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/subscription/subscription.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/subscription/subscription.component.ts ***!
  \**************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/faq/faq */ "./src/app/models/faq/faq.ts");
/* harmony import */ var src_app_core_session_session_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(router, activatedRoute, sessionsStorage) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sessionsStorage = sessionsStorage;
        this.icKeyNote = '/assets/img/ic-key-note-light-gray.svg';
        this.subscriptionCheckbox = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        var subscriptionStatus = activatedRoute.snapshot.data.subscriptionStatus;
        if (subscriptionStatus) {
            this.subscriptionStatus = subscriptionStatus;
            this.updateUserSubscribed();
        }
        this.subscriptionContext = [
            {
                inverted: true,
                title: 'Monthly Subscription',
                description: 'Fully access all non-score materials including articles, media, podcasts, interviews and much more. ' +
                    'Get discounted rates on scores and upload materials at no additional cost.',
                price: '9.99',
                btnLabel: 'Subscribe'
            }
        ];
        this.faqContext = [
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble ' +
                'portions, so that its elements are more readily acted upon by the digestive fluids. Cookery, ' +
                'however, often fails to attain.'),
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble portions, ' +
                'so that its elements are more readily acted upon by the digestive fluids. Cookery, however, often fails to attain.'),
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble ' +
                'portions, so that its elements are more readily acted upon by the digestive fluids. Cookery, ' +
                'however, often fails to attain.'),
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble ' +
                'portions, so that its elements are more readily acted upon by the digestive fluids. Cookery, ' +
                'however, often fails to attain.'),
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble ' +
                'portions, so that its elements are more readily acted upon by the digestive fluids. Cookery, ' +
                'however, often fails to attain.'),
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble ' +
                'portions, so that its elements are more readily acted upon by the digestive fluids. Cookery, ' +
                'however, often fails to attain.'),
            new _models_faq_faq__WEBPACK_IMPORTED_MODULE_3__["Faq"]('Do you think there is an afterlife for animals other than human beings?', 'Proper cookery renders good food material more digestible. When scientifically done, ' +
                'cooking changes each of the food elements, with the exception of fats, in much the same manner ' +
                'as do the digestive juices, and at the same time it breaks up the food by dissolving the soluble ' +
                'portions, so that its elements are more readily acted upon by the digestive fluids. Cookery, ' +
                'however, often fails to attain.'),
        ];
    }
    SubscriptionComponent.prototype.handleOption = function ( /*optionSelected*/) {
        this.router.navigate(['/subscription/checkout']);
    };
    SubscriptionComponent.prototype.subscriptionCheckboxChange = function () {
        this.subscriptionCheckbox.next(!this.subscriptionCheckbox.getValue());
    };
    SubscriptionComponent.prototype.updateUserSubscribed = function () {
        var user = this.sessionsStorage.restore();
        if (user.isSubscribed !== this.subscriptionStatus.isSubscribed) {
            user.isSubscribed = this.subscriptionStatus.isSubscribed;
            this.sessionsStorage.updateUserInfo(user);
        }
    };
    SubscriptionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_core_session_session_storage__WEBPACK_IMPORTED_MODULE_4__["SessionStorage"] }
    ]; };
    SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/subscription/subscription.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/views/subscription/subscription.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_session_session_storage__WEBPACK_IMPORTED_MODULE_4__["SessionStorage"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/views/subscription/subscription.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/subscription/subscription.module.ts ***!
  \***********************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription.component */ "./src/app/views/subscription/subscription.component.ts");
/* harmony import */ var _subscription_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription-router.module */ "./src/app/views/subscription/subscription-router.module.ts");
/* harmony import */ var _services_common_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common-info.service */ "./src/app/services/common-info.service.ts");
/* harmony import */ var _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resolvers/common-info.resolver */ "./src/app/resolvers/common-info.resolver.ts");
/* harmony import */ var _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../checkout/checkout.module */ "./src/app/views/checkout/checkout.module.ts");
/* harmony import */ var src_app_resolvers_subscription_status_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/resolvers/subscription-status.resolver */ "./src/app/resolvers/subscription-status.resolver.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_components_active_subscription_active_subscription_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/active-subscription/active-subscription.module */ "./src/app/components/active-subscription/active-subscription.module.ts");
/* harmony import */ var _guards_subscribed_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../guards/subscribed.guard */ "./src/app/guards/subscribed.guard.ts");














var SubscriptionModule = /** @class */ (function () {
    function SubscriptionModule() {
    }
    SubscriptionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_subscription_router_module__WEBPACK_IMPORTED_MODULE_6__["subscriptionRoutes"]),
                _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_9__["CheckoutModule"],
                src_app_components_active_subscription_active_subscription_module__WEBPACK_IMPORTED_MODULE_12__["ActiveSubscriptionModule"]
            ],
            providers: [
                _resolvers_common_info_resolver__WEBPACK_IMPORTED_MODULE_8__["CommonInfoResolver"],
                _services_common_info_service__WEBPACK_IMPORTED_MODULE_7__["CommonInfoService"],
                src_app_services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"],
                src_app_resolvers_subscription_status_resolver__WEBPACK_IMPORTED_MODULE_10__["SubscriptionStatusResolver"],
                _guards_subscribed_guard__WEBPACK_IMPORTED_MODULE_13__["SubscribedGuard"]
            ]
        })
    ], SubscriptionModule);
    return SubscriptionModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-subscription-subscription-module-es5.js.map