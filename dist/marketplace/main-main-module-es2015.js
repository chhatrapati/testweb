(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/@angular/cdk/esm2015/coercion.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/coercion.js ***!
  \*******************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/layout.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/layout.js ***!
  \*****************************************************/
/*! exports provided: LayoutModule, BreakpointObserver, Breakpoints, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutModule {
}
LayoutModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Global registry for all dynamically-created, injected media queries.
 * @type {?}
 */
const mediaQueriesForWebkitCompatibility = new Set();
/**
 * Style tag that holds all of the dynamically-created media queries.
 * @type {?}
 */
let mediaQueryStyleNode;
/**
 * A utility for calling matchMedia queries.
 */
class MediaMatcher {
    /**
     * @param {?} _platform
     */
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
MediaMatcher.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
/** @nocollapse */ MediaMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 * @param {?} query
 * @return {?}
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            (/** @type {?} */ (document.head)).appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            ((/** @type {?} */ (mediaQueryStyleNode.sheet)))
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * No-op matchMedia replacement for non-browser platforms.
 * @param {?} query
 * @return {?}
 */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return (/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: (/**
         * @return {?}
         */
        () => { }),
        removeListener: (/**
         * @return {?}
         */
        () => { })
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility for checking the matching state of \@media queries.
 */
class BreakpointObserver {
    /**
     * @param {?} _mediaMatcher
     * @param {?} _zone
     */
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */
        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    isMatched(value) {
        /** @type {?} */
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        return queries.some((/**
         * @param {?} mediaQuery
         * @return {?}
         */
        mediaQuery => this._registerQuery(mediaQuery).mql.matches));
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    observe(value) {
        /** @type {?} */
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        /** @type {?} */
        const observables = queries.map((/**
         * @param {?} query
         * @return {?}
         */
        query => this._registerQuery(query).observable));
        /** @type {?} */
        let stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
        return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} breakpointStates
         * @return {?}
         */
        (breakpointStates) => {
            /** @type {?} */
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach((/**
             * @param {?} state
             * @return {?}
             */
            (state) => {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            }));
            return response;
        })));
    }
    /**
     * Registers a specific query to be listened for.
     * @private
     * @param {?} query
     * @return {?}
     */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return (/** @type {?} */ (this._queries.get(query)));
        }
        /** @type {?} */
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        /** @type {?} */
        const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            /** @type {?} */
            const handler = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => this._zone.run((/**
             * @return {?}
             */
            () => observer.next(e))));
            mql.addListener(handler);
            return (/**
             * @return {?}
             */
            () => {
                mql.removeListener(handler);
            });
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} nextMql
         * @return {?}
         */
        (nextMql) => ({ query, matches: nextMql.matches }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        /** @type {?} */
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/** @nocollapse */ BreakpointObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map((/**
     * @param {?} query
     * @return {?}
     */
    (query) => query.split(',')))
        .reduce((/**
     * @param {?} a1
     * @param {?} a2
     * @return {?}
     */
    (a1, a2) => a1.concat(a2)))
        .map((/**
     * @param {?} query
     * @return {?}
     */
    query => query.trim()));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=layout.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/platform.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/platform.js ***!
  \*******************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    constructor(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformModule {
}
PlatformModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                () => supportsPassiveEvents = true)
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
const RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu-profile/menu-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu-profile/menu-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-profile\" dropdown [autoClose]=\"true\" [isDisabled]=\"isMobile\">\n    <div class=\"menu-profile__avatar-wr \" dropdownToggle>\n        <div class=\"menu-profile__avatar\">\n            <app-photo [photo]=\"avatarImage | async\" [size]=\"{ height: 45, width: 45 }\"></app-photo>\n        </div>\n    </div>\n    <ul id=\"dropdown-basic\" *dropdownMenu class=\"menu-profile__dropdown dropdown-menu\" role=\"menu\"\n        aria-labelledby=\"button-basic\">\n        <li>\n            <h6 class=\"menu-profile__username typography-heading-level-6-medium charcoal-grey\">{{user?.firstName}} {{user?.lastName}}</h6>\n        </li>\n        <li>\n            <a class=\"dropdown-item typography-body-level-1-medium charcoal-grey\" [routerLink]=\"['/subscription']\">{{\"Subscribe\"}}</a>\n        </li>\n        <li>\n            <a\n                class=\"dropdown-item typography-body-level-1-medium charcoal-grey\"\n                [queryParams]=\"{ active: ProfileTabs.Profile }\"\n                [routerLink]=\"['/profile']\">{{\"Navigation.Account\" | translate}}</a>\n        </li>\n        <li>\n            <a\n                class=\"dropdown-item typography-body-level-1-medium charcoal-grey\"\n                [routerLink]=\"['/profile']\"\n                [queryParams]=\"{ active: ProfileTabs.Settings }\">\n                {{\"Settings\"}}\n            </a>\n        </li>\n        <li role=\"menuitem\">\n            <a class=\"dropdown-item typography-body-level-1-medium charcoal-grey\" (click)=\"logout()\">{{\"Navigation.Logout\" | translate}}</a>\n        </li>\n    </ul>\n\n    <div class=\"user-navigation-mobile\" *ngIf=\"isMobile\">\n        <h6 class=\"menu-profile__username typography-heading-level-6-medium charcoal-grey\">{{user?.firstName}} {{user?.lastName}}</h6>\n        <a class=\"dropdown-item\" [routerLink]=\"['/subscription']\">{{\"Subscribe\"}}</a>\n        <a class=\"dropdown-item\" [queryParams]=\"{ active: ProfileTabs.Profile }\" [routerLink]=\"['/profile']\">{{\"Navigation.Account\" | translate}}</a>\n        <a class=\"dropdown-item\"\n           [routerLink]=\"['/profile']\"\n           [queryParams]=\"{ active: ProfileTabs.Settings }\">{{\"Settings\"}}</a>\n        <a class=\"dropdown-item orangey-red\" (click)=\"logout()\">{{\"Navigation.Logout\" | translate}}</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/photo/photo.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/photo/photo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photo-container\">\n    <div class=\"photo-wrapper\" [ngStyle]=\"{'width.px': size?.width, 'height.px': size?.width}\">\n        <img class=\"photo\" [src]=\"image | async\" alt='image'>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"footer-row\">\n        <div class=\"privacy-routes\">\n            <a [routerLink]=\"['/privacy-policy']\">Privacy Policy</a>\n            <a [routerLink]=\"['/contact-us']\">Contact Us</a>\n        </div>\n        <p class=\"copy text-center mb-0 mt-0\">© 2019 Pannotation.</p>\n        <div class=\"social\">\n            <a class=\"social-link\" *ngFor=\"let social of socials\" [href]=\"social.link\" target=\"_blank\">\n                <img [src]=\"social.icon\" alt=\"social\">\n            </a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header container-fluid\">\n    <div class=\"row menu-header white-bg\" [class.hidden]=\"isSearchActive | async\">\n        <nav class=\"navbar navbar-expand-lg navbar-static-top\" role=\"navigation\">\n            <div class=\"nav-menu h-100 d-flex flex-row w-100\" [ngClass]=\"{\n                        'justify-content-between': !(isMobile | async),\n                        'justify-content-center': isMobile | async}\">\n                <button #menuBtn class=\"navbar-toggler\"\n                        type=\"button\"\n                        data-toggle=\"collapse\"\n                        data-target=\"#navbar\"\n                        aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\" (click)=\"isOpen()\">\n                    <i class=\"fa\" [ngClass]=\"{'fa-bars': !(isOpenMenu | async),'fa-times': (isOpenMenu | async)}\"></i>\n                </button>\n                <div class=\"logo\" *ngIf=\"!(isOpenMenu | async)\" [routerLink]=\"['/']\">\n                    <img class=\"logo-img\" [src]=\"imgLogo\" alt=\"logo\">\n                </div>\n\n                <div class=\"navbar-collapse collapse justify-content-between\" id=\"navbar\" [class.show]=\"false\"\n                     [ngClass]=\"{'padded': isOpenMenu | async}\" #navBar>\n                    <div class=\"hw\" [ngClass]=\"{'is-opened': (isOpenMenu | async) && (isMobile | async)}\">\n                        <div class=\"d-flex flex-lg-row flex-column\">\n                            <a class=\"nav-link\" [routerLink]=\"['/subscription']\" (click)=\"closeMenu()\">Subscribe</a>\n                            <a class=\"nav-link\" [routerLink]=\"['/music-scores']\" (click)=\"closeMenu()\">Music Scores</a>\n                            <a class=\"nav-link nav-link--hover\" [routerLink]=\"['/contact-us']\" (click)=\"closeMenu()\">Contact us</a>\n                            <div class=\"cart-link-wrapper\">\n                                <a class=\"nav-link cart-link\" [routerLink]=\"['/cart']\" [class.hidden]=\"!(isLoggedIn | async)\"\n                                   *ngIf=\"(isMobile | async)\">\n                                    Cart\n                                    <span class=\"cart-badge--mobile\" *ngIf=\"(cart | async)?.showFilledCart\">\n                                        {{ (cart | async)?.items.length }}\n                                    </span>\n                                </a>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"!(isMobile | async)\" class=\"spacer\"></div>\n                        <div [class.hidden]=\"isLoggedIn | async\" class=\"d-flex flex-lg-row flex-column sign-menu\">\n                            <a class=\"nav-link nav-link--charcoal\" [routerLink]=\"['/sign-in']\"\n                               (click)=\"closeMenu()\">Sign in</a>\n                            <a class=\"nav-link btn-nav\"\n                               [class.red]=\"isMobile | async\"\n                               [routerLink]=\"['/sign-up']\" (click)=\"closeMenu()\">Sign up</a>\n                        </div>\n                        <div class=\"btn-group cart-link-wrapper cart-link-wrapper--desktop\" [class.hidden]=\"!(isLoggedIn | async)\" dropdown\n                             [autoClose]=\"true\" [isDisabled]=\"(isMobile | async) || !(cart | async)\" *ngIf=\"!(isMobile | async)\"\n                             triggers=\"hover\" (isOpenChange)=\"cartDropdownChange()\" #dp=\"bs-dropdown\" (mouseleave)=\"dp.hide()\">\n                            <a class=\"nav-link flex-row cart-link\" [routerLink]=\"['/cart']\" dropdownToggle id=\"button-cart\"\n                               aria-labelledby=\"dropdown-cart\">\n                                <span class=\"cart-badge\" *ngIf=\"(cart | async)?.showFilledCart\"></span>\n                                <img src=\"/assets/img/ic-cart-gray.svg\" alt=\"Cart icon\">\n                                Cart\n                            </a>\n                            <ul id=\"dropdown-cart\" class=\"dropdown-menu dropdown-cart\" *dropdownMenu role=\"menu\"\n                                aria-labelledby=\"button-cart\">\n                                <li role=\"menuitem\" class=\"cart-item\">\n                                    <h6 class=\"typography-heading-level-6-bold\">\n                                        {{(cart | async)?.items.length}} {{(cart | async)?.itemsTypo}} in your cart\n                                    </h6>\n                                    <ng-container *ngTemplateOutlet=\"cartDropdownItem; context: (cart | async)\"></ng-container>\n                                </li>\n                            </ul>\n                        </div>\n                        <app-menu-profile *ngIf=\"isLoggedIn | async\"\n                                          [isMobile]=\"isMobile | async\"\n                                          (navClicked)=\"onNavClicked($event)\"\n                                          [user]=\"currentUser | async\"></app-menu-profile>\n                    </div>\n                </div>\n                <div class=\"btn-search\" (click)=\"onSearchClick($event)\"\n                     *ngIf=\"!(isMobile | async)\">Search\n                </div>\n                <button class=\"ic-search\" (click)=\"onSearchClick($event)\" [class.hidden]=\"(isOpenMenu | async)\"\n                        *ngIf=\"(isMobile | async)\">\n                    <i class=\"fa fa-search\"></i>\n                </button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row d-flex flex-row justify-content-between flex-nowrap\" [class.hidden]=\"!(isSearchActive | async)\">\n        <form class=\"d-flex spacer align-items-center\" [formGroup]=\"searchForm\">\n            <input type=\"text\" #searchInput\n                   class=\"search-input w-100 spa\"\n                   [formControlName]=\"'search'\"\n                   placeholder=\"Search by Music Scores\">\n        </form>\n        <div class=\"btn-cancel\" (click)=\"onSearchCancelClick($event)\">\n            <i class=\"fa fa-close ic-close\"></i>\n        </div>\n    </div>\n</div>\n\n<ng-template #cartDropdownItem let-itemsAmount=\"totalAmount\" let-isItems=\"showFilledCart\">\n    <p *ngIf=\"isItems\" class=\"typography-body-level-1-medium little-grey\">Tap on Cart to see details</p>\n    <p *ngIf=\"!isItems\" class=\"typography-body-level-1-medium little-grey\">Go ahead and add something!</p>\n    <a *ngIf=\"!isItems\" class=\"typography-body-level-1-medium orangey-red mt-3\" [routerLink]=\"['/music-scores']\">Continue shopping</a>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main/main.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main/main.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer [class.hidden]=\"isFooterHidden | async\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_PATTERN, PHONE_MIN_LENGTH, SEARCH_QUERY_LENGTH, PHONE_MAX_LENGTH, PHONE_PATTERN, NOT_SPACES_ONLY, ALPHANUMERIC_PUNCTUATION, NUMERIC, ALPHANUMERIC, CARD_NUMBER_PATTERN, CARD_EXPIRATION_PATTERN, EMAIL_PATTERN, ZIP_CODE_PATTERN, DEFAULT_LIMIT, DEFAULT_FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_MIN_LENGTH", function() { return PASSWORD_MIN_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_MAX_LENGTH", function() { return PASSWORD_MAX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_PATTERN", function() { return PASSWORD_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHONE_MIN_LENGTH", function() { return PHONE_MIN_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_QUERY_LENGTH", function() { return SEARCH_QUERY_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHONE_MAX_LENGTH", function() { return PHONE_MAX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHONE_PATTERN", function() { return PHONE_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_SPACES_ONLY", function() { return NOT_SPACES_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHANUMERIC_PUNCTUATION", function() { return ALPHANUMERIC_PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC", function() { return NUMERIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHANUMERIC", function() { return ALPHANUMERIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_NUMBER_PATTERN", function() { return CARD_NUMBER_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_EXPIRATION_PATTERN", function() { return CARD_EXPIRATION_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN", function() { return EMAIL_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIP_CODE_PATTERN", function() { return ZIP_CODE_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LIMIT", function() { return DEFAULT_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FILTERS", function() { return DEFAULT_FILTERS; });
// VALIDATIONS
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 50;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[A-Z])([a-zA-Z0-9\s\S_-]+)/;
const PHONE_MIN_LENGTH = 6;
const SEARCH_QUERY_LENGTH = 3;
const PHONE_MAX_LENGTH = 16;
const PHONE_PATTERN = /^\+[0-9]\d{5,15}$/;
const NOT_SPACES_ONLY = /^(?!\s+$).+/;
const ALPHANUMERIC_PUNCTUATION = /^[a-zA-Z0-9 .-]*$/;
const NUMERIC = /^[0-9]*$/;
const ALPHANUMERIC = /^[a-zA-Z0-9 ]*$/;
// tslint:disable-next-line:max-line-length
const CARD_NUMBER_PATTERN = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
const CARD_EXPIRATION_PATTERN = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
// tslint:disable-next-line:max-line-length
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ZIP_CODE_PATTERN = /^[0-9]{5}(?:-[0-9]{4})?$/;
// PAGINATION
const DEFAULT_LIMIT = 12;
const DEFAULT_FILTERS = {
    limit: DEFAULT_LIMIT,
    offset: 0
};


/***/ }),

/***/ "./src/app/components/menu-profile/menu-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/menu-profile/menu-profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n.menu-profile__avatar .avatar-placeholder, :host {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.typography-heading-level-3, .typography-heading-level-3-web {\n  font-family: \"Avenir\", sans-serif;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\n.typography-heading-level-3-web {\n  font-size: 32px;\n  line-height: 0.94;\n}\n.typography-heading-level-6, .typography-heading-level-6-bold, .typography-heading-level-6-medium {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  font-size: 16px;\n}\n.typography-heading-level-6-medium {\n  line-height: 1.13;\n}\n.typography-heading-level-6-bold {\n  font-weight: bold;\n  line-height: 1.13;\n}\n.typography-body, .typography-body-level-1, .typography-body-level-1-semibold, .typography-body-level-1-medium, .user-navigation-mobile > a, .typography-body-level-1-regular {\n  font-family: \"Montserrat\", sans-serif;\n}\n.typography-body-level-1, .typography-body-level-1-semibold, .typography-body-level-1-medium, .user-navigation-mobile > a, .typography-body-level-1-regular {\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n}\n.typography-body-level-1-regular {\n  line-height: 1.57;\n}\n.typography-body-level-1-medium, .user-navigation-mobile > a {\n  line-height: 1.71;\n}\n.typography-caption, .typography-caption-level-1, .typography-caption-level-1-mobile, .typography-caption-level-1-web {\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-stretch: normal;\n}\n.typography-caption-level-1-web {\n  letter-spacing: 1.5px;\n  font-size: 11px;\n  line-height: normal;\n}\n.typography-caption-level-1-mobile {\n  letter-spacing: 2.18px;\n  font-size: 16px;\n  line-height: 1.13;\n}\n.typography-button, .typography-button-level-1 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 2.66px;\n}\n.font-weight-400, .typography-body-level-1-regular {\n  font-weight: 400;\n}\n.font-weight-500, .typography-heading-level-6-medium, .typography-body-level-1-medium, .user-navigation-mobile > a {\n  font-weight: 500;\n}\n.font-weight-600, .typography-heading-level-3, .typography-heading-level-3-web, .typography-body-level-1-semibold {\n  font-weight: 600;\n}\n.font-weight-700, .menu-profile__username {\n  font-weight: 700;\n}\n.font-weight-800, .typography-caption-level-1-web {\n  font-weight: 800;\n}\n.font-weight-900, .typography-button, .typography-button-level-1 {\n  font-weight: 800;\n}\n@media (max-width: 991px) {\n  :host {\n    margin-top: 15px;\n  }\n}\n.menu-profile {\n  position: relative;\n}\n@media (max-width: 991px) {\n  .menu-profile {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.menu-profile__avatar {\n  display: flex;\n  flex: 0 0 auto;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.menu-profile__avatar-image {\n  width: 45px;\n  height: 45px;\n}\n.menu-profile__avatar .avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  font-size: 45px;\n  color: #999999;\n  background: #d9d9d9;\n}\n.menu-profile__dropdown {\n  right: 0 !important;\n  left: auto !important;\n  border: none;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);\n}\n.menu-profile__dropdown .dropdown-item {\n  font-weight: 500;\n}\n.menu-profile__dropdown .dropdown-item:hover {\n  background-color: transparent;\n  color: #ee4036;\n}\n.menu-profile__username {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 250px;\n  margin: 20px 20px 15px 20px;\n  cursor: default;\n}\n.user-navigation-mobile > a {\n  color: #393e41;\n  text-align: center;\n  margin-bottom: 3px;\n}\n.user-navigation-mobile .orangey-red {\n  color: #ee4036;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wcm9maWxlL21lbnUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXByb2ZpbGUvbWVudS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvdHlwb2dyYXBoeS5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZS5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZGVmYXVsdHMvY29sb3ItY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQWFBLFdBQUE7QUFnQkEsbUJBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMzQko7QUQ4QkEsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ3hCSjtBRDBCSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUMwQlI7QUQwQlE7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDNkJoQjtBRDRCSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUNpQ2hCO0FENEJRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ3VDYjtBRDhCSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDNUJSO0FEOEJRO0VBQ0ksaUJBQUE7QUM1Qlo7QURnQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUM5QlI7QURrQ0E7RUFDSSxjQUFBO0FDL0JKO0FEa0NBO0VBQ0ksd0JBQUE7QUMvQko7QURrQ0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZO0VBK0ZaLG1DQUFBO0FDaENKO0FEa0NJO0VBQ0ksY0FwR0s7QUNvRWI7QURvQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNqQ0o7QURvQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2pDSjtBRG9DQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQ2pDSjtBRG9DQSxtQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUNqQ0o7QURvQ0E7RUFDSSxnQkFBQTtBQ2pDSjtBRG9DQTtFQUNJLGdCQUFBO0FDakNKO0FEb0NBO0VBQ0ksZ0JBQUE7QUNqQ0o7QURvQ0Esb0JBQUE7QUFDQTtFQUNJLGVBQUE7QUNqQ0o7QURvQ0E7RUFDSSxlQUFBO0FDakNKO0FDaEhRO0VBQ0ksaUNBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QURrSFo7QUNoSFk7RUFHSSxlQUFBO0VBQ0EsaUJBQUE7QURnSGhCO0FDN0dRO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FEK0daO0FDN0dZO0VBR0ksaUJBQUE7QUQ2R2hCO0FDMUdZO0VBRUksaUJBQUE7RUFDQSxpQkFBQTtBRDJHaEI7QUN0R0k7RUFDSSxxQ0FBQTtBRHdHUjtBQ3RHUTtFQUdJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRHNHWjtBQ3BHWTtFQUlJLGlCQUFBO0FEbUdoQjtBQ2hHWTtFQUdJLGlCQUFBO0FEZ0doQjtBQ3RGSTtFQUNJLHFDQUFBO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtBRHVGUjtBQ2xGWTtFQUtJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEZ0ZoQjtBQzdFWTtFQUdJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FENkVoQjtBQ3hFSTtFQUdJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEd0VSO0FDL0RRO0VBQ0ksZ0JBQUE7QURpRVo7QUM5RFE7RUFDSSxnQkFBQTtBRGdFWjtBQzdEUTtFQUNJLGdCQUFBO0FEK0RaO0FDNURRO0VBQ0ksZ0JBQUE7QUQ4RFo7QUMzRFE7RUFDSSxnQkFBQTtBRDZEWjtBQzFEUTtFQUNJLGdCQUFBO0FENERaO0FFdExRO0VDVFI7SUFJUSxnQkFBQTtFSGdNTjtBQUNGO0FHN0xBO0VBQ0ksa0JBQUE7QUhnTUo7QUVoTVE7RUNEUjtJQUlRLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VIaU1OO0FBQ0Y7QUcvTEk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUVBLFdBRGM7RUFFZCxZQUZjO0VBR2Qsa0JBQUE7RUFDQSxnQkFBQTtBSGdNUjtBRzlMUTtFQUNJLFdBUFU7RUFRVixZQVJVO0FId010QjtBRzdMUTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFmVTtFQWdCVixjQUFBO0VBQ0EsbUJBQUE7QUg4TFo7QUcxTEk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FINExSO0FHMUxRO0VBQ0ksZ0JBQUE7QUg0TFo7QUcxTFk7RUFDSSw2QkFBQTtFQUNBLGNDM0RGO0FKdVBkO0FHdExJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUh3TFI7QUdqTEk7RUFFSSxjQy9FUTtFRGdGUixrQkFBQTtFQUNBLGtCQUFBO0FIbUxSO0FHaExJO0VBQ0ksY0N0Rk07QUp3UWQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcHJvZmlsZS9tZW51LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWQVJJQUJMRVMgKi9cbiRvcmFuZ2UtcmVkOiAjZWU0MDM2O1xuJHdoaXRlOiAjZmZmZmZmO1xuJGNoYXJjb2FsLWdyZXk6ICMzOTNlNDE7XG4kdmVyeS1saWdodC1waW5rOiAjZDlkOWQ5O1xuJGRpbS1ncmV5OiAjMjEyMTIxO1xuJGJyb3duLWdyZXk6ICNhMGEwYTA7XG4kYnJvd25pc2gtZ3JleTogIzYyNjI2MjtcbiRsaWdodC1ncmV5OiAjOTk5OTk5O1xuJHBlYWNoeS1waW5rOiAjZmY4Zjg5O1xuJGxpZ2h0LXBpbms6ICNlZWVlZWU7XG4kZGFyay1ncmV5OiAjM2IzYjNiO1xuXG4vKiBNSVhJTlMgKi9cbkBtaXhpbiBidG4taGVpZ2h0KCRoZWlnaHQsICRidG4tcGFkZGluZzogMzBweCkge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkaGVpZ2h0IC8gMjtcbiAgICBwYWRkaW5nLWxlZnQ6ICRidG4tcGFkZGluZztcbiAgICBwYWRkaW5nLXJpZ2h0OiAkYnRuLXBhZGRpbmc7XG59XG5cbkBtaXhpbiBtdWx0aWxpbmUtZWxsaXBzaXMoJGxpbmVDbGFtcCkge1xuICAgIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lQ2xhbXA7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLyogQ0xBU1MgVkFSSUFCTEVTKi9cblxuJWZsZXgtY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gICAgQGluY2x1ZGUgYnRuLWhlaWdodCg1MHB4KTtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xuXG4gICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi13aGl0ZSB7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGJyb3duLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgIH1cbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwe1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1e1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbn1cbiIsIi8qIFZBUklBQkxFUyAqL1xuLyogTUlYSU5TICovXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuLm1lbnUtcHJvZmlsZV9fYXZhdGFyIC5hdmF0YXItcGxhY2Vob2xkZXIsIDpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbn1cbi5idG4td2hpdGUge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EwYTBhMDtcbn1cbi5idG4td2hpdGU6aG92ZXIge1xuICBib3JkZXItd2lkdGg6IDNweDtcbn1cbi5idG4taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgY29sb3I6ICMzOTNlNDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC0zLCAudHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTMtd2ViIHtcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG4udHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTMtd2ViIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMC45NDtcbn1cbi50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtNiwgLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02LWJvbGQsIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtNi1tZWRpdW0ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtNi1tZWRpdW0ge1xuICBsaW5lLWhlaWdodDogMS4xMztcbn1cbi50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtNi1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjEzO1xufVxuLnR5cG9ncmFwaHktYm9keSwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtc2VtaWJvbGQsIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1tZWRpdW0sIC51c2VyLW5hdmlnYXRpb24tbW9iaWxlID4gYSwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4udHlwb2dyYXBoeS1ib2R5LWxldmVsLTEsIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1zZW1pYm9sZCwgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLW1lZGl1bSwgLnVzZXItbmF2aWdhdGlvbi1tb2JpbGUgPiBhLCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtcmVndWxhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG4udHlwb2dyYXBoeS1ib2R5LWxldmVsLTEtcmVndWxhciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU3O1xufVxuLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xLW1lZGl1bSwgLnVzZXItbmF2aWdhdGlvbi1tb2JpbGUgPiBhIHtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG59XG4udHlwb2dyYXBoeS1jYXB0aW9uLCAudHlwb2dyYXBoeS1jYXB0aW9uLWxldmVsLTEsIC50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMS1tb2JpbGUsIC50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMS13ZWIge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG59XG4udHlwb2dyYXBoeS1jYXB0aW9uLWxldmVsLTEtd2ViIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4udHlwb2dyYXBoeS1jYXB0aW9uLWxldmVsLTEtbW9iaWxlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS4xMztcbn1cbi50eXBvZ3JhcGh5LWJ1dHRvbiwgLnR5cG9ncmFwaHktYnV0dG9uLWxldmVsLTEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbn1cbi5mb250LXdlaWdodC00MDAsIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1yZWd1bGFyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb250LXdlaWdodC01MDAsIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtNi1tZWRpdW0sIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1tZWRpdW0sIC51c2VyLW5hdmlnYXRpb24tbW9iaWxlID4gYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9udC13ZWlnaHQtNjAwLCAudHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTMsIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtMy13ZWIsIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZm9udC13ZWlnaHQtNzAwLCAubWVudS1wcm9maWxlX191c2VybmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC13ZWlnaHQtODAwLCAudHlwb2dyYXBoeS1jYXB0aW9uLWxldmVsLTEtd2ViIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mb250LXdlaWdodC05MDAsIC50eXBvZ3JhcGh5LWJ1dHRvbiwgLnR5cG9ncmFwaHktYnV0dG9uLWxldmVsLTEge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cblxuLm1lbnUtcHJvZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWVudS1wcm9maWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm1lbnUtcHJvZmlsZV9fYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZW51LXByb2ZpbGVfX2F2YXRhci1pbWFnZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4ubWVudS1wcm9maWxlX19hdmF0YXIgLmF2YXRhci1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG59XG4ubWVudS1wcm9maWxlX19kcm9wZG93biB7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbi5tZW51LXByb2ZpbGVfX2Ryb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tZW51LXByb2ZpbGVfX2Ryb3Bkb3duIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuLm1lbnUtcHJvZmlsZV9fdXNlcm5hbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTVweCAyMHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi51c2VyLW5hdmlnYXRpb24tbW9iaWxlID4gYSB7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi51c2VyLW5hdmlnYXRpb24tbW9iaWxlIC5vcmFuZ2V5LXJlZCB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufSIsIi50eXBvZ3JhcGh5IHtcbiAgICAmLWhlYWRpbmcge1xuICAgICAgICAmLWxldmVsLTMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBAZXh0ZW5kIC5mb250LXdlaWdodC02MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG5cbiAgICAgICAgICAgICYtd2ViIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWhlYWRpbmctbGV2ZWwtMztcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC45NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLWxldmVsLTYge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgICAgICAmLW1lZGl1bSB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1oZWFkaW5nLWxldmVsLTY7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuZm9udC13ZWlnaHQtNTAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLWJvbGQge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktaGVhZGluZy1sZXZlbC02O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1ib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuICAgICAgICAmLWxldmVsLTEge1xuICAgICAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1ib2R5O1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcblxuICAgICAgICAgICAgJi1yZWd1bGFyIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMTtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5mb250LXdlaWdodC00MDA7XG5cbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41NztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1tZWRpdW0ge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktYm9keS1sZXZlbC0xO1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLmZvbnQtd2VpZ2h0LTUwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1zZW1pYm9sZCB7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAudHlwb2dyYXBoeS1ib2R5LWxldmVsLTE7XG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuZm9udC13ZWlnaHQtNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1jYXB0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcblxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuXG4gICAgICAgICYtbGV2ZWwtMSB7XG4gICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWNhcHRpb247XG5cbiAgICAgICAgICAgICYtd2ViIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWNhcHRpb24tbGV2ZWwtMTtcblxuICAgICAgICAgICAgICAgIEBleHRlbmQgLmZvbnQtd2VpZ2h0LTgwMDtcblxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1tb2JpbGUge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktY2FwdGlvbi1sZXZlbC0xO1xuXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuMThweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJ1dHRvbiB7XG4gICAgICAgIEBleHRlbmQgLmZvbnQtd2VpZ2h0LTkwMDtcblxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICAgICAgJi1sZXZlbC0xIHtcbiAgICAgICAgICAgIEBleHRlbmQgLnR5cG9ncmFwaHktYnV0dG9uO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9udCB7XG4gICAgJi13ZWlnaHQge1xuICAgICAgICAmLTQwMCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi01MDAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtNjAwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLTcwMCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi04MDAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtOTAwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgICAvLyBiYXNpYzpcbiAgICBtb2JpbGU6IDMyMHB4LFxuICAgIGV4dHJhLXNtYWxsOiAzNzdweCxcbiAgICBzbWFsbDogNTc2cHgsXG4gICAgbWVkaXVtOiA3NjdweCxcbiAgICBsYXJnZTogOTkxcHgsXG4gICAgZXh0cmEtbGFyZ2U6IDEyMDBweCxcbiAgICBpcGFkLWxhbmRzY2FwZTogMTAyNXB4LFxuICAgIGxhcHRvcDogMTM2NnB4XG4pO1xuXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCl9KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAd2FybiBcIk5vIHN1Y2ggYnJlYWtwb2ludCBpbiB0aGUgbWFwOiBgI3skYnJlYWtwb2ludH1gLiBcIjtcbiAgICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvYmFzZSc7XG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZGVmYXVsdHMvY29sb3ItY29uc3RhbnRzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9ndWlkZS90eXBvZ3JhcGh5JztcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlJztcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgJWZsZXgtY2VudGVyZWQ7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufVxuXG4ubWVudS1wcm9maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fYXZhdGFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICRhdmF0YXItc2l6ZTogNDVweDtcbiAgICAgICAgd2lkdGg6ICRhdmF0YXItc2l6ZTtcbiAgICAgICAgaGVpZ2h0OiAkYXZhdGFyLXNpemU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAmLWltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAkYXZhdGFyLXNpemU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRhdmF0YXItc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdmF0YXItcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgQGV4dGVuZCAlZmxleC1jZW50ZXJlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAkYXZhdGFyLXNpemU7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kcm9wZG93biB7XG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcblxuICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZXktcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAmX191c2VybmFtZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMjBweCAxNXB4IDIwcHg7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgICBAZXh0ZW5kIC5mb250LXdlaWdodC03MDA7XG4gICAgfVxufVxuXG4udXNlci1uYXZpZ2F0aW9uLW1vYmlsZSB7XG4gICAgJiA+IGEge1xuICAgICAgICBAZXh0ZW5kIC50eXBvZ3JhcGh5LWJvZHktbGV2ZWwtMS1tZWRpdW07XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuXG4gICAgLm9yYW5nZXktcmVkIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2V5LXJlZDtcbiAgICB9XG59XG4iLCIkYnJvd25pc2gtZ3JleTogIzYyNjI2MjtcbiRjb2xvci1hbG1vc3QtZGFyazogIzNiM2IzYjtcbiRvcmFuZ2V5LXJlZDogI2VlNDAzNjtcbiRjaGFyY29hbC1ncmV5OiAjMzkzZTQxO1xuJGJyb3duLWdyZXk6ICNhMGEwYTA7XG4kd2hpdGU6ICNmZmZmZmY7XG4kdmVyeS1saWdodC1waW5rOiAjZDlkOWQ5O1xuJGxpdHRsZS1ncmV5OiAjOTk5OTk5O1xuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu-profile/menu-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-profile/menu-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProfileComponent", function() { return MenuProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user/user-model */ "./src/app/models/user/user-model.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _core_enums_profile_tabs_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/enums/profile-tabs.enum */ "./src/app/core/enums/profile-tabs.enum.ts");
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/avatar.service */ "./src/app/services/avatar.service.ts");







let MenuProfileComponent = class MenuProfileComponent {
    constructor(usersService, avatarService) {
        this.usersService = usersService;
        this.avatarService = avatarService;
        this.navClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userStorage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.ProfileTabs = _core_enums_profile_tabs_enum__WEBPACK_IMPORTED_MODULE_5__["ProfileTabs"];
    }
    ngOnInit() {
        this.userStorage.next(this.user);
        this.avatarImage = this.avatarService.avatar;
    }
    ngOnChanges({ user }) {
        if (user && user.currentValue) {
            this.userStorage.next(user.currentValue);
        }
    }
    logout() {
        this.navClicked.emit('logout');
    }
};
MenuProfileComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_6__["AvatarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"])
], MenuProfileComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MenuProfileComponent.prototype, "isMobile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MenuProfileComponent.prototype, "navClicked", void 0);
MenuProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-profile',
        template: __webpack_require__(/*! raw-loader!./menu-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu-profile/menu-profile.component.html"),
        styles: [__webpack_require__(/*! ./menu-profile.component.scss */ "./src/app/components/menu-profile/menu-profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
        _services_avatar_service__WEBPACK_IMPORTED_MODULE_6__["AvatarService"]])
], MenuProfileComponent);



/***/ }),

/***/ "./src/app/components/menu-profile/menu-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/menu-profile/menu-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: MenuProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProfileModule", function() { return MenuProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-profile.component */ "./src/app/components/menu-profile/menu-profile.component.ts");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../photo/photo.module */ "./src/app/components/photo/photo.module.ts");








let MenuProfileModule = class MenuProfileModule {
};
MenuProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _menu_profile_component__WEBPACK_IMPORTED_MODULE_6__["MenuProfileComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _photo_photo_module__WEBPACK_IMPORTED_MODULE_7__["PhotoModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        exports: [
            _menu_profile_component__WEBPACK_IMPORTED_MODULE_6__["MenuProfileComponent"]
        ]
    })
], MenuProfileModule);



/***/ }),

/***/ "./src/app/components/photo/photo.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/photo/photo.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-wrapper {\n  width: 70px;\n  height: 70px;\n  margin: auto;\n}\n\n.photo {\n  height: 100%;\n  width: 100%;\n  border-radius: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLXdyYXBwZXIge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5waG90byB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIiwiLnBob3RvLXdyYXBwZXIge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5waG90byB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/photo/photo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/photo/photo.component.ts ***!
  \*****************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const imgPlaceholder = 'assets/img/image-placeholder-3.svg';
let PhotoComponent = class PhotoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.placeholder = imgPlaceholder;
        this.image = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.placeholder);
    }
    ngOnInit() {
        this.image.next(this.placeholder);
        if (this.photo) {
            this.image.next(this.saveImage(this.photo));
        }
    }
    ngOnChanges({ photo }) {
        if (photo && photo.currentValue) {
            this.image.next(this.saveImage(photo.currentValue.changingThisBreaksApplicationSecurity || photo.currentValue));
        }
        if (photo.previousValue && !photo.currentValue) {
            this.image.next(imgPlaceholder);
        }
    }
    saveImage(image) {
        return this.sanitizer.bypassSecurityTrustUrl(image && image.length ? image : imgPlaceholder);
    }
};
PhotoComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhotoComponent.prototype, "photo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PhotoComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhotoComponent.prototype, "placeholder", void 0);
PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo',
        template: __webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/photo/photo.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./photo.component.scss */ "./src/app/components/photo/photo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], PhotoComponent);



/***/ }),

/***/ "./src/app/components/photo/photo.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/photo/photo.module.ts ***!
  \**************************************************/
/*! exports provided: PhotoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoModule", function() { return PhotoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo.component */ "./src/app/components/photo/photo.component.ts");




let PhotoModule = class PhotoModule {
};
PhotoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"],
        ],
        exports: [
            _photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"],
        ]
    })
], PhotoModule);



/***/ }),

/***/ "./src/app/core/enums/profile-tabs.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/core/enums/profile-tabs.enum.ts ***!
  \*************************************************/
/*! exports provided: ProfileTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabs", function() { return ProfileTabs; });
var ProfileTabs;
(function (ProfileTabs) {
    ProfileTabs[ProfileTabs["Profile"] = 1] = "Profile";
    ProfileTabs[ProfileTabs["Orders"] = 2] = "Orders";
    ProfileTabs[ProfileTabs["Subscription"] = 3] = "Subscription";
    ProfileTabs[ProfileTabs["Settings"] = 4] = "Settings";
    ProfileTabs[ProfileTabs["SellSheet"] = 5] = "SellSheet";
})(ProfileTabs || (ProfileTabs = {}));


/***/ }),

/***/ "./src/app/core/validation/rules/index.ts":
/*!************************************************!*\
  !*** ./src/app/core/validation/rules/index.ts ***!
  \************************************************/
/*! exports provided: minlengthValidationMessage, maxlengthValidationMessage, minValidationMessage, maxValidationMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minlengthValidationMessage", function() { return minlengthValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxlengthValidationMessage", function() { return maxlengthValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minValidationMessage", function() { return minValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxValidationMessage", function() { return maxValidationMessage; });
function minlengthValidationMessage(err, field) {
    return `Should have at least ${field.templateOptions.minLength} characters`;
}
function maxlengthValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
}
function minValidationMessage(err, field) {
    return `This value should be more than ${field.templateOptions.min}`;
}
function maxValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.max}`;
}


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/session/session-storage */ "./src/app/core/session/session-storage.ts");




let AuthGuard = class AuthGuard {
    constructor(sessionStorage, router) {
        this.sessionStorage = sessionStorage;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.sessionStorage.restore()) {
            this.router.navigate(['/sign-in']);
            return;
        }
        return true;
    }
    canLoad(route, segments) {
        if (!this.sessionStorage.restore()) {
            this.router.navigate(['/sign-in']);
            return;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/provider.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/provider.guard.ts ***!
  \******************************************/
/*! exports provided: ProviderGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderGuard", function() { return ProviderGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var _models_user_user_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user/user-roles */ "./src/app/models/user/user-roles.ts");





let ProviderGuard = class ProviderGuard {
    constructor(sessionStorage, router) {
        this.sessionStorage = sessionStorage;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.sessionStorage.restore() || this.sessionStorage.restore().role !== _models_user_user_roles__WEBPACK_IMPORTED_MODULE_4__["UserRole"].Provider.toString()) {
            this.router.navigate(['/']);
            return;
        }
        return true;
    }
};
ProviderGuard.ctorParameters = () => [
    { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProviderGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProviderGuard);



/***/ }),

/***/ "./src/app/guards/unsubscribed.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/unsubscribed.guard.ts ***!
  \**********************************************/
/*! exports provided: UnsubscribedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribedGuard", function() { return UnsubscribedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/session/session-storage */ "./src/app/core/session/session-storage.ts");




let UnsubscribedGuard = class UnsubscribedGuard {
    constructor(router, sessionStorage) {
        this.router = router;
        this.sessionStorage = sessionStorage;
    }
    canActivate(next, state) {
        const user = this.sessionStorage.userStorage;
        if (!user.isSubscribed) {
            this.router.navigate(['/subscription']);
            return;
        }
        return true;
    }
    canLoad(route, segments) {
        const user = this.sessionStorage.userStorage;
        if (!user.isSubscribed) {
            this.router.navigate(['/subscription']);
            return;
        }
        return true;
    }
};
UnsubscribedGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"] }
];
UnsubscribedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_session_session_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorage"]])
], UnsubscribedGuard);



/***/ }),

/***/ "./src/app/main/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 119px;\n  background-color: #f5f5f5;\n  box-shadow: 0 0 4px 0 rgba(153, 153, 153, 0.45);\n}\n.footer-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.privacy-routes a {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n  color: #999999;\n}\n.privacy-routes a:first-child {\n  padding-right: 10px;\n  border-right: 1px solid #979797;\n}\n.privacy-routes a:last-child {\n  padding-left: 10px;\n}\n.working-time {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  flex-grow: 1;\n}\n.working-time span {\n  font-size: 14px;\n  color: #393e41;\n}\n.working-time__title {\n  margin-right: 5px;\n  line-height: 1.57;\n}\n.working-time__time {\n  font-weight: 500;\n  line-height: 1.43;\n}\n.working-time__time ~ .working-time__title {\n  margin-left: 20px;\n}\n.working-time br {\n  display: none;\n}\n.copy {\n  font-size: 10px;\n  line-height: 2;\n  color: #393e41;\n  transform: translateX(-50%);\n}\n.social-link + .social-link {\n  margin-left: 24px;\n}\n@media (max-width: 767px) {\n  .privacy-routes, .social {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 30px;\n  }\n\n  .privacy-routes {\n    margin-top: 37px;\n  }\n\n  .social {\n    order: 3;\n  }\n\n  .copy {\n    order: 4;\n    width: 100%;\n    transform: translateX(0);\n    padding-bottom: 37px;\n  }\n\n  .footer-row {\n    flex-direction: column;\n  }\n\n  :host {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBU0EsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUNtQlI7QURpQ1E7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDc0JoQjtBRG1DSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUMwQmhCO0FEbUNRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ2dDYjtBRHFDSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDbkNSO0FEcUNRO0VBQ0ksaUJBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQ1I7QUR5Q0E7RUFDSSxjQUFBO0FDdENKO0FEeUNBO0VBQ0ksd0JBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZO0VBK0ZaLG1DQUFBO0FDdkNKO0FEeUNJO0VBQ0ksY0FwR0s7QUM2RGI7QUQyQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQ3hDSjtBRDJDQSxtQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0Esb0JBQUE7QUFDQTtFQUNJLGVBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxlQUFBO0FDeENKO0FDekdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUQ0R0o7QUN6R0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRDRHSjtBQ3ZHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRDBHUjtBQ3hHUTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUQwR1o7QUN2R1E7RUFDSSxrQkFBQTtBRHlHWjtBQ3BHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEdUdKO0FDckdJO0VBQ0ksZUFBQTtFQUNBLGNGM0NRO0FDa0poQjtBQ3BHSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QURzR1I7QUNuR0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FEcUdSO0FDbkdRO0VBQ0ksaUJBQUE7QURxR1o7QUNqR0k7RUFDSSxhQUFBO0FEbUdSO0FDOUZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxjRnJFWTtFRXNFWiwyQkFBQTtBRGlHSjtBQzFGUTtFQUNJLGlCQUFBO0FENkZaO0FDdkZBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUQwRk47O0VDdkZFO0lBQ0ksZ0JBQUE7RUQwRk47O0VDdkZFO0lBQ0ksUUFBQTtFRDBGTjs7RUN2RkU7SUFDSSxRQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUQwRk47O0VDdkZFO0lBQ0ksc0JBQUE7RUQwRk47O0VDdkZFO0lBQ0ksWUFBQTtFRDBGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVkFSSUFCTEVTICovXG4kb3JhbmdlLXJlZDogI2VlNDAzNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRjaGFyY29hbC1ncmV5OiAjMzkzZTQxO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRkaW0tZ3JleTogIzIxMjEyMTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kbGlnaHQtZ3JleTogIzk5OTk5OTtcbiRwZWFjaHktcGluazogI2ZmOGY4OTtcbiRsaWdodC1waW5rOiAjZWVlZWVlO1xuJGRhcmstZ3JleTogIzNiM2IzYjtcblxuLyogTUlYSU5TICovXG5AbWl4aW4gYnRuLWhlaWdodCgkaGVpZ2h0LCAkYnRuLXBhZGRpbmc6IDMwcHgpIHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJGhlaWdodCAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAkYnRuLXBhZGRpbmc7XG4gICAgcGFkZGluZy1yaWdodDogJGJ0bi1wYWRkaW5nO1xufVxuXG5AbWl4aW4gbXVsdGlsaW5lLWVsbGlwc2lzKCRsaW5lQ2xhbXApIHtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZUNsYW1wO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIENMQVNTIFZBUklBQkxFUyovXG5cbiVmbGV4LWNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICAgIEBpbmNsdWRlIGJ0bi1oZWlnaHQoNTBweCk7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcblxuICAgICYtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2hpdGUge1xuICAgICAgICBjb2xvcjogJGJyb3duLWdyZXk7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRicm93bi1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICB9XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwe1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNXtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG4iLCIvKiBWQVJJQUJMRVMgKi9cbi8qIE1JWElOUyAqL1xuLyogQ0xBU1MgVkFSSUFCTEVTKi9cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbn1cbi5idG4td2hpdGUge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EwYTBhMDtcbn1cbi5idG4td2hpdGU6aG92ZXIge1xuICBib3JkZXItd2lkdGg6IDNweDtcbn1cbi5idG4taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgY29sb3I6ICMzOTNlNDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDUpO1xufVxuXG4uZm9vdGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByaXZhY3ktcm91dGVzIGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi5wcml2YWN5LXJvdXRlcyBhOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk3OTc5Nztcbn1cbi5wcml2YWN5LXJvdXRlcyBhOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi53b3JraW5nLXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG59XG4ud29ya2luZy10aW1lIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzZTQxO1xufVxuLndvcmtpbmctdGltZV9fdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTc7XG59XG4ud29ya2luZy10aW1lX190aW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG59XG4ud29ya2luZy10aW1lX190aW1lIH4gLndvcmtpbmctdGltZV9fdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi53b3JraW5nLXRpbWUgYnIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29weSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5zb2NpYWwtbGluayArIC5zb2NpYWwtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByaXZhY3ktcm91dGVzLCAuc29jaWFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAucHJpdmFjeS1yb3V0ZXMge1xuICAgIG1hcmdpbi10b3A6IDM3cHg7XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBvcmRlcjogMztcbiAgfVxuXG4gIC5jb3B5IHtcbiAgICBvcmRlcjogNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgcGFkZGluZy1ib3R0b206IDM3cHg7XG4gIH1cblxuICAuZm9vdGVyLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2Jhc2VcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC40NSk7XG59XG5cbi5mb290ZXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpdmFjeS1yb3V0ZXMge1xuXG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ud29ya2luZy10aW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcblxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41NztcbiAgICB9XG5cbiAgICAmX190aW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDM7XG5cbiAgICAgICAgJiB+IC53b3JraW5nLXRpbWVfX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG4uY29weSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5zb2NpYWwge1xuXG4gICAgJi1saW5rIHtcblxuICAgICAgICAmICsgJiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucHJpdmFjeS1yb3V0ZXMsIC5zb2NpYWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLnByaXZhY3ktcm91dGVzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzdweDtcbiAgICB9XG5cbiAgICAuc29jaWFsIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuXG4gICAgLmNvcHkge1xuICAgICAgICBvcmRlcjogNDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDM3cHg7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1yb3cge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.socials = [
            {
                icon: 'assets/img/socials/ic-facebook-gray.svg',
                link: 'https://www.facebook.com/PanNotation-248671752505263/?modal=admin_todo_tour'
            },
            {
                icon: 'assets/img/socials/ic-instagram-gray.svg',
                link: 'https://www.instagram.com/pannotation'
            }
        ];
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/footer/footer.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/main/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/main/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/main/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n.nav-link, .logo, .btn-cancel, .btn-search {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  z-index: 100;\n  background-color: #ffffff;\n}\n:host.locked {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.btn-cancel, .btn-search {\n  width: 100%;\n  max-width: 200px;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  color: #ffffff;\n  margin-left: 15px;\n  cursor: pointer;\n  transition: background-color ease-in 300ms;\n}\n.search-input::-webkit-input-placeholder, .search-input {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n}\n.search-input::-moz-placeholder, .search-input {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n}\n.search-input::-ms-input-placeholder, .search-input {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n}\n.search-input::placeholder, .search-input {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n}\n@media (max-width: 991px) {\n  .search-input::-webkit-input-placeholder, .search-input {\n    line-height: 1.43;\n    color: #999999;\n  }\n  .search-input::-moz-placeholder, .search-input {\n    line-height: 1.43;\n    color: #999999;\n  }\n  .search-input::-ms-input-placeholder, .search-input {\n    line-height: 1.43;\n    color: #999999;\n  }\n  .search-input::placeholder, .search-input {\n    line-height: 1.43;\n    color: #999999;\n  }\n}\n.logo {\n  margin-right: 45px;\n  margin-left: 60px;\n  outline: none;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .logo {\n    max-height: 80px;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.logo-img {\n  width: 110px;\n  height: 89px;\n}\n@media (max-width: 991px) {\n  .logo-img {\n    width: 77px;\n    height: 62px;\n    margin: 0;\n  }\n}\n.header {\n  height: 110px;\n  background: #ffffff;\n  border-bottom: 1px solid rgba(59, 59, 59, 0.3);\n}\n.header .row {\n  height: 100%;\n}\n@media (max-width: 991px) {\n  .header {\n    height: 80px;\n  }\n}\n.header .cart-link-wrapper {\n  align-self: center;\n}\n.header .cart-link-wrapper .dropdown-cart {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);\n  background-color: #ffffff;\n  width: 259px;\n}\n.header .cart-link-wrapper .dropdown-cart .cart-item {\n  padding: 20px;\n}\n.header .cart-link-wrapper--desktop {\n  height: 74px;\n}\n.header .cart-link {\n  display: flex;\n  position: relative;\n}\n.header .cart-link > img {\n  margin-right: 10px;\n}\n.header .cart-badge {\n  width: 10px;\n  height: 10px;\n  background-color: #ee4036;\n  border-radius: 50%;\n  position: absolute;\n  left: 22px;\n  bottom: 26px;\n}\n.header .cart-badge--mobile {\n  padding: 0 5px;\n  height: 15px;\n  border-radius: 3px;\n  background-color: #ee4036;\n  position: absolute;\n  right: -16px;\n  top: -3px;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.search-input {\n  display: flex;\n  flex-direction: row;\n  color: #393e41;\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin-left: 60px;\n}\n.search-input::-webkit-input-placeholder {\n  color: #a0a0a0;\n}\n.search-input::-moz-placeholder {\n  color: #a0a0a0;\n}\n.search-input::-ms-input-placeholder {\n  color: #a0a0a0;\n}\n.search-input::placeholder {\n  color: #a0a0a0;\n}\n@media (max-width: 991px) {\n  .search-input {\n    margin-left: 25px;\n  }\n}\n.search-bar {\n  height: 100%;\n}\n.nav-link {\n  height: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n  color: #393e41;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.nav-link:last-child, .nav-link:nth-last-child(2) {\n  color: #626262;\n}\n.nav-link.red {\n  color: #ee4036;\n}\n.nav-link--hover {\n  color: #393e41 !important;\n}\n.nav-link--hover:hover {\n  color: #ee4036 !important;\n}\n@media (max-width: 991px) {\n  .nav-link {\n    font-size: 16px;\n    height: auto;\n    margin-bottom: 14px;\n    line-height: 1.13;\n    letter-spacing: 2.18px;\n  }\n}\n@media (max-width: 576px) {\n  .nav-link {\n    align-self: center;\n  }\n}\n.nav-link i {\n  margin-right: 10px;\n  font-size: 16px;\n}\n.btn-search {\n  background-color: #ee4036;\n  height: 100%;\n  text-transform: uppercase;\n}\n.btn-search:hover {\n  background-color: #393e41;\n}\n.btn-cancel {\n  background-color: #393e41;\n}\n@media (max-width: 991px) {\n  .btn-cancel {\n    max-width: 24px;\n    margin-left: 20px;\n    margin-right: 25px;\n    background-color: transparent;\n  }\n  .btn-cancel .ic-close {\n    color: #393e41;\n  }\n}\n.ic-close {\n  font-size: 24px;\n  color: #ffffff;\n}\n.hw {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-basis: auto;\n  justify-content: space-between;\n  background: #ffffff;\n  box-sizing: border-box;\n}\n.hw.is-opened {\n  -webkit-overflow-scrolling: touch;\n  height: calc(100vh - 80px);\n}\n@media (max-width: 991px) {\n  .hw.is-opened {\n    padding-top: 15px;\n    margin-top: -1px;\n  }\n}\n@media (max-width: 991px) {\n  .hw {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 576px) {\n  .hw {\n    min-height: calc(100vh - 80px);\n  }\n}\n@media (max-width: 991px) {\n  .hw .sign-menu {\n    justify-self: flex-end;\n    margin-bottom: 100px;\n    margin-top: auto;\n  }\n}\n.navbar-toggler, .ic-search {\n  height: 100%;\n  padding-left: 26px;\n  padding-right: 26px;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  color: #393e41;\n  margin: 0;\n}\n.navbar-toggler i, .ic-search i {\n  font-size: 24px;\n}\n.ic-search {\n  position: absolute;\n  top: 0;\n  right: 0;\n  max-height: 80px;\n}\n@media (max-width: 991px) {\n  .navbar-toggler {\n    position: absolute;\n    top: 0;\n    left: 0;\n    max-height: 80px;\n  }\n}\n.navbar-collapse.padded {\n  padding-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDM0JKO0FEOEJBLGdCQUFBO0FBQ0E7RUF4QkksWUF5Qm9CO0VBeEJwQixtQkFBQTtFQUNBLGtCQUhxQztFQUlyQyxtQkFKcUM7RUEyQnJDLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUN4Qko7QUQwQkk7RUFDSSx5QkFqREs7RUFrREwscUJBbERLO0VBbURMLGNBbERBO0FDMEJSO0FEMEJRO0VBQ0kseUJBcERJO0VBcURKLHFCQXJESTtBQzZCaEI7QUQ0Qkk7RUFDSSx5QkExRFE7RUEyRFIscUJBM0RRO0FDaUNoQjtBRDRCUTtFQUNJLHlCQWhFQztFQWlFRCxxQkFqRUM7QUN1Q2I7QUQ4Qkk7RUFDSSxjQWpFSztFQWtFTCx5QkFBQTtBQzVCUjtBRDhCUTtFQUNJLGlCQUFBO0FDNUJaO0FEZ0NJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDOUJSO0FEa0NBO0VBQ0ksY0FBQTtBQy9CSjtBRGtDQTtFQUNJLHdCQUFBO0FDL0JKO0FEa0NBO0VBQ0ksaUJBQUE7RUFDQSxjQTdGWTtFQStGWixtQ0FBQTtBQ2hDSjtBRGtDSTtFQUNJLGNBcEdLO0FDb0ViO0FEb0NBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDakNKO0FEb0NBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNqQ0o7QURvQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUNqQ0o7QURvQ0EsbUJBQUE7QUFDQTtFQUNJLGdCQUFBO0FDakNKO0FEb0NBO0VBQ0ksZ0JBQUE7QUNqQ0o7QURvQ0E7RUFDSSxnQkFBQTtBQ2pDSjtBRG9DQTtFQUNJLGdCQUFBO0FDakNKO0FEb0NBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FDakNKO0FEb0NBO0VBQ0ksZUFBQTtBQ2pDSjtBQzNHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUQ4R0o7QUM1R0k7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRDhHUjtBQzFHQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRi9CSTtFRWdDSixpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBRDRHSjtBQ3pHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FENEdKO0FDL0dBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUQ0R0o7QUMvR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRDRHSjtBQy9HQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FENEdKO0FFeElRO0VEeUJSO0lBTVEsaUJBQUE7SUFDQSxjQUFBO0VENkdOO0VDcEhGO0lBTVEsaUJBQUE7SUFDQSxjQUFBO0VENkdOO0VDcEhGO0lBTVEsaUJBQUE7SUFDQSxjQUFBO0VENkdOO0VDcEhGO0lBTVEsaUJBQUE7SUFDQSxjQUFBO0VENkdOO0FBQ0Y7QUMxR0E7RUFFSSxrQkFBQTtFQUNBLGlCQWhEa0I7RUFpRGxCLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FENEdKO0FFdkpRO0VEb0NSO0lBVVEsZ0JBeERlO0lBeURmLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZ0NBQUE7RUQ2R047QUFDRjtBQzNHSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FENkdSO0FFcktRO0VEc0RKO0lBS1EsV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VEOEdWO0FBQ0Y7QUMxR0E7RUFDSSxhQTlFWTtFQStFWixtQkFBQTtFQUNBLDhDQUFBO0FENkdKO0FDM0dJO0VBQ0ksWUFBQTtBRDZHUjtBRXJMUTtFRGtFUjtJQVVRLFlBdEZlO0VEbU1yQjtBQUNGO0FDMUdRO0VBQ0ksa0JBQUE7QUQ0R1o7QUMxR1k7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJGbEdSO0VFbUdRLFlBQUE7QUQ0R2hCO0FDMUdnQjtFQUNJLGFBQUE7QUQ0R3BCO0FDeEdZO0VBQ0ksWUFBQTtBRDBHaEI7QUN0R1E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUR3R1o7QUN0R1k7RUFDSSxrQkFBQTtBRHdHaEI7QUNwR1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRjVIQztFRTZIRCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURzR1o7QUNwR1k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJGdElIO0VFdUlHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNGaEpSO0FDcVBSO0FDOUZJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0YxSlE7RUUySlIsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFFQSxpQkE5SmM7QUQ2UHRCO0FDN0ZRO0VBRUksY0ZqS0M7QUMrUGI7QUNoR1E7RUFFSSxjRmpLQztBQytQYjtBQ2hHUTtFQUVJLGNGaktDO0FDK1BiO0FDaEdRO0VBRUksY0ZqS0M7QUMrUGI7QUV2UFE7RUQySUo7SUFrQlEsaUJBQUE7RUQ4RlY7QUFDRjtBQzNGSTtFQUNJLFlBQUE7QUQ2RlI7QUN6RkE7RUFHSSxZQUFBO0VBQ0Esa0JBRmM7RUFHZCxtQkFIYztFQUlkLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0YxTFk7RUUyTFoseUJBQUE7RUFDQSxlQUFBO0FEMEZKO0FDdkZJO0VBQ0ksY0Y1TFE7QUNxUmhCO0FDdEZJO0VBQ0ksY0Z0TUs7QUM4UmI7QUNyRkk7RUFDSSx5QkFBQTtBRHVGUjtBQ3RGUTtFQUNJLHlCQUFBO0FEd0ZaO0FFdlJRO0VEc0tSO0lBK0JRLGVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VEc0ZOO0FBQ0Y7QUVoU1E7RURzS1I7SUF1Q1Esa0JBQUE7RUR1Rk47QUFDRjtBQ3JGSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBRHVGUjtBQ2pGSTtFQUVJLHlCRnZPSztFRXdPTCxZQUFBO0VBQ0EseUJBQUE7QURtRlI7QUNqRlE7RUFDSSx5QkYxT0k7QUM2VGhCO0FDL0VJO0VBRUkseUJGaFBRO0FDZ1VoQjtBRXJUUTtFRG1PSjtJQUtRLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBQUE7RURpRlY7RUMvRVU7SUFDSSxjRnpQQTtFQzBVZDtBQUNGO0FDNUVBO0VBQ0ksZUFBQTtFQUNBLGNGbFFJO0FDaVZSO0FDNUVBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CRjVRSTtFRTZRSixzQkFBQTtBRDhFSjtBQzVFSTtFQUNJLGlDQUFBO0VBQ0EsMEJBWFk7QUR5RnBCO0FFblZRO0VEbVFKO0lBS1EsaUJBQUE7SUFDQSxnQkFBQTtFRCtFVjtBQUNGO0FFelZRO0VEeVBSO0lBcUJRLHNCQUFBO0lBQ0EsMkJBQUE7RUQrRU47QUFDRjtBRS9WUTtFRHlQUjtJQTBCUSw4QkF6Qlk7RUR5R2xCO0FBQ0Y7QUVwV1E7RURzUko7SUFFUSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7RURnRlY7QUFDRjtBQzNFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0ZuVFk7RUVvVFosU0FBQTtBRDhFSjtBQzVFSTtFQUNJLGVBQUE7QUQ4RVI7QUMxRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBOVRtQjtBRDJZdkI7QUVqWVE7RUR3VFI7SUFHUSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsZ0JBeFVlO0VEbVpyQjtBQUNGO0FDdkVJO0VBQ0ksaUJBOVVlO0FEd1p2QiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZBUklBQkxFUyAqL1xuJG9yYW5nZS1yZWQ6ICNlZTQwMzY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kY2hhcmNvYWwtZ3JleTogIzM5M2U0MTtcbiR2ZXJ5LWxpZ2h0LXBpbms6ICNkOWQ5ZDk7XG4kZGltLWdyZXk6ICMyMTIxMjE7XG4kYnJvd24tZ3JleTogI2EwYTBhMDtcbiRicm93bmlzaC1ncmV5OiAjNjI2MjYyO1xuJGxpZ2h0LWdyZXk6ICM5OTk5OTk7XG4kcGVhY2h5LXBpbms6ICNmZjhmODk7XG4kbGlnaHQtcGluazogI2VlZWVlZTtcbiRkYXJrLWdyZXk6ICMzYjNiM2I7XG5cbi8qIE1JWElOUyAqL1xuQG1peGluIGJ0bi1oZWlnaHQoJGhlaWdodCwgJGJ0bi1wYWRkaW5nOiAzMHB4KSB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRoZWlnaHQgLyAyO1xuICAgIHBhZGRpbmctbGVmdDogJGJ0bi1wYWRkaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZztcbn1cblxuQG1peGluIG11bHRpbGluZS1lbGxpcHNpcygkbGluZUNsYW1wKSB7XG4gICAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVDbGFtcDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuXG4lZmxleC1jZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgICBAaW5jbHVkZSBidG4taGVpZ2h0KDUwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG5cbiAgICAmLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXdoaXRlIHtcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkYnJvd24tZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgfVxufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwe1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwe1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjV7XG4gICAgcGFkZGluZzogMCAyNXB4O1xufVxuIiwiLyogVkFSSUFCTEVTICovXG4vKiBNSVhJTlMgKi9cbi8qIENMQVNTIFZBUklBQkxFUyovXG4ubmF2LWxpbmssIC5sb2dvLCAuYnRuLWNhbmNlbCwgLmJ0bi1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xufVxuLmJ0bi13aGl0ZSB7XG4gIGNvbG9yOiAjYTBhMGEwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjYTBhMGEwO1xufVxuLmJ0bi13aGl0ZTpob3ZlciB7XG4gIGJvcmRlci13aWR0aDogM3B4O1xufVxuLmJ0bi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzM5M2U0MTtcbiAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNlZTQwMzY7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tdC01MCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5wLXJsLTI1IHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdC5sb2NrZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gMzAwbXM7XG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyLCAuc2VhcmNoLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xMztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciwgLnNlYXJjaC1pbnB1dCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gIH1cbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubG9nbyB7XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxufVxuLmxvZ28taW1nIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDg5cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmxvZ28taW1nIHtcbiAgICB3aWR0aDogNzdweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDExMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1OSwgNTksIDU5LCAwLjMpO1xufVxuLmhlYWRlciAucm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxufVxuLmhlYWRlciAuY2FydC1saW5rLXdyYXBwZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5jYXJ0LWxpbmstd3JhcHBlciAuZHJvcGRvd24tY2FydCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDI1OXB4O1xufVxuLmhlYWRlciAuY2FydC1saW5rLXdyYXBwZXIgLmRyb3Bkb3duLWNhcnQgLmNhcnQtaXRlbSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uaGVhZGVyIC5jYXJ0LWxpbmstd3JhcHBlci0tZGVza3RvcCB7XG4gIGhlaWdodDogNzRweDtcbn1cbi5oZWFkZXIgLmNhcnQtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgLmNhcnQtbGluayA+IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5oZWFkZXIgLmNhcnQtYmFkZ2Uge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjJweDtcbiAgYm90dG9tOiAyNnB4O1xufVxuLmhlYWRlciAuY2FydC1iYWRnZS0tbW9iaWxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTZweDtcbiAgdG9wOiAtM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhMGEwYTA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbi5zZWFyY2gtYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmF2LWxpbmsge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LWxpbms6bGFzdC1jaGlsZCwgLm5hdi1saW5rOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgY29sb3I6ICM2MjYyNjI7XG59XG4ubmF2LWxpbmsucmVkIHtcbiAgY29sb3I6ICNlZTQwMzY7XG59XG4ubmF2LWxpbmstLWhvdmVyIHtcbiAgY29sb3I6ICMzOTNlNDEgIWltcG9ydGFudDtcbn1cbi5uYXYtbGluay0taG92ZXI6aG92ZXIge1xuICBjb2xvcjogI2VlNDAzNiAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjE4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubmF2LWxpbmsge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuLm5hdi1saW5rIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJ0bi1zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnRuLXNlYXJjaDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJ0bi1jYW5jZWwge1xuICAgIG1heC13aWR0aDogMjRweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmJ0bi1jYW5jZWwgLmljLWNsb3NlIHtcbiAgICBjb2xvcjogIzM5M2U0MTtcbiAgfVxufVxuXG4uaWMtY2xvc2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaHcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaHcuaXMtb3BlbmVkIHtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaHcuaXMtb3BlbmVkIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmh3IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5odyB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmh3IC5zaWduLW1lbnUge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxufVxuXG4ubmF2YmFyLXRvZ2dsZXIsIC5pYy1zZWFyY2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbiAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMzOTNlNDE7XG4gIG1hcmdpbjogMDtcbn1cbi5uYXZiYXItdG9nZ2xlciBpLCAuaWMtc2VhcmNoIGkge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pYy1zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyLXRvZ2dsZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICB9XG59XG5cbi5uYXZiYXItY29sbGFwc2UucGFkZGVkIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9iYXNlXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmVcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDExMHB4O1xuJGhlYWRlci1oZWlnaHQtbW9iaWxlOiA4MHB4O1xuJGhlYWRlci1wYWRkaW5nLWxlZnQ6IDYwcHg7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cbiAgICAmLmxvY2tlZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxufVxuXG4lYnRuLWJpZyB7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXJlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAzMDBtcztcbn1cblxuJXNlYXJjaC1pbnB1dC1zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTM7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICB9XG59XG5cbi5sb2dvIHtcbiAgICBAZXh0ZW5kICVmbGV4LWNlbnRlcmVkO1xuICAgIG1hcmdpbi1yaWdodDogNDVweDtcbiAgICBtYXJnaW4tbGVmdDogJGhlYWRlci1wYWRkaW5nLWxlZnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgIG1heC1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0LW1vYmlsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxuICAgICYtaW1nIHtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBoZWlnaHQ6IDg5cHg7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZSkge1xuICAgICAgICAgICAgd2lkdGg6IDc3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1OSwgNTksIDU5LCAwLjMpO1xuXG4gICAgLnJvdyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQtbW9iaWxlO1xuICAgIH1cblxuICAgIC5jYXJ0IHtcbiAgICAgICAgJi1saW5rLXdyYXBwZXIge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAgICAgICAuZHJvcGRvd24tY2FydCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTlweDtcblxuICAgICAgICAgICAgICAgIC5jYXJ0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0tZGVza3RvcCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1saW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICYgPiBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtYmFkZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDIycHg7XG4gICAgICAgICAgICBib3R0b206IDI2cHg7XG5cbiAgICAgICAgICAgICYtLW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNnB4O1xuICAgICAgICAgICAgICAgIHRvcDogLTNweDtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gge1xuICAgICYtaW5wdXQge1xuICAgICAgICBAZXh0ZW5kICVzZWFyY2gtaW5wdXQtc3R5bGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBtYXJnaW4tbGVmdDogJGhlYWRlci1wYWRkaW5nLWxlZnQ7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgQGV4dGVuZCAlc2VhcmNoLWlucHV0LXN0eWxlO1xuICAgICAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZSkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJhciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5uYXYtbGluayB7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXJlZDtcbiAgICAkYnRuLXBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogJGJ0bi1wYWRkaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG5cbiAgICAmOmxhc3QtY2hpbGQsICY6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogJGJyb3duaXNoLWdyZXk7XG4gICAgfVxuXG4gICAgJi5yZWQge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgfVxuXG4gICAgJi0taG92ZXIge1xuICAgICAgICBjb2xvcjogIzM5M2U0MSAhaW1wb3J0YW50O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlLXJlZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZSkge1xuICAgICAgICAvL21heC1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0LW1vYmlsZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi4xOHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbi5idG4ge1xuXG4gICAgJi1zZWFyY2gge1xuICAgICAgICBAZXh0ZW5kICVidG4tYmlnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWNhbmNlbCB7XG4gICAgICAgIEBleHRlbmQgJWJ0bi1iaWc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIC5pYy1jbG9zZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaWMtY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogJHdoaXRlO1xufVxuXG4uaHcge1xuICAgICRtb2JpbGUtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodC1tb2JpbGV9KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICYuaXMtb3BlbmVkIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBoZWlnaHQ6ICRtb2JpbGUtaGVpZ2h0O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgbWluLWhlaWdodDogJG1vYmlsZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLnNpZ24tbWVudSB7XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLm5hdmJhci10b2dnbGVyLCAuaWMtc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG5cbi5pYy1zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1oZWlnaHQtbW9iaWxlO1xufVxuXG5cbi5uYXZiYXItdG9nZ2xlciB7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBtYXgtaGVpZ2h0OiAkaGVhZGVyLWhlaWdodC1tb2JpbGU7XG4gICAgfVxufVxuXG4ubmF2YmFyLWNvbGxhcHNle1xuICAgICYucGFkZGVkIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICRoZWFkZXItaGVpZ2h0LW1vYmlsZTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgICAvLyBiYXNpYzpcbiAgICBtb2JpbGU6IDMyMHB4LFxuICAgIGV4dHJhLXNtYWxsOiAzNzdweCxcbiAgICBzbWFsbDogNTc2cHgsXG4gICAgbWVkaXVtOiA3NjdweCxcbiAgICBsYXJnZTogOTkxcHgsXG4gICAgZXh0cmEtbGFyZ2U6IDEyMDBweCxcbiAgICBpcGFkLWxhbmRzY2FwZTogMTAyNXB4LFxuICAgIGxhcHRvcDogMTM2NnB4XG4pO1xuXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCl9KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAd2FybiBcIk5vIHN1Y2ggYnJlYWtwb2ludCBpbiB0aGUgbWFwOiBgI3skYnJlYWtwb2ludH1gLiBcIjtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");












let HeaderComponent = class HeaderComponent {
    constructor(breakpointObserver, renderer, elementRef, sessionStorage, cartService, platformId, document, router, activatedRoute, authService) {
        this.breakpointObserver = breakpointObserver;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.sessionStorage = sessionStorage;
        this.cartService = cartService;
        this.platformId = platformId;
        this.document = document;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.imgLogo = '/assets/img/im-logo.png';
        this.isSearchActive = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isOpenMenu = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        const { search } = this.activatedRoute.snapshot.queryParams;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](search)
        });
        this.isSearchActive.next(!!search && !!search.length);
        this.isLoggedIn = sessionStorage.userChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((u) => !!u), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        this.currentUser = sessionStorage.userChanges;
        this.cart = this.cartService.cart;
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.observe('(max-width: 991px)')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((val) => val.matches));
        const isOpenMenuSubscription = this.isOpenMenu
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.isMobile), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(([/*isOpenMenu*/ , isMobile]) => isMobile))
            .subscribe(([isOpenMenu /*, isMobile*/]) => {
            isOpenMenu
                ? this.renderer.addClass(this.elementRef.nativeElement, 'locked')
                : this.renderer.removeClass(this.elementRef.nativeElement, 'locked');
            isOpenMenu
                ? this.renderer.addClass(this.document.body, 'locked')
                : this.renderer.removeClass(this.document.body, 'locked');
        });
        this.subscription.add(isOpenMenuSubscription);
        const searchSubscription = this.searchForm.get('search').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500))
            .subscribe((search) => {
            if (search.length === 0) {
                this.router.navigate(['/music-scores']);
            }
            if (search.length >= _app_constants__WEBPACK_IMPORTED_MODULE_10__["SEARCH_QUERY_LENGTH"]) {
                this.router.navigate(['/music-scores'], { queryParams: { search }, queryParamsHandling: 'merge' });
            }
        });
        this.subscription.add(searchSubscription);
        const navigatiionStart = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationStart"] && this.isOpenMenu.getValue()))
            .subscribe((e) => this.closeMenu());
        this.subscription.add(navigatiionStart);
        this.subscription.add(this.cartService.initCart().subscribe());
        const userSubscription = this.currentUser
            .subscribe((u) => u ?
            this.cartService.refresh() :
            this.cartService.clearCart());
        this.subscription.add(userSubscription);
        window.onorientationchange = () => {
            if (this.isOpenMenu.getValue() === true) {
                this.renderer.removeClass(this.navBar.nativeElement, 'show');
                this.isOpen();
            }
        };
    }
    onSearchClick(event) {
        event.preventDefault();
        this.isSearchActive.next(!this.isSearchActive.getValue());
    }
    onSearchCancelClick(event) {
        event.preventDefault();
        this.isSearchActive.next(!this.isSearchActive.getValue());
        this.searchForm.get('search').setValue('', { emitEvent: false });
    }
    isOpen() {
        this.isOpenMenu.next(!this.isOpenMenu.getValue());
    }
    closeMenu() {
        this.isMobile
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((r) => !!r))
            .subscribe(() => {
            this.renderer.removeClass(this.navBar.nativeElement, 'show');
            this.isOpenMenu.next(false);
        });
    }
    onNavClicked(event) {
        if (event === 'logout') {
            this.authService.logout().subscribe(() => {
                this.sessionStorage.destroy();
                this.router.navigate(['/']);
            });
        }
        else {
            throw new Error('Unknown action');
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    cartDropdownChange() {
        // TODO There is a bug when set triggers to hover, it doesn't rerender menu when data loaded without this method
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_8__["SessionStorage"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menuBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HeaderComponent.prototype, "menuBtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navBar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HeaderComponent.prototype, "navBar", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/header/header.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _core_session_session_storage__WEBPACK_IMPORTED_MODULE_8__["SessionStorage"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"], Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main/main.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_unsubscribed_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/unsubscribed.guard */ "./src/app/guards/unsubscribed.guard.ts");






const routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | views-home-home-module */[__webpack_require__.e("default~views-home-home-module~views-songsheets-songsheets-module"), __webpack_require__.e("views-home-home-module")]).then(__webpack_require__.bind(null, /*! ../views/home/home.module */ "./src/app/views/home/home.module.ts")).then(m => m.HomeModule)
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | views-docs-docs-module */[__webpack_require__.e("common"), __webpack_require__.e("views-docs-docs-module")]).then(__webpack_require__.bind(null, /*! ../views/docs/docs.module */ "./src/app/views/docs/docs.module.ts")).then(m => m.DocsModule)
            },
            {
                path: 'sign-up',
                loadChildren: () => Promise.all(/*! import() | views-sign-up-sign-up-module */[__webpack_require__.e("default~views-complete-profile-profile-module~views-reset-password-reset-password-module~views-resto~d6d83d7f"), __webpack_require__.e("common"), __webpack_require__.e("views-sign-up-sign-up-module")]).then(__webpack_require__.bind(null, /*! ../views/sign-up/sign-up.module */ "./src/app/views/sign-up/sign-up.module.ts")).then(m => m.SignUpModule),
                data: {
                    isFooterHidden: true
                }
            },
            {
                path: 'sign-in',
                loadChildren: () => Promise.all(/*! import() | views-sign-in-sign-in-module */[__webpack_require__.e("default~views-complete-profile-profile-module~views-reset-password-reset-password-module~views-resto~d6d83d7f"), __webpack_require__.e("common"), __webpack_require__.e("views-sign-in-sign-in-module")]).then(__webpack_require__.bind(null, /*! ../views/sign-in/sign-in.module */ "./src/app/views/sign-in/sign-in.module.ts")).then(m => m.SignInModule),
                data: {
                    isFooterHidden: true
                }
            },
            {
                path: 'restore-password',
                loadChildren: () => Promise.all(/*! import() | views-restore-password-restore-password-module */[__webpack_require__.e("default~views-complete-profile-profile-module~views-reset-password-reset-password-module~views-resto~d6d83d7f"), __webpack_require__.e("common"), __webpack_require__.e("views-restore-password-restore-password-module")]).then(__webpack_require__.bind(null, /*! ../views/restore-password/restore-password.module */ "./src/app/views/restore-password/restore-password.module.ts")).then(m => m.RestorePasswordModule),
                data: {
                    isFooterHidden: true
                }
            },
            {
                path: 'reset-password',
                loadChildren: () => Promise.all(/*! import() | views-reset-password-reset-password-module */[__webpack_require__.e("default~views-complete-profile-profile-module~views-reset-password-reset-password-module~views-resto~d6d83d7f"), __webpack_require__.e("common"), __webpack_require__.e("views-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ../views/reset-password/reset-password.module */ "./src/app/views/reset-password/reset-password.module.ts")).then(m => m.ResetPasswordModule),
                data: {
                    isFooterHidden: true
                }
            },
            {
                path: 'confirm-email',
                loadChildren: () => Promise.all(/*! import() | views-verification-verification-module */[__webpack_require__.e("default~views-complete-profile-profile-module~views-reset-password-reset-password-module~views-resto~d6d83d7f"), __webpack_require__.e("common"), __webpack_require__.e("views-verification-verification-module")]).then(__webpack_require__.bind(null, /*! ../views/verification/verification.module */ "./src/app/views/verification/verification.module.ts")).then(m => m.VerificationModule),
                data: {
                    isFooterHidden: true
                }
            },
            {
                path: 'subscription',
                loadChildren: () => Promise.all(/*! import() | views-subscription-subscription-module */[__webpack_require__.e("default~views-cart-cart-module~views-complete-profile-profile-module~views-profile-profile-module~vi~be87c225"), __webpack_require__.e("default~views-cart-cart-module~views-subscription-subscription-module"), __webpack_require__.e("default~views-profile-profile-module~views-subscription-subscription-module"), __webpack_require__.e("views-subscription-subscription-module")]).then(__webpack_require__.bind(null, /*! ../views/subscription/subscription.module */ "./src/app/views/subscription/subscription.module.ts")).then(m => m.SubscriptionModule)
            },
            {
                path: 'complete-profile',
                loadChildren: () => Promise.all(/*! import() | views-complete-profile-profile-module */[__webpack_require__.e("default~views-complete-profile-profile-module~views-reset-password-reset-password-module~views-resto~d6d83d7f"), __webpack_require__.e("default~views-cart-cart-module~views-complete-profile-profile-module~views-profile-profile-module~vi~be87c225"), __webpack_require__.e("common"), __webpack_require__.e("views-complete-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../views/complete-profile/profile.module */ "./src/app/views/complete-profile/profile.module.ts")).then(m => m.ProfileModule),
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: {
                    isFooterHidden: true
                }
            },
            {
                path: 'music-scores',
                loadChildren: () => Promise.all(/*! import() | views-songsheets-songsheets-module */[__webpack_require__.e("default~views-cart-cart-module~views-complete-profile-profile-module~views-profile-profile-module~vi~be87c225"), __webpack_require__.e("default~views-other-files-other-files-module~views-songsheets-songsheets-module"), __webpack_require__.e("default~views-home-home-module~views-songsheets-songsheets-module"), __webpack_require__.e("views-songsheets-songsheets-module")]).then(__webpack_require__.bind(null, /*! ../views/songsheets/songsheets.module */ "./src/app/views/songsheets/songsheets.module.ts")).then(m => m.SongsheetsModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | views-profile-profile-module */[__webpack_require__.e("default~views-cart-cart-module~views-complete-profile-profile-module~views-profile-profile-module~vi~be87c225"), __webpack_require__.e("default~views-profile-profile-module~views-subscription-subscription-module"), __webpack_require__.e("common"), __webpack_require__.e("views-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../views/profile/profile.module */ "./src/app/views/profile/profile.module.ts")).then(m => m.ProfileModule),
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'contact-us',
                loadChildren: () => Promise.all(/*! import() | views-contact-us-contact-us-module */[__webpack_require__.e("common"), __webpack_require__.e("views-contact-us-contact-us-module")]).then(__webpack_require__.bind(null, /*! ../views/contact-us/contact-us.module */ "./src/app/views/contact-us/contact-us.module.ts")).then(m => m.ContactUsModule)
            },
            {
                path: 'cart',
                loadChildren: () => Promise.all(/*! import() | views-cart-cart-module */[__webpack_require__.e("default~views-cart-cart-module~views-complete-profile-profile-module~views-profile-profile-module~vi~be87c225"), __webpack_require__.e("default~views-cart-cart-module~views-subscription-subscription-module"), __webpack_require__.e("views-cart-cart-module")]).then(__webpack_require__.bind(null, /*! ../views/cart/cart.module */ "./src/app/views/cart/cart.module.ts")).then(m => m.CartModule)
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | views-other-files-other-files-module */[__webpack_require__.e("default~views-other-files-other-files-module~views-songsheets-songsheets-module"), __webpack_require__.e("views-other-files-other-files-module")]).then(__webpack_require__.bind(null, /*! ../views/other-files/other-files.module */ "./src/app/views/other-files/other-files.module.ts")).then(m => m.OtherFilesModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _guards_unsubscribed_guard__WEBPACK_IMPORTED_MODULE_5__["UnsubscribedGuard"]]
            }
        ]
    },
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainRoutingModule);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm2015/ngx-formly-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _core_validation_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/validation/rules */ "./src/app/core/validation/rules/index.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main/main.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_provider_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../guards/provider.guard */ "./src/app/guards/provider.guard.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/main/footer/footer.component.ts");
/* harmony import */ var _components_menu_profile_menu_profile_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/menu-profile/menu-profile.module */ "./src/app/components/menu-profile/menu-profile.module.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _guards_unsubscribed_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../guards/unsubscribed.guard */ "./src/app/guards/unsubscribed.guard.ts");




















let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot({
                validationMessages: [
                    { name: 'required', message: 'This field is required' },
                    { name: 'minlength', message: _core_validation_rules__WEBPACK_IMPORTED_MODULE_8__["minlengthValidationMessage"] },
                    { name: 'maxlength', message: _core_validation_rules__WEBPACK_IMPORTED_MODULE_8__["maxlengthValidationMessage"] },
                    { name: 'min', message: _core_validation_rules__WEBPACK_IMPORTED_MODULE_8__["minValidationMessage"] },
                    { name: 'max', message: _core_validation_rules__WEBPACK_IMPORTED_MODULE_8__["maxValidationMessage"] },
                ],
            }),
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormlyBootstrapModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
            _main_routing_module__WEBPACK_IMPORTED_MODULE_9__["MainRoutingModule"],
            _components_menu_profile_menu_profile_module__WEBPACK_IMPORTED_MODULE_17__["MenuProfileModule"]
        ],
        providers: [
            _services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
            _guards_provider_guard__WEBPACK_IMPORTED_MODULE_14__["ProviderGuard"],
            _guards_unsubscribed_guard__WEBPACK_IMPORTED_MODULE_19__["UnsubscribedGuard"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_18__["CartService"]
        ]
    })
], MainModule);



/***/ }),

/***/ "./src/app/main/main/main.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/main/main.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvX21pc2Muc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNESSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ3VpZGUvbWlzY1wiO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgaGVpZ2h0LTEwMDtcbn1cbiIsIkBtaXhpbiBoZWlnaHQtMTAwKCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xufVxuXG5AbWl4aW4gYmxvY2stc2hhZG93KCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MainComponent = class MainComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.isFooterHidden = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => !!this.activatedRoute.snapshot.firstChild.data['isFooterHidden']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(!!this.activatedRoute.snapshot.firstChild.data['isFooterHidden']));
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main/main.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main/main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MainComponent);



/***/ }),

/***/ "./src/app/models/cart/cart-item-model.ts":
/*!************************************************!*\
  !*** ./src/app/models/cart/cart-item-model.ts ***!
  \************************************************/
/*! exports provided: CartItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemModel", function() { return CartItemModel; });
class CartItemModel {
    constructor(data) {
        this.instruments = data.instruments;
        this.genres = data.genres;
        this.name = data.name;
        this.artistName = data.artistName;
        this.price = data.price;
        this.isTop = data.isTop;
        this.image = data.image;
        this.id = data.id;
    }
    get getInstruments() {
        if (!this.instruments || !this.instruments.length) {
            return '';
        }
        const contentToShow = this.instruments;
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('and more')).join(' · ');
    }
    get getGenres() {
        if (!this.genres || !this.genres.length) {
            return '';
        }
        const contentToShow = this.genres;
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('and more')).join(' · ');
    }
}
CartItemModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/cart/cart-model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/cart/cart-model.ts ***!
  \*******************************************/
/*! exports provided: CartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModel", function() { return CartModel; });
/* harmony import */ var _cart_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-item-model */ "./src/app/models/cart/cart-item-model.ts");

class CartModel {
    constructor(data) {
        this.totalAmount = data.totalAmount;
        this.items = data.items.map((i) => new _cart_item_model__WEBPACK_IMPORTED_MODULE_0__["CartItemModel"](i));
    }
    get showFilledCart() {
        return this.items.length > 0;
    }
    get orderDate() {
        return Date.now();
    }
    get itemsTypo() {
        return this.items.length === 1 ? 'item' : 'items';
    }
}
CartModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/cart/cart-payment-model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/cart/cart-payment-model.ts ***!
  \***************************************************/
/*! exports provided: CartPaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPaymentModel", function() { return CartPaymentModel; });
/* harmony import */ var _songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../songsheet/songsheet-model */ "./src/app/models/songsheet/songsheet-model.ts");

class PaymentBillingModel {
    constructor(data) {
        this.country = data.country;
        this.state = data.state;
        this.city = data.city;
        this.address = data.address;
        this.zip = data.zip;
    }
}
PaymentBillingModel.ctorParameters = () => [
    { type: undefined }
];
class PaymentMethodModel {
    constructor(data) {
        this.cardMask = data.cardMask;
        this.cardType = data.cardType;
    }
}
PaymentMethodModel.ctorParameters = () => [
    { type: undefined }
];
class CartPaymentModel {
    constructor(data) {
        this.orderId = data.orderId;
        this.orderAmount = data.orderAmount;
        this.status = data.status;
        this.songsheets = data.songsheets.map((s) => new _songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_0__["SongsheetModel"](s));
        if (data.paymentMethod) {
            this.paymentMethod = new PaymentMethodModel(data.paymentMethod);
        }
    }
}
CartPaymentModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/songsheet/songsheet-model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/songsheet/songsheet-model.ts ***!
  \*****************************************************/
/*! exports provided: SongsheetModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetModel", function() { return SongsheetModel; });
class SongsheetModel {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.producer = data.producer;
        this.arranger = data.arranger;
        this.artistName = data.artistName;
        this.youTubeLink = data.youTubeLink;
        this.price = data.price;
        this.isTop = data.isTop;
        this.preview = data.preview;
        this.track = data.track;
        this.image = data.image;
        this.instruments = data.instruments;
        this.genres = data.genres;
        this.fileType = data.fileType;
    }
    get getInstruments() {
        if (!this.instruments ||
            !this.instruments.length) {
            return '';
        }
        const contentToShow = this.instruments;
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('and more')).join(' · ');
    }
    get getGenres() {
        if (!this.genres ||
            !this.genres.length) {
            return '';
        }
        const contentToShow = this.genres;
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('and more')).join(' · ');
    }
}
SongsheetModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/models/subscriptions/subscription-status.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/subscriptions/subscription-status.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionStatus", function() { return SubscriptionStatus; });
class SubscriptionStatus {
    constructor(subscriptionStatus) {
        this.isSubscribed = subscriptionStatus.isSubscribed;
        this.startDate = subscriptionStatus.startDate;
        this.endDate = subscriptionStatus.endDate;
    }
}
SubscriptionStatus.ctorParameters = () => [
    { type: SubscriptionStatus }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_session_app_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/session/app-user */ "./src/app/core/session/app-user.ts");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user/user-model */ "./src/app/models/user/user-model.ts");







let AuthService = class AuthService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/sessions';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    signIn(credentials) {
        return this.httpClient
            .post(this.apiEndpoint, credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => new _core_session_app_user__WEBPACK_IMPORTED_MODULE_4__["AppUser"](data)));
    }
    getProfile() {
        return this.httpClient
            .get(`${this.apiUrl}/users/me/profile`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => new _models_user_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"](data)));
    }
    patchProfile(payload) {
        return this.httpClient
            .patch(`${this.apiUrl}/users/me/profile`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => new _models_user_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"](data)));
    }
    deletePhoto() {
        return this.httpClient
            .delete(`${this.apiUrl}/users/me/profile/avatar`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ data }) => new _models_user_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"](data)));
    }
    changePassword(payload) {
        const { currentPassword, password: { password, confirmPassword } } = payload;
        return this.httpClient
            .put(`${this.apiUrl}/users/me/password`, { password, currentPassword, confirmPassword });
    }
    logout() {
        return this.httpClient
            .delete(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => null));
    }
};
AuthService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_5__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_5__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_cart_cart_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/cart/cart-model */ "./src/app/models/cart/cart-model.ts");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");
/* harmony import */ var _models_cart_cart_item_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/cart/cart-item-model */ "./src/app/models/cart/cart-item-model.ts");
/* harmony import */ var _models_cart_cart_payment_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/cart/cart-payment-model */ "./src/app/models/cart/cart-payment-model.ts");









let CartService = class CartService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/cart';
        this.refresher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cartStorage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    get cart() {
        return this.cartStorage.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    initCart() {
        return this.refresher
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.requestCart()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => this.cartStorage.next(data)));
    }
    refresh() {
        this.refresher.next();
    }
    requestCart() {
        return this.httpClient
            .get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((cart) => new _models_cart_cart_model__WEBPACK_IMPORTED_MODULE_5__["CartModel"](cart.data)));
    }
    addToCart(songsheetId) {
        return this.httpClient
            .post(this.apiEndpoint, { songsheetId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => new _models_cart_cart_item_model__WEBPACK_IMPORTED_MODULE_7__["CartItemModel"](data.data)));
    }
    deleteFromCart(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('songsheetId', id.toString());
        return this.httpClient
            .delete(this.apiEndpoint, { params });
    }
    clearCart() {
        this.cartStorage.next(undefined);
    }
    payFreeCart() {
        return this.httpClient
            .post(`${this.apiEndpoint}/free`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => new _models_cart_cart_payment_model__WEBPACK_IMPORTED_MODULE_8__["CartPaymentModel"](data.data)));
    }
};
CartService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_6__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_6__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], CartService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user/user-model */ "./src/app/models/user/user-model.ts");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");
/* harmony import */ var _models_subscriptions_subscription_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/subscriptions/subscription-status */ "./src/app/models/subscriptions/subscription-status.ts");








let UsersService = class UsersService {
    constructor(apiUrl, httpClient, sanitizer) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.endpoint = '/users';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    signUp(user) {
        return this.httpClient
            .post(this.apiEndpoint, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => new _models_user_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](response.data)));
    }
    getOne(id) {
        return this.httpClient
            .get(`${this.apiEndpoint}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => new _models_user_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](response.data)));
    }
    setAvatar(originalImageId, thumbnailImageId) {
        return this.httpClient
            .put(`${this.apiEndpoint}/me/avatar`, { originalImageId, thumbnailImageId });
    }
    editProfile(profile) {
        return this.httpClient
            .patch(`${this.apiEndpoint}/me/profile`, profile)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => new _models_user_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](response.data)));
    }
    changePassword(passwordsPair) {
        return this.httpClient
            .put(`${this.apiEndpoint}/me/password`, passwordsPair)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => null));
    }
    deleteAccount() {
        return this.httpClient
            .delete(`${this.apiEndpoint}/me`);
    }
    getFile(filePath) {
        return this.httpClient.get(`${filePath}`, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
        }));
    }
    checkSubscription() {
        return this.httpClient.get(`${this.apiEndpoint}/me/subscription`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => new _models_subscriptions_subscription_status__WEBPACK_IMPORTED_MODULE_7__["SubscriptionStatus"](response.data)));
    }
};
UsersService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_6__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_6__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], UsersService);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map