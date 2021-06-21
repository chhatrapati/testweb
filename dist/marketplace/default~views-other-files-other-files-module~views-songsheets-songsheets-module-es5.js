(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-other-files-other-files-module~views-songsheets-songsheets-module"],{

/***/ "./node_modules/ngx-bootstrap-slider/fesm5/ngx-bootstrap-slider.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap-slider/fesm5/ngx-bootstrap-slider.js ***!
  \*************************************************************************/
/*! exports provided: NgxBootstrapSliderService, NgxBootstrapSliderComponent, NgxBootstrapSliderModule, SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapSliderService", function() { return NgxBootstrapSliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapSliderComponent", function() { return NgxBootstrapSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapSliderModule", function() { return NgxBootstrapSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxBootstrapSliderService = /** @class */ (function () {
    function NgxBootstrapSliderService() {
    }
    NgxBootstrapSliderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxBootstrapSliderService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxBootstrapSliderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxBootstrapSliderService_Factory() { return new NgxBootstrapSliderService(); }, token: NgxBootstrapSliderService, providedIn: "root" });
    return NgxBootstrapSliderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxBootstrapSliderComponent = /** @class */ (function () {
    function NgxBootstrapSliderComponent() {
    }
    /**
     * @return {?}
     */
    NgxBootstrapSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxBootstrapSliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mv-ngx-bootstrap-slider',
                    template: "\n    <p>\n      ngx-bootstrap-slider works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxBootstrapSliderComponent.ctorParameters = function () { return []; };
    return NgxBootstrapSliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.initialOptions = {};
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // The following events are emitted
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slideStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slideStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SliderComponent.prototype, "style", {
        // This property is not applied to the underlying slider element
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.slider) {
                this.slider.getElement().setAttribute('style', value);
            }
            else {
                this.initialStyle = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "value", {
        // Handle the value (two-way)
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.slider) {
                this.slider.setValue(value);
            }
            else {
                this.initialOptions.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "min", {
        // The following properties are applied to the underlying slider element
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('min', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "max", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('max', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "step", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('step', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "precision", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('precision', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "orientation", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('orientation', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "range", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('range', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "selection", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('selection', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "tooltip", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "tooltipSplit", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('tooltip_split', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "tooltipPosition", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('tooltipPosition', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "handle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('handle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "reversed", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('reversed', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "rtl", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('rtl', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "enabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('enabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "naturalArrowKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('natural_arrow_keys', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ticks", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('ticks', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ticksPositions", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('ticks_positions', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ticksLabels", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('ticks_labels', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ticksSnapBounds", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('ticks_snap_bounds', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ticksTooltip", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('ticks_tooltip', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "scale", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('scale', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "labelledBy", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('labelledby', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "rangeHighlights", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('rangeHighlights', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "formatter", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeAttribute('formatter', value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SliderComponent.prototype.addChangeListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slider.on('slide', function (value) {
            _this.slide.emit(value);
        });
        this.slider.on('slideStart', function (value) {
            _this.slideStart.emit(value);
        });
        this.slider.on('slideStop', function (value) {
            _this.slideStop.emit(value);
        });
        this.slider.on('change', function (event) {
            _this.change.emit(event);
            _this.valueChange.emit(event.newValue);
        });
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.prepareSlider = /**
     * @return {?}
     */
    function () {
        // We need to add the change listeners again after each refresh
        this.addChangeListeners();
        // Add the styling to the element
        this.slider.getElement().setAttribute('style', this.initialStyle);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    SliderComponent.prototype.changeAttribute = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (this.slider) {
            this.slider.setAttribute(name, value);
            this.slider.refresh();
            this.prepareSlider();
        }
        else {
            this.initialOptions[name] = value;
        }
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Don't set the value over the initial options, because it will alway
        // be reset. This option seems to be a little buggy.
        var /** @type {?} */ value = undefined;
        if (this.initialOptions.value) {
            value = this.initialOptions.value;
            delete this.initialOptions['value'];
        }
        this.slider = new Slider(this.sliderElement.nativeElement, this.initialOptions);
        if (value) {
            this.slider.setValue(value);
        }
        this.prepareSlider();
    };
    SliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mv-slider',
                    template: "<input #slider>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        sliderElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['slider',] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        precision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipSplit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        handle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reversed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rtl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        naturalArrowKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ticks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ticksPositions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ticksLabels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ticksSnapBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ticksTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        labelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rangeHighlights: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        slideStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        slideStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxBootstrapSliderModule = /** @class */ (function () {
    function NgxBootstrapSliderModule() {
    }
    NgxBootstrapSliderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [NgxBootstrapSliderComponent, SliderComponent],
                    exports: [
                        NgxBootstrapSliderComponent,
                        SliderComponent
                    ]
                },] },
    ];
    return NgxBootstrapSliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1zbGlkZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAtc2xpZGVyL2xpYi9uZ3gtYm9vdHN0cmFwLXNsaWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwLXNsaWRlci9saWIvbmd4LWJvb3RzdHJhcC1zbGlkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwLXNsaWRlci9saWIvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAtc2xpZGVyL2xpYi9uZ3gtYm9vdHN0cmFwLXNsaWRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hCb290c3RyYXBTbGlkZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXYtbmd4LWJvb3RzdHJhcC1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmd4LWJvb3RzdHJhcC1zbGlkZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neEJvb3RzdHJhcFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgU2xpZGVyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ212LXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNzbGlkZXI+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIFRoZSBzbGlkZXIgSFRNTCBlbGVtZW50XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpIHNsaWRlckVsZW1lbnQ7XG5cbiAgLy8gVGhlIHNsaWRlciBvYmplY3RcbiAgc2xpZGVyOiBhbnk7XG5cbiAgaW5pdGlhbE9wdGlvbnM6IGFueSA9IHt9O1xuICBpbml0aWFsU3R5bGU6IGFueTtcblxuICAvLyBUaGlzIHByb3BlcnR5IGlzIG5vdCBhcHBsaWVkIHRvIHRoZSB1bmRlcmx5aW5nIHNsaWRlciBlbGVtZW50XG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICB0aGlzLnNsaWRlci5nZXRFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdzdHlsZScsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsU3R5bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlIHZhbHVlICh0d28td2F5KVxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICB0aGlzLnNsaWRlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbE9wdGlvbnMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgYXBwbGllZCB0byB0aGUgdW5kZXJseWluZyBzbGlkZXIgZWxlbWVudFxuICBASW5wdXQoKVxuICBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYW5nZUF0dHJpYnV0ZSgnbWluJywgdmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYW5nZUF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwcmVjaXNpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdwcmVjaXNpb24nLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3JpZW50YXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdvcmllbnRhdGlvbicsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByYW5nZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdyYW5nZScsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdzZWxlY3Rpb24nLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3Rvb2x0aXAnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcFNwbGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3Rvb2x0aXBfc3BsaXQnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcFBvc2l0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3Rvb2x0aXBQb3NpdGlvbicsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoYW5kbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdoYW5kbGUnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmV2ZXJzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoYW5nZUF0dHJpYnV0ZSgncmV2ZXJzZWQnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcnRsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3J0bCcsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ2VuYWJsZWQnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmF0dXJhbEFycm93S2V5cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCduYXR1cmFsX2Fycm93X2tleXMnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGlja3ModmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3RpY2tzJywgdmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHRpY2tzUG9zaXRpb25zKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCd0aWNrc19wb3NpdGlvbnMnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGlja3NMYWJlbHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3RpY2tzX2xhYmVscycsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0aWNrc1NuYXBCb3VuZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCd0aWNrc19zbmFwX2JvdW5kcycsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0aWNrc1Rvb2x0aXAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoYW5nZUF0dHJpYnV0ZSgndGlja3NfdG9vbHRpcCcsIHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzY2FsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ3NjYWxlJywgdmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGxhYmVsbGVkQnkodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5jaGFuZ2VBdHRyaWJ1dGUoJ2xhYmVsbGVkYnknLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmFuZ2VIaWdobGlnaHRzKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdyYW5nZUhpZ2hsaWdodHMnLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWF0dGVyKHZhbHVlOiBGdW5jdGlvbikge1xuICAgIHRoaXMuY2hhbmdlQXR0cmlidXRlKCdmb3JtYXR0ZXInLCB2YWx1ZSk7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIGV2ZW50cyBhcmUgZW1pdHRlZFxuICBAT3V0cHV0KCkgc2xpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHNsaWRlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHNsaWRlU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHJpdmF0ZSBhZGRDaGFuZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5zbGlkZXIub24oJ3NsaWRlJywgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2xpZGUuZW1pdCh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2xpZGVTdGFydCcsICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNsaWRlU3RhcnQuZW1pdCh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignc2xpZGVTdG9wJywgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2xpZGVTdG9wLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ2NoYW5nZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChldmVudC5uZXdWYWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVTbGlkZXIoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBhZGQgdGhlIGNoYW5nZSBsaXN0ZW5lcnMgYWdhaW4gYWZ0ZXIgZWFjaCByZWZyZXNoXG4gICAgdGhpcy5hZGRDaGFuZ2VMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEFkZCB0aGUgc3R5bGluZyB0byB0aGUgZWxlbWVudFxuICAgIHRoaXMuc2xpZGVyLmdldEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5pbml0aWFsU3R5bGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICB0aGlzLnNsaWRlci5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5zbGlkZXIucmVmcmVzaCgpO1xuICAgICAgdGhpcy5wcmVwYXJlU2xpZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbE9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBEb24ndCBzZXQgdGhlIHZhbHVlIG92ZXIgdGhlIGluaXRpYWwgb3B0aW9ucywgYmVjYXVzZSBpdCB3aWxsIGFsd2F5XG4gICAgLy8gYmUgcmVzZXQuIFRoaXMgb3B0aW9uIHNlZW1zIHRvIGJlIGEgbGl0dGxlIGJ1Z2d5LlxuICAgIGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLmluaXRpYWxPcHRpb25zLnZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuaW5pdGlhbE9wdGlvbnMudmFsdWU7XG4gICAgICBkZWxldGUgdGhpcy5pbml0aWFsT3B0aW9uc1sndmFsdWUnXTtcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIodGhpcy5zbGlkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaW5pdGlhbE9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNsaWRlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmVwYXJlU2xpZGVyKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEJvb3RzdHJhcFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWJvb3RzdHJhcC1zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neEJvb3RzdHJhcFNsaWRlckNvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIE5neEJvb3RzdHJhcFNsaWRlckNvbXBvbmVudCxcbiAgICBTbGlkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hCb290c3RyYXBTbGlkZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O29DQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQiw4Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSw0REFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztzQ0FWRDs7Ozs7OztBQ0FBO0lBMEtFOzhCQTFKc0IsRUFBRTsyQkFzQkEsSUFBSSxZQUFZLEVBQUU7O3FCQTRIeEIsSUFBSSxZQUFZLEVBQUU7MEJBRWIsSUFBSSxZQUFZLEVBQUU7eUJBRW5CLElBQUksWUFBWSxFQUFFO3NCQUVyQixJQUFJLFlBQVksRUFBRTtLQUVwQjtJQXRKakIsc0JBQ0ksa0NBQUs7Ozs7OztRQURULFVBQ1UsS0FBVTtZQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1NBQ0Y7OztPQUFBO0lBR0Qsc0JBQ0ksa0NBQUs7Ozs7OztRQURULFVBQ1UsS0FBcUI7WUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNuQztTQUNGOzs7T0FBQTtJQUlELHNCQUNJLGdDQUFHOzs7Ozs7UUFE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

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/songsheet-player/songsheet-player.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/songsheet-player/songsheet-player.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player\" *ngIf=\"audio && trackLoaded | async\">\n    <div class=\"player-slider\">\n        <mv-slider [(value)]=\"timeSlider\" [min]=\"0\" [max]=\"audio.duration\" [enabled]=\"true\" (change)=\"change($event)\"></mv-slider>\n    </div>\n    <div class=\"player-navigation\">\n        <div class=\"player-navigation__primary\">\n            <button class=\"player-btn-prev\" (click)=\"rewindTime(-10)\">\n                <img src=\"assets/img/ic-back.svg\" alt=\"Back icon\">\n            </button>\n            <button (click)=\"audio.play()\" *ngIf=\"audio.paused\" class=\"player-btn-play\">\n                <img src=\"assets/img/ic-play.svg\" alt=\"Play icon\">\n            </button>\n            <button (click)=\"audio.pause()\" *ngIf=\"audio.played && !audio.paused\" class=\"player-btn-pause\">\n                <img src=\"assets/img/ic-pause.svg\" alt=\"Pause icon\">\n            </button>\n            <button class=\"player-btn-prev\" (click)=\"rewindTime(10)\">\n                <img src=\"assets/img/ic-forward.svg\" alt=\"Forward icon\">\n            </button>\n        </div>\n        <div class=\"player-navigation__secondary\">\n            <p class=\"player-time\">{{(time | async) | date: 'm:ss'}}</p>\n\n            <div class=\"volume-slider\" *ngIf=\"!(volumeSliderHidden | async)\">\n                <mv-slider [(value)]=\"volumeSlider\" [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [enabled]=\"true\" (change)=\"volumeChange($event)\"></mv-slider>\n            </div>\n\n            <button class=\"player__volume-btn\" [class.muted]=\"audio.muted\" (click)=\"onDisableVolume()\"></button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/songsheet-player/songsheet-player.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/songsheet-player/songsheet-player.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".typography-heading-level-3, .typography-heading-level-3-web {\n  font-family: \"Avenir\", sans-serif;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\n.typography-heading-level-3-web {\n  font-size: 32px;\n  line-height: 0.94;\n}\n.typography-heading-level-6, .typography-heading-level-6-bold, .typography-heading-level-6-medium {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  font-size: 16px;\n}\n.typography-heading-level-6-medium {\n  line-height: 1.13;\n}\n.typography-heading-level-6-bold {\n  font-weight: bold;\n  line-height: 1.13;\n}\n.typography-body, .typography-body-level-1, .typography-body-level-1-semibold, .typography-body-level-1-medium, .player-time, .typography-body-level-1-regular {\n  font-family: \"Montserrat\", sans-serif;\n}\n.typography-body-level-1, .typography-body-level-1-semibold, .typography-body-level-1-medium, .player-time, .typography-body-level-1-regular {\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n}\n.typography-body-level-1-regular {\n  line-height: 1.57;\n}\n.typography-body-level-1-medium, .player-time {\n  line-height: 1.71;\n}\n.typography-caption, .typography-caption-level-1, .typography-caption-level-1-mobile, .typography-caption-level-1-web {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-stretch: normal;\n}\n.typography-caption-level-1-web {\n  letter-spacing: 1.5px;\n  font-size: 11px;\n  line-height: normal;\n}\n.typography-caption-level-1-mobile {\n  letter-spacing: 2.18px;\n  font-size: 16px;\n  line-height: 1.13;\n}\n.typography-button, .typography-button-level-1 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 2.66px;\n}\n.font-weight-400, .typography-body-level-1-regular {\n  font-weight: 400;\n}\n.font-weight-500, .typography-heading-level-6-medium, .typography-body-level-1-medium, .player-time {\n  font-weight: 500;\n}\n.font-weight-600, .typography-heading-level-3, .typography-heading-level-3-web, .typography-body-level-1-semibold {\n  font-weight: 600;\n}\n.font-weight-700 {\n  font-weight: 700;\n}\n.font-weight-800, .typography-caption-level-1-web {\n  font-weight: 800;\n}\n.font-weight-900, .typography-button, .typography-button-level-1 {\n  font-weight: 800;\n}\n.player {\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  box-shadow: 0 0 34px 0 rgba(160, 160, 160, 0.15);\n}\n.player-slider {\n  width: 100%;\n}\n.player-slider ::ng-deep .slider {\n  width: 100%;\n  height: 0;\n}\n.player-slider ::ng-deep .slider-track {\n  height: 4px;\n  border-radius: 2px;\n  background: #d9d9d9 none;\n  box-shadow: none;\n  margin-top: -7px;\n}\n.player-slider ::ng-deep .slider-track .slider-selection {\n  background: #ee4036 none;\n  box-shadow: none;\n}\n.player-slider ::ng-deep .slider-handle {\n  width: 10px;\n  height: 10px;\n  visibility: hidden;\n}\n.player-navigation {\n  margin-top: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.player-navigation__primary {\n  display: flex;\n  align-items: center;\n}\n.player-navigation__primary > button {\n  background-color: transparent;\n  border: none;\n  width: 14px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 11px;\n  padding: 0;\n}\n.player-navigation__primary > button:first-child {\n  margin-left: 0;\n}\n.player-navigation__primary > button:last-child {\n  margin-right: 0;\n}\n.player-navigation__primary > button > img {\n  height: 100%;\n}\n.player-navigation__primary .player-btn-play {\n  padding-left: 4px;\n}\n.player-navigation__secondary {\n  display: flex;\n}\n.player-navigation__secondary .volume-slider {\n  width: 107px;\n  height: 12px;\n}\n.player-navigation__secondary .volume-slider ::ng-deep .slider {\n  width: 100%;\n  height: 100%;\n}\n.player-navigation__secondary .volume-slider ::ng-deep .slider-track {\n  height: 4px;\n  border-radius: 2px;\n  background: #d9d9d9 none;\n  box-shadow: none;\n  margin-top: -2px;\n}\n.player-navigation__secondary .volume-slider ::ng-deep .slider-track .slider-selection {\n  background: #393e41 none;\n  box-shadow: none;\n}\n.player-navigation__secondary .volume-slider ::ng-deep .slider-handle {\n  width: 12px;\n  height: 12px;\n  box-shadow: none;\n  margin-left: -4px;\n  background: #393e41 none;\n}\n.player-time {\n  margin: 0 16px 0 0;\n  color: #393e41;\n}\n.player__volume-btn {\n  border: none;\n  background: transparent url(/assets/img/ic-sound-on.svg) no-repeat;\n  display: flex;\n  width: 27px;\n  height: 21px;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin-left: 15px;\n}\n.player__volume-btn.muted {\n  background-image: url(/assets/img/ic-sound-off.svg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc29uZ3NoZWV0LXBsYXllci9zb25nc2hlZXQtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvbmdzaGVldC1wbGF5ZXIvc29uZ3NoZWV0LXBsYXllci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zdGRpbiIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvc3R5bGVzL2RlZmF1bHRzL2NvbG9yLWNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksaUNBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNGWjtBRElZO0VBR0ksZUFBQTtFQUNBLGlCQUFBO0FDSmhCO0FET1E7RUFDSSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNMWjtBRE9ZO0VBR0ksaUJBQUE7QUNQaEI7QURVWTtFQUVJLGlCQUFBO0VBQ0EsaUJBQUE7QUNUaEI7QURjSTtFQUNJLHFDQUFBO0FDWlI7QURjUTtFQUdJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ2RaO0FEZ0JZO0VBSUksaUJBQUE7QUNqQmhCO0FEb0JZO0VBR0ksaUJBQUE7QUNwQmhCO0FEOEJJO0VBQ0kscUNBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FDN0JSO0FEa0NZO0VBS0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNwQ2hCO0FEdUNZO0VBR0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN2Q2hCO0FENENJO0VBR0kscUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUM1Q1I7QURxRFE7RUFDSSxnQkFBQTtBQ25EWjtBRHNEUTtFQUNJLGdCQUFBO0FDcERaO0FEdURRO0VBQ0ksZ0JBQUE7QUNyRFo7QUR3RFE7RUFDSSxnQkFBQTtBQ3REWjtBRHlEUTtFQUNJLGdCQUFBO0FDdkRaO0FEMERRO0VBQ0ksZ0JBQUE7QUN4RFo7QUM3RUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBRGdGSjtBQzlFSTtFQUNJLFdBQUE7QURnRlI7QUM3RVk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBRCtFaEI7QUM1RVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUQ4RWhCO0FDNUVnQjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUQ4RXBCO0FDMUVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBRDJFaEI7QUN0RUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUR3RVI7QUN0RVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUR3RVo7QUN0RVk7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtFQUNBLFVBQUE7QUR1RWhCO0FDckVnQjtFQUNJLGNBQUE7QUR1RXBCO0FDcEVnQjtFQUNJLGVBQUE7QURzRXBCO0FDbkVnQjtFQUNJLFlBQUE7QURxRXBCO0FDakVZO0VBQ0ksaUJBQUE7QURtRWhCO0FDL0RRO0VBQ0ksYUFBQTtBRGlFWjtBQy9EWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FEaUVoQjtBQzlEb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRGdFeEI7QUM3RG9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEK0R4QjtBQzdEd0I7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FEK0Q1QjtBQzNEb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBRDZEeEI7QUN0REk7RUFFSSxrQkFBQTtFQUNBLGNDdkhRO0FGOEtoQjtBQ3BESTtFQUlJLFlBQUE7RUFDQSxrRUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QURtRFI7QUNqRFE7RUFDSSxtREFiUTtBRGdFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvbmdzaGVldC1wbGF5ZXIvc29uZ3NoZWV0LXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBvZ3JhcGh5IHtcbiAgICAmLWhlYWRpbmcge1xuICAgICAgICAmLWxldmVsLTMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBAZXh0ZW5kIC5mb250LXdlaWdodC02MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG5cbiAgICAgICAgICAgICYtd2ViIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtMztcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC45NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLWxldmVsLTYge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgICAgICAmLW1lZGl1bSB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTY7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuZm9udC13ZWlnaHQtNTAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWJvbGQge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1ib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuICAgICAgICAmLWxldmVsLTEge1xuICAgICAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1ib2R5O1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcblxuICAgICAgICAgICAgJi1yZWd1bGFyIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMTtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5mb250LXdlaWdodC00MDA7XG5cbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41NztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1tZWRpdW0ge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xO1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLmZvbnQtd2VpZ2h0LTUwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1zZW1pYm9sZCB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTE7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuZm9udC13ZWlnaHQtNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1jYXB0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuXG4gICAgICAgICYtbGV2ZWwtMSB7XG4gICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWNhcHRpb247XG5cbiAgICAgICAgICAgICYtd2ViIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMTtcblxuICAgICAgICAgICAgICAgIEBleHRlbmQgLmZvbnQtd2VpZ2h0LTgwMDtcblxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1tb2JpbGUge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktY2FwdGlvbi1sZXZlbC0xO1xuXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuMThweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJ1dHRvbiB7XG4gICAgICAgIEBleHRlbmQgLmZvbnQtd2VpZ2h0LTkwMDtcblxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICAgICAgJi1sZXZlbC0xIHtcbiAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktYnV0dG9uO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9udCB7XG4gICAgJi13ZWlnaHQge1xuICAgICAgICAmLTQwMCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi01MDAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtNjAwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLTcwMCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi04MDAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtOTAwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIudHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTMsIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtMy13ZWIge1xuICBmb250LWZhbWlseTogXCJBdmVuaXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cbi50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtMy13ZWIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAwLjk0O1xufVxuLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02LCAudHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTYtYm9sZCwgLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02LW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02LW1lZGl1bSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjEzO1xufVxuLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMTM7XG59XG4udHlwb2dyYXBoeS1ib2R5LCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTEsIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1zZW1pYm9sZCwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLW1lZGl1bSwgLnBsYXllci10aW1lLCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbi50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMSwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLXNlbWlib2xkLCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtbWVkaXVtLCAucGxheWVyLXRpbWUsIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cbi50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1yZWd1bGFyIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTc7XG59XG4udHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtbWVkaXVtLCAucGxheWVyLXRpbWUge1xuICBsaW5lLWhlaWdodDogMS43MTtcbn1cbi50eXBvZ3JhcGh5LWNhcHRpb24sIC50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMSwgLnR5cG9ncmFwaHktY2FwdGlvbi1sZXZlbC0xLW1vYmlsZSwgLnR5cG9ncmFwaHktY2FwdGlvbi1sZXZlbC0xLXdlYiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbn1cbi50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMS13ZWIge1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMS1tb2JpbGUge1xuICBsZXR0ZXItc3BhY2luZzogMi4xOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjEzO1xufVxuLnR5cG9ncmFwaHktYnV0dG9uLCAudHlwb2dyYXBoeS1idXR0b24tbGV2ZWwtMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xufVxuLmZvbnQtd2VpZ2h0LTQwMCwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLXJlZ3VsYXIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvbnQtd2VpZ2h0LTUwMCwgLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02LW1lZGl1bSwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLW1lZGl1bSwgLnBsYXllci10aW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb250LXdlaWdodC02MDAsIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtMywgLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC0zLXdlYiwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb250LXdlaWdodC03MDAge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQtd2VpZ2h0LTgwMCwgLnR5cG9ncmFwaHktY2FwdGlvbi1sZXZlbC0xLXdlYiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uZm9udC13ZWlnaHQtOTAwLCAudHlwb2dyYXBoeS1idXR0b24sIC50eXBvZ3JhcGh5LWJ1dHRvbi1sZXZlbC0xIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnBsYXllciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDM0cHggMCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMTUpO1xufVxuLnBsYXllci1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wbGF5ZXItc2xpZGVyIDo6bmctZGVlcCAuc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbn1cbi5wbGF5ZXItc2xpZGVyIDo6bmctZGVlcCAuc2xpZGVyLXRyYWNrIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOSBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnBsYXllci1zbGlkZXIgOjpuZy1kZWVwIC5zbGlkZXItdHJhY2sgLnNsaWRlci1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZWU0MDM2IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucGxheWVyLXNsaWRlciA6Om5nLWRlZXAgLnNsaWRlci1oYW5kbGUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucGxheWVyLW5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXItbmF2aWdhdGlvbl9fcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyLW5hdmlnYXRpb25fX3ByaW1hcnkgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ucGxheWVyLW5hdmlnYXRpb25fX3ByaW1hcnkgPiBidXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5wbGF5ZXItbmF2aWdhdGlvbl9fcHJpbWFyeSA+IGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnBsYXllci1uYXZpZ2F0aW9uX19wcmltYXJ5ID4gYnV0dG9uID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBsYXllci1uYXZpZ2F0aW9uX19wcmltYXJ5IC5wbGF5ZXItYnRuLXBsYXkge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5wbGF5ZXItbmF2aWdhdGlvbl9fc2Vjb25kYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wbGF5ZXItbmF2aWdhdGlvbl9fc2Vjb25kYXJ5IC52b2x1bWUtc2xpZGVyIHtcbiAgd2lkdGg6IDEwN3B4O1xuICBoZWlnaHQ6IDEycHg7XG59XG4ucGxheWVyLW5hdmlnYXRpb25fX3NlY29uZGFyeSAudm9sdW1lLXNsaWRlciA6Om5nLWRlZXAgLnNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGxheWVyLW5hdmlnYXRpb25fX3NlY29uZGFyeSAudm9sdW1lLXNsaWRlciA6Om5nLWRlZXAgLnNsaWRlci10cmFjayB7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDkgbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5wbGF5ZXItbmF2aWdhdGlvbl9fc2Vjb25kYXJ5IC52b2x1bWUtc2xpZGVyIDo6bmctZGVlcCAuc2xpZGVyLXRyYWNrIC5zbGlkZXItc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzM5M2U0MSBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnBsYXllci1uYXZpZ2F0aW9uX19zZWNvbmRhcnkgLnZvbHVtZS1zbGlkZXIgOjpuZy1kZWVwIC5zbGlkZXItaGFuZGxlIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQ6ICMzOTNlNDEgbm9uZTtcbn1cbi5wbGF5ZXItdGltZSB7XG4gIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgY29sb3I6ICMzOTNlNDE7XG59XG4ucGxheWVyX192b2x1bWUtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL2Fzc2V0cy9pbWcvaWMtc291bmQtb24uc3ZnKSBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5wbGF5ZXJfX3ZvbHVtZS1idG4ubXV0ZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWMtc291bmQtb2ZmLnN2Zyk7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0cy9jb2xvci1jb25zdGFudHNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ3VpZGUvdHlwb2dyYXBoeVwiO1xuXG4ucGxheWVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDM0cHggMCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMTUpO1xuXG4gICAgJi1zbGlkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVyLXRyYWNrIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHZlcnktbGlnaHQtcGluayBub25lO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcblxuICAgICAgICAgICAgICAgIC5zbGlkZXItc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG9yYW5nZXktcmVkIG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVyLWhhbmRsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1uYXZpZ2F0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJl9fcHJpbWFyeSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgJiA+IGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTFweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmID4gaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBsYXllci1idG4tcGxheSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19zZWNvbmRhcnkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLnZvbHVtZS1zbGlkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG5cbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlci10cmFjayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR2ZXJ5LWxpZ2h0LXBpbmsgbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyLXNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNoYXJjb2FsLWdyZXkgbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnNsaWRlci1oYW5kbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2hhcmNvYWwtZ3JleSBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi10aW1lIHtcbiAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtbWVkaXVtO1xuICAgICAgICBtYXJnaW46IDAgMTZweCAwIDA7XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICB9XG5cbiAgICAmX192b2x1bWUtYnRuIHtcbiAgICAgICAgJHNvdW5kLW9uOiB1cmwoL2Fzc2V0cy9pbWcvaWMtc291bmQtb24uc3ZnKTtcbiAgICAgICAgJHNvdW5kLW9mZjogdXJsKC9hc3NldHMvaW1nL2ljLXNvdW5kLW9mZi5zdmcpO1xuXG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgJHNvdW5kLW9uIG5vLXJlcGVhdDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDI3cHg7XG4gICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICYubXV0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogJHNvdW5kLW9mZjtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kY29sb3ItYWxtb3N0LWRhcms6ICMzYjNiM2I7XG4kb3JhbmdleS1yZWQ6ICNlZTQwMzY7XG4kY2hhcmNvYWwtZ3JleTogIzM5M2U0MTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRsaXR0bGUtZ3JleTogIzk5OTk5OTtcblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/songsheet-player/songsheet-player.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/songsheet-player/songsheet-player.component.ts ***!
  \***************************************************************************/
/*! exports provided: SongsheetPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetPlayerComponent", function() { return SongsheetPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SongsheetPlayerComponent = /** @class */ (function () {
    function SongsheetPlayerComponent() {
        this.volumeSliderHidden = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    SongsheetPlayerComponent.prototype.ngOnInit = function () {
        if (this.trackPath) {
            this.initializeTrack(this.trackPath);
        }
    };
    SongsheetPlayerComponent.prototype.change = function (e) {
        this.audio.currentTime = e.newValue;
    };
    SongsheetPlayerComponent.prototype.volumeChange = function (e) {
        this.audio.volume = e.newValue;
    };
    SongsheetPlayerComponent.prototype.rewindTime = function (value) {
        this.audio.currentTime = this.audio.currentTime + value;
    };
    SongsheetPlayerComponent.prototype.onDisableVolume = function () {
        this.audio.muted = !this.audio.muted;
    };
    SongsheetPlayerComponent.prototype.initializeTrack = function (path) {
        var _this = this;
        this.audio = new Audio(path);
        this.time = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.audio, 'timeupdate')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.timeSlider = _this.audio.currentTime; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) { return _this.audio.currentTime * 1000; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0));
        this.trackLoaded = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.audio, 'canplay');
        this.timeSlider = this.audio.currentTime;
        this.volumeSlider = this.audio.volume;
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            this.audio.autoplay = true;
            this.volumeSliderHidden.next(true);
        }
    };
    SongsheetPlayerComponent.prototype.ngOnDestroy = function () {
        if (this.audio) {
            this.audio.pause();
            this.audio.removeAttribute('src');
            this.audio.load();
            this.audio = null;
        }
    };
    SongsheetPlayerComponent.prototype.ngOnChanges = function (_a) {
        var track = _a.track;
        if (track && track.currentValue) {
            this.initializeTrack(URL.createObjectURL(track.currentValue));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SongsheetPlayerComponent.prototype, "trackPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SongsheetPlayerComponent.prototype, "track", void 0);
    SongsheetPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-songsheet-player',
            template: __webpack_require__(/*! raw-loader!./songsheet-player.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/songsheet-player/songsheet-player.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./songsheet-player.component.scss */ "./src/app/components/songsheet-player/songsheet-player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SongsheetPlayerComponent);
    return SongsheetPlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/songsheet-player/songsheet-player.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/songsheet-player/songsheet-player.module.ts ***!
  \************************************************************************/
/*! exports provided: SongsheetPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetPlayerModule", function() { return SongsheetPlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap-slider */ "./node_modules/ngx-bootstrap-slider/fesm5/ngx-bootstrap-slider.js");
/* harmony import */ var _songsheet_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songsheet-player.component */ "./src/app/components/songsheet-player/songsheet-player.component.ts");





var SongsheetPlayerModule = /** @class */ (function () {
    function SongsheetPlayerModule() {
    }
    SongsheetPlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_songsheet_player_component__WEBPACK_IMPORTED_MODULE_4__["SongsheetPlayerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_3__["NgxBootstrapSliderModule"],
            ],
            exports: [_songsheet_player_component__WEBPACK_IMPORTED_MODULE_4__["SongsheetPlayerComponent"]]
        })
    ], SongsheetPlayerModule);
    return SongsheetPlayerModule;
}());



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

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe, TruncatePipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipeModule", function() { return TruncatePipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

var TruncatePipeModule = /** @class */ (function () {
    function TruncatePipeModule() {
    }
    TruncatePipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [TruncatePipe],
            exports: [TruncatePipe],
        })
    ], TruncatePipeModule);
    return TruncatePipeModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-other-files-other-files-module~views-songsheets-songsheets-module-es5.js.map