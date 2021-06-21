(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/libs/view-container/view-container.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/libs/view-container/view-container.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"container container-fluid\">\n        <div class=\"animated fadeInDown\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"ibox-content\">\n                        <ng-content select=\"[toolbar]\"></ng-content>\n                        <ng-content select=\"[content]\"></ng-content>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/classes/form-base.ts":
/*!*******************************************!*\
  !*** ./src/app/core/classes/form-base.ts ***!
  \*******************************************/
/*! exports provided: FormBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBase", function() { return FormBase; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class FormBase {
    constructor() {
        this.submitBtnDissabled = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
}


/***/ }),

/***/ "./src/app/core/helpers/files-helper.ts":
/*!**********************************************!*\
  !*** ./src/app/core/helpers/files-helper.ts ***!
  \**********************************************/
/*! exports provided: FilesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesHelper", function() { return FilesHelper; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class FilesHelper {
    static dataUrlToBlob(dataUrl) {
        const parts = dataUrl.split(',');
        const mimeType = parts[0].match(/:(.*?);/)[1];
        const decodedString = atob(parts[1]);
        let n = decodedString.length;
        const bitArray = new Uint8Array(n);
        while (n--) {
            bitArray[n] = decodedString.charCodeAt(n);
        }
        return new Blob([bitArray], { type: mimeType });
    }
    static arrayBufferToBlob(array) {
        return new Blob([array.buffer]);
    }
    static blobToArrayBuffer(blob) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((subscriber) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                subscriber.next(fileReader.result);
                subscriber.complete();
            };
            fileReader.readAsArrayBuffer(blob);
        });
    }
    static getDataURLFromFile(file) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const reader = new FileReader();
            if (reader.error) {
                observer.error(reader.error);
                observer.complete();
            }
            reader.onload = () => {
                observer.next(reader.result);
                observer.complete();
            };
            reader.readAsDataURL(file);
        });
    }
    static dataUrlToFile(dataUrl, fileName = 'file.png') {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], fileName, { type: mime });
    }
    static getFilenameFromUrl(url) {
        const matches = url.match(/\/([^\/?#]+)[^\/]*$/);
        if (matches.length > 1) {
            return matches[1];
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/libs/view-container/view-container.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/libs/view-container/view-container.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,300,500,700,900\");\n.wrapper-content {\n  padding: 0;\n}\n.spacer {\n  height: 50px;\n}\n.ibox-content {\n  margin-top: 35px;\n  border-style: none;\n  padding-bottom: 10px;\n  border-width: 0;\n  font-size: 14px;\n  color: #626262;\n  padding-left: 70px;\n}\n@media (max-width: 991px) {\n  .ibox-content {\n    font-size: 11px;\n    margin-top: 15px;\n    padding-left: 20px;\n  }\n}\n::ng-deep .page-block {\n  margin-bottom: 60px;\n  line-height: 22px;\n}\n::ng-deep .page-block p {\n  margin-bottom: 20px;\n}\n::ng-deep .page-block li {\n  list-style: outside;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL2xpYnMvdmlldy1jb250YWluZXIvdmlldy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpYnMvdmlldy1jb250YWluZXIvdmlldy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3JjL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUFHUjtFQUNJLFVBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RKO0FDSFE7RUZIUjtJQVVRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VDQU47QUFDRjtBREdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9saWJzL3ZpZXctY29udGFpbmVyL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsMzAwLDUwMCw3MDAsOTAwXCIpO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlLnNjc3NcIjtcblxuLndyYXBwZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNwYWNlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaWJveC1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjI2MjYyO1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxufVxuXG46Om5nLWRlZXAgLnBhZ2UtYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgICAmIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICYgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBvdXRzaWRlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDMwMCw1MDAsNzAwLDkwMFwiKTtcbi53cmFwcGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaWJveC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmlib3gtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAucGFnZS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuOjpuZy1kZWVwIC5wYWdlLWJsb2NrIHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOjpuZy1kZWVwIC5wYWdlLWJsb2NrIGxpIHtcbiAgbGlzdC1zdHlsZTogb3V0c2lkZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn0iLCIkYnJlYWtwb2ludHM6IChcbiAgICAvLyBiYXNpYzpcbiAgICBtb2JpbGU6IDMyMHB4LFxuICAgIGV4dHJhLXNtYWxsOiAzNzdweCxcbiAgICBzbWFsbDogNTc2cHgsXG4gICAgbWVkaXVtOiA3NjdweCxcbiAgICBsYXJnZTogOTkxcHgsXG4gICAgZXh0cmEtbGFyZ2U6IDEyMDBweCxcbiAgICBpcGFkLWxhbmRzY2FwZTogMTAyNXB4LFxuICAgIGxhcHRvcDogMTM2NnB4XG4pO1xuXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCl9KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAd2FybiBcIk5vIHN1Y2ggYnJlYWtwb2ludCBpbiB0aGUgbWFwOiBgI3skYnJlYWtwb2ludH1gLiBcIjtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/libs/view-container/view-container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/libs/view-container/view-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContainerComponent", function() { return ViewContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewContainerComponent = class ViewContainerComponent {
};
ViewContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-container',
        template: __webpack_require__(/*! raw-loader!./view-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/libs/view-container/view-container.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./view-container.component.scss */ "./src/app/libs/view-container/view-container.component.scss")]
    })
], ViewContainerComponent);



/***/ }),

/***/ "./src/app/libs/view-container/view-container.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/libs/view-container/view-container.module.ts ***!
  \**************************************************************/
/*! exports provided: ViewContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContainerModule", function() { return ViewContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _view_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-container.component */ "./src/app/libs/view-container/view-container.component.ts");




let ViewContainerModule = class ViewContainerModule {
};
ViewContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        declarations: [
            _view_container_component__WEBPACK_IMPORTED_MODULE_3__["ViewContainerComponent"]
        ],
        exports: [
            _view_container_component__WEBPACK_IMPORTED_MODULE_3__["ViewContainerComponent"]
        ]
    })
], ViewContainerModule);



/***/ }),

/***/ "./src/app/models/image/image-type.ts":
/*!********************************************!*\
  !*** ./src/app/models/image/image-type.ts ***!
  \********************************************/
/*! exports provided: ImageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageType", function() { return ImageType; });
var ImageType;
(function (ImageType) {
    ImageType[ImageType["Avatar"] = 0] = "Avatar";
    ImageType[ImageType["Image"] = 1] = "Image";
})(ImageType || (ImageType = {}));


/***/ }),

/***/ "./src/app/services/images.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/images.service.ts ***!
  \********************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");





let ImagesService = class ImagesService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/upload';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    uploadImage(body, type) {
        return this.httpClient
            .post(`${this.apiEndpoint}/image?imageType=` + type, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response));
    }
    updateStatus(id, status) {
        return this.httpClient
            .patch(`${this.apiEndpoint}/${id}`, { status });
    }
    uploadToS3(data, file) {
        const formData = new FormData();
        Object.keys(data.meta.formData).forEach((key) => {
            formData.append(key, data.meta.formData[key].toString());
        });
        formData.append('file', file);
        return this.httpClient
            .post(data.meta.url, formData);
    }
};
ImagesService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ImagesService);



/***/ }),

/***/ "./src/app/services/verifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/verifications.service.ts ***!
  \***************************************************/
/*! exports provided: VerificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationsService", function() { return VerificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");




let VerificationsService = class VerificationsService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/verifications';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    verify(token, email) {
        return this.httpClient
            .put(`${this.apiEndpoint}/email`, { token, email });
    }
    resend(email) {
        return this.httpClient
            .post(this.apiEndpoint, { email });
    }
    reset(email) {
        return this.httpClient
            .post(`${this.apiEndpoint}/password`, { email });
    }
    restore(email, token, passwordModel) {
        const { password, confirmPassword } = passwordModel;
        return this.httpClient
            .put(`${this.apiEndpoint}/password`, { email, token, password, confirmPassword });
    }
    verifyToken(email, token) {
        return this.httpClient
            .post(`${this.apiEndpoint}/token`, { email, token });
    }
};
VerificationsService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_3__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VerificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_3__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VerificationsService);



/***/ }),

/***/ "./src/app/validation/emailRFC821.ts":
/*!*******************************************!*\
  !*** ./src/app/validation/emailRFC821.ts ***!
  \*******************************************/
/*! exports provided: emailRFC821 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRFC821", function() { return emailRFC821; });
const emailRFC821 = (control) => {
    const partsSeparator = '@';
    let emailInvalid = false;
    if (control.value) {
        const emailParts = control.value.split(partsSeparator);
        if (emailParts.length !== 2) {
            emailInvalid = true;
        }
        else {
            for (const emailPart of emailParts) {
                if (emailPart.length > 64) {
                    emailInvalid = true;
                }
            }
        }
    }
    return emailInvalid ? { email: true } : null;
};


/***/ }),

/***/ "./src/app/validation/index.ts":
/*!*************************************!*\
  !*** ./src/app/validation/index.ts ***!
  \*************************************/
/*! exports provided: requiredFieldMessage, invalidEmailMessage, invalidValueMessage, minlengthMessage, maxlengthMessage, lengthBetweenMessage, minMessage, maxMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-messages */ "./src/app/validation/validation-messages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requiredFieldMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["requiredFieldMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invalidEmailMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["invalidEmailMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invalidValueMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["invalidValueMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minlengthMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["minlengthMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxlengthMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["maxlengthMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lengthBetweenMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["lengthBetweenMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["minMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxMessage", function() { return _validation_messages__WEBPACK_IMPORTED_MODULE_0__["maxMessage"]; });




/***/ }),

/***/ "./src/app/validation/validation-messages.ts":
/*!***************************************************!*\
  !*** ./src/app/validation/validation-messages.ts ***!
  \***************************************************/
/*! exports provided: requiredFieldMessage, invalidEmailMessage, invalidValueMessage, minlengthMessage, maxlengthMessage, lengthBetweenMessage, minMessage, maxMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFieldMessage", function() { return requiredFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidEmailMessage", function() { return invalidEmailMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidValueMessage", function() { return invalidValueMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minlengthMessage", function() { return minlengthMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxlengthMessage", function() { return maxlengthMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthBetweenMessage", function() { return lengthBetweenMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minMessage", function() { return minMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxMessage", function() { return maxMessage; });
function requiredFieldMessage(translator) {
    return function () {
        return translator.instant('Validation.Common.Required');
    };
}
function invalidEmailMessage(translator) {
    return function () {
        return translator.instant('Validation.Common.Email');
    };
}
function invalidValueMessage(translator) {
    return function () {
        return translator.instant('Validation.Common.InvalidValue');
    };
}
function minlengthMessage(translator, value) {
    return function () {
        return translator.instant('Validation.Common.MinLength', { value });
    };
}
function maxlengthMessage(translator, value) {
    return function () {
        return translator.instant('Validation.Common.MaxLength', { value });
    };
}
function lengthBetweenMessage(translator, value) {
    return function () {
        return translator.instant('Validation.Common.LengthBetween', value);
    };
}
function minMessage(translator, value) {
    return function () {
        return translator.instant('Validation.Common.Min', { value });
    };
}
function maxMessage(translator, value) {
    return function () {
        return translator.instant('Validation.Common.Max', { value });
    };
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map