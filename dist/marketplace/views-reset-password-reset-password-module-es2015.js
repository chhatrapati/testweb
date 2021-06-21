(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reset-password/form/form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reset-password/form/form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-wrapper w-100 h-100\">\n    <div class=\"authentication-container\" [class.wider]=\"isSuccessful | async\">\n        <div content class=\"w-100\">\n            <div class=\"row h-100\">\n                <div class=\"col-lg-12\" *ngIf=\"!(isSuccessful | async)\">\n                    <div toolbar>\n                        <p class=\"reset-instructions\">Enter your email address and we’ll send you a link to reset your\n                            password</p>\n                    </div>\n                    <form [formGroup]=\"form\" (ngSubmit)=\"submit(model)\">\n                        <formly-form [form]=\"form\" [fields]=\"fields\" [model]=\"model\">\n                            <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-secondary w-100\">\n                                {{ 'Reset.SendBtn' | translate }}\n                            </button>\n                        </formly-form>\n                    </form>\n                    <p class=\"below-auth text-center\">Return <a [routerLink]=\"['/sign-in']\">Sign in</a></p>\n                </div>\n                <div class=\"message-with-note col-lg-12 h-100\" *ngIf=\"(isSuccessful | async)\">\n                    <div class=\"key-note__wr\">\n                        <img class=\"key-note\" [src]=\"icKeyNote\" alt=\"key note\">\n                    </div>\n                    <h2 class=\"h2 text-center\">Check your email</h2>\n                    <p class=\"text\">We sent an email to {{form.get('email').value}}, which contains a link to reset your\n                        Pannotation password.</p>\n                    <p class=\"below-auth text-center\">Back to <a [routerLink]=\"['/sign-in']\">Sign in</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/reset-password/form/form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/reset-password/form/form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.reset-instructions {\n  margin-bottom: 30px;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: center;\n  font-weight: 500;\n  color: #393e41;\n}\n.btn-secondary {\n  margin-top: 20px;\n}\n.below-auth a {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL3Jlc2V0LXBhc3N3b3JkL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcmVzZXQtcGFzc3dvcmQvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZWMyLXVzZXIvcGFubm90YXRpb24tZnJvbnQtZW5kL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFhQSxXQUFBO0FBZ0JBLG1CQUFBO0FBU0EsZ0JBQUE7QUFDQTtFQXhCSSxZQXlCb0I7RUF4QnBCLG1CQUFBO0VBQ0Esa0JBSHFDO0VBSXJDLG1CQUpxQztFQTJCckMsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQy9CSjtBRGlDSTtFQUNJLHlCQWpESztFQWtETCxxQkFsREs7RUFtREwsY0FsREE7QUNtQlI7QURpQ1E7RUFDSSx5QkFwREk7RUFxREoscUJBckRJO0FDc0JoQjtBRG1DSTtFQUNJLHlCQTFEUTtFQTJEUixxQkEzRFE7QUMwQmhCO0FEbUNRO0VBQ0kseUJBaEVDO0VBaUVELHFCQWpFQztBQ2dDYjtBRHFDSTtFQUNJLGNBakVLO0VBa0VMLHlCQUFBO0FDbkNSO0FEcUNRO0VBQ0ksaUJBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNyQ1I7QUR5Q0E7RUFDSSxjQUFBO0FDdENKO0FEeUNBO0VBQ0ksd0JBQUE7QUN0Q0o7QUR5Q0E7RUFDSSxpQkFBQTtFQUNBLGNBN0ZZO0VBK0ZaLG1DQUFBO0FDdkNKO0FEeUNJO0VBQ0ksY0FwR0s7QUM2RGI7QUQyQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQ3hDSjtBRDJDQSxtQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0Esb0JBQUE7QUFDQTtFQUNJLGVBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxlQUFBO0FDeENKO0FDeEdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ZOWTtBQ2lIaEI7QUN4R0E7RUFDSSxnQkFBQTtBRDJHSjtBQ3RHSTtFQUNJLGlCQUFBO0FEeUdSIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVzZXQtcGFzc3dvcmQvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVkFSSUFCTEVTICovXG4kb3JhbmdlLXJlZDogI2VlNDAzNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRjaGFyY29hbC1ncmV5OiAjMzkzZTQxO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRkaW0tZ3JleTogIzIxMjEyMTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kbGlnaHQtZ3JleTogIzk5OTk5OTtcbiRwZWFjaHktcGluazogI2ZmOGY4OTtcbiRsaWdodC1waW5rOiAjZWVlZWVlO1xuJGRhcmstZ3JleTogIzNiM2IzYjtcblxuLyogTUlYSU5TICovXG5AbWl4aW4gYnRuLWhlaWdodCgkaGVpZ2h0LCAkYnRuLXBhZGRpbmc6IDMwcHgpIHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJGhlaWdodCAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAkYnRuLXBhZGRpbmc7XG4gICAgcGFkZGluZy1yaWdodDogJGJ0bi1wYWRkaW5nO1xufVxuXG5AbWl4aW4gbXVsdGlsaW5lLWVsbGlwc2lzKCRsaW5lQ2xhbXApIHtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZUNsYW1wO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIENMQVNTIFZBUklBQkxFUyovXG5cbiVmbGV4LWNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICAgIEBpbmNsdWRlIGJ0bi1oZWlnaHQoNTBweCk7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcblxuICAgICYtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2hpdGUge1xuICAgICAgICBjb2xvcjogJGJyb3duLWdyZXk7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRicm93bi1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICB9XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwe1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNXtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG4iLCIvKiBWQVJJQUJMRVMgKi9cbi8qIE1JWElOUyAqL1xuLyogQ0xBU1MgVkFSSUFCTEVTKi9cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbn1cbi5idG4td2hpdGUge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EwYTBhMDtcbn1cbi5idG4td2hpdGU6aG92ZXIge1xuICBib3JkZXItd2lkdGg6IDNweDtcbn1cbi5idG4taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgY29sb3I6ICMzOTNlNDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLnJlc2V0LWluc3RydWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM5M2U0MTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYmVsb3ctYXV0aCBhIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmUuc2Nzcyc7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2Jhc2Uuc2Nzc1wiO1xuXG4ucmVzZXQtaW5zdHJ1Y3Rpb25zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5iZWxvdy1hdXRoIHtcblxuICAgIGEge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/reset-password/form/form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/reset-password/form/form.component.ts ***!
  \*************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _form_configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.configs */ "./src/app/views/reset-password/form/form.configs.ts");
/* harmony import */ var _services_verifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/verifications.service */ "./src/app/services/verifications.service.ts");







let PasswordResetComponent = class PasswordResetComponent {
    constructor(verificationsService, translate) {
        this.verificationsService = verificationsService;
        this.translate = translate;
        this.icKeyNote = '/assets/img/ic-key-note-light-gray.svg';
        this.isSuccessful = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.model = Object(_form_configs__WEBPACK_IMPORTED_MODULE_5__["getModel"])();
        this.fields = Object(_form_configs__WEBPACK_IMPORTED_MODULE_5__["getFields"])(this.translate);
    }
    submit(data) {
        this.verificationsService.reset(data.email)
            .subscribe(() => this.isSuccessful.next(true));
    }
};
PasswordResetComponent.ctorParameters = () => [
    { type: _services_verifications_service__WEBPACK_IMPORTED_MODULE_6__["VerificationsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reset-password/form/form.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ../../../../styles/shared/auth.styles.scss */ "./src/styles/shared/auth.styles.scss"), __webpack_require__(/*! ./form.component.scss */ "./src/app/views/reset-password/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_verifications_service__WEBPACK_IMPORTED_MODULE_6__["VerificationsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], PasswordResetComponent);



/***/ }),

/***/ "./src/app/views/reset-password/form/form.configs.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/reset-password/form/form.configs.ts ***!
  \***********************************************************/
/*! exports provided: getFields, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFields", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony import */ var _validation_emailRFC821__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../validation/emailRFC821 */ "./src/app/validation/emailRFC821.ts");

function getFields(translator) {
    return [
        {
            key: 'email',
            type: 'input',
            className: 'auth-field',
            templateOptions: {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
                required: true,
                minLength: 1,
                maxLength: 129,
                hideRequiredMarker: true,
            },
            validators: {
                validation: _validation_emailRFC821__WEBPACK_IMPORTED_MODULE_0__["emailRFC821"]
            },
            validation: {
                messages: {
                    minlength: () => translator.instant('Validation.Common.EmailLength'),
                    maxlength: () => translator.instant('Validation.Common.EmailLength'),
                    email: () => translator.instant('Validation.Common.Email'),
                }
            },
        },
    ];
}
function getModel() {
    return {
        email: '',
    };
}


/***/ }),

/***/ "./src/app/views/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm2015/ngx-formly-bootstrap.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm2015/ngx-formly-core.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/views/reset-password/form/form.component.ts");
/* harmony import */ var _reset_password_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password.router */ "./src/app/views/reset-password/reset-password.router.ts");
/* harmony import */ var _services_verifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/verifications.service */ "./src/app/services/verifications.service.ts");
/* harmony import */ var _libs_view_container_view_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/view-container/view-container.module */ "./src/app/libs/view-container/view-container.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");












let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
                validationMessages: [
                    { name: 'required', message: 'This field is required' },
                ],
                validators: [
                    { name: 'email', validation: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email },
                ]
            }),
            _libs_view_container_view_container_module__WEBPACK_IMPORTED_MODULE_10__["ViewContainerModule"],
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_reset_password_router__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordRouter"])
        ],
        providers: [_services_verifications_service__WEBPACK_IMPORTED_MODULE_9__["VerificationsService"]],
        declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"]]
    })
], ResetPasswordModule);



/***/ }),

/***/ "./src/app/views/reset-password/reset-password.router.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/reset-password/reset-password.router.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRouter", function() { return ResetPasswordRouter; });
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/form.component */ "./src/app/views/reset-password/form/form.component.ts");

const ResetPasswordRouter = [
    {
        path: '',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_0__["PasswordResetComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-reset-password-reset-password-module-es2015.js.map