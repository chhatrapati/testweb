(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-songsheets-songsheets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/songsheets/songsheet-details/songsheet-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/songsheets/songsheet-details/songsheet-details.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"songsheet-details-panel\">\n    <div class=\"container\">\n        <div class=\"row songsheet-details-panel-inner\">\n            <div class=\"col-2 d-none d-md-block\">\n                <img class=\"img-preview\" [src]=\"songsheet.image.compactPath\">\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n                <p class=\"charcoal-grey songsheet-details__artist\" *ngIf=\"songsheet.artistName && !!songsheet.artistName.length\">{{ songsheet.artistName | truncate: [35]}}</p>\n                <p class=\"very-light-pink songsheet-details__genre__instruments\" *ngIf=\"instruments && !!instruments.length\">{{ instruments }}</p>\n                <p class=\"charcoal-grey songsheet-details__name\">{{ songsheet.name | truncate: [17]}}</p>\n            </div>\n            <div class=\"col-12 d-block d-md-none p-rl-25\">\n                <img class=\"img-preview\" [src]=\"songsheet.image.compactPath\">\n            </div>\n            <div class=\"col-md-4 mt-50 songsheet-details-panel-inner__right\">\n                <h4 class=\"songsheet-details__price_sm charcoal-grey\">${{songsheet.price | number : '1.2-2'}}</h4>\n                <button (click)=\"onAddToCart(songsheet.id)\" class=\"btn btn-primary\">ADD TO CART</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container songsheet-details-info\">\n    <div class=\"row songsheet-details-info-inner\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-5 d-none d-md-block\">\n                    <div>\n                        <img class=\"img-cover\" [src]=\"songsheet.image.originalPath\">\n                        <a [href]=\"songsheet.preview.path\" target=\"_blank\"\n                            class=\"songsheet-details__download orangey-red justify-content-center\">Download\n                            PDF-Preview</a>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6 offset-md-1 col-sm-12 offset-sm-0\">\n                    <dl class=\"row\" *ngIf=\"songsheet.genres && !!songsheet.genres.length\">\n                        <dt class=\"d-inline-block brown-grey col-md-3 col-sm-12\">Genre:</dt>\n                        <dd class=\"d-inline-block charcoal-grey col-md-9 col-sm-12\">{{songsheet.genres.join(', ')}}</dd>\n                    </dl>\n                    <dl class=\"row\" *ngIf=\"songsheet.instruments && !!songsheet.instruments.length\">\n                        <dt class=\"d-inline-block brown-grey col-md-3 col-sm-12\">Instruments:</dt>\n                        <dd class=\"d-inline-block charcoal-grey col-md-8 col-sm-12\">{{songsheet.instruments.join(', ')}}\n                        </dd>\n                    </dl>\n                    <dl *ngIf=\"songsheet.producer && !!songsheet.producer.length\" class=\"row\">\n                        <dt class=\"d-inline-block brown-grey col-md-3 col-sm-12\">Composer Info:</dt>\n                        <dd class=\"d-inline-block charcoal-grey col-md-9 col-sm-12\">{{songsheet.producer}}</dd>\n                    </dl>\n                    <dl *ngIf=\"songsheet.arranger && !!songsheet.arranger.length\" class=\"row\">\n                        <dt class=\"d-inline-block brown-grey col-md-3 col-sm-12\">Arranger Info:</dt>\n                        <dd class=\"d-inline-block charcoal-grey col-md-9 col-sm-12\">{{songsheet.arranger}}</dd>\n                    </dl>\n\n                    <div class=\"col-12 d-block d-md-none p-rl-10 mt-30\">\n                        <div>\n                            <img class=\"img-cover\" [src]=\"songsheet.image.originalPath\">\n                            <a [href]=\"songsheet.preview.path\" target=\"_blank\"\n                                class=\"songsheet-details__download orangey-red justify-content-center\">Download\n                                PDF-Preview</a>\n                        </div>\n                    </div>\n\n                    <dl class=\"songsheet-details__description charcoal-grey\">\n                        {{ songsheet.description}}\n                    </dl>\n\n                    <div class=\"audio-player\">\n                        <app-songsheet-player [trackPath]=\"songsheet.track?.path\"></app-songsheet-player>\n                    </div>\n\n                    <div class=\"songsheet-details-info-price\">\n                        <h1 class=\"songsheet-details__price charcoal-grey m-0\">${{songsheet.price | number : '1.2-2'}}\n                        </h1>\n                        <button class=\"btn btn-primary\" (click)=\"onAddToCart(songsheet.id)\">ADD TO CART</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 text-center mt-60\" *ngIf=\"songsheet.youTubeLink && !!songsheet.youTubeLink.length\">\n            <iframe class=\"video songsheet-details__video\" [src]=\"songsheet.youTubeLink | safe\"></iframe>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/songsheets/songsheets.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/songsheets/songsheets.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <p class=\"found-message text-center\">\n                {{ (list | async).length > 0 ? 'We found ' : (isLoadingData | async)? '' : 'Nothing found'}}\n                <strong>{{ ((list | async).length > 0) ? (searchedTypesResult | async | searchResultsTypes) : '' }}</strong>\n                {{ (filter | async)?.search ? 'by ' : '' }}\n                <strong>{{ (filter | async)?.search ? (filter | async)?.search : '' }}</strong>\n            </p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <form [formGroup]=\"filtersForm\" class=\"w-100\">\n                <formly-form class=\"filters-form d-flex flex-row w-100 justify-content-md-end justify-content-center\"\n                             [form]=\"filtersForm\"\n                             [fields]=\"filtersFormConfig\"\n                             [model]=\"model\">\n                </formly-form>\n            </form>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-12 d-flex flex-row justify-content-center\" *ngFor=\"let card of (list | async)\">\n            <app-search-item [songsheet]=\"card\" class=\"songsheet-card\"></app-search-item>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-center\">\n            <button class=\"btn btn-secondary\"\n                    (click)=\"handleLoadMore()\"\n                    [hidden]=\"loadMoreDisabled | async\">Load More\n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pipes/array-uppercase.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/array-uppercase.pipe.ts ***!
  \***********************************************/
/*! exports provided: ArrayUppercasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUppercasePipe", function() { return ArrayUppercasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArrayUppercasePipe = class ArrayUppercasePipe {
    transform(items) {
        items.forEach((item, index) => items[index] = item.toUpperCase());
        return items;
    }
};
ArrayUppercasePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'arrayUppercase'
    })
], ArrayUppercasePipe);



/***/ }),

/***/ "./src/app/pipes/safe-url.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "./src/app/pipes/search-results-types.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/search-results-types.pipe.ts ***!
  \****************************************************/
/*! exports provided: SearchResultsTypesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsTypesPipe", function() { return SearchResultsTypesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/enums/other-files-types */ "./src/app/core/enums/other-files-types.ts");



let SearchResultsTypesPipe = class SearchResultsTypesPipe {
    transform(value) {
        const typesString = value
            .filter((s) => s.count > 0)
            .map((s) => `${s.count} ${_core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_2__["OtherFilesTypes"][s.type]}${s.count > 1 ? 's' : ''}, `)
            .join('');
        return typesString.substring(0, typesString.length - 2);
    }
};
SearchResultsTypesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchResultsTypes'
    })
], SearchResultsTypesPipe);



/***/ }),

/***/ "./src/app/resolvers/genres.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/resolvers/genres.resolver.ts ***!
  \**********************************************/
/*! exports provided: GenresResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresResolver", function() { return GenresResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_genres_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/genres.service */ "./src/app/services/genres.service.ts");



let GenresResolver = class GenresResolver {
    constructor(genresService) {
        this.genresService = genresService;
    }
    resolve(route, state) {
        return this.genresService.getGenres();
    }
};
GenresResolver.ctorParameters = () => [
    { type: _services_genres_service__WEBPACK_IMPORTED_MODULE_2__["GenresService"] }
];
GenresResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_genres_service__WEBPACK_IMPORTED_MODULE_2__["GenresService"]])
], GenresResolver);



/***/ }),

/***/ "./src/app/resolvers/songsheet.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/resolvers/songsheet.resolver.ts ***!
  \*************************************************/
/*! exports provided: SongsheetResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetResolver", function() { return SongsheetResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/songsheets.service */ "./src/app/services/songsheets.service.ts");






let SongsheetResolver = class SongsheetResolver {
    constructor(songsheetsService, router) {
        this.songsheetsService = songsheetsService;
        this.router = router;
    }
    resolve(route, state) {
        const songsheetId = route.params.id;
        return this.songsheetsService.getSongsheet(songsheetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            if (err.status === 404) {
                this.router.navigate(['/404']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }
        }));
    }
};
SongsheetResolver.ctorParameters = () => [
    { type: _services_songsheets_service__WEBPACK_IMPORTED_MODULE_5__["SongsheetsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SongsheetResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songsheets_service__WEBPACK_IMPORTED_MODULE_5__["SongsheetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SongsheetResolver);



/***/ }),

/***/ "./src/app/resolvers/songsheets.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/resolvers/songsheets.resolver.ts ***!
  \**************************************************/
/*! exports provided: SongsheetsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetsResolver", function() { return SongsheetsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/songsheets.service */ "./src/app/services/songsheets.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");




let SongsheetsResolver = class SongsheetsResolver {
    constructor(songsheetsService) {
        this.songsheetsService = songsheetsService;
    }
    resolve(route, state) {
        const filtersDefault = _app_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_FILTERS"];
        const { search, sortBy, direction, genres, fileTypes } = route.queryParams;
        if (search) {
            filtersDefault.search = search;
        }
        if (sortBy || direction) {
            filtersDefault.order = {};
        }
        if (direction) {
            filtersDefault.order.direction = direction;
        }
        if (sortBy) {
            filtersDefault.order.key = sortBy;
        }
        if (genres) {
            filtersDefault.genres = JSON.parse(genres);
        }
        if (fileTypes) {
            filtersDefault.fileTypes = JSON.parse(fileTypes);
        }
        return this.songsheetsService.findList(filtersDefault);
    }
};
SongsheetsResolver.ctorParameters = () => [
    { type: _services_songsheets_service__WEBPACK_IMPORTED_MODULE_2__["SongsheetsService"] }
];
SongsheetsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_songsheets_service__WEBPACK_IMPORTED_MODULE_2__["SongsheetsService"]])
], SongsheetsResolver);



/***/ }),

/***/ "./src/app/services/genres.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/genres.service.ts ***!
  \********************************************/
/*! exports provided: GenresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresService", function() { return GenresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");





let GenresService = class GenresService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/songsheets';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    getGenres() {
        return this.httpClient
            .get(this.apiEndpoint + '/genres', { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            const keys = Object.keys(data.data);
            const genres = Array();
            keys.forEach((key) => genres.push({ id: parseInt(key, 10), name: data.data[key] }));
            return genres;
        }));
    }
};
GenresService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GenresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GenresService);



/***/ }),

/***/ "./src/app/views/songsheets/songsheet-details/songsheet-details.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/songsheets/songsheet-details/songsheet-details.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.brownish-grey {\n  color: #626262;\n}\n.orangey-red {\n  color: #ee4036;\n}\n.charcoal-grey {\n  color: #393e41;\n}\n.brown-grey {\n  color: #a0a0a0;\n}\n.white {\n  color: #ffffff;\n}\n.very-light-pink {\n  color: #d9d9d9;\n}\n.little-grey {\n  color: #999999;\n}\n.songsheet-details-panel {\n  display: flex;\n  box-shadow: 0 9px 15px 0 rgba(160, 160, 160, 0.11);\n}\n.songsheet-details-panel div.col-2 {\n  margin: auto 0;\n}\n.songsheet-details-panel-inner {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  height: 152px;\n}\n@media (max-width: 1200px) {\n  .songsheet-details-panel-inner {\n    height: auto;\n  }\n}\n.songsheet-details-panel-inner__right button {\n  float: right;\n}\n@media (max-width: 767px) {\n  .songsheet-details-panel-inner__right button {\n    float: none;\n  }\n}\n@media (max-width: 991px) {\n  .songsheet-details-panel-inner__right {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media (max-width: 767px) {\n  .songsheet-details-panel-inner__right {\n    margin-top: 15px;\n    align-items: center;\n  }\n}\n@media (max-width: 767px) {\n  .songsheet-details-panel-inner {\n    text-align: center;\n    height: auto;\n  }\n}\n.songsheet-details-info {\n  margin-top: 60px;\n}\n@media (max-width: 767px) {\n  .songsheet-details-info {\n    margin-top: 45px;\n  }\n}\n.songsheet-details-info {\n  margin-bottom: 120px;\n}\n@media (max-width: 767px) {\n  .songsheet-details-info {\n    margin-bottom: 60px;\n  }\n}\n.songsheet-details-info-price {\n  margin-top: 30px;\n}\n.songsheet-details-info-price button {\n  float: right;\n}\n@media (max-width: 767px) {\n  .songsheet-details-info-price button {\n    float: none;\n    margin-top: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .songsheet-details-info-price {\n    margin-top: 60px;\n    text-align: center;\n  }\n}\n.img-preview {\n  max-width: 168px;\n  max-height: 152px;\n  border-radius: 10px;\n}\n@media (max-width: 767px) {\n  .img-preview {\n    max-width: none;\n    max-height: none;\n  }\n}\n.img-cover {\n  border-radius: 15px;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 20px 0 rgba(160, 160, 160, 0.5);\n}\ndt,\ndd {\n  font-size: 14px;\n  font-weight: 500;\n}\n@media (max-width: 767px) {\n  dt,\ndd {\n    margin-bottom: 10px;\n    padding: 0 25px;\n  }\n}\ndd {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  p {\n    padding: 0 10px;\n  }\n}\n@media (max-width: 767px) {\n  dl {\n    margin-bottom: 5px;\n  }\n}\ndt.d-inline-block {\n  max-width: 120px;\n  padding-right: 0;\n}\n@media (max-width: 767px) {\n  dt.d-inline-block {\n    max-width: 130px;\n  }\n}\n.audio-player {\n  margin-top: 30px;\n  max-height: 100px;\n}\n@media (max-width: 767px) {\n  .audio-player {\n    margin-top: 45px;\n  }\n}\n.songsheet-details__artist {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.71;\n  margin-top: 25px;\n  margin-bottom: 5px;\n}\n@media (max-width: 767px) {\n  .songsheet-details__artist {\n    margin-top: 0px;\n  }\n}\n.songsheet-details__genre__instruments {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 1.4px;\n  margin-bottom: 5px;\n}\n@media (max-width: 767px) {\n  .songsheet-details__genre__instruments {\n    margin-bottom: 0px;\n  }\n}\n.songsheet-details__name {\n  font-size: 45px;\n  font-weight: 800;\n}\n@media (max-width: 767px) {\n  .songsheet-details__name {\n    margin-bottom: 30px;\n  }\n}\n.songsheet-details__download {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 15px;\n  display: flex;\n  cursor: pointer;\n}\n.songsheet-details__download::after {\n  content: url('ic-download-red.svg');\n  display: flex;\n  width: 22px;\n  height: 20px;\n  margin-left: 10px;\n}\n.songsheet-details__description {\n  word-break: break-word;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.71;\n}\n@media (max-width: 767px) {\n  .songsheet-details__description {\n    margin-top: 45px;\n    padding: 0 10px;\n  }\n}\n.songsheet-details__price {\n  display: inline-block;\n  font-size: 45px;\n  font-weight: 800;\n}\n@media (max-width: 767px) {\n  .songsheet-details__price {\n    display: block;\n  }\n}\n.songsheet-details__price_sm {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: 900;\n  font-family: Avenir;\n  margin-top: 15px;\n  margin-right: 30px;\n}\n@media (max-width: 991px) {\n  .songsheet-details__price_sm {\n    margin-bottom: 35px;\n    margin-top: 0;\n    margin-right: 0;\n    align-self: flex-end;\n  }\n}\n@media (max-width: 767px) {\n  .songsheet-details__price_sm {\n    display: block;\n    margin-bottom: 20px;\n    margin-top: 15px;\n    align-self: center;\n  }\n}\n.songsheet-details__video {\n  width: 770px;\n  height: 300px;\n  max-width: 100%;\n}\n@media (max-width: 767px) {\n  .songsheet-details__video {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL3NvbmdzaGVldHMvc29uZ3NoZWV0LWRldGFpbHMvc29uZ3NoZWV0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3NvbmdzaGVldHMvc29uZ3NoZWV0LWRldGFpbHMvc29uZ3NoZWV0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3JjL3N0eWxlcy9kZWZhdWx0cy9jb2xvci1jbGFzc2VzLnNjc3MiLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3JjL3N0eWxlcy9kZWZhdWx0cy9jb2xvci1jb25zdGFudHMuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zdGRpbiIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBYUEsV0FBQTtBQWdCQSxtQkFBQTtBQVNBLGdCQUFBO0FBQ0E7RUF4QkksWUF5Qm9CO0VBeEJwQixtQkFBQTtFQUNBLGtCQUhxQztFQUlyQyxtQkFKcUM7RUEyQnJDLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUMvQko7QURpQ0k7RUFDSSx5QkFqREs7RUFrREwscUJBbERLO0VBbURMLGNBbERBO0FDbUJSO0FEaUNRO0VBQ0kseUJBcERJO0VBcURKLHFCQXJESTtBQ3NCaEI7QURtQ0k7RUFDSSx5QkExRFE7RUEyRFIscUJBM0RRO0FDMEJoQjtBRG1DUTtFQUNJLHlCQWhFQztFQWlFRCxxQkFqRUM7QUNnQ2I7QURxQ0k7RUFDSSxjQWpFSztFQWtFTCx5QkFBQTtBQ25DUjtBRHFDUTtFQUNJLGlCQUFBO0FDbkNaO0FEdUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDckNSO0FEeUNBO0VBQ0ksY0FBQTtBQ3RDSjtBRHlDQTtFQUNJLHdCQUFBO0FDdENKO0FEeUNBO0VBQ0ksaUJBQUE7RUFDQSxjQTdGWTtFQStGWixtQ0FBQTtBQ3ZDSjtBRHlDSTtFQUNJLGNBcEdLO0FDNkRiO0FEMkNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDeENKO0FEMkNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUN4Q0o7QUQyQ0EsbUJBQUE7QUFDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0FDeENKO0FEMkNBO0VBQ0ksZUFBQTtBQ3hDSjtBQ3pHQTtFQUFnQixjQ0ZBO0FGK0doQjtBQzVHQTtFQUFjLGNDREE7QUZpSGQ7QUMvR0E7RUFBZ0IsY0NEQTtBRm9IaEI7QUNsSEE7RUFBYSxjQ0RBO0FGdUhiO0FDckhBO0VBQVEsY0NEQTtBRjBIUjtBQ3hIQTtFQUFrQixjQ0RBO0FGNkhsQjtBQzNIQTtFQUFjLGNDREE7QUZnSWQ7QUduSUE7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7QUhzSUo7QUdwSUk7RUFDSSxjQUFBO0FIc0lSO0FHbElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUhxSUo7QUl2SVE7RUREUjtJQU1RLFlBQUE7RUhzSU47QUFDRjtBR2xJUTtFQUNJLFlBQUE7QUhvSVo7QUkvSVE7RURVQTtJQUlRLFdBQUE7RUhxSWQ7QUFDRjtBSXBKUTtFRFFKO0lBV1EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUhxSVY7QUFDRjtBSTNKUTtFRFFKO0lBaUJRLGdCQUFBO0lBQ0EsbUJBQUE7RUhzSVY7QUFDRjtBSWpLUTtFRERSO0lBZ0NRLGtCQUFBO0lBQ0EsWUFBQTtFSHNJTjtBQUNGO0FHbklBO0VBQ0ksZ0JBQUE7QUhzSUo7QUkzS1E7RURvQ1I7SUFJUSxnQkFBQTtFSHVJTjtBQUNGO0FHcElBO0VBQ0ksb0JBQUE7QUh1SUo7QUlwTFE7RUQ0Q1I7SUFJUSxtQkFBQTtFSHdJTjtBQUNGO0FHcklBO0VBQ0ksZ0JBQUE7QUh3SUo7QUd0SUk7RUFDSSxZQUFBO0FId0lSO0FJaE1RO0VEdURKO0lBSVEsV0FBQTtJQUNBLGdCQUFBO0VIeUlWO0FBQ0Y7QUl0TVE7RURvRFI7SUFhUSxnQkFBQTtJQUNBLGtCQUFBO0VIeUlOO0FBQ0Y7QUd0SUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUh5SUo7QUlsTlE7RURzRVI7SUFNUSxlQUFBO0lBQ0EsZ0JBQUE7RUgwSU47QUFDRjtBR3ZJQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtBSDBJSjtBR3ZJQTs7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUgwSUo7QUlyT1E7RUR3RlI7O0lBTVEsbUJBQUE7SUFDQSxlQUFBO0VINElOO0FBQ0Y7QUd6SUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FINElKO0FJalBRO0VEd0dSO0lBRVEsZUFBQTtFSDRJTjtBQUNGO0FJdlBRO0VEOEdSO0lBRVEsa0JBQUE7RUg0SU47QUFDRjtBR3pJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUg0SUo7QUlsUVE7RURvSFI7SUFLUSxnQkFBQTtFSDZJTjtBQUNGO0FHMUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBSDZJSjtBSTVRUTtFRDZIUjtJQUtRLGdCQUFBO0VIOElOO0FBQ0Y7QUd6SUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUg0SVI7QUl6UlE7RUR3SUo7SUFRUSxlQUFBO0VINklWO0FBQ0Y7QUcxSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FINElSO0FJcFNRO0VEb0pKO0lBT1Esa0JBQUE7RUg2SVY7QUFDRjtBRzFJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBSDRJUjtBSTdTUTtFRCtKSjtJQUtRLG1CQUFBO0VINklWO0FBQ0Y7QUcxSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FINElSO0FHMUlRO0VBQ0ksbUNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBSDRJWjtBR3hJSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUgwSVI7QUl0VVE7RUR3TEo7SUFPUSxnQkFBQTtJQUNBLGVBQUE7RUgySVY7QUFDRjtBR3hJSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIMElSO0FJalZRO0VEb01KO0lBTVEsY0FBQTtFSDJJVjtBQUNGO0FHeElJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUgwSVI7QUk5VlE7RUQ4TUo7SUFTUSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7RUgySVY7QUFDRjtBSXRXUTtFRDhNSjtJQWdCUSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VINElWO0FBQ0Y7QUd6SUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUgySVI7QUluWFE7RURxT0o7SUFNUSxXQUFBO0lBQ0EsWUFBQTtFSDRJVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc29uZ3NoZWV0cy9zb25nc2hlZXQtZGV0YWlscy9zb25nc2hlZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZBUklBQkxFUyAqL1xuJG9yYW5nZS1yZWQ6ICNlZTQwMzY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kY2hhcmNvYWwtZ3JleTogIzM5M2U0MTtcbiR2ZXJ5LWxpZ2h0LXBpbms6ICNkOWQ5ZDk7XG4kZGltLWdyZXk6ICMyMTIxMjE7XG4kYnJvd24tZ3JleTogI2EwYTBhMDtcbiRicm93bmlzaC1ncmV5OiAjNjI2MjYyO1xuJGxpZ2h0LWdyZXk6ICM5OTk5OTk7XG4kcGVhY2h5LXBpbms6ICNmZjhmODk7XG4kbGlnaHQtcGluazogI2VlZWVlZTtcbiRkYXJrLWdyZXk6ICMzYjNiM2I7XG5cbi8qIE1JWElOUyAqL1xuQG1peGluIGJ0bi1oZWlnaHQoJGhlaWdodCwgJGJ0bi1wYWRkaW5nOiAzMHB4KSB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRoZWlnaHQgLyAyO1xuICAgIHBhZGRpbmctbGVmdDogJGJ0bi1wYWRkaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZztcbn1cblxuQG1peGluIG11bHRpbGluZS1lbGxpcHNpcygkbGluZUNsYW1wKSB7XG4gICAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVDbGFtcDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuXG4lZmxleC1jZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgICBAaW5jbHVkZSBidG4taGVpZ2h0KDUwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG5cbiAgICAmLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXdoaXRlIHtcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkYnJvd24tZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgfVxufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwe1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwe1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjV7XG4gICAgcGFkZGluZzogMCAyNXB4O1xufVxuIiwiLyogVkFSSUFCTEVTICovXG4vKiBNSVhJTlMgKi9cbi8qIENMQVNTIFZBUklBQkxFUyovXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG59XG4uYnRuLXdoaXRlIHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNhMGEwYTA7XG59XG4uYnRuLXdoaXRlOmhvdmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG59XG4uYnRuLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2VlNDAzNjtcbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjUge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5icm93bmlzaC1ncmV5IHtcbiAgY29sb3I6ICM2MjYyNjI7XG59XG5cbi5vcmFuZ2V5LXJlZCB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuXG4uY2hhcmNvYWwtZ3JleSB7XG4gIGNvbG9yOiAjMzkzZTQxO1xufVxuXG4uYnJvd24tZ3JleSB7XG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnZlcnktbGlnaHQtcGluayB7XG4gIGNvbG9yOiAjZDlkOWQ5O1xufVxuXG4ubGl0dGxlLWdyZXkge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLnNvbmdzaGVldC1kZXRhaWxzLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogMCA5cHggMTVweCAwIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4xMSk7XG59XG4uc29uZ3NoZWV0LWRldGFpbHMtcGFuZWwgZGl2LmNvbC0yIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi5zb25nc2hlZXQtZGV0YWlscy1wYW5lbC1pbm5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogMTUycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zb25nc2hlZXQtZGV0YWlscy1wYW5lbC1pbm5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4uc29uZ3NoZWV0LWRldGFpbHMtcGFuZWwtaW5uZXJfX3JpZ2h0IGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29uZ3NoZWV0LWRldGFpbHMtcGFuZWwtaW5uZXJfX3JpZ2h0IGJ1dHRvbiB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc29uZ3NoZWV0LWRldGFpbHMtcGFuZWwtaW5uZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zb25nc2hlZXQtZGV0YWlscy1wYW5lbC1pbm5lcl9fcmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zb25nc2hlZXQtZGV0YWlscy1wYW5lbC1pbm5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4uc29uZ3NoZWV0LWRldGFpbHMtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNvbmdzaGVldC1kZXRhaWxzLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gIH1cbn1cblxuLnNvbmdzaGVldC1kZXRhaWxzLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29uZ3NoZWV0LWRldGFpbHMtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxufVxuXG4uc29uZ3NoZWV0LWRldGFpbHMtaW5mby1wcmljZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc29uZ3NoZWV0LWRldGFpbHMtaW5mby1wcmljZSBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNvbmdzaGVldC1kZXRhaWxzLWluZm8tcHJpY2UgYnV0dG9uIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNvbmdzaGVldC1kZXRhaWxzLWluZm8tcHJpY2Uge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5pbWctcHJldmlldyB7XG4gIG1heC13aWR0aDogMTY4cHg7XG4gIG1heC1oZWlnaHQ6IDE1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbWctcHJldmlldyB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cbn1cblxuLmltZy1jb3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41KTtcbn1cblxuZHQsXG5kZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBkdCxcbmRkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgfVxufVxuXG5kZCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgcCB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBkbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbmR0LmQtaW5saW5lLWJsb2NrIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBkdC5kLWlubGluZS1ibG9jayB7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgfVxufVxuXG4uYXVkaW8tcGxheWVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmF1ZGlvLXBsYXllciB7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgfVxufVxuXG4uc29uZ3NoZWV0LWRldGFpbHNfX2FydGlzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29uZ3NoZWV0LWRldGFpbHNfX2FydGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG4uc29uZ3NoZWV0LWRldGFpbHNfX2dlbnJlX19pbnN0cnVtZW50cyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNvbmdzaGVldC1kZXRhaWxzX19nZW5yZV9faW5zdHJ1bWVudHMge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuLnNvbmdzaGVldC1kZXRhaWxzX19uYW1lIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zb25nc2hlZXQtZGV0YWlsc19fbmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuLnNvbmdzaGVldC1kZXRhaWxzX19kb3dubG9hZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvbmdzaGVldC1kZXRhaWxzX19kb3dubG9hZDo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ljLWRvd25sb2FkLXJlZC5zdmdcIik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnNvbmdzaGVldC1kZXRhaWxzX19kZXNjcmlwdGlvbiB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNvbmdzaGVldC1kZXRhaWxzX19kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cbi5zb25nc2hlZXQtZGV0YWlsc19fcHJpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29uZ3NoZWV0LWRldGFpbHNfX3ByaWNlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLnNvbmdzaGVldC1kZXRhaWxzX19wcmljZV9zbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogQXZlbmlyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNvbmdzaGVldC1kZXRhaWxzX19wcmljZV9zbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zb25nc2hlZXQtZGV0YWlsc19fcHJpY2Vfc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbi5zb25nc2hlZXQtZGV0YWlsc19fdmlkZW8ge1xuICB3aWR0aDogNzcwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29uZ3NoZWV0LWRldGFpbHNfX3ZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn0iLCJAaW1wb3J0IFwiY29sb3ItY29uc3RhbnRzXCI7XG5cbi5icm93bmlzaC1ncmV5IHtjb2xvcjogJGJyb3duaXNoLWdyZXk7fVxuLm9yYW5nZXktcmVkIHtjb2xvcjogJG9yYW5nZXktcmVkO31cbi5jaGFyY29hbC1ncmV5IHtjb2xvcjogJGNoYXJjb2FsLWdyZXk7fVxuLmJyb3duLWdyZXkge2NvbG9yOiAkYnJvd24tZ3JleTt9XG4ud2hpdGUge2NvbG9yOiAkd2hpdGU7fVxuLnZlcnktbGlnaHQtcGluayB7Y29sb3I6ICR2ZXJ5LWxpZ2h0LXBpbms7fVxuLmxpdHRsZS1ncmV5IHtjb2xvcjogJGxpdHRsZS1ncmV5O31cblxuIiwiJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kY29sb3ItYWxtb3N0LWRhcms6ICMzYjNiM2I7XG4kb3JhbmdleS1yZWQ6ICNlZTQwMzY7XG4kY2hhcmNvYWwtZ3JleTogIzM5M2U0MTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJHdoaXRlOiAjZmZmZmZmO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRsaXR0bGUtZ3JleTogIzk5OTk5OTtcblxuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2Jhc2VcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZVwiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9kZWZhdWx0cy9jb2xvci1jbGFzc2VzXCI7XG5cbi5zb25nc2hlZXQtZGV0YWlscy1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAwIDlweCAxNXB4IDAgcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjExKTtcblxuICAgIGRpdi5jb2wtMiB7XG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cbn1cblxuLnNvbmdzaGVldC1kZXRhaWxzLXBhbmVsLWlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgaGVpZ2h0OiAxNTJweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oZXh0cmEtbGFyZ2UpIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgICZfX3JpZ2h0IHtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuLnNvbmdzaGVldC1kZXRhaWxzLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICAgIH1cbn1cblxuLnNvbmdzaGVldC1kZXRhaWxzLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB9XG59XG5cbi5zb25nc2hlZXQtZGV0YWlscy1pbmZvLXByaWNlIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uaW1nLXByZXZpZXcge1xuICAgIG1heC13aWR0aDogMTY4cHg7XG4gICAgbWF4LWhlaWdodDogMTUycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICB9XG59XG5cbi5pbWctY292ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41KTtcbn1cblxuZHQsXG5kZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgfVxufVxuXG5kZCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxucCB7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbn1cblxuZGwge1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG59XG5cbmR0LmQtaW5saW5lLWJsb2NrIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgIH1cbn1cblxuLmF1ZGlvLXBsYXllciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgfVxufVxuXG4uc29uZ3NoZWV0LWRldGFpbHMge1xuXG4gICAgJl9fYXJ0aXN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19nZW5yZV9faW5zdHJ1bWVudHMge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZG93bmxvYWQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ljLWRvd25sb2FkLXJlZC5zdmdcIik7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3ByaWNlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcHJpY2Vfc20ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3ZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDc3MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtZWRpdW0pIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gICAgLy8gYmFzaWM6XG4gICAgbW9iaWxlOiAzMjBweCxcbiAgICBleHRyYS1zbWFsbDogMzc3cHgsXG4gICAgc21hbGw6IDU3NnB4LFxuICAgIG1lZGl1bTogNzY3cHgsXG4gICAgbGFyZ2U6IDk5MXB4LFxuICAgIGV4dHJhLWxhcmdlOiAxMjAwcHgsXG4gICAgaXBhZC1sYW5kc2NhcGU6IDEwMjVweCxcbiAgICBsYXB0b3A6IDEzNjZweFxuKTtcblxuQG1peGluIHJlc3BvbmQtdG8oJGJyZWFrcG9pbnQpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpfSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHdhcm4gXCJObyBzdWNoIGJyZWFrcG9pbnQgaW4gdGhlIG1hcDogYCN7JGJyZWFrcG9pbnR9YC4gXCI7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/songsheets/songsheet-details/songsheet-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/songsheets/songsheet-details/songsheet-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SongsheetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetDetailsComponent", function() { return SongsheetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");







let SongsheetDetailsComponent = class SongsheetDetailsComponent {
    constructor(activatedRoute, cartService, router, sessionStorage) {
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.router = router;
        this.sessionStorage = sessionStorage;
        this.user = this.sessionStorage.userChanges;
    }
    ngOnInit() {
        this.initOrder();
    }
    initOrder() {
        this.songsheet = this.activatedRoute.snapshot.data.songsheet;
    }
    get instruments() {
        if (!this.songsheet ||
            !this.songsheet.instruments ||
            !this.songsheet.instruments.length ||
            !this.songsheet.genres ||
            !this.songsheet.genres.length) {
            return '';
        }
        const contentToShow = this.songsheet.genres.concat(this.songsheet.instruments);
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('AND MORE')).join(' · ').toUpperCase();
    }
    onAddToCart(id) {
        this.sessionStorage.userChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((u) => (Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["iif"])(() => !!u, this.cartService.addToCart(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.cartService.refresh())), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['/sign-in'], { queryParams: { songsheet: id } })))))))
            .subscribe();
    }
};
SongsheetDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"] }
];
SongsheetDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-songsheet-details',
        template: __webpack_require__(/*! raw-loader!./songsheet-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/songsheets/songsheet-details/songsheet-details.component.html"),
        styles: [__webpack_require__(/*! ./songsheet-details.component.scss */ "./src/app/views/songsheets/songsheet-details/songsheet-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_session_session_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"]])
], SongsheetDetailsComponent);



/***/ }),

/***/ "./src/app/views/songsheets/songsheets-router.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/songsheets/songsheets-router.module.ts ***!
  \**************************************************************/
/*! exports provided: SongsheetsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetsRoutes", function() { return SongsheetsRoutes; });
/* harmony import */ var _songsheets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songsheets.component */ "./src/app/views/songsheets/songsheets.component.ts");
/* harmony import */ var _resolvers_songsheets_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resolvers/songsheets.resolver */ "./src/app/resolvers/songsheets.resolver.ts");
/* harmony import */ var src_app_resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/resolvers/genres.resolver */ "./src/app/resolvers/genres.resolver.ts");
/* harmony import */ var _resolvers_songsheet_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resolvers/songsheet.resolver */ "./src/app/resolvers/songsheet.resolver.ts");
/* harmony import */ var _songsheet_details_songsheet_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songsheet-details/songsheet-details.component */ "./src/app/views/songsheets/songsheet-details/songsheet-details.component.ts");





const SongsheetsRoutes = [
    {
        path: '',
        component: _songsheets_component__WEBPACK_IMPORTED_MODULE_0__["SongsheetsComponent"],
        resolve: {
            songsheets: _resolvers_songsheets_resolver__WEBPACK_IMPORTED_MODULE_1__["SongsheetsResolver"],
            genres: src_app_resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_2__["GenresResolver"]
        }
    },
    {
        path: ':id',
        resolve: {
            songsheet: _resolvers_songsheet_resolver__WEBPACK_IMPORTED_MODULE_3__["SongsheetResolver"],
        },
        component: _songsheet_details_songsheet_details_component__WEBPACK_IMPORTED_MODULE_4__["SongsheetDetailsComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/songsheets/songsheets.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/songsheets/songsheets.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n:host {\n  display: flex;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  flex: 1;\n}\n:host ::ng-deep .filter-field {\n  width: 180px;\n  margin-left: 30px;\n}\n:host ::ng-deep .filter-field:first-child {\n  margin-left: 0;\n}\n:host ::ng-deep .filter-field .dropdown-link:hover {\n  color: #ee4036 !important;\n}\n@media (max-width: 767px) {\n  :host ::ng-deep .filter-field {\n    width: 50%;\n    margin-left: 15px;\n  }\n}\n:host ::ng-deep .filter-field-wide {\n  width: 250px;\n}\n@media (max-width: 576px) {\n  :host ::ng-deep .filter-field-wide ::ng-deep .dropdown-menu {\n    left: 0 !important;\n    right: auto !important;\n  }\n}\np.found-message {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #a0a0a0;\n}\np.found-message strong {\n  color: #393e41;\n}\n.songsheet-card {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL3NvbmdzaGVldHMvc29uZ3NoZWV0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3Mvc29uZ3NoZWV0cy9zb25nc2hlZXRzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3NyYy9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBU0EsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUNtQlI7QURpQ1E7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDc0JoQjtBRG1DSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUMwQmhCO0FEbUNRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ2dDYjtBRHFDSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDbkNSO0FEcUNRO0VBQ0ksaUJBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQ1I7QUR5Q0E7RUFDSSxjQUFBO0FDdENKO0FEeUNBO0VBQ0ksd0JBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZO0VBK0ZaLG1DQUFBO0FDdkNKO0FEeUNJO0VBQ0ksY0FwR0s7QUM2RGI7QUQyQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQ3hDSjtBRDJDQSxtQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0Esb0JBQUE7QUFDQTtFQUNJLGVBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxlQUFBO0FDeENKO0FDeEdBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxPQUFBO0FEMkdKO0FDeEdRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FEMEdaO0FDeEdZO0VBQ0ksY0FBQTtBRDBHaEI7QUN0R2dCO0VBQ0kseUJBQUE7QUR3R3BCO0FFOUdRO0VESkE7SUFlUSxVQUFBO0lBQ0EsaUJBQUE7RUR1R2Q7QUFDRjtBQ3JHWTtFQUNJLFlBQUE7QUR1R2hCO0FFdkhRO0VEbUJZO0lBR1Esa0JBQUE7SUFDQSxzQkFBQTtFRHFHMUI7QUFDRjtBQzdGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0Y1Q1M7QUM0SWI7QUM5Rkk7RUFDSSxjRmxEUTtBQ2tKaEI7QUM1RkE7RUFDSSxtQkFBQTtBRCtGSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NvbmdzaGVldHMvc29uZ3NoZWV0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZBUklBQkxFUyAqL1xuJG9yYW5nZS1yZWQ6ICNlZTQwMzY7XG4kd2hpdGU6ICNmZmZmZmY7XG4kY2hhcmNvYWwtZ3JleTogIzM5M2U0MTtcbiR2ZXJ5LWxpZ2h0LXBpbms6ICNkOWQ5ZDk7XG4kZGltLWdyZXk6ICMyMTIxMjE7XG4kYnJvd24tZ3JleTogI2EwYTBhMDtcbiRicm93bmlzaC1ncmV5OiAjNjI2MjYyO1xuJGxpZ2h0LWdyZXk6ICM5OTk5OTk7XG4kcGVhY2h5LXBpbms6ICNmZjhmODk7XG4kbGlnaHQtcGluazogI2VlZWVlZTtcbiRkYXJrLWdyZXk6ICMzYjNiM2I7XG5cbi8qIE1JWElOUyAqL1xuQG1peGluIGJ0bi1oZWlnaHQoJGhlaWdodCwgJGJ0bi1wYWRkaW5nOiAzMHB4KSB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRoZWlnaHQgLyAyO1xuICAgIHBhZGRpbmctbGVmdDogJGJ0bi1wYWRkaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZztcbn1cblxuQG1peGluIG11bHRpbGluZS1lbGxpcHNpcygkbGluZUNsYW1wKSB7XG4gICAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVDbGFtcDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vKiBDTEFTUyBWQVJJQUJMRVMqL1xuXG4lZmxleC1jZW50ZXJlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgICBAaW5jbHVkZSBidG4taGVpZ2h0KDUwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG5cbiAgICAmLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXdoaXRlIHtcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkYnJvd24tZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uaGlkZGVuLCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG5cbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1yZWQ7XG4gICAgfVxufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDUwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLyogQ3VzdG9tIG1hcmdpbnMgKi9cbi5tdC0zMHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwe1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tdC02MHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwe1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjV7XG4gICAgcGFkZGluZzogMCAyNXB4O1xufVxuIiwiLyogVkFSSUFCTEVTICovXG4vKiBNSVhJTlMgKi9cbi8qIENMQVNTIFZBUklBQkxFUyovXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG59XG4uYnRuLXdoaXRlIHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNhMGEwYTA7XG59XG4uYnRuLXdoaXRlOmhvdmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG59XG4uYnRuLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2VlNDAzNjtcbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjUge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXItZmllbGQge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXItZmllbGQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZmlsdGVyLWZpZWxkIC5kcm9wZG93bi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNlZTQwMzYgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmZpbHRlci1maWVsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXItZmllbGQtd2lkZSB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmZpbHRlci1maWVsZC13aWRlIDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxucC5mb3VuZC1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2EwYTBhMDtcbn1cbnAuZm91bmQtbWVzc2FnZSBzdHJvbmcge1xuICBjb2xvcjogIzM5M2U0MTtcbn1cblxuLnNvbmdzaGVldC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2Jhc2VcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvZ3VpZGUvcmVzcG9uc2l2ZVwiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICBmbGV4OiAxO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLmZpbHRlci1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kcm9wZG93bi1saW5rIHtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlZTQwMzYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi13aWRlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG5cbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxucC5mb3VuZC1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcblxuICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICB9XG59XG5cbi5zb25nc2hlZXQtY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiIsIiRicmVha3BvaW50czogKFxuICAgIC8vIGJhc2ljOlxuICAgIG1vYmlsZTogMzIwcHgsXG4gICAgZXh0cmEtc21hbGw6IDM3N3B4LFxuICAgIHNtYWxsOiA1NzZweCxcbiAgICBtZWRpdW06IDc2N3B4LFxuICAgIGxhcmdlOiA5OTFweCxcbiAgICBleHRyYS1sYXJnZTogMTIwMHB4LFxuICAgIGlwYWQtbGFuZHNjYXBlOiAxMDI1cHgsXG4gICAgbGFwdG9wOiAxMzY2cHhcbik7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KX0pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEB3YXJuIFwiTm8gc3VjaCBicmVha3BvaW50IGluIHRoZSBtYXA6IGAjeyRicmVha3BvaW50fWAuIFwiO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/songsheets/songsheets.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/songsheets/songsheets.component.ts ***!
  \**********************************************************/
/*! exports provided: SongsheetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetsComponent", function() { return SongsheetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/songsheets.service */ "./src/app/services/songsheets.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _songsheets_configs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./songsheets.configs */ "./src/app/views/songsheets/songsheets.configs.ts");
/* harmony import */ var _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/enums/other-files-types */ "./src/app/core/enums/other-files-types.ts");










let SongsheetsComponent = class SongsheetsComponent {
    constructor(activatedRoute, router, songsheetsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.songsheetsService = songsheetsService;
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.pagination = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.order = new Map([
            ['Latest', { column: 'CreatedAt', order: 'Desc' }],
            ['From A-Z', { column: 'Name', order: 'Asc' }],
            ['From Z-A', { column: 'Name', order: 'Desc' }],
            ['Price: min to max', { column: 'Price', order: 'Asc' }],
            ['Price: max to min', { column: 'Price', order: 'Desc' }],
        ]);
        this.itemTypes = Object.keys(_core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_9__["OtherFilesTypes"])
            .map((k) => ({
            id: k,
            name: _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_9__["OtherFilesTypes"][k]
        }));
        this.choosenGenres = [];
        this.chosenItemTypes = [];
        this.isLoadingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.searchedTypesResult = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_app_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_FILTERS"]);
        const { genres } = activatedRoute.snapshot.data;
        this.genres = genres;
        const { songsheets } = this.activatedRoute.snapshot.data;
        if (songsheets) {
            // first chunk of data was loaded via resolver with default filter parameters
            // so filter by default with DEFAULT_FILTERS
            this.list.next(songsheets.items);
            this.isLoadingData.next(false);
            this.pagination.next(songsheets.pagination);
            this.searchedTypesResult.next(songsheets.itemsCount);
        }
        this.initForm();
        this.loadMoreDisabled = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.list, this.pagination])
            .pipe(
        // tslint:disable-next-line
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([songsheets, pagination]) => songsheets.length >= pagination.totalCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    ngOnInit() {
        this.activatedRoute.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(({ params }) => !!params.fileTypes && !params.fileTypes.includes('Songsheet')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.filtersForm.get('genre')))
            .subscribe((c) => c.disable());
        this.activatedRoute.queryParamMap
            .subscribe((paramMap) => {
            this.updateFilter(paramMap);
        });
        this.filtersForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((control) => this.filtersForm.controls.genre.valueChanges))
            .subscribe((genre) => {
            if (genre) {
                const item = this.genres.find(x => x.name === genre);
                if (item) {
                    // In case if element alread exists - remove it from filter
                    if (this.choosenGenres.find(x => x === item)) {
                        const index = this.choosenGenres.indexOf(item);
                        if (index !== -1) {
                            this.choosenGenres.splice(index, 1);
                        }
                        // If there is no genres - remove it from url string
                        if (this.choosenGenres.length < 1) {
                            this.updateQueryParams({ 'genres': null });
                        }
                        else {
                            this.updateQueryParams({ 'genres': JSON.stringify(this.choosenGenres.map(x => x.id)) });
                        }
                    }
                    else {
                        this.choosenGenres.push(item);
                        this.updateQueryParams({ 'genres': JSON.stringify(this.choosenGenres.map(x => x.id)) });
                    }
                }
            }
        });
        this.filtersForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.filtersForm.get('type').valueChanges))
            .subscribe((type) => {
            if (type) {
                const item = this.itemTypes.find(t => t.name === type);
                if (item) {
                    if (this.chosenItemTypes.find(x => x === item)) {
                        const index = this.chosenItemTypes.indexOf(item);
                        if (index !== -1) {
                            this.chosenItemTypes.splice(index, 1);
                        }
                    }
                    else {
                        this.chosenItemTypes.push(item);
                        this.updateQueryParams({ 'fileTypes': JSON.stringify(this.chosenItemTypes.map(x => x.id)) });
                    }
                }
                this.filtersForm.get('genre').setValue(null);
                if (this.chosenItemTypes.length < 1) {
                    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams, { 'fileTypes': null });
                    this.updateQueryParams(queryParams);
                    this.filtersForm.get('genre').enable();
                }
                else {
                    const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams, { 'fileTypes': JSON.stringify(this.chosenItemTypes.map(x => x.id)) });
                    if (!this.chosenItemTypes.find(v => v.id === 'Songsheet')) {
                        queryParams.genres = null;
                        this.filtersForm.get('genre').disable();
                        this.choosenGenres.splice(0);
                    }
                    else {
                        this.filtersForm.get('genre').enable();
                    }
                    this.updateQueryParams(queryParams);
                }
            }
        });
        this.filtersForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((control) => this.filtersForm.controls.sortBy.valueChanges))
            .subscribe((sortBy) => {
            if (sortBy) {
                const filterOrder = this.order.get(sortBy);
                const direction = filterOrder.order;
                const key = filterOrder.column;
                this.updateQueryParams({ 'sortBy': key, direction });
            }
        });
    }
    handleLoadMore() {
        const nextOffset = this.pagination.getValue().nextOffset;
        if (!nextOffset) {
            return;
        }
        const paramMap = this.activatedRoute.snapshot.queryParamMap;
        const search = paramMap.get('search') ? paramMap.get('search') : '';
        const direction = paramMap.get('direction') ? paramMap.get('direction') : '';
        const sortBy = paramMap.get('sortBy') ? paramMap.get('sortBy') : '';
        const filters = Object.assign({}, this.filter.getValue(), _app_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_FILTERS"]);
        filters.offset += nextOffset;
        filters.search = search;
        if (sortBy || direction) {
            filters.order = {};
        }
        if (direction) {
            filters.order.direction = direction;
        }
        if (sortBy) {
            filters.order.key = sortBy;
        }
        filters.genres = this.choosenGenres.map(x => x.id);
        filters.fileTypes = this.chosenItemTypes.map(x => x.id);
        this.loadData(filters);
    }
    updateFilter(paramMap) {
        const search = paramMap.get('search') ? paramMap.get('search') : '';
        const direction = paramMap.get('direction') ? paramMap.get('direction') : '';
        const sortBy = paramMap.get('sortBy') ? paramMap.get('sortBy') : '';
        const filters = Object.assign({}, this.filter.getValue(), _app_constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_FILTERS"]);
        if (filters.search !== search) {
            filters.offset = 0;
        }
        filters.search = search;
        if (filters.order) {
            delete filters.order;
        }
        if (filters.genres) {
            delete filters.genres;
        }
        if (sortBy || direction) {
            filters.order = {};
        }
        if (direction) {
            filters.order.direction = direction;
        }
        if (sortBy) {
            filters.order.key = sortBy;
        }
        filters.genres = this.choosenGenres.map(x => x.id);
        filters.fileTypes = this.chosenItemTypes.map(x => x.id);
        this.list.next([]);
        this.loadData(filters);
    }
    updateQueryParams(queryParams) {
        return this.router.navigate(['/music-scores'], { queryParams, queryParamsHandling: 'merge' });
    }
    loadData(filters) {
        this.filter.next(Object.assign({}, filters));
        this.isLoadingData.next(true);
        this.songsheetsService.findList(filters)
            .subscribe(({ items, pagination, itemsCount }) => {
            this.list.next([...this.list.getValue(), ...items]);
            this.isLoadingData.next(false);
            this.searchedTypesResult.next(itemsCount);
            this.pagination.next(pagination);
        }, () => this.isLoadingData.next(false));
    }
    getGenres(genres) {
        const urlGenres = JSON.parse(genres);
        this.choosenGenres = [];
        urlGenres.forEach(x => this.choosenGenres.push(this.genres.find(y => y.id === parseInt(x, 10))));
    }
    getFileTypes(types) {
        const urlFileTypes = JSON.parse(types);
        this.chosenItemTypes = [];
        urlFileTypes.forEach(x => this.chosenItemTypes.push(this.itemTypes.find(y => y.id === x)));
        if (urlFileTypes.length > 0 && !urlFileTypes.includes('Songsheet')) {
            this.choosenGenres = [];
        }
    }
    initForm() {
        this.filtersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.model = Object(_songsheets_configs__WEBPACK_IMPORTED_MODULE_8__["getModel"])();
        const paramMap = this.activatedRoute.snapshot.queryParamMap;
        const genres = paramMap.get('genres') ? paramMap.get('genres') : '';
        const fileTypes = paramMap.get('fileTypes') ? paramMap.get('fileTypes') : '';
        if (genres) {
            this.getGenres(genres);
        }
        if (fileTypes) {
            this.getFileTypes(fileTypes);
        }
        this.filtersFormConfig = Object(_songsheets_configs__WEBPACK_IMPORTED_MODULE_8__["getFiltersForm"])([...this.genres.map(x => x.name)], [...this.order.keys()], this.itemTypes.map((i) => i.name), this.choosenGenres, this.chosenItemTypes);
    }
};
SongsheetsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_songsheets_service__WEBPACK_IMPORTED_MODULE_6__["SongsheetsService"] }
];
SongsheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-songsheets',
        template: __webpack_require__(/*! raw-loader!./songsheets.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/songsheets/songsheets.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./songsheets.component.scss */ "./src/app/views/songsheets/songsheets.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_songsheets_service__WEBPACK_IMPORTED_MODULE_6__["SongsheetsService"]])
], SongsheetsComponent);



/***/ }),

/***/ "./src/app/views/songsheets/songsheets.configs.ts":
/*!********************************************************!*\
  !*** ./src/app/views/songsheets/songsheets.configs.ts ***!
  \********************************************************/
/*! exports provided: getFiltersForm, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersForm", function() { return getFiltersForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
function getFiltersForm(genres, sortBy, types, chosenGenres, chosenItemTypes) {
    return [
        {
            key: 'type',
            type: 'dropdown',
            className: 'filter-field filter-field-wide',
            templateOptions: {
                type: 'type',
                label: '',
                required: true,
                hideRequiredMarker: true,
                options: types,
                defaultValue: 'File type',
                multi: 'true',
                chosen: chosenItemTypes
            },
        },
        {
            key: 'genre',
            type: 'dropdown',
            className: 'filter-field',
            templateOptions: {
                type: 'genre',
                label: '',
                required: true,
                hideRequiredMarker: true,
                options: genres.sort(),
                defaultValue: 'Genre',
                multi: 'true',
                chosen: chosenGenres
            },
        },
        {
            key: 'sortBy',
            type: 'dropdown',
            className: 'filter-field',
            templateOptions: {
                type: 'sortBy',
                label: '',
                required: true,
                hideRequiredMarker: true,
                options: sortBy,
                defaultValue: 'Sort by',
                multi: 'false'
            },
        }
    ];
}
function getModel() {
    return {
        genre: '',
        sortBy: ''
    };
}


/***/ }),

/***/ "./src/app/views/songsheets/songsheets.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/songsheets/songsheets.module.ts ***!
  \*******************************************************/
/*! exports provided: SongsheetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetsModule", function() { return SongsheetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm2015/ngx-formly-bootstrap.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dropdown/dropdown.component */ "./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var _components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dropdown/dropdown.module */ "./src/app/components/dropdown/dropdown.module.ts");
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ "./src/app/pipes/safe-url.pipe.ts");
/* harmony import */ var _resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resolvers/genres.resolver */ "./src/app/resolvers/genres.resolver.ts");
/* harmony import */ var _resolvers_songsheet_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resolvers/songsheet.resolver */ "./src/app/resolvers/songsheet.resolver.ts");
/* harmony import */ var _resolvers_songsheets_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resolvers/songsheets.resolver */ "./src/app/resolvers/songsheets.resolver.ts");
/* harmony import */ var _services_common_info_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/common-info.service */ "./src/app/services/common-info.service.ts");
/* harmony import */ var _services_genres_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/genres.service */ "./src/app/services/genres.service.ts");
/* harmony import */ var _services_songsheets_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/songsheets.service */ "./src/app/services/songsheets.service.ts");
/* harmony import */ var _songsheet_details_songsheet_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./songsheet-details/songsheet-details.component */ "./src/app/views/songsheets/songsheet-details/songsheet-details.component.ts");
/* harmony import */ var _songsheets_router_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./songsheets-router.module */ "./src/app/views/songsheets/songsheets-router.module.ts");
/* harmony import */ var _songsheets_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./songsheets.component */ "./src/app/views/songsheets/songsheets.component.ts");
/* harmony import */ var src_app_pipes_array_uppercase_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/pipes/array-uppercase.pipe */ "./src/app/pipes/array-uppercase.pipe.ts");
/* harmony import */ var _components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/search-item/search-item.module */ "./src/app/components/search-item/search-item.module.ts");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _pipes_search_results_types_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../pipes/search-results-types.pipe */ "./src/app/pipes/search-results-types.pipe.ts");
/* harmony import */ var _components_songsheet_player_songsheet_player_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/songsheet-player/songsheet-player.module */ "./src/app/components/songsheet-player/songsheet-player.module.ts");
























let SongsheetsModule = class SongsheetsModule {
};
SongsheetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _songsheets_component__WEBPACK_IMPORTED_MODULE_18__["SongsheetsComponent"],
            _songsheet_details_songsheet_details_component__WEBPACK_IMPORTED_MODULE_16__["SongsheetDetailsComponent"],
            _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"], src_app_pipes_array_uppercase_pipe__WEBPACK_IMPORTED_MODULE_19__["ArrayUppercasePipe"],
            _pipes_search_results_types_pipe__WEBPACK_IMPORTED_MODULE_22__["SearchResultsTypesPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_songsheets_router_module__WEBPACK_IMPORTED_MODULE_17__["SongsheetsRoutes"]),
            _components_search_item_search_item_module__WEBPACK_IMPORTED_MODULE_20__["SearchItemModule"],
            _components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
                validationMessages: [
                    {
                        name: 'required',
                        message: 'This field is required'
                    },
                ],
                types: [
                    {
                        name: 'dropdown',
                        component: _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"]
                    },
                ],
            }),
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_21__["TruncatePipeModule"],
            _components_songsheet_player_songsheet_player_module__WEBPACK_IMPORTED_MODULE_23__["SongsheetPlayerModule"]
        ],
        providers: [
            _services_songsheets_service__WEBPACK_IMPORTED_MODULE_15__["SongsheetsService"],
            _resolvers_songsheets_resolver__WEBPACK_IMPORTED_MODULE_12__["SongsheetsResolver"],
            _resolvers_songsheet_resolver__WEBPACK_IMPORTED_MODULE_11__["SongsheetResolver"],
            _services_common_info_service__WEBPACK_IMPORTED_MODULE_13__["CommonInfoService"],
            _resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_10__["GenresResolver"],
            _services_genres_service__WEBPACK_IMPORTED_MODULE_14__["GenresService"]
        ],
    })
], SongsheetsModule);



/***/ })

}]);
//# sourceMappingURL=views-songsheets-songsheets-module-es2015.js.map