(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"],{

/***/ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js ***!
  \*********************************************************************/
/*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Slick component
 */
var SlickCarouselComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SlickCarouselComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides = [];
        this.initialized = false;
        this._removedSlides = [];
        this._addedSlides = [];
    }
    /**
     * On component destroy
     */
    /**
     * On component destroy
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngOnDestroy = /**
     * On component destroy
     * @return {?}
     */
    function () {
        this.unslick();
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.ngAfterViewChecked();
    };
    /**
     * On component view checked
     */
    /**
     * On component view checked
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngAfterViewChecked = /**
     * On component view checked
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            var nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) { // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                function (slickItem) {
                    _this.slides.push(slickItem);
                    _this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    }));
                }));
                this._addedSlides = [];
                this._removedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                function (slickItem) {
                    /** @type {?} */
                    var idx = _this.slides.indexOf(slickItem);
                    _this.slides = _this.slides.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return s !== slickItem; }));
                    _this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.$instance.slick('slickRemove', idx);
                    }));
                }));
                this._removedSlides = [];
            }
        }
    };
    /**
     * init slick
     */
    /**
     * init slick
     * @return {?}
     */
    SlickCarouselComponent.prototype.initSlick = /**
     * init slick
     * @return {?}
     */
    function () {
        var _this = this;
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance = jQuery(_this.el.nativeElement);
            _this.$instance.on('init', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            function (event, slick) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.init.emit({ event: event, slick: slick });
                }));
            }));
            _this.$instance.slick(_this.config);
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.initialized = true;
                _this.currentIndex = (_this.config && _this.config.initialSlide) ? _this.config.initialSlide : 0;
            }));
            _this.$instance.on('afterChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @return {?}
             */
            function (event, slick, currentSlide) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.afterChange.emit({ event: event, slick: slick, currentSlide: currentSlide });
                    _this.currentIndex = currentSlide;
                }));
            }));
            _this.$instance.on('beforeChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @param {?} nextSlide
             * @return {?}
             */
            function (event, slick, currentSlide, nextSlide) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.beforeChange.emit({ event: event, slick: slick, currentSlide: currentSlide, nextSlide: nextSlide });
                    _this.currentIndex = nextSlide;
                }));
            }));
            _this.$instance.on('breakpoint', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} breakpoint
             * @return {?}
             */
            function (event, slick, breakpoint) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.breakpoint.emit({ event: event, slick: slick, breakpoint: breakpoint });
                }));
            }));
            _this.$instance.on('destroy', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            function (event, slick) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.destroy.emit({ event: event, slick: slick });
                    _this.initialized = false;
                }));
            }));
        }));
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickCarouselComponent.prototype.addSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        this._addedSlides.push(slickItem);
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickCarouselComponent.prototype.removeSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        this._removedSlides.push(slickItem);
    };
    /**
     * Slick Method
     */
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickGoTo = /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickGoTo', index);
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickNext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickNext');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPrev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickPrev');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPause = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickPause');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickPlay');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.unslick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.$instance) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.$instance.slick('unslick');
            }));
            this.$instance = undefined;
        }
        this.initialized = false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.initialized) {
            /** @type {?} */
            var config = changes['config'];
            if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
                /** @type {?} */
                var refresh_1 = config.currentValue['refresh'];
                /** @type {?} */
                var newOptions_1 = Object.assign({}, config.currentValue);
                delete newOptions_1['refresh'];
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.$instance.slick('slickSetOption', newOptions_1, refresh_1);
                }));
            }
        }
    };
    SlickCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-slick-carousel',
                    exportAs: 'slick-carousel',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return SlickCarouselComponent; })),
                            multi: true
                        }],
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    SlickCarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    SlickCarouselComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return SlickCarouselComponent;
}());
if (false) {}
var SlickItemDirective = /** @class */ (function () {
    function SlickItemDirective(el, platformId, carousel) {
        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.addSlide(this);
        }
    };
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.removeSlide(this);
        }
    };
    SlickItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngxSlickItem]',
                },] }
    ];
    /** @nocollapse */
    SlickItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: SlickCarouselComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
    ]; };
    return SlickItemDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlickCarouselModule = /** @class */ (function () {
    function SlickCarouselModule() {
    }
    SlickCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    declarations: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ],
                    exports: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ]
                },] }
    ];
    return SlickCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-slick-carousel.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #aboudPannotationContent let-descr=\"descr\" let-title=\"title\" let-img=\"titleImg\">\n    <div class=\"about-content col-md-4\">\n        <p class=\"about-content__description mb-5 px-3\">{{descr}}</p>\n        <div class=\"about-content__title-block\">\n            <img class=\"about-content__title-img\" src={{img}} />\n            <h3 class=\"about-content__title pl-4 py-1 my-0\">{{title}}</h3>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #subscriptionContent let-title=\"title\" let-descr=\"descr\">\n    <div class=\"subscription-content col-md-6\">\n        <h3 class=\"subscription-content__title\">{{title}}</h3>\n        <p class=\"subscription-content__description\">{{descr}}</p>\n    </div>\n</ng-template>\n\n<div class=\"container-fluid\">\n    <div class=\"row block block-heading\">\n        <ngx-slick-carousel #slickMain\n            [config]=\"mainRowConfig | async\">\n            <div class=\"slide\" *ngFor=\"let slide of slides\" ngxSlickItem>\n                <div class=\"slide-background\">\n                    <div class=\"slide-dim\"></div>\n                    <img [src]=\"slide.img\" class=\"slide-background__img\" alt=\"slide\">\n                </div>\n                <div class=\"slide-content\">\n                    <div class=\"w-100 h-100 d-flex justify-content-center align-items-center\">\n                        <div class=\"row w-100 justify-content-center\">\n                            <div class=\"col-10 text-center d-flex flex-column align-items-center\">\n                                <h1 class=\"block-heading__title text-uppercase\">{{slide.title}}</h1>\n                                <p class=\"block-heading__description\">{{slide.descr}}</p>\n                                <a [routerLink]=\"[slide.linkRoute]\" class=\"btn btn-primary d-flex align-items-center\">{{slide.linkText}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ngx-slick-carousel>\n    </div>\n\n    <div class=\"row block block-about-pannotation\">\n        <div class=\"container\">\n            <h2 class=\"h2\">About PanNotation:</h2>\n            <div class=\"row container about-block-wrapper\">\n                <div class=\"d-flex align-items-center\">\n                    <div class=\"row\">\n                        <ng-container *ngFor=\"let block of aboutBlocks\"\n                                      [ngTemplateOutlet]=\"aboudPannotationContent\"\n                                      [ngTemplateOutletContext]=\"block\">\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row block block-featured\">\n        <div class=\"container\" #cardsAnchor>\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\">\n                    <h2 class=\"h2\">Featured Scores:</h2>\n                </div>\n                <div class=\"col-6 d-md-flex d-none justify-content-end align-items-start\">\n                    <button [disabled]=\"leftArrowBtnDisabled\"\n                            (click)=\"slickModal.slickPrev()\"\n                            class=\"block-featured-actions\">\n                        <img src=\"assets/img/ic-arrow-left.svg\" alt=\"Arrow left\">\n                    </button>\n                    <button [disabled]=\"rightArrowBtnDisabled\"\n                            (click)=\"slickModal.slickNext()\"\n                            class=\"block-featured-actions\">\n                        <img src=\"assets/img/ic-arrow-right.svg\" alt=\"Arrow right\">\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"container cards-row\">\n            <div class=\"cards-wrapper\">\n                <ngx-slick-carousel #slickModal=\"slick-carousel\"\n                                    (beforeChange)=\"beforeSlideChange($event)\"\n                                    [config]=\"cardsRowConfig | async\">\n                    <app-search-item [songsheet]=\"card\" [forSlider]=\"true\" #slickItem *ngFor=\"let card of featured | async;trackBy: trackByFn\" ngxSlickItem\n                                   class=\"featured-card\"></app-search-item>\n                </ngx-slick-carousel>\n            </div>\n        </div>\n    </div>\n    <div class=\"row block block-subscription\">\n        <div class=\"container\">\n            <h2 class=\"h2\">Subscription details:</h2>\n            <div class=\"row\">\n                <div class=\"col-xl-8 d-flex align-items-center\">\n                    <div class=\"row\">\n                        <ng-container *ngFor=\"let subscription of subscriptions\"\n                                      [ngTemplateOutlet]=\"subscriptionContent\"\n                                      [ngTemplateOutletContext]=\"subscription\">\n                        </ng-container>\n                    </div>\n                </div>\n                <div class=\"col-xl-4\">\n                    <div class=\"subscription-card\">\n                        <p class=\"subscription-card__title\">Monthly Subscription</p>\n                        <p class=\"subscription-card__description\">Fully access all non-score materials including articles, media, podcasts, interviews and much more. Get discounted rates on scores and upload materials at no additional cost.</p>\n                        <p class=\"subscription-card__price\">$9.99</p>\n                        <a [routerLink]=\"['/subscription']\" class=\"btn btn-primary subscription-card__button\">Subscribe</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row block block-ads\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"ads\">\n                        <p class=\"ads-title\">Academic Article, Blogs, Audio Recording, Interviews, Podcasts and other materials coming soon</p>\n                        <p class=\"ads-description\">For one low subscription fee</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/enums/other-files-types.ts":
/*!*************************************************!*\
  !*** ./src/app/core/enums/other-files-types.ts ***!
  \*************************************************/
/*! exports provided: OtherFilesTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherFilesTypes", function() { return OtherFilesTypes; });
var OtherFilesTypes;
(function (OtherFilesTypes) {
    OtherFilesTypes["Songsheet"] = "Music Score";
    OtherFilesTypes["AcademicPublication"] = "Academic Publication";
    OtherFilesTypes["NonAcademicArticle"] = "Article";
    OtherFilesTypes["AudioPublication"] = "Podcast or Audio Recording";
    OtherFilesTypes["Steelband"] = "Steelband Profile";
    OtherFilesTypes["Other"] = "Other";
})(OtherFilesTypes || (OtherFilesTypes = {}));


/***/ }),

/***/ "./src/app/resolvers/songsheet-top.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/resolvers/songsheet-top.resolver.ts ***!
  \*****************************************************/
/*! exports provided: SongsheetTopResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetTopResolver", function() { return SongsheetTopResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/songsheets.service */ "./src/app/services/songsheets.service.ts");




var SongsheetTopResolver = /** @class */ (function () {
    function SongsheetTopResolver(songsheetsService) {
        this.songsheetsService = songsheetsService;
    }
    SongsheetTopResolver.prototype.resolve = function (route, state) {
        return this.songsheetsService.topList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }));
    };
    SongsheetTopResolver.ctorParameters = function () { return [
        { type: _services_songsheets_service__WEBPACK_IMPORTED_MODULE_3__["SongsheetsService"] }
    ]; };
    SongsheetTopResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songsheets_service__WEBPACK_IMPORTED_MODULE_3__["SongsheetsService"]])
    ], SongsheetTopResolver);
    return SongsheetTopResolver;
}());



/***/ }),

/***/ "./src/app/views/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _resolvers_songsheet_top_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resolvers/songsheet-top.resolver */ "./src/app/resolvers/songsheet-top.resolver.ts");






var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        resolve: {
            featured: _resolvers_songsheet_top_resolver__WEBPACK_IMPORTED_MODULE_5__["SongsheetTopResolver"]
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n:host {\n  background-color: #ffffff;\n}\n.block {\n  margin-bottom: 120px;\n}\n.block-heading .btn {\n  height: 58px;\n  border-radius: 29px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.block-heading .btn:hover {\n  color: white;\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.block-heading ::ng-deep .carousel-indicators li {\n  width: 7px;\n  height: 7px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  opacity: 0.3;\n  margin: 0 7px;\n}\n.block-heading ::ng-deep .carousel-indicators li.active {\n  opacity: 1;\n}\n.block-heading ::ng-deep .carousel-control {\n  display: none;\n}\n.block-heading__title {\n  margin-bottom: 10px;\n  font-size: 54px;\n  font-weight: 900;\n  line-height: 1.26;\n  letter-spacing: 2.5px;\n  text-align: center;\n  color: #ffffff;\n  font-family: \"Avenir\", sans-serif;\n}\n@media (max-width: 576px) {\n  .block-heading__title {\n    color: #393e41;\n    text-align: left;\n    font-size: 24px;\n    font-weight: 900;\n    line-height: 1.42;\n    letter-spacing: 1.11px;\n  }\n}\n.block-heading__description {\n  max-width: 760px;\n  margin: 0 auto 40px;\n  font-size: 18px;\n  line-height: 1.56;\n  text-align: center;\n  color: #ffffff;\n}\n@media (max-width: 576px) {\n  .block-heading__description {\n    color: #393e41;\n    text-align: left;\n  }\n}\n.block-heading ::ng-deep .slick-dots {\n  bottom: 20px;\n}\n.block-heading ::ng-deep .slick-dots > li {\n  margin: 0 1px;\n}\n.block-heading ::ng-deep .slick-dots > li > button::before {\n  font-size: 8px;\n  color: #ffffff;\n}\n.block-heading ::ng-deep .slick-dots > li .slick-active {\n  opacity: 0.3;\n}\n.block-featured .featured-card {\n  margin-left: 30px;\n  outline: none;\n}\n@media (max-width: 1200px) {\n  .block-featured .featured-card {\n    margin-left: 60px !important;\n  }\n}\n@media (max-width: 991px) {\n  .block-featured .featured-card {\n    margin-left: 120px !important;\n  }\n}\n@media (max-width: 767px) {\n  .block-featured .featured-card {\n    margin: 0 281px !important;\n  }\n}\n.block-featured .featured-card:first-child {\n  margin-left: 0;\n}\n.block-featured-actions {\n  margin-top: 20px;\n  background-color: transparent;\n  border: none;\n  padding: 0 15px;\n}\n.block-featured-actions:disabled {\n  opacity: 0.5;\n  cursor: pointer;\n}\n.block-featured ::ng-deep .slick-next {\n  right: -25px;\n  z-index: 1;\n}\n.block-featured ::ng-deep .slick-next::before {\n  content: url(/assets/img/ic-right-arrow.svg);\n}\n.block-featured ::ng-deep .slick-prev {\n  left: -25px;\n  z-index: 1;\n}\n.block-featured ::ng-deep .slick-prev::before {\n  content: url(/assets/img/ic-left-arrow.svg);\n}\n@media (max-width: 576px) {\n  .block-featured ::ng-deep .slick-next {\n    right: 0;\n  }\n  .block-featured ::ng-deep .slick-prev {\n    left: 0;\n  }\n}\n.slide {\n  position: relative;\n}\n.slide-content {\n  position: relative;\n  z-index: 2;\n  height: 640px;\n}\n@media (max-width: 576px) {\n  .slide-content {\n    height: auto;\n  }\n}\n.slide-dim {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.25);\n}\n.slide-background {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n}\n@media (max-width: 576px) {\n  .slide-background {\n    position: relative;\n    height: 270px;\n  }\n}\n.slide-background__img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  min-width: 100%;\n  height: 100%;\n}\n@media (max-width: 767px) {\n  .about-block-wrapper {\n    margin: auto;\n  }\n}\n.about-content {\n  display: flex;\n  flex-direction: column;\n}\n.about-content .about-content__description {\n  font-size: 14px;\n  line-height: 1.57;\n  color: #393e41;\n}\n.about-content .about-content__title-block {\n  height: 120px;\n  margin-top: auto;\n  border-radius: 5px;\n  background-color: #3b3b3b;\n  color: #ffffff;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .about-content .about-content__title-block {\n    margin-bottom: 50px;\n    margin-top: -30px;\n    height: 100px;\n  }\n}\n.about-content .about-content__title-block .about-content__title-img {\n  height: 58px;\n  position: absolute;\n  top: 50%;\n  transform: translate(45px, -50%);\n}\n.about-content .about-content__title-block .about-content__title {\n  border-left: 4px solid #ee4036;\n  position: relative;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.about-content:nth-child(2n) .about-content__title-block {\n  background-color: #eeeeee;\n  color: #393e41;\n}\n.about-content:nth-child(2n) .about-content__description {\n  color: #626262;\n}\n.cards-wrapper {\n  width: 100%;\n}\n.cards-row .card + .cards-row .card {\n  margin-right: 30px;\n}\n@media (max-width: 576px) {\n  .subscription-content {\n    margin-bottom: 30px;\n  }\n}\n.subscription-content__title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 28px;\n  padding-left: 16px;\n  border-left: 4px solid #ee4036;\n  font-family: Avenir, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 2.29px;\n  line-height: 1.67;\n  color: #393e41;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.subscription-content__description {\n  font-size: 14px;\n  line-height: 1.57;\n  color: #a0a0a0;\n  max-width: 270px;\n}\n@media (max-width: 991px) {\n  .subscription-content__description {\n    max-width: 100%;\n  }\n}\n.subscription-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 25px;\n  background-color: #3b3b3b;\n}\n.subscription-card__title {\n  font-size: 18px;\n  line-height: 1.33;\n  font-weight: bold;\n  color: #ffffff;\n  text-align: center;\n}\n.subscription-card__description {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #a0a0a0;\n  text-align: center;\n}\n.subscription-card__price {\n  font-size: 45px;\n  font-weight: 800;\n  text-align: center;\n  color: #ffffff;\n}\n.subscription-card__button {\n  height: 56px;\n  border-radius: 28px;\n  padding-left: 30px;\n  padding-right: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.subscription-card__button:hover {\n  color: white;\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.ads {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 229px;\n  padding-left: 50px;\n  background-image: url(\"/assets/img/im-ads-banner.jpg\");\n  background-image: -webkit-image-set(url(\"/assets/img/im-ads-banner.jpg\") 1x, url(\"/assets/img/im-ads-banner@2x.jpg\") 2x, url(\"/assets/img/im-ads-banner@3x.jpg\") 3x);\n  background-image: image-set(url(\"/assets/img/im-ads-banner.jpg\") 1x, url(\"/assets/img/im-ads-banner@2x.jpg\") 2x, url(\"/assets/img/im-ads-banner@3x.jpg\") 3x);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n@media (max-width: 576px) {\n  .ads {\n    height: 320px;\n    padding-left: 30px;\n  }\n}\n.ads-title {\n  width: 100%;\n  max-width: 422px;\n  font-family: Avenir, sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.58;\n  margin-bottom: 5px;\n  color: #ffffff;\n}\n@media (max-width: 576px) {\n  .ads-title {\n    font-size: 20px;\n    line-height: 1.5;\n  }\n}\n.ads-description {\n  width: 100%;\n  max-width: 291px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #c2c2c2;\n}\n@media (max-width: 576px) {\n  .ads-description {\n    font-size: 16px;\n    line-height: 1.5;\n    color: #ffffff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBU0EsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUNtQlI7QURpQ1E7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDc0JoQjtBRG1DSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUMwQmhCO0FEbUNRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ2dDYjtBRHFDSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDbkNSO0FEcUNRO0VBQ0ksaUJBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQ1I7QUR5Q0E7RUFDSSxjQUFBO0FDdENKO0FEeUNBO0VBQ0ksd0JBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZO0VBK0ZaLG1DQUFBO0FDdkNKO0FEeUNJO0VBQ0ksY0FwR0s7QUM2RGI7QUQyQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxX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QUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNGelZBO0FDZ1pSO0FDcERJO0VGL1VBLFlFZ1Z3QjtFRi9VeEIsbUJBQUE7RUFDQSxrQkU4VThCO0VGN1U5QixtQkU2VThCO0VBQzFCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEeURSO0FDdkRRO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUR5RFo7QUNwREE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzREFBQTtFQUNBLG9LQUNJO0VBS0osNEpBQ0k7RUFNSixzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUQyQ0o7QUVqYVE7RUQ4VlI7SUEyQlEsYUFBQTtJQUNBLGtCQUFBO0VENENOO0FBQ0Y7QUMxQ0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRmpaQTtBQzZiUjtBRWpiUTtFRDZYSjtJQVdRLGVBQUE7SUFDQSxnQkFBQTtFRDZDVjtBQUNGO0FDMUNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRDRDUjtBRTliUTtFRDZZSjtJQVFRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNGbmFKO0VDZ2ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWQVJJQUJMRVMgKi9cbiRvcmFuZ2UtcmVkOiAjZWU0MDM2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGNoYXJjb2FsLWdyZXk6ICMzOTNlNDE7XG4kdmVyeS1saWdodC1waW5rOiAjZDlkOWQ5O1xuJGRpbS1ncmV5OiAjMjEyMTIxO1xuJGJyb3duLWdyZXk6ICNhMGEwYTA7XG4kYnJvd25pc2gtZ3JleTogIzYyNjI2MjtcbiRsaWdodC1ncmV5OiAjOTk5OTk5O1xuJHBlYWNoeS1waW5rOiAjZmY4Zjg5O1xuJGxpZ2h0LXBpbms6ICNlZWVlZWU7XG4kZGFyay1ncmV5OiAjM2IzYjNiO1xuXG4vKiBNSVhJTlMgKi9cbkBtaXhpbiBidG4taGVpZ2h0KCRoZWlnaHQsICRidG4tcGFkZGluZzogMzBweCkge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkaGVpZ2h0IC8gMjtcbiAgICBwYWRkaW5nLWxlZnQ6ICRidG4tcGFkZGluZztcbiAgICBwYWRkaW5nLXJpZ2h0OiAkYnRuLXBhZGRpbmc7XG59XG5cbkBtaXhpbiBtdWx0aWxpbmUtZWxsaXBzaXMoJGxpbmVDbGFtcCkge1xuICAgIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lQ2xhbXA7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLyogQ0xBU1MgVkFSSUFCTEVTKi9cblxuJWZsZXgtY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gICAgQGluY2x1ZGUgYnRuLWhlaWdodCg1MHB4KTtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xuXG4gICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aGl0ZSB7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGJyb3duLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgIH1cbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1e1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbn1cbiIsIi8qIFZBUklBQkxFUyAqL1xuLyogTUlYSU5TICovXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xufVxuLmJ0bi13aGl0ZSB7XG4gIGNvbG9yOiAjYTBhMGEwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjYTBhMGEwO1xufVxuLmJ0bi13aGl0ZTpob3ZlciB7XG4gIGJvcmRlci13aWR0aDogM3B4O1xufVxuLmJ0bi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzM5M2U0MTtcbiAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNlZTQwMzY7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1IHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xufVxuLmJsb2NrLWhlYWRpbmcgLmJ0biB7XG4gIGhlaWdodDogNThweDtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLmJsb2NrLWhlYWRpbmcgLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJsb2NrLWhlYWRpbmcgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMC4zO1xuICBtYXJnaW46IDAgN3B4O1xufVxuLmJsb2NrLWhlYWRpbmcgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYmxvY2staGVhZGluZyA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJsb2NrLWhlYWRpbmdfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiA1NHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS4yNjtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJBdmVuaXJcIiwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYmxvY2staGVhZGluZ19fdGl0bGUge1xuICAgIGNvbG9yOiAjMzkzZTQxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMTFweDtcbiAgfVxufVxuLmJsb2NrLWhlYWRpbmdfX2Rlc2NyaXB0aW9uIHtcbiAgbWF4LXdpZHRoOiA3NjBweDtcbiAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS41NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYmxvY2staGVhZGluZ19fZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjMzkzZTQxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5ibG9jay1oZWFkaW5nIDo6bmctZGVlcCAuc2xpY2stZG90cyB7XG4gIGJvdHRvbTogMjBweDtcbn1cbi5ibG9jay1oZWFkaW5nIDo6bmctZGVlcCAuc2xpY2stZG90cyA+IGxpIHtcbiAgbWFyZ2luOiAwIDFweDtcbn1cbi5ibG9jay1oZWFkaW5nIDo6bmctZGVlcCAuc2xpY2stZG90cyA+IGxpID4gYnV0dG9uOjpiZWZvcmUge1xuICBmb250LXNpemU6IDhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmxvY2staGVhZGluZyA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgPiBsaSAuc2xpY2stYWN0aXZlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmJsb2NrLWZlYXR1cmVkIC5mZWF0dXJlZC1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ibG9jay1mZWF0dXJlZCAuZmVhdHVyZWQtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ibG9jay1mZWF0dXJlZCAuZmVhdHVyZWQtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmxvY2stZmVhdHVyZWQgLmZlYXR1cmVkLWNhcmQge1xuICAgIG1hcmdpbjogMCAyODFweCAhaW1wb3J0YW50O1xuICB9XG59XG4uYmxvY2stZmVhdHVyZWQgLmZlYXR1cmVkLWNhcmQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5ibG9jay1mZWF0dXJlZC1hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmJsb2NrLWZlYXR1cmVkLWFjdGlvbnM6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibG9jay1mZWF0dXJlZCA6Om5nLWRlZXAgLnNsaWNrLW5leHQge1xuICByaWdodDogLTI1cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uYmxvY2stZmVhdHVyZWQgOjpuZy1kZWVwIC5zbGljay1uZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pbWcvaWMtcmlnaHQtYXJyb3cuc3ZnKTtcbn1cbi5ibG9jay1mZWF0dXJlZCA6Om5nLWRlZXAgLnNsaWNrLXByZXYge1xuICBsZWZ0OiAtMjVweDtcbiAgei1pbmRleDogMTtcbn1cbi5ibG9jay1mZWF0dXJlZCA6Om5nLWRlZXAgLnNsaWNrLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ltZy9pYy1sZWZ0LWFycm93LnN2Zyk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmJsb2NrLWZlYXR1cmVkIDo6bmctZGVlcCAuc2xpY2stbmV4dCB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmJsb2NrLWZlYXR1cmVkIDo6bmctZGVlcCAuc2xpY2stcHJldiB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiA2NDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2xpZGUtY29udGVudCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4uc2xpZGUtZGltIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uc2xpZGUtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zbGlkZS1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgfVxufVxuLnNsaWRlLWJhY2tncm91bmRfX2ltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWJvdXQtYmxvY2std3JhcHBlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hYm91dC1jb250ZW50IC5hYm91dC1jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTc7XG4gIGNvbG9yOiAjMzkzZTQxO1xufVxuLmFib3V0LWNvbnRlbnQgLmFib3V0LWNvbnRlbnRfX3RpdGxlLWJsb2NrIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hYm91dC1jb250ZW50IC5hYm91dC1jb250ZW50X190aXRsZS1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG4uYWJvdXQtY29udGVudCAuYWJvdXQtY29udGVudF9fdGl0bGUtYmxvY2sgLmFib3V0LWNvbnRlbnRfX3RpdGxlLWltZyB7XG4gIGhlaWdodDogNThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDVweCwgLTUwJSk7XG59XG4uYWJvdXQtY29udGVudCAuYWJvdXQtY29udGVudF9fdGl0bGUtYmxvY2sgLmFib3V0LWNvbnRlbnRfX3RpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZWU0MDM2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cbi5hYm91dC1jb250ZW50Om50aC1jaGlsZCgybikgLmFib3V0LWNvbnRlbnRfX3RpdGxlLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgY29sb3I6ICMzOTNlNDE7XG59XG4uYWJvdXQtY29udGVudDpudGgtY2hpbGQoMm4pIC5hYm91dC1jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjNjI2MjYyO1xufVxuXG4uY2FyZHMtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRzLXJvdyAuY2FyZCArIC5jYXJkcy1yb3cgLmNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc3Vic2NyaXB0aW9uLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5zdWJzY3JpcHRpb24tY29udGVudF9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZWU0MDM2O1xuICBmb250LWZhbWlseTogQXZlbmlyLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAyLjI5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBjb2xvcjogIzM5M2U0MTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zdWJzY3JpcHRpb24tY29udGVudF9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU3O1xuICBjb2xvcjogI2EwYTBhMDtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc3Vic2NyaXB0aW9uLWNvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnN1YnNjcmlwdGlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbn1cbi5zdWJzY3JpcHRpb24tY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJzY3JpcHRpb24tY2FyZF9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjYTBhMGEwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3Vic2NyaXB0aW9uLWNhcmRfX3ByaWNlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnN1YnNjcmlwdGlvbi1jYXJkX19idXR0b24ge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3Vic2NyaXB0aW9uLWNhcmRfX2J1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuXG4uYWRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2ltLWFkcy1iYW5uZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWltYWdlLXNldCh1cmwoXCIvYXNzZXRzL2ltZy9pbS1hZHMtYmFubmVyLmpwZ1wiKSAxeCwgdXJsKFwiL2Fzc2V0cy9pbWcvaW0tYWRzLWJhbm5lckAyeC5qcGdcIikgMngsIHVybChcIi9hc3NldHMvaW1nL2ltLWFkcy1iYW5uZXJAM3guanBnXCIpIDN4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogaW1hZ2Utc2V0KHVybChcIi9hc3NldHMvaW1nL2ltLWFkcy1iYW5uZXIuanBnXCIpIDF4LCB1cmwoXCIvYXNzZXRzL2ltZy9pbS1hZHMtYmFubmVyQDJ4LmpwZ1wiKSAyeCwgdXJsKFwiL2Fzc2V0cy9pbWcvaW0tYWRzLWJhbm5lckAzeC5qcGdcIikgM3gpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hZHMge1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICB9XG59XG4uYWRzLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIycHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmFkcy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cbi5hZHMtZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyOTFweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2MyYzJjMjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWRzLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvYmFzZVwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlXCI7XG5cbjpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG59XG5cbi5ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG5cbiAgICAmLWhlYWRpbmcge1xuICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ0bi1oZWlnaHQoNThweCk7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgICAgICAgICAgICAgJGluZGljYXRvci1zaXplOiA3cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRpbmRpY2F0b3Itc2l6ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRpbmRpY2F0b3Itc2l6ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgN3B4O1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcm91c2VsLWNvbnRyb2wge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI2O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIC5zbGljay1kb3RzIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAmID4gbGkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXB4O1xuICAgICAgICAgICAgICAgICAgICAmID4gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc2xpY2stYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtZmVhdHVyZWQge1xuICAgICAgICAkaW1hZ2Utd2lkdGg6IDIwM3B4O1xuXG4gICAgICAgIC5mZWF0dXJlZC1jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKGV4dHJhLWxhcmdlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyODFweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hY3Rpb25zIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuXG4gICAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIC5zbGljay1uZXh0IHtcbiAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ltZy9pYy1yaWdodC1hcnJvdy5zdmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWNrLXByZXYge1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pbWcvaWMtbGVmdC1hcnJvdy5zdmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgICAgIC5zbGljay1uZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNsaWNrLXByZXYge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNsaWRlIHtcbiAgICAkc2xpZGVyLXNpemU6IDY0MHB4O1xuICAgICRzbGlkZXItc2l6ZS1tb2JpbGU6IDI3MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYtY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgaGVpZ2h0OiAkc2xpZGVyLXNpemU7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1kaW0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICB9XG5cbiAgICAmLWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMDtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKHNtYWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRzbGlkZXItc2l6ZS1tb2JpbGU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFib3V0LWJsb2NrLXdyYXBwZXIge1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuYWJvdXQtY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU3O1xuICAgICAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgfVxuICAgIFxuICAgIC5hYm91dC1jb250ZW50X190aXRsZS1ibG9jayB7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWNvbnRlbnRfX3RpdGxlLWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ1cHgsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWNvbnRlbnRfX3RpdGxlIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJG9yYW5nZS1yZWQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgLmFib3V0LWNvbnRlbnRfX3RpdGxlLWJsb2NrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1waW5rO1xuICAgICAgICAgICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0LWNvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkYnJvd25pc2gtZ3JleTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmRzIHtcblxuICAgICYtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYtcm93IHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgJiArICYge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN1YnNjcmlwdGlvbi1jb250ZW50IHtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHNtYWxsKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkb3JhbmdlLXJlZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEF2ZW5pciwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi4yOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41NztcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN1YnNjcmlwdGlvbi1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JleTtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBidG4taGVpZ2h0KDU2cHgsIDMwcHgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIyOXB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2ltLWFkcy1iYW5uZXIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIC13ZWJraXQtaW1hZ2Utc2V0KFxuICAgICAgICAgICAgdXJsKFwiL2Fzc2V0cy9pbWcvaW0tYWRzLWJhbm5lci5qcGdcIikgMXgsXG4gICAgICAgICAgICB1cmwoXCIvYXNzZXRzL2ltZy9pbS1hZHMtYmFubmVyQDJ4LmpwZ1wiKSAyeCxcbiAgICAgICAgICAgIHVybChcIi9hc3NldHMvaW1nL2ltLWFkcy1iYW5uZXJAM3guanBnXCIpIDN4LFxuICAgICAgICApO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIGltYWdlLXNldChcbiAgICAgICAgICAgIHVybChcIi9hc3NldHMvaW1nL2ltLWFkcy1iYW5uZXIuanBnXCIpIDF4LFxuICAgICAgICAgICAgdXJsKFwiL2Fzc2V0cy9pbWcvaW0tYWRzLWJhbm5lckAyeC5qcGdcIikgMngsXG4gICAgICAgICAgICB1cmwoXCIvYXNzZXRzL2ltZy9pbS1hZHMtYmFubmVyQDN4LmpwZ1wiKSAzeCxcbiAgICAgICAgKTtcblxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgJi10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQyMnB4O1xuICAgICAgICBmb250LWZhbWlseTogQXZlbmlyLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyOTFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogI2MyYzJjMjtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKHNtYWxsKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICAgIC8vIGJhc2ljOlxuICAgIG1vYmlsZTogMzIwcHgsXG4gICAgZXh0cmEtc21hbGw6IDM3N3B4LFxuICAgIHNtYWxsOiA1NzZweCxcbiAgICBtZWRpdW06IDc2N3B4LFxuICAgIGxhcmdlOiA5OTFweCxcbiAgICBleHRyYS1sYXJnZTogMTIwMHB4LFxuICAgIGlwYWQtbGFuZHNjYXBlOiAxMDI1cHgsXG4gICAgbGFwdG9wOiAxMzY2cHhcbik7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KX0pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEB3YXJuIFwiTm8gc3VjaCBicmVha3BvaW50IGluIHRoZSBtYXA6IGAjeyRicmVha3BvaW50fWAuIFwiO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/songsheets.service */ "./src/app/services/songsheets.service.ts");







var MAIN_SLIDES = [
    {
        title: 'Pan scores now available in one place',
        descr: 'Access several steelband arrangements, compositions, solo works and much more.',
        linkText: 'VIEW MUSIC SCORES',
        linkRoute: '/music-scores',
        img: 'assets/img/home/im_banner_1slide.jpg',
    },
    {
        title: 'Access educational materials on the steelpan from anywhere',
        descr: "Read tons of articles, acquire steelband information from around the world,\n         listen to interviews never heard before and much more.",
        linkText: 'Subscribe Now',
        linkRoute: '/subscription',
        img: 'assets/img/home/im_banner_3slide.jpg',
    }
];
var ABOUT_BLOCKS = [
    {
        descr: "PanNotation is an online subscription-based portal that hosts a wealth of\n         information about the steelpan and it facilitates the purchasing and downloading\n         of music scores. PanNotation is intended to serve steelpan composers, arrangers,\n         and transcribers by providing one avenue in which to share music with the world.\n         We are not publishers.",
        title: 'Composer. Arrangers. Transcribers',
        titleImg: '/assets/img/ic-keynote-on-dark-bg.svg'
    },
    {
        descr: "Instead, we aim to provide a platform for all pan scores to be easily accessible.\n         In addition, we assist with acquiring copyright permissions to allow arrangements and\n         transcriptions to be sold. Our subscribers will have access to an online library of material\n         featuring dissertations, theses, articles, podcasts, audio recordings, lead sheets, and much more.\n         Subscribers are also able to submit material (and scores) to our PanNotation team who will work\n         toward sharing the information on the site with the assistance of the authors.",
        title: 'Music sheets. Podcasts. Articles etc.',
        titleImg: '/assets/img/ic-keynote-on-light-bg.svg'
    },
    {
        descr: "Our ultimate goal is to work together with musicians, publishers, educators, scholars, \n         business men and women, to create a site that culminates all quality information about the \n         steelpan while eliminating misleading information on the national instrument of Trinidad and Tobago. \n         The broad objective is to ensure that the global pan community has a channel to share\n         knowledge for education while providing a commercial avenue for the intellectual capital\n         inherent in the pan community. The site also promotes self-sustainability,\n         as profits will be used to fund a not-for-profit arm of Pannotation for use of supporting existing NGOs,\n         scholarships, and other similar ventures.",
        title: 'Musicians. Publisher. Educators',
        titleImg: '/assets/img/ic-keynote-on-dark-bg.svg'
    }
];
var SUBSCRIPTIONS = [
    {
        title: 'CONDUCT RESEARCH',
        descr: 'Find various types of information about the steepan from different decades. '
    },
    {
        title: 'Access Anywhere',
        descr: 'Access your account and downloaded scores from your mobile device.'
    },
    {
        title: 'Print Instantly',
        descr: 'Checkout and print instantly from your desktop or mobile device ' +
            'with our quick and easy purchase process.'
    },
    {
        title: 'SCORE UPLOAD',
        descr: 'Upload your pan scores at no additional cost, track downloads, and reach more people'
    },
];
var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, changeDetectorRef, songsheetService, activatedRoute) {
        this.breakpointObserver = breakpointObserver;
        this.changeDetectorRef = changeDetectorRef;
        this.songsheetService = songsheetService;
        this.activatedRoute = activatedRoute;
        this.subscriptions = SUBSCRIPTIONS;
        this.slides = MAIN_SLIDES;
        this.aboutBlocks = ABOUT_BLOCKS;
        this.topOffset = 0;
        this.topLimit = 10;
        this.featuredFilters = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ Limit: this.topLimit, Offset: this.topOffset });
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.leftArrowBtnDisabled = true;
        this.rightArrowBtnDisabled = false;
        var featured = activatedRoute.snapshot.data.featured;
        this.featured = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](featured.data);
        this.totalCount = featured.pagination.totalCount;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = this.breakpointObserver.observe('(max-width: 575px)')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return val.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        this.cardsRowConfig = this.isMobile
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isMobile) {
            return {
                variableWidth: true,
                slidesToScroll: 2,
                swipe: true,
                infinite: false,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            arrows: true
                        }
                    },
                ]
            };
        }));
        this.mainRowConfig = this.isMobile
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isMobile) {
            return {
                slidesToScroll: 1,
                slidesToShow: 1,
                appendArrows: false,
                swipe: true,
                dots: !isMobile,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
            };
        }));
        this.subscription.add(this.featuredFilters
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (filters) { return _this.songsheetService.topList(filters); }))
            .subscribe(function (_a) {
            var data = _a.data, pagination = _a.pagination;
            _this.totalCount = pagination.totalCount;
            _this.featured.next(_this.featured.getValue().concat(data));
        }));
    };
    HomeComponent.prototype.beforeSlideChange = function (e) {
        var currentSlide = e.nextSlide;
        var maxValue = this.featured.getValue().length;
        var index = e.nextSlide - e.currentSlide;
        if ((currentSlide >= (maxValue - 1 - index)) && this.totalCount > maxValue) {
            this.topOffset = this.topOffset + this.topLimit;
            this.featuredFilters.next({ Limit: this.topLimit, Offset: this.topOffset });
        }
        this.leftArrowBtnDisabled = currentSlide === 0;
        this.rightArrowBtnDisabled = e.nextSlide + index >= this.totalCount;
    };
    HomeComponent.prototype.trackByFn = function (i, item) {
        return item.id;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_songsheets_service__WEBPACK_IMPORTED_MODULE_6__["SongsheetsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/home/home.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_songsheets_service__WEBPACK_IMPORTED_MODULE_6__["SongsheetsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/views/home/home-routing.module.ts");
/* harmony import */ var _resolvers_songsheet_top_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resolvers/songsheet-top.resolver */ "./src/app/resolvers/songsheet-top.resolver.ts");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/songsheets.service */ "./src/app/services/songsheets.service.ts");
/* harmony import */ var _components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                _components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_10__["SearchItemModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [
                _services_songsheets_service__WEBPACK_IMPORTED_MODULE_9__["SongsheetsService"],
                _resolvers_songsheet_top_resolver__WEBPACK_IMPORTED_MODULE_8__["SongsheetTopResolver"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-home-home-module-es5.js.map