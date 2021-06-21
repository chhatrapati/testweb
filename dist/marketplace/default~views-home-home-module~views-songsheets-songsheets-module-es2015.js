(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-home-home-module~views-songsheets-songsheets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-item/search-item.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-item/search-item.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container\n    *ngTemplateOutlet=\"!!songsheet.fileType && songsheet.fileType !== 'Songsheet' ?\n    otherFileTemplate :\n    songsheetTemplate\n    \">\n</ng-container>\n\n<ng-template #songsheetTemplate>\n    <div class=\"card featured-card slide\" [ngClass]=\"{'featured-card__home': forSlider, 'featured-card__search': !forSlider }\">\n        <div class=\"featured-card__image\">\n            <a href=\"/music-scores/{{songsheet.id}}\">\n                <img [src]=\"songsheet.image.compactPath\" alt=\"image\">\n            </a>\n        </div>\n        <div class=\"featured-card__details\">\n            <div class=\"d-flex flex-column\">\n                <p class=\"featured-card__tags\">{{instruments}}</p>\n                <p class=\"featured-card__tags\">{{genres}}</p>\n                <a href=\"/music-scores/{{songsheet.id}}\">\n                    <p class=\"featured-card__title text-ellipsis\">{{songsheet.name}}</p>\n                </a>\n                <p class=\"featured-card__author text-ellipsis\">{{songsheet.artistName}}</p>\n            </div>\n            <div class=\"d-flex flex-row justify-content-between align-items-center\">\n                <p class=\"featured-card__price\">${{songsheet.price}}</p>\n                <button class=\"btn btn-secondary\" (click)=\"onBuyClick(songsheet.id)\">Buy</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #otherFileTemplate>\n    <div class=\"card featured-card slide\" [ngClass]=\"{'featured-card__home': forSlider, 'featured-card__search': !forSlider }\">\n        <div class=\"featured-card__image\">\n            <a href=\"/other/{{songsheet.id}}\">\n                <img [src]=\"songsheet.image.compactPath\" alt=\"image\">\n            </a>\n        </div>\n        <div class=\"featured-card__details\">\n            <div class=\"d-flex flex-column\">\n                <p class=\"featured-card__tags\">{{otherFileTypes[songsheet.fileType]}}</p>\n                <a href=\"/other/{{songsheet.id}}\">\n                    <p class=\"featured-card__title text-ellipsis\">{{songsheet.name}}</p>\n                </a>\n            </div>\n            <div class=\"d-flex flex-row justify-content-end align-items-center\">\n                <button class=\"btn btn-secondary\" (click)=\"onShowClick(songsheet.id)\">Show</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/search-item/search-item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-item/search-item.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* VARIABLES */\n/* MIXINS */\n/* CLASS VARIABLES*/\n/* BASE STYLES */\n.btn {\n  height: 50px;\n  border-radius: 25px;\n  padding-left: 30px;\n  padding-right: 30px;\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 2.66px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all ease-in 300ms;\n}\n.btn-primary {\n  background-color: #ee4036;\n  border-color: #ee4036;\n  color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary {\n  background-color: #393e41;\n  border-color: #393e41;\n}\n.btn-secondary:hover {\n  background-color: #ee4036;\n  border-color: #ee4036;\n}\n.btn-white {\n  color: #a0a0a0;\n  border: 3px solid #a0a0a0;\n}\n.btn-white:hover {\n  border-width: 3px;\n}\n.btn-icon {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.hidden, [hidden] {\n  display: none !important;\n}\na {\n  line-height: 1.43;\n  color: #393e41;\n  transition: color ease-in-out 200ms;\n}\na:hover {\n  color: #ee4036;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.delimiter {\n  height: 1px;\n  background-color: #ececec;\n  margin: 30px -15px;\n}\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 15px;\n  box-shadow: 0 5px 50px -25px rgba(0, 0, 0, 0.25);\n}\n/* Custom margins */\n.mt-30 {\n  margin-top: 30px;\n}\n.mt-40 {\n  margin-top: 40px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.mt-60 {\n  margin-top: 60px;\n}\n/* Custom paddings */\n.p-rl-10 {\n  padding: 0 10px;\n}\n.p-rl-25 {\n  padding: 0 25px;\n}\n.featured-card {\n  display: flex;\n  flex-direction: row;\n  flex: 0 0 auto;\n  width: 570px;\n  margin-left: 30px;\n}\n@media (max-width: 1200px) {\n  .featured-card__home {\n    flex-direction: column;\n    width: 270px;\n    min-height: 500px;\n    margin-left: 15px;\n  }\n  .featured-card__home .featured-card__image {\n    width: 240px;\n    height: 292px;\n  }\n  .featured-card__home .featured-card__details {\n    padding: 15px 0 0;\n    max-width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .featured-card__home {\n    flex-direction: row;\n    flex: 0 0 auto;\n    width: 505px;\n    min-height: auto;\n  }\n  .featured-card__home .featured-card__image {\n    width: 203px;\n    height: 234px;\n  }\n  .featured-card__home .featured-card__details {\n    padding: 15px;\n    max-width: calc(100% - 203px);\n  }\n}\n@media (max-width: 576px) {\n  .featured-card__home {\n    flex-direction: column;\n    width: 270px;\n    min-height: 500px;\n    margin-left: 15px;\n  }\n  .featured-card__home .featured-card__image {\n    width: 240px;\n    height: 292px;\n  }\n  .featured-card__home .featured-card__details {\n    padding: 15px 0 0;\n    max-width: 100%;\n  }\n}\n@media (max-width: 991px) {\n  .featured-card__search {\n    flex-direction: column;\n    width: 270px;\n    min-height: 500px;\n    margin-left: 15px;\n  }\n}\n@media (max-width: 991px) {\n  .featured-card__search .featured-card__image {\n    width: 240px;\n    height: 292px;\n  }\n}\n@media (max-width: 991px) {\n  .featured-card__search .featured-card__details {\n    padding: 15px 0 0;\n    max-width: 100%;\n  }\n}\n.featured-card:first-child {\n  margin-left: 0;\n}\n.featured-card__image {\n  display: flex;\n  flex: 0 0 auto;\n  width: 203px;\n  height: 234px;\n}\n.featured-card__image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.featured-card__details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 15px;\n  flex: 1;\n  max-width: calc(100% - 203px);\n  box-sizing: border-box;\n}\n.featured-card__details * {\n  margin-bottom: 0;\n  word-break: break-word;\n}\n.featured-card__tags {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 1.4px;\n  color: #d9d9d9;\n  text-transform: uppercase;\n  margin-bottom: 10px !important;\n}\n.featured-card__title {\n  margin-bottom: 10px !important;\n  font-family: Avenir, sans-serif;\n  font-size: 20px;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  color: #212121;\n  text-transform: uppercase;\n}\n.featured-card__author {\n  font-size: 12px;\n  margin-bottom: 10px !important;\n  line-height: 1.5;\n  color: #a0a0a0;\n}\n.featured-card__price {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.13;\n  color: #393e41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL3Bhbm5vdGF0aW9uLWZyb250LWVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3RkaW4iLCIvaG9tZS9lYzItdXNlci9wYW5ub3RhdGlvbi1mcm9udC1lbmQvc3JjL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQWFBLFdBQUE7QUFnQkEsbUJBQUE7QUFTQSxnQkFBQTtBQUNBO0VBeEJJLFlBeUJvQjtFQXhCcEIsbUJBQUE7RUFDQSxrQkFIcUM7RUFJckMsbUJBSnFDO0VBMkJyQyxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDL0JKO0FEaUNJO0VBQ0kseUJBakRLO0VBa0RMLHFCQWxESztFQW1ETCxjQWxEQTtBQ21CUjtBRGlDUTtFQUNJLHlCQXBESTtFQXFESixxQkFyREk7QUNzQmhCO0FEbUNJO0VBQ0kseUJBMURRO0VBMkRSLHFCQTNEUTtBQzBCaEI7QURtQ1E7RUFDSSx5QkFoRUM7RUFpRUQscUJBakVDO0FDZ0NiO0FEcUNJO0VBQ0ksY0FqRUs7RUFrRUwseUJBQUE7QUNuQ1I7QURxQ1E7RUFDSSxpQkFBQTtBQ25DWjtBRHVDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3JDUjtBRHlDQTtFQUNJLGNBQUE7QUN0Q0o7QUR5Q0E7RUFDSSx3QkFBQTtBQ3RDSjtBRHlDQTtFQUNJLGlCQUFBO0VBQ0EsY0E3Rlk7RUErRlosbUNBQUE7QUN2Q0o7QUR5Q0k7RUFDSSxjQXBHSztBQzZEYjtBRDJDQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3hDSjtBRDJDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDeENKO0FEMkNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FDeENKO0FEMkNBLG1CQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLGdCQUFBO0FDeENKO0FEMkNBO0VBQ0ksZ0JBQUE7QUN4Q0o7QUQyQ0E7RUFDSSxnQkFBQTtBQ3hDSjtBRDJDQSxvQkFBQTtBQUNBO0VBQ0ksZUFBQTtBQ3hDSjtBRDJDQTtFQUNJLGVBQUE7QUN4Q0o7QUN0R0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEeUdKO0FFckdRO0VERko7SUFFUSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VEeUdWO0VDdEdjO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUR3R2xCO0VDckdjO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VEdUdsQjtBQUNGO0FFckhRO0VERko7SUFxQlEsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VEc0dWO0VDbkdjO0lBQ0ksWUFyQ047SUFzQ00sYUFBQTtFRHFHbEI7RUNsR2M7SUFDSSxhQUFBO0lBQ0EsNkJBQUE7RURvR2xCO0FBQ0Y7QUVySVE7RURGSjtJQXdDUSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VEbUdWO0VDaEdjO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RURrR2xCO0VDL0ZjO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VEaUdsQjtBQUNGO0FFckpRO0VEeURKO0lBRVEsc0JBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFRDhGVjtBQUNGO0FFN0pRO0VEa0VJO0lBRVEsWUFBQTtJQUNBLGFBQUE7RUQ2RmxCO0FBQ0Y7QUVuS1E7RUR5RUk7SUFFUSxpQkFBQTtJQUNBLGVBQUE7RUQ0RmxCO0FBQ0Y7QUN2Rkk7RUFDSSxjQUFBO0FEeUZSO0FDdEZJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQXBHTTtFQXFHTixhQUFBO0FEd0ZSO0FDdEZRO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEd0ZaO0FDcEZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QURzRlI7QUNwRlE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FEc0ZaO0FDbEZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjRmhJVTtFRWlJVix5QkFBQTtFQUNBLDhCQUFBO0FEb0ZSO0FDakZJO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0YxSUc7RUUySUgseUJBQUE7QURtRlI7QUNoRkk7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNGakpLO0FDbU9iO0FDL0VJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRjNKUTtBQzRPaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1pdGVtL3NlYXJjaC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVkFSSUFCTEVTICovXG4kb3JhbmdlLXJlZDogI2VlNDAzNjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRjaGFyY29hbC1ncmV5OiAjMzkzZTQxO1xuJHZlcnktbGlnaHQtcGluazogI2Q5ZDlkOTtcbiRkaW0tZ3JleTogIzIxMjEyMTtcbiRicm93bi1ncmV5OiAjYTBhMGEwO1xuJGJyb3duaXNoLWdyZXk6ICM2MjYyNjI7XG4kbGlnaHQtZ3JleTogIzk5OTk5OTtcbiRwZWFjaHktcGluazogI2ZmOGY4OTtcbiRsaWdodC1waW5rOiAjZWVlZWVlO1xuJGRhcmstZ3JleTogIzNiM2IzYjtcblxuLyogTUlYSU5TICovXG5AbWl4aW4gYnRuLWhlaWdodCgkaGVpZ2h0LCAkYnRuLXBhZGRpbmc6IDMwcHgpIHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJGhlaWdodCAvIDI7XG4gICAgcGFkZGluZy1sZWZ0OiAkYnRuLXBhZGRpbmc7XG4gICAgcGFkZGluZy1yaWdodDogJGJ0bi1wYWRkaW5nO1xufVxuXG5AbWl4aW4gbXVsdGlsaW5lLWVsbGlwc2lzKCRsaW5lQ2xhbXApIHtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZUNsYW1wO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8qIENMQVNTIFZBUklBQkxFUyovXG5cbiVmbGV4LWNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQkFTRSBTVFlMRVMgKi9cbi5idG4ge1xuICAgIEBpbmNsdWRlIGJ0bi1oZWlnaHQoNTBweCk7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAzMDBtcztcblxuICAgICYtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjaGFyY29hbC1ncmV5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UtcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtd2hpdGUge1xuICAgICAgICBjb2xvcjogJGJyb3duLWdyZXk7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRicm93bi1ncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5oaWRkZW4sIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICAgIGNvbG9yOiAkY2hhcmNvYWwtZ3JleTtcblxuICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkb3JhbmdlLXJlZDtcbiAgICB9XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZWxpbWl0ZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgbWFyZ2luOiAzMHB4IC0xNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCAtMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4vKiBDdXN0b20gbWFyZ2lucyAqL1xuLm10LTMwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdC00MHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTYwe1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi8qIEN1c3RvbSBwYWRkaW5ncyAqL1xuLnAtcmwtMTB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNXtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG4iLCIvKiBWQVJJQUJMRVMgKi9cbi8qIE1JWElOUyAqL1xuLyogQ0xBU1MgVkFSSUFCTEVTKi9cbi8qIEJBU0UgU1RZTEVTICovXG4uYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAyLjY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMzAwbXM7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0MDM2O1xuICBib3JkZXItY29sb3I6ICNlZTQwMzY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0MTtcbiAgYm9yZGVyLWNvbG9yOiAjMzkzZTQxO1xufVxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQxO1xuICBib3JkZXItY29sb3I6ICMzOTNlNDE7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQwMzY7XG4gIGJvcmRlci1jb2xvcjogI2VlNDAzNjtcbn1cbi5idG4td2hpdGUge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2EwYTBhMDtcbn1cbi5idG4td2hpdGU6aG92ZXIge1xuICBib3JkZXItd2lkdGg6IDNweDtcbn1cbi5idG4taWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhpZGRlbiwgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBsaW5lLWhlaWdodDogMS40MztcbiAgY29sb3I6ICMzOTNlNDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWU0MDM2O1xufVxuXG4udGV4dC1lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVsaW1pdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogMzBweCAtMTVweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1MHB4IC0yNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi8qIEN1c3RvbSBtYXJnaW5zICovXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubXQtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4vKiBDdXN0b20gcGFkZGluZ3MgKi9cbi5wLXJsLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucC1ybC0yNSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLmZlYXR1cmVkLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDU3MHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZlYXR1cmVkLWNhcmRfX2hvbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5mZWF0dXJlZC1jYXJkX19ob21lIC5mZWF0dXJlZC1jYXJkX19pbWFnZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMjkycHg7XG4gIH1cbiAgLmZlYXR1cmVkLWNhcmRfX2hvbWUgLmZlYXR1cmVkLWNhcmRfX2RldGFpbHMge1xuICAgIHBhZGRpbmc6IDE1cHggMCAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mZWF0dXJlZC1jYXJkX19ob21lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1MDVweDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5mZWF0dXJlZC1jYXJkX19ob21lIC5mZWF0dXJlZC1jYXJkX19pbWFnZSB7XG4gICAgd2lkdGg6IDIwM3B4O1xuICAgIGhlaWdodDogMjM0cHg7XG4gIH1cbiAgLmZlYXR1cmVkLWNhcmRfX2hvbWUgLmZlYXR1cmVkLWNhcmRfX2RldGFpbHMge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMDNweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZmVhdHVyZWQtY2FyZF9faG9tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLmZlYXR1cmVkLWNhcmRfX2hvbWUgLmZlYXR1cmVkLWNhcmRfX2ltYWdlIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAyOTJweDtcbiAgfVxuICAuZmVhdHVyZWQtY2FyZF9faG9tZSAuZmVhdHVyZWQtY2FyZF9fZGV0YWlscyB7XG4gICAgcGFkZGluZzogMTVweCAwIDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmZlYXR1cmVkLWNhcmRfX3NlYXJjaCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZmVhdHVyZWQtY2FyZF9fc2VhcmNoIC5mZWF0dXJlZC1jYXJkX19pbWFnZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMjkycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZmVhdHVyZWQtY2FyZF9fc2VhcmNoIC5mZWF0dXJlZC1jYXJkX19kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mZWF0dXJlZC1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uZmVhdHVyZWQtY2FyZF9faW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDIwM3B4O1xuICBoZWlnaHQ6IDIzNHB4O1xufVxuLmZlYXR1cmVkLWNhcmRfX2ltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZlYXR1cmVkLWNhcmRfX2RldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjAzcHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZlYXR1cmVkLWNhcmRfX2RldGFpbHMgKiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uZmVhdHVyZWQtY2FyZF9fdGFncyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLmZlYXR1cmVkLWNhcmRfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXZlbmlyLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZmVhdHVyZWQtY2FyZF9fYXV0aG9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuLmZlYXR1cmVkLWNhcmRfX3ByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMTM7XG4gIGNvbG9yOiAjMzkzZTQxO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvYmFzZVwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9ndWlkZS9yZXNwb25zaXZlXCI7XG5cbiRpbWFnZS13aWR0aDogMjAzcHg7XG5cbi5mZWF0dXJlZC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDU3MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuXG4gICAgJl9faG9tZSB7XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oZXh0cmEtbGFyZ2UpIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICAmIC5mZWF0dXJlZC1jYXJkIHtcbiAgICAgICAgICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmX19kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bSkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDUwNXB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcblxuICAgICAgICAgICAgJiAuZmVhdHVyZWQtY2FyZCB7XG4gICAgICAgICAgICAgICAgJl9faW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGltYWdlLXdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX2RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGltYWdlLXdpZHRofSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgICAgICYgLmZlYXR1cmVkLWNhcmQge1xuICAgICAgICAgICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI5MnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX2RldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3NlYXJjaCB7XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UpIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiAuZmVhdHVyZWQtY2FyZCB7XG4gICAgICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZSkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjkycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAkaW1hZ2Utd2lkdGg7XG4gICAgICAgIGhlaWdodDogMjM0cHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGltYWdlLXdpZHRofSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3RhZ3Mge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICAgICAgY29sb3I6ICR2ZXJ5LWxpZ2h0LXBpbms7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEF2ZW5pciwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIGNvbG9yOiAkZGltLWdyZXk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJl9fYXV0aG9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAkYnJvd24tZ3JleTtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgICAgICBjb2xvcjogJGNoYXJjb2FsLWdyZXk7XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gICAgLy8gYmFzaWM6XG4gICAgbW9iaWxlOiAzMjBweCxcbiAgICBleHRyYS1zbWFsbDogMzc3cHgsXG4gICAgc21hbGw6IDU3NnB4LFxuICAgIG1lZGl1bTogNzY3cHgsXG4gICAgbGFyZ2U6IDk5MXB4LFxuICAgIGV4dHJhLWxhcmdlOiAxMjAwcHgsXG4gICAgaXBhZC1sYW5kc2NhcGU6IDEwMjVweCxcbiAgICBsYXB0b3A6IDEzNjZweFxuKTtcblxuQG1peGluIHJlc3BvbmQtdG8oJGJyZWFrcG9pbnQpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogI3ttYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpfSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHdhcm4gXCJObyBzdWNoIGJyZWFrcG9pbnQgaW4gdGhlIG1hcDogYCN7JGJyZWFrcG9pbnR9YC4gXCI7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/search-item/search-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-item/search-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/songsheet/songsheet-model */ "./src/app/models/songsheet/songsheet-model.ts");
/* harmony import */ var _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/enums/other-files-types */ "./src/app/core/enums/other-files-types.ts");





let SearchItemComponent = class SearchItemComponent {
    constructor(router) {
        this.router = router;
        this.forSlider = false;
        this.otherFileTypes = _core_enums_other_files_types__WEBPACK_IMPORTED_MODULE_4__["OtherFilesTypes"];
    }
    get instruments() {
        if (!this.songsheet ||
            !this.songsheet.instruments ||
            !this.songsheet.instruments.length) {
            return '';
        }
        const contentToShow = this.songsheet.instruments;
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('and more')).join(' · ');
    }
    get genres() {
        if (!this.songsheet ||
            !this.songsheet.genres ||
            !this.songsheet.genres.length) {
            return '';
        }
        const contentToShow = this.songsheet.genres;
        const contentToShowLength = contentToShow.length;
        return (contentToShowLength <= 4
            ? contentToShow
            : contentToShow.slice(0, 4).concat('and more')).join(' · ');
    }
    onBuyClick(id) {
        this.router.navigate(['/music-scores', id]);
    }
    onShowClick(id) {
        this.router.navigate(['/other', id]);
    }
};
SearchItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_3__["SongsheetModel"])
], SearchItemComponent.prototype, "songsheet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchItemComponent.prototype, "forSlider", void 0);
SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-item',
        template: __webpack_require__(/*! raw-loader!./search-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-item/search-item.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./search-item.component.scss */ "./src/app/components/search-item/search-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SearchItemComponent);



/***/ }),

/***/ "./src/app/components/search-item/search-item.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/search-item/search-item.module.ts ***!
  \**************************************************************/
/*! exports provided: SearchItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemModule", function() { return SearchItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _search_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-item.component */ "./src/app/components/search-item/search-item.component.ts");




let SearchItemModule = class SearchItemModule {
};
SearchItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _search_item_component__WEBPACK_IMPORTED_MODULE_3__["SearchItemComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _search_item_component__WEBPACK_IMPORTED_MODULE_3__["SearchItemComponent"]
        ]
    })
], SearchItemModule);



/***/ }),

/***/ "./src/app/core/helpers/http-params-helper.ts":
/*!****************************************************!*\
  !*** ./src/app/core/helpers/http-params-helper.ts ***!
  \****************************************************/
/*! exports provided: createParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParams", function() { return createParams; });
function createParams(params, objectParams) {
    if (objectParams) {
        Object.keys(objectParams).forEach((key) => {
            if (Array.isArray(objectParams[key])) {
                objectParams[key].forEach((item, index) => {
                    params = params.append(`${key}`, objectParams[key][index]);
                });
                delete objectParams[key];
            }
            if (objectParams[key]) {
                params = params.append(key, objectParams[key]);
            }
        });
    }
    return params;
}


/***/ }),

/***/ "./src/app/services/songsheets.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/songsheets.service.ts ***!
  \************************************************/
/*! exports provided: SongsheetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsheetsService", function() { return SongsheetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/songsheet/songsheet-model */ "./src/app/models/songsheet/songsheet-model.ts");
/* harmony import */ var _libs_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/tokens */ "./src/app/libs/tokens.ts");
/* harmony import */ var _core_helpers_http_params_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/helpers/http-params-helper */ "./src/app/core/helpers/http-params-helper.ts");








let SongsheetsService = class SongsheetsService {
    constructor(apiUrl, httpClient) {
        this.apiUrl = apiUrl;
        this.httpClient = httpClient;
        this.endpoint = '/songsheets';
    }
    get apiEndpoint() {
        return [this.apiUrl, this.endpoint].join('');
    }
    topList(filters) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (filters) {
            params = Object(_core_helpers_http_params_helper__WEBPACK_IMPORTED_MODULE_7__["createParams"])(params, filters);
        }
        return this.httpClient
            .get(this.apiEndpoint + '/top', { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ data, pagination }) => {
            return {
                data: data.map((s) => new _models_songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_5__["SongsheetModel"](s)),
                pagination
            };
        }), 
        // ignore error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ data: [], pagination: { totalCount: 0 } })));
    }
    findList(filter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(filter).forEach((key) => {
            if (Array.isArray(filter[key])) {
                filter[key].forEach((item, index) => {
                    params = params.append(`${key}[${index}]`, filter[key][index]);
                });
                delete filter[key];
            }
            else if (key === 'order') {
                Object.keys(filter[key]).forEach((item) => {
                    params = params.append(`${key}.${item}`, filter[key][item]);
                });
                delete filter[key];
            }
            else if (key === 'search') {
                params = params.append(key, encodeURIComponent(filter[key]));
                delete filter[key];
            }
            if (filter[key]) {
                params = params.append(key, filter[key]);
            }
        });
        return this.httpClient
            .get(`${this.apiEndpoint}/search`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ data, pagination }) => {
            return {
                pagination,
                items: data.items.map((i) => new _models_songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_5__["SongsheetModel"](i)),
                itemsCount: data.itemsCount
            };
        }), 
        // ignore error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ items: [], pagination: { totalCount: 0 } })));
    }
    getSongsheet(songsheetId) {
        return this.httpClient
            .get(`${this.apiEndpoint}/${songsheetId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => new _models_songsheet_songsheet_model__WEBPACK_IMPORTED_MODULE_5__["SongsheetModel"](response.data)));
    }
};
SongsheetsService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_libs_tokens__WEBPACK_IMPORTED_MODULE_6__["API_URL_TOKEN"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SongsheetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_libs_tokens__WEBPACK_IMPORTED_MODULE_6__["API_URL_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SongsheetsService);



/***/ })

}]);
//# sourceMappingURL=default~views-home-home-module~views-songsheets-songsheets-module-es2015.js.map