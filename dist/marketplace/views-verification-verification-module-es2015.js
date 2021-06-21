(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-verification-verification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/verification/verification.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/verification/verification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-wrapper w-100 h-100\">\n    <div class=\"authentication-container\" [class.wider]=\"!(failed | async)\">\n        <div content class=\"w-100\">\n            <div class=\"row h-100\">\n                <div class=\"message-with-note col-lg-12 h-100\" *ngIf=\"!(failed | async)\">\n                    <div class=\"key-note__wr\">\n                        <img class=\"key-note\" [src]=\"icKeyNote\" alt=\"key note\">\n                    </div>\n                    <div class=\"container__text text-center m-auto\" *ngIf=\"!(failed | async)\">\n                        {{ 'Verification.Success' | translate }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/verification/verification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/verification/verification.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n.message-with-note {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.authentication.wider {\n  width: 410px;\n}\n.authentication-wrapper {\n  background-color: #ffffff;\n}\n.authentication-container {\n  margin: 2% auto 60px auto;\n  width: 371px;\n  background-color: #ffffff;\n}\n@media (max-width: 576px) {\n  .authentication-container {\n    width: 300px;\n  }\n}\n@media (max-width: 377px) {\n  .authentication-container {\n    width: 277px;\n  }\n}\n.h2 {\n  margin-bottom: 60px;\n  font-family: Avenir, sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n  color: #393e41;\n}\n.below-auth {\n  font-size: 14px;\n  margin-top: 20px;\n  line-height: 1.43;\n  color: #999999;\n}\n.message-with-note {\n  position: relative;\n  min-height: 410px;\n}\n.message-with-note > *:not(.key-note__wr) {\n  z-index: 2;\n}\n.message-with-note .h2 {\n  margin-bottom: 15px;\n}\n.message-with-note .text {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: center;\n  color: #a0a0a0;\n}\n.key-note {\n  width: 160px;\n  height: 410px;\n}\n.key-note__wr {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.container__text {\n  color: #393e41;\n  font-family: Avenir;\n  font-size: 32px;\n  font-weight: 600;\n  padding-top: 24%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL3ZpZXdzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3JjL3N0eWxlcy9zaGFyZWQvYXV0aC5zdHlsZXMuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvc3R5bGVzL2d1aWRlL3Jlc3BvbnNpdmUuc2NzcyIsIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBYUEsV0FBQTtBQWdCQSxtQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzNCSjtBRDhCQSxnQkFBQTtBQUNBO0VBeEJJLFlBeUJvQjtFQXhCcEIsbUJBQUE7RUFDQSxrQkFIcUM7RUFJckMsbUJBSnFDO0VBMkJyQyxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDeEJKO0FEMEJJO0VBQ0kseUJBakRLO0VBa0RMLHFCQWxESztFQW1ETCxjQWxEQTtBQzBCUjtBRDBCUTtFQUNJLHlCQXBESTtFQXFESixxQkFyREk7QUM2QmhCO0FENEJJO0VBQ0kseUJBMURRO0VBMkRSLHFCQTNEUTtBQ2lDaEI7QUQ0QlE7RUFDSSx5QkFoRUM7RUFpRUQscUJBakVDO0FDdUNiO0FEOEJJO0VBQ0ksY0FqRUs7RUFrRUwseUJBQUE7QUM1QlI7QUQ4QlE7RUFDSSxpQkFBQTtBQzVCWjtBRGdDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQzlCUjtBRGtDQTtFQUNJLGNBQUE7QUMvQko7QURrQ0E7RUFDSSx3QkFBQTtBQy9CSjtBRGtDQTtFQUNJLGlCQUFBO0VBQ0EsY0E3Rlk7RUErRlosbUNBQUE7QUNoQ0o7QURrQ0k7RUFDSSxjQXBHSztBQ29FYjtBRG9DQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ2pDSjtBRG9DQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDakNKO0FEb0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FDakNKO0FEb0NBLG1CQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQ2pDSjtBRG9DQTtFQUNJLGdCQUFBO0FDakNKO0FEb0NBO0VBQ0ksZ0JBQUE7QUNqQ0o7QURvQ0E7RUFDSSxnQkFBQTtBQ2pDSjtBRG9DQSxvQkFBQTtBQUNBO0VBQ0ksZUFBQTtBQ2pDSjtBRG9DQTtFQUNJLGVBQUE7QUNqQ0o7QUMxR0k7RUFDSSxZQUFBO0FENkdSO0FDMUdJO0VBQ0kseUJGWEE7QUN1SFI7QUN6R0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkZqQkE7QUM0SFI7QUVoSFE7RURFSjtJQU1RLFlBQUE7RUQ0R1Y7QUFDRjtBRXJIUTtFREVKO0lBVVEsWUFBQTtFRDZHVjtBQUNGO0FDekdBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNGakNZO0FDNkloQjtBQ3pHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRDRHSjtBQ3pHQTtFQUVJLGtCQUFBO0VBQ0EsaUJBN0NjO0FEd0psQjtBQ3pHSTtFQUNJLFVBQUE7QUQyR1I7QUN4R0k7RUFDSSxtQkFBQTtBRDBHUjtBQ3ZHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRjFESztBQ21LYjtBQ3JHQTtFQUNJLFlBbEVhO0VBbUViLGFBbEVjO0FEMEtsQjtBQ3RHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FEd0dSO0FHeExBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUgyTEoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVkFSSUFCTEVTICovXG4kb3JhbmdlLXJlZDogI2VlNDAzNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRjaGFyY29hbC1ncmV5OiAjMzkzZTQxO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRkaW0tZ3JleTogIzIxMjEyMTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kbGlnaHQtZ3JleTogIzk5OTk5OTtcbiRwZWFjaHktcGluazogI2ZmOGY4OTtcbiRsaWdodC1waW5rOiAjZWVlZWVlO1xuJGRhcmstZ3JleTogIzNiM2IzYjtcblxuLyogTUlYSU5TICovXG5AbWl4aW4gYnRuLWhlaWdodCgkaGVpZ2h0LCAkYnRuLXBhZGRpbmc6IDMwcHgpIHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJGhlaWdodCAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAkYnRuLXBhZGRpbmc7XG4gICAgcGFkZGluZy1yaWdodDogJGJ0bi1wYWRkaW5nO1xufVxuXG5AbWl4aW4gbXVsdGlsaW5lLWVsbGlwc2lzKCRsaW5lQ2xhbXApIHtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZUNsYW1wO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIENMQVNTIFZBUklBQkxFUyovXG5cbiVmbGV4LWNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICAgIEBpbmNsdWRlIGJ0bi1oZWlnaHQoNTBweCk7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcblxuICAgICYtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2hpdGUge1xuICAgICAgICBjb2xvcjogJGJyb3duLWdyZXk7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRicm93bi1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICB9XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwe1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNXtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG4iLCIvKiBWQVJJQUJMRVMgKi9cbi8qIE1JWElOUyAqL1xuLyogQ0xBU1MgVkFSSUFCTEVTKi9cbi5tZXNzYWdlLXdpdGgtbm90ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBCQVNFIFNUWUxFUyAqL1xuLmJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMi42NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDMwMG1zO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNDAzNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWU0MDM2O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDE7XG4gIGJvcmRlci1jb2xvcjogIzM5M2U0MTtcbn1cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG59XG4uYnRuLXdoaXRlIHtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNhMGEwYTA7XG59XG4uYnRuLXdoaXRlOmhvdmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG59XG4uYnRuLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAyMDBtcztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2VlNDAzNjtcbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRlbGltaXRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLyogQ3VzdG9tIHBhZGRpbmdzICovXG4ucC1ybC0xMCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnAtcmwtMjUge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5hdXRoZW50aWNhdGlvbi53aWRlciB7XG4gIHdpZHRoOiA0MTBweDtcbn1cbi5hdXRoZW50aWNhdGlvbi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5hdXRoZW50aWNhdGlvbi1jb250YWluZXIge1xuICBtYXJnaW46IDIlIGF1dG8gNjBweCBhdXRvO1xuICB3aWR0aDogMzcxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc3cHgpIHtcbiAgLmF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI3N3B4O1xuICB9XG59XG5cbi5oMiB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzOTNlNDE7XG59XG5cbi5iZWxvdy1hdXRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5tZXNzYWdlLXdpdGgtbm90ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDEwcHg7XG59XG4ubWVzc2FnZS13aXRoLW5vdGUgPiAqOm5vdCgua2V5LW5vdGVfX3dyKSB7XG4gIHotaW5kZXg6IDI7XG59XG4ubWVzc2FnZS13aXRoLW5vdGUgLmgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tZXNzYWdlLXdpdGgtbm90ZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuLmtleS1ub3RlIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQxMHB4O1xufVxuLmtleS1ub3RlX193ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lcl9fdGV4dCB7XG4gIGNvbG9yOiAjMzkzZTQxO1xuICBmb250LWZhbWlseTogQXZlbmlyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiAyNCU7XG59IiwiQGltcG9ydCAnLi4vZ3VpZGUvcmVzcG9uc2l2ZSc7XG5AaW1wb3J0IFwiLi4vYmFzZVwiO1xuXG4ka2V5LW5vdGUtd2lkdGg6IDE2MHB4O1xuJGtleS1ub3RlLWhlaWdodDogNDEwcHg7XG5cbi5hdXRoZW50aWNhdGlvbiB7XG5cbiAgICAmLndpZGVyIHtcbiAgICAgICAgd2lkdGg6IDQxMHB4O1xuICAgIH1cblxuICAgICYtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMiUgYXV0byA2MHB4IGF1dG87XG4gICAgICAgIHdpZHRoOiAzNzFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oZXh0cmEtc21hbGwpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNzdweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICRjaGFyY29hbC1ncmV5O1xufVxuXG4uYmVsb3ctYXV0aCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5tZXNzYWdlLXdpdGgtbm90ZSB7XG4gICAgQGV4dGVuZCAlZmxleC1jZW50ZXJlZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogJGtleS1ub3RlLWhlaWdodDtcblxuICAgID4gKjpub3QoLmtleS1ub3RlX193cikge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5oMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRicm93bi1ncmV5O1xuICAgIH1cbn1cblxuLmtleS1ub3RlIHtcbiAgICB3aWR0aDogJGtleS1ub3RlLXdpZHRoO1xuICAgIGhlaWdodDogJGtleS1ub3RlLWhlaWdodDtcblxuICAgICZfX3dyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICAgIC8vIGJhc2ljOlxuICAgIG1vYmlsZTogMzIwcHgsXG4gICAgZXh0cmEtc21hbGw6IDM3N3B4LFxuICAgIHNtYWxsOiA1NzZweCxcbiAgICBtZWRpdW06IDc2N3B4LFxuICAgIGxhcmdlOiA5OTFweCxcbiAgICBleHRyYS1sYXJnZTogMTIwMHB4LFxuICAgIGlwYWQtbGFuZHNjYXBlOiAxMDI1cHgsXG4gICAgbGFwdG9wOiAxMzY2cHhcbik7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7bWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KX0pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEB3YXJuIFwiTm8gc3VjaCBicmVha3BvaW50IGluIHRoZSBtYXA6IGAjeyRicmVha3BvaW50fWAuIFwiO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvYXV0aC5zdHlsZXMuc2Nzcyc7XG5cbi5jb250YWluZXJfX3RleHQge1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctdG9wOiAyNCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/verification/verification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/verification/verification.component.ts ***!
  \**************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_verifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/verifications.service */ "./src/app/services/verifications.service.ts");
/* harmony import */ var _core_session_session_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/session/session-storage */ "./src/app/core/session/session-storage.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let VerificationComponent = class VerificationComponent {
    constructor(verificationsService, router, sessionsStorage, activatedRoute) {
        this.verificationsService = verificationsService;
        this.router = router;
        this.sessionsStorage = sessionsStorage;
        this.activatedRoute = activatedRoute;
        this.failed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.icKeyNote = '/assets/img/ic-key-note-light-gray.svg';
        this.token = this.activatedRoute.snapshot.queryParamMap.get('token');
        this.email = this.activatedRoute.snapshot.queryParamMap.get('email');
    }
    ngOnInit() {
        this.verifyUser();
    }
    verifyUser() {
        if (!this.token || !this.email) {
            this.failed.next(true);
            this.router.navigate(['/sign-up']);
            return;
        }
        this.verificationsService.verify(this.token, this.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(({ data }) => {
            this.sessionsStorage.store(data);
            this.failed.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(2000))
            .subscribe(() => this.router.navigate(['/complete-profile']), () => this.router.navigate(['/sign-up']));
    }
};
VerificationComponent.ctorParameters = () => [
    { type: _services_verifications_service__WEBPACK_IMPORTED_MODULE_4__["VerificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_session_session_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
VerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: __webpack_require__(/*! raw-loader!./verification.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/verification/verification.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ../../../styles/shared/auth.styles.scss */ "./src/styles/shared/auth.styles.scss"), __webpack_require__(/*! ./verification.component.scss */ "./src/app/views/verification/verification.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_verifications_service__WEBPACK_IMPORTED_MODULE_4__["VerificationsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_session_session_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], VerificationComponent);



/***/ }),

/***/ "./src/app/views/verification/verification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/verification/verification.module.ts ***!
  \***********************************************************/
/*! exports provided: VerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModule", function() { return VerificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification.component */ "./src/app/views/verification/verification.component.ts");
/* harmony import */ var _verification_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.router */ "./src/app/views/verification/verification.router.ts");
/* harmony import */ var _services_verifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/verifications.service */ "./src/app/services/verifications.service.ts");
/* harmony import */ var _libs_view_container_view_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/view-container/view-container.module */ "./src/app/libs/view-container/view-container.module.ts");









let VerificationModule = class VerificationModule {
};
VerificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _libs_view_container_view_container_module__WEBPACK_IMPORTED_MODULE_8__["ViewContainerModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_verification_router__WEBPACK_IMPORTED_MODULE_6__["VerificationRouter"])
        ],
        providers: [
            _services_verifications_service__WEBPACK_IMPORTED_MODULE_7__["VerificationsService"]
        ],
        declarations: [_verification_component__WEBPACK_IMPORTED_MODULE_5__["VerificationComponent"]]
    })
], VerificationModule);



/***/ }),

/***/ "./src/app/views/verification/verification.router.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/verification/verification.router.ts ***!
  \***********************************************************/
/*! exports provided: VerificationRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationRouter", function() { return VerificationRouter; });
/* harmony import */ var _verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.component */ "./src/app/views/verification/verification.component.ts");

const VerificationRouter = [
    {
        path: '',
        component: _verification_component__WEBPACK_IMPORTED_MODULE_0__["VerificationComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-verification-verification-module-es2015.js.map