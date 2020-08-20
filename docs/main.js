(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_main_chat_room_main_chat_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-chat-room/main-chat-room.component */ "./src/app/components/main-chat-room/main-chat-room.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");







const routes = [
    { path: 'app-sign-in', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: 'log-in', component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__["LogInComponent"] },
    { path: 'app-main-chat-room', component: _components_main_chat_room_main_chat_room_component__WEBPACK_IMPORTED_MODULE_3__["MainChatRoomComponent"], canActivate: [_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInGuardService"]] },
    { path: '', redirectTo: 'app-sign-in', pathMatch: 'full' },
    { path: '**', redirectTo: 'app-sign-in', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'slack';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module-matriel/module-matriel.module */ "./src/app/module-matriel/module-matriel.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_main_chat_room_main_chat_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main-chat-room/main-chat-room.component */ "./src/app/components/main-chat-room/main-chat-room.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_8__["ModuleMatrialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_main_chat_room_main_chat_room_component__WEBPACK_IMPORTED_MODULE_10__["MainChatRoomComponent"],
        _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_11__["LogInComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_8__["ModuleMatrialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_main_chat_room_main_chat_room_component__WEBPACK_IMPORTED_MODULE_10__["MainChatRoomComponent"],
                    _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_11__["LogInComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_8__["ModuleMatrialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 0, consts: [[1, "container"], ["src", "../../../assets/slack-logo.jpeg", "alt", "", "width", "140px"], [1, "hrder-boutons"], ["id", "user-group"], [1, "menu"], [1, "material-icons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pircing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    width: 100%;\r\n    padding-top: 1%;\r\n    padding-bottom: 1%;\r\n    display: flex;\r\n    box-shadow: 1px 2px rgb(229, 226, 226);\r\n\r\n\r\n}\r\n.hrder-boutons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n\r\n    margin-left: 69%\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color: #616061;\r\n    font-size: 15px;\r\n    margin: 10px;\r\n}\r\n.menu[_ngcontent-%COMP%]{\r\n    border: black solid 1px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}\r\n#user-group[_ngcontent-%COMP%]{\r\n    border: #4d394b solid 1px;\r\n    border-radius: 5px;\r\n    background-color: #4d394b;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 10px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNDQUFzQzs7O0FBRzFDO0FBQ0E7SUFDSSxhQUFhOztJQUViO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggcmdiKDIyOSwgMjI2LCAyMjYpO1xyXG5cclxuXHJcbn1cclxuLmhyZGVyLWJvdXRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA2OSVcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICM2MTYwNjE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLm1lbnV7XHJcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4jdXNlci1ncm91cHtcclxuICAgIGJvcmRlcjogIzRkMzk0YiBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQzOTRiO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/log-in/log-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _servises_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servises/users.service */ "./src/app/servises/users.service.ts");
/* harmony import */ var _servises_massages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servises/massages.service */ "./src/app/servises/massages.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











function LogInComponent_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC\u05EA 2 \u05EA\u05D5\u05D5\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogInComponent_span_11_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_span_11_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("password").errors.minlength);
} }
function LogInComponent_span_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05D7\u05D5\u05E7\u05D9\u05EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogInComponent_span_14_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_span_14_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("email").errors.email);
} }
function LogInComponent_span_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC\u05EA 4 \u05EA\u05D5\u05D5\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogInComponent_span_17_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_span_17_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("password").errors.minlength);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LogInComponent {
    constructor(fb, fs, svc, MassagesSVC) {
        this.fb = fb;
        this.fs = fs;
        this.svc = svc;
        this.MassagesSVC = MassagesSVC;
        this.submitted = false;
    }
    ngOnInit() {
        this.users$ = this.fs.collection('users').valueChanges();
        this.registerForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
        });
        this.name = this.registerForm.value.userName;
        this.MassagesSVC.name = this.registerForm.value.userName;
    }
    onSubmit() {
        if (this.registerForm.valid) {
            this.submitted = true;
            this.svc.userInList = true;
            this.addUser({
                id: Math.floor(Math.random() * 10000000),
                name: this.registerForm.value.userName,
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                img: 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/60348869_10214248270536232_8767458307741843456_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=Q97WJfb227oAX8bvQHA&_nc_oc=AQnVQI_SPBC11ZggnLJ5doa2I9YX4U7X18om4Gz-ITPLcCGQGC9Z9ZGuohSWwk_7s8o&_nc_ht=scontent.fsdv1-2.fna&oh=f7fe092ac8a0c9a6b2b4906f734acbcb&oe=5F5D5A6C',
            });
        }
    }
    addUser(user) {
        console.log(user);
        this.fs.collection('users').add(user);
        this.svc.addUser(user);
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servises_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servises_massages_service__WEBPACK_IMPORTED_MODULE_4__["MassagesService"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["log-in"]], decls: 28, vars: 14, consts: [[1, "container"], [1, "first-line"], [1, "form-container"], ["action", "", 2, "width", "40%", 3, "formGroup", "ngSubmit"], [1, "userName", 2, "margin-bottom", "10px"], ["id", "userNameInp", "formControlName", "userName", "type", "text", "placeholder", "Enter Your Username", 1, "b", 3, "ngClass"], [4, "ngIf"], [1, "email", 2, "margin-bottom", "10px"], ["id", "inputs2", "formControlName", "email", "type", "text", "placeholder", "you@example.com", 3, "ngClass"], [1, "password", 2, "margin-bottom", "10px"], ["id", "inputs3", "formControlName", "password", "type", "password", "placeholder", "password", 1, "b", 3, "ngClass"], ["routerLink", "/app-main-chat-room", "type", "submit", "mat-raised-button", "", "color", "primary", 2, "background-color", "#007a5a", "width", "270px", 3, "disabled", "click"], [1, "link-to-sign-in"], ["routerLink", "/app-sign-in"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up to Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter Email & Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LogInComponent_span_11_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LogInComponent_span_14_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LogInComponent_span_17_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Already Have an Acount ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Click Here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "To Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.registerForm.get("userName").errors && ctx.registerForm.get("userName").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("userName").errors && ctx.registerForm.get("userName").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.registerForm.get("email").errors && ctx.registerForm.get("email").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").errors && ctx.registerForm.get("email").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.registerForm.get("password").errors && ctx.registerForm.get("password").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").errors && ctx.registerForm.get("password").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\r\n  border: rgb(229, 226, 226) solid 1px;\r\n  width: 770px;\r\n  height: 420px;\r\n  margin-top: 3%;\r\n  margin-left: 28%;\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 1px 1px 2px rgb(229, 226, 226);\r\n  border-radius: 5px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: 33%;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  height: 30px;\r\n}\r\n.link-to-sign-in[_ngcontent-%COMP%] {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJvcmRlcjogcmdiKDIyOSwgMjI2LCAyMjYpIHNvbGlkIDFweDtcclxuICB3aWR0aDogNzcwcHg7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tbGVmdDogMjglO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoMjI5LCAyMjYsIDIyNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMyU7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5saW5rLXRvLXNpZ24taW4ge1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _servises_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _servises_massages_service__WEBPACK_IMPORTED_MODULE_4__["MassagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main-chat-room/main-chat-room.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/main-chat-room/main-chat-room.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainChatRoomComponent", function() { return MainChatRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servises/users.service */ "./src/app/servises/users.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _servises_massages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servises/massages.service */ "./src/app/servises/massages.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function MainChatRoomComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainChatRoomComponent_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clickUser(user_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "18:18 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3.name, "");
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function MainChatRoomComponent_div_42_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const masseage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, masseage_r6.userId == ctx_r7.userId && masseage_r6.clinetId == ctx_r7.clinetId ? "#dcf8c6" : "#f1f3f0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", masseage_r6.massege, " ");
} }
function MainChatRoomComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainChatRoomComponent_div_42_p_1_Template, 2, 4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const masseage_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", masseage_r6.userId == ctx_r1.userId && masseage_r6.clinetId == ctx_r1.clinetId || masseage_r6.userId == ctx_r1.clinetId && masseage_r6.clinetId == ctx_r1.userId);
} }
class MainChatRoomComponent {
    constructor(svc, fs, MassagesSVC) {
        this.svc = svc;
        this.fs = fs;
        this.MassagesSVC = MassagesSVC;
        this.imgSrc = '';
        this.date = new Date();
        this.messagePlaceholder = '';
        this.arr = [];
        this.arr2 = [];
        this.count = 0;
        this.resiverName = '';
    }
    ngOnInit() {
        this.userArr$ = this.fs.collection('users').valueChanges();
        this.masseageArr2$ = this.fs.collection('messages').valueChanges();
        //------------------------------------
        this.masseageArr2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            let arr2 = [];
            let temp = res[0].count;
            for (let i of res) {
                if (i.count >= temp) {
                    temp = i.count;
                    this.count = temp;
                }
                arr2.push(i);
            }
            this.arr2 = arr2;
        })).subscribe();
        this.userId = this.MassagesSVC.userId;
        this.name = this.MassagesSVC.name;
        console.log("this.userId", this.userId);
    }
    scrollToBottom() {
        console.log('asasasasasasasas');
        this.container = document.getElementById("conversation");
        this.container.scrollTop = this.container.scrollHeight;
    }
    ngAfterViewChecked() {
        console.log("scrool:::::");
        this.scrollToBottom();
    }
    get sortData2() {
        return this.arr2.sort((a, b) => {
            return a.count - b.count;
        });
    }
    clickUser(user) {
        this.imgSrc = user.img;
        this.MassagesSVC.clinetId = user.id;
        this.clinetId = user.id;
        console.log("clinetId: ", this.clinetId);
        this.messagePlaceholder = `Message ${user.name}`;
        this.resiverName = user.name;
    }
    addMassege(massege) {
        this.count++;
        this.fs.collection('messages').add({
            count: this.count,
            clinetId: this.MassagesSVC.clinetId,
            userId: this.MassagesSVC.userId,
            massege: massege,
            time: this.date
        });
        this.count++;
    }
}
MainChatRoomComponent.ɵfac = function MainChatRoomComponent_Factory(t) { return new (t || MainChatRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servises_massages_service__WEBPACK_IMPORTED_MODULE_4__["MassagesService"])); };
MainChatRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainChatRoomComponent, selectors: [["app-main-chat-room"]], decls: 53, vars: 6, consts: [["href", "http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "container", "app"], [1, "row", "app-one"], [1, "col-sm-4", "side"], [1, "side-one"], [1, "row", "heading"], [1, "col-sm-3", "col-xs-3", "heading-avatar"], [1, "heading-avatar-icon"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png"], [1, "col-sm-1", "col-xs-1", "heading-dot", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v", "fa-2x", "pull-right"], [1, "col-sm-2", "col-xs-2", "heading-compose", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-comments", "fa-2x", "pull-right"], [1, "row", "searchBox"], [1, "col-sm-12", "searchBox-inner"], [1, "form-group", "has-feedback"], ["id", "searchText", "type", "text", "name", "searchText", "placeholder", "Search", 1, "form-control"], [1, "glyphicon", "glyphicon-search", "form-control-feedback"], [1, "row", "sideBar"], ["class", "row sideBar-body", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-8", "conversation"], [1, "col-sm-2", "col-md-1", "col-xs-3", "heading-avatar"], ["src", "https://bootdey.com/img/Content/avatar/avatar6.png"], [1, "col-sm-8", "col-xs-7", "heading-name"], [1, "heading-name-meta"], [1, "heading-online"], ["id", "conversation", 1, "row", "message"], [1, "row", "message-previous"], [1, "col-sm-12", "previous"], ["onclick", "previous(this)", "id", "ankitjain28", "name", "20"], [1, "row", "message-body"], [1, "col-sm-12", "message-main-receiver"], ["class", "message-text", 4, "ngFor", "ngForOf"], [1, "row", "reply"], [1, "col-sm-1", "col-xs-1", "reply-emojis"], [1, "fa", "fa-smile-o", "fa-2x"], [1, "col-sm-9", "col-xs-9", "reply-main"], ["rows", "1", "id", "comment", 1, "form-control", 3, "placeholder"], ["massege", ""], [1, "col-sm-1", "col-xs-1", "reply-recording"], ["aria-hidden", "true", 1, "fa", "fa-microphone", "fa-2x"], [1, "col-sm-1", "col-xs-1", "reply-send"], ["aria-hidden", "true", 1, "fa", "fa-send", "fa-2x", 3, "click"], [1, "row", "sideBar-body", 3, "click"], [1, "col-sm-3", "col-xs-3", "sideBar-avatar"], [1, "avatar-icon"], [1, "col-sm-9", "col-xs-9", "sideBar-main"], [1, "row"], [1, "col-sm-8", "col-xs-8", "sideBar-name"], [1, "name-meta"], [1, "col-sm-4", "col-xs-4", "pull-right", "sideBar-time"], [1, "time-meta", "pull-right"], [1, "message-text"], ["class", "masseages", 3, "ngStyle", 4, "ngIf"], [1, "masseages", 3, "ngStyle"]], template: function MainChatRoomComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainChatRoomComponent_div_20_Template, 12, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Show Previous Message! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MainChatRoomComponent_div_42_Template, 2, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainChatRoomComponent_Template_i_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48); return ctx.addMassege(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 4, ctx.userArr$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.resiverName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.messagePlaceholder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.fa-2x[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.app[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  top: 19px;\r\n  height: calc(100% - 38px);\r\n  margin: auto;\r\n  padding: 0;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.app-one[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 5px 0 rgba(0, 0, 0, .2);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.side[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.side-one[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n  position: relative;\r\n  display: block;\r\n  top: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.side-two[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 2;\r\n  position: relative;\r\n  top: -100%;\r\n  left: -100%;\r\n  transition: left 0.3s ease;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  padding: 10px 16px 10px 15px;\r\n  margin: 0;\r\n  height: 60px;\r\n  width: 100%;\r\n  background-color: #eee;\r\n  z-index: 1000;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-avatar[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-avatar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-name[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-name-meta[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 100%;\r\n  padding: 5px;\r\n  padding-bottom: 0;\r\n  text-align: left;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  color: #000;\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-online[_ngcontent-%COMP%] {\r\n  display: none;\r\n  padding: 0 5px;\r\n  font-size: 12px;\r\n  color: #93918f;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-compose[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-compose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 5px;\r\n  color: #93918f;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-dot[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin-left: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.heading-dot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  padding: 5px;\r\n  color: #93918f;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.searchBox[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.searchBox-inner[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10px !important;\r\n  background-color: #fbfbfb;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n#searchBox-inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.searchBox-inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  background-color: #fff;\r\n  overflow-y: auto;\r\n  border: 1px solid #f7f7f7;\r\n  height: calc(100% - 120px);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-body[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 10px !important;\r\n  border-bottom: 1px solid #f7f7f7;\r\n  height: 72px;\r\n  margin: 0 !important;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-body[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-avatar[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.avatar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  height: 49px;\r\n  width: 49px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-main[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-name[_ngcontent-%COMP%] {\r\n  padding: 10px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.name-meta[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n  padding: 1% !important;\r\n  text-align: left;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  color: #000;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sideBar-time[_ngcontent-%COMP%] {\r\n  padding: 10px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.time-meta[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-size: 12px;\r\n  padding: 1% !important;\r\n  color: rgba(0, 0, 0, .4);\r\n  vertical-align: baseline;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.newMessage[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  height: 100%;\r\n  position: relative;\r\n  left: -100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.newMessage-heading[_ngcontent-%COMP%] {\r\n  padding: 10px 16px 10px 15px !important;\r\n  margin: 0 !important;\r\n  height: 100px;\r\n  width: 100%;\r\n  background-color: #00bfa5;\r\n  z-index: 1001;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.newMessage-main[_ngcontent-%COMP%] {\r\n  padding: 10px 16px 0 15px !important;\r\n  margin: 0 !important;\r\n  height: 60px;\r\n  margin-top: 30px !important;\r\n  width: 100%;\r\n  z-index: 1001;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.newMessage-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  padding: 10px 5px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.newMessage-back[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  vertical-align: baseline;\r\n  padding: 12px 5px !important;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.newMessage-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin: auto !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.composeBox[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.composeBox-inner[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10px !important;\r\n  background-color: #fbfbfb;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.composeBox-inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.compose-sideBar[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  background-color: #fff;\r\n  overflow-y: auto;\r\n  border: 1px solid #f7f7f7;\r\n  height: calc(100% - 160px);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.conversation[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  height: 100%;\r\n  \r\n  border-left: 1px solid rgba(0, 0, 0, .08);\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  margin: 0 !important;\r\n  background-size: cover;\r\n  overflow-y: auto;\r\n  border: 1px solid #f7f7f7;\r\n  height: calc(100% - 120px);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-previous[_ngcontent-%COMP%] {\r\n  margin : 0 !important;\r\n  padding: 0 !important;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.previous[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  text-align: center;\r\n  padding: 10px !important;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.previous[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-body[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n  width: auto;\r\n  height: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-main-receiver[_ngcontent-%COMP%] {\r\n  \r\n  max-width: 60%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-main-sender[_ngcontent-%COMP%] {\r\n  padding: 3px 20px !important;\r\n  margin-left: 40% !important;\r\n  max-width: 60%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-text[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n  padding: 5px !important;\r\n  word-wrap:break-word;\r\n  font-weight: 200;\r\n  font-size: 14px;\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-time[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n  margin-left: 50px !important;\r\n  font-size: 12px;\r\n  text-align: right;\r\n  color: #9a9a9a;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.receiver[_ngcontent-%COMP%] {\r\n  width: auto !important;\r\n  padding: 4px 10px 7px !important;\r\n  border-radius: 10px 10px 10px 0;\r\n  background: #ffffff;\r\n  font-size: 12px;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);\r\n  word-wrap: break-word;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.sender[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: auto !important;\r\n  background: #dcf8c6;\r\n  border-radius: 10px 10px 0 10px;\r\n  padding: 4px 10px 7px !important;\r\n  font-size: 12px;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, .2);\r\n  display: inline-block;\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  width: 100%;\r\n  background-color: #f5f1ee;\r\n  padding: 10px 5px 10px 5px !important;\r\n  margin: 0 !important;\r\n  z-index: 1000;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-emojis[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-emojis[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 5px 5px 5px 5px !important;\r\n  color: #93918f;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-recording[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-recording[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 5px !important;\r\n  color: #93918f;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-send[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-send[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 5px !important;\r\n  color: #93918f;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-main[_ngcontent-%COMP%] {\r\n  padding: 2px 5px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-main[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  resize: none;\r\n  overflow: hidden;\r\n  padding: 5px !important;\r\n  outline: none;\r\n  border: none;\r\n  text-indent: 5px;\r\n  box-shadow: none;\r\n  height: 100%;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.reply-main[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border: none;\r\n  text-indent: 5px;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 700px) {\r\n  .app[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    height: 100%;\r\n  }\r\n  .heading[_ngcontent-%COMP%] {\r\n    height: 70px;\r\n    background-color: #009688;\r\n  }\r\n  .fa-2x[_ngcontent-%COMP%] {\r\n    font-size: 2.3em !important;\r\n  }\r\n  .heading-avatar[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n  }\r\n  .heading-avatar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 50px;\r\n  }\r\n  .heading-compose[_ngcontent-%COMP%] {\r\n    padding: 5px !important;\r\n  }\r\n  .heading-compose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n  .heading-dot[_ngcontent-%COMP%] {\r\n    padding: 5px !important;\r\n    margin-left: 10px !important;\r\n  }\r\n  .heading-dot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n  .sideBar[_ngcontent-%COMP%] {\r\n    height: calc(100% - 130px);\r\n  }\r\n  .sideBar-body[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n  }\r\n  .sideBar-avatar[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 0 8px !important;\r\n  }\r\n  .avatar-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n  }\r\n  .sideBar-main[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n  }\r\n  .sideBar-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n  }\r\n  .sideBar-name[_ngcontent-%COMP%] {\r\n    padding: 10px 5px !important;\r\n  }\r\n  .name-meta[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 5% !important;\r\n  }\r\n  .sideBar-time[_ngcontent-%COMP%] {\r\n    padding: 10px !important;\r\n  }\r\n  .time-meta[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    font-size: 14px;\r\n    padding: 4% !important;\r\n    color: rgba(0, 0, 0, .4);\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  .conversation[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    height: 100%;\r\n    \r\n    border-left: 1px solid rgba(0, 0, 0, .08);\r\n    \r\n  }\r\n  .message[_ngcontent-%COMP%] {\r\n    height: calc(100% - 140px);\r\n  }\r\n  .reply[_ngcontent-%COMP%] {\r\n    height: 70px;\r\n  }\r\n  .reply-emojis[_ngcontent-%COMP%] {\r\n    padding: 5px 0 !important;\r\n  }\r\n  .reply-emojis[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 5px 2px !important;\r\n    font-size: 1.8em !important;\r\n  }\r\n  .reply-main[_ngcontent-%COMP%] {\r\n    padding: 2px 8px !important;\r\n  }\r\n  .reply-main[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    padding: 8px !important;\r\n    font-size: 18px;\r\n  }\r\n  .reply-recording[_ngcontent-%COMP%] {\r\n    padding: 5px 0 !important;\r\n  }\r\n  .reply-recording[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 5px 0 !important;\r\n    font-size: 1.8em !important;\r\n  }\r\n  .reply-send[_ngcontent-%COMP%] {\r\n    padding: 5px 0 !important;\r\n  }\r\n  .reply-send[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 5px 2px 5px 0 !important;\r\n    font-size: 1.8em !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.masseages[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-radius: 10px;\r\n  background-color: blueviolet;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNoYXQtcm9vbS9tYWluLWNoYXQtcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0dHOzs7Ozs7O0FBT0g7Ozs7Ozs7O0dBUUc7Ozs7Ozs7QUFFSDtFQUNFLHNCQUFzQjtBQUN4Qjs7Ozs7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7Ozs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVix5RUFBeUU7QUFDM0U7Ozs7Ozs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUVBQXlFO0FBQzNFOzs7Ozs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7QUFDZDs7Ozs7OztBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLE1BQU07QUFDUjs7Ozs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFFWCwwQkFBMEI7O0FBRTVCOzs7Ozs7O0FBR0E7RUFDRSw0QkFBNEI7RUFDNUIsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7Ozs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7O0FBRWpCOzs7Ozs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtF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aWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tY2hhdC1yb29tL21haW4tY2hhdC1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuaGFlZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MGQzNjtcclxuICBcclxufVxyXG5cclxuLmxlZnQtbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmMGU0MDtcclxuICB3aWR0aDogMTglO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG59XHJcbmhyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig4MiwgMzgsIDgzKTtcclxuICBtYXJnaW46IDFlbSAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmMGU0MDtcclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsMTcxLDE4OCk7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuLnN0YXJ0LWNoYXQtdXNlciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDE3M3ZoOyBcclxuICBoZWlnaHQ6IDc2dmg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbn1cclxuXHJcbi53YXJycGVyLXRleHRhcmVhIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbm5lci1zZW5kbWFzc2VnZSB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhNWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFycm93LXNwYW4ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG5cclxuLm1hc3NlYWdlc3tcclxuYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmMDtcclxuO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG53aWR0aDogZml0LWNvbnRlbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4udXNlcntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbnRleHRhcmVhe1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4ubWFpbi1jaGF0LXNlY3Rpb257ICBcclxuIFxyXG59ICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIGRpdixcclxuc3BhbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufSAqL1xyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmZhLTJ4IHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uYXBwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0b3A6IDE5cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzOHB4KTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcblxyXG4uYXBwLW9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaWRlLW9uZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLnNpZGUtdHdvIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTAwJTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xyXG5cclxufVxyXG5cclxuXHJcbi5oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHggMTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uaGVhZGluZy1hdmF0YXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLmhlYWRpbmctYXZhdGFyLWljb24gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1uYW1lIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGluZy1uYW1lLW1ldGEge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmhlYWRpbmctb25saW5lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzkzOTE4ZjtcclxufVxyXG4uaGVhZGluZy1jb21wb3NlIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGVhZGluZy1jb21wb3NlIGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6ICM5MzkxOGY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGluZy1kb3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWRvdCBpIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6ICM5MzkxOGY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoQm94LWlubmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbn1cclxuXHJcblxyXG4jc2VhcmNoQm94LWlubmVyIGlucHV0IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoQm94LWlubmVyIGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc2lkZUJhciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTIwcHgpO1xyXG59XHJcblxyXG4uc2lkZUJhci1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlQmFyLWJvZHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5zaWRlQmFyLWF2YXRhciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhci1pY29uIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNDlweDtcclxuICB3aWR0aDogNDlweDtcclxufVxyXG5cclxuLnNpZGVCYXItbWFpbiB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZUJhci1tYWluIC5yb3cge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVCYXItbmFtZSB7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmFtZS1tZXRhIHtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgcGFkZGluZzogMSUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zaWRlQmFyLXRpbWUge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWUtbWV0YSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDElICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLypOZXcgTWVzc2FnZSovXHJcblxyXG4ubmV3TWVzc2FnZSB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTEwMCU7XHJcbn1cclxuLm5ld01lc3NhZ2UtaGVhZGluZyB7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4IDEwcHggMTVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmZhNTtcclxuICB6LWluZGV4OiAxMDAxO1xyXG59XHJcblxyXG4ubmV3TWVzc2FnZS1tYWluIHtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHggMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmV3TWVzc2FnZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMTBweCA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubmV3TWVzc2FnZS1iYWNrIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIHBhZGRpbmc6IDEycHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uZXdNZXNzYWdlLWJhY2sgaSB7XHJcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21wb3NlQm94IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tcG9zZUJveC1pbm5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG59XHJcblxyXG4uY29tcG9zZUJveC1pbm5lciBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbXBvc2Utc2lkZUJhciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTYwcHgpO1xyXG59XHJcblxyXG4vKkNvbnZlcnNhdGlvbiovXHJcblxyXG4uY29udmVyc2F0aW9uIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qd2lkdGg6IDEwMCU7Ki9cclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA4KTtcclxuICAvKm92ZXJmbG93LXk6IGF1dG87Ki9cclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcclxufVxyXG4ubWVzc2FnZS1wcmV2aW91cyB7XHJcbiAgbWFyZ2luIDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByZXZpb3VzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmV2aW91cyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm9keSB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1lc3NhZ2UtbWFpbi1yZWNlaXZlciB7XHJcbiAgLypwYWRkaW5nOiAxMHB4IDIwcHg7Ki9cclxuICBtYXgtd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLm1lc3NhZ2UtbWFpbi1zZW5kZXIge1xyXG4gIHBhZGRpbmc6IDNweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogNjAlO1xyXG59XHJcblxyXG4ubWVzc2FnZS10ZXh0IHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZS10aW1lIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzlhOWE5YTtcclxuXHJcbn1cclxuXHJcbi5yZWNlaXZlciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA0cHggMTBweCA3cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNlbmRlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2RjZjhjNjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAxMHB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4IDdweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4vKlJlcGx5Ki9cclxuXHJcbi5yZXBseSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWYxZWU7XHJcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ucmVwbHktZW1vamlzIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcGx5LWVtb2ppcyBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5MzkxOGY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVwbHktcmVjb3JkaW5nIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcGx5LXJlY29yZGluZyBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5MzkxOGY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVwbHktc2VuZCB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBseS1zZW5kIGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzkzOTE4ZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXBseS1tYWluIHtcclxuICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXBseS1tYWluIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWluZGVudDogNXB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlcGx5LW1haW4gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtaW5kZW50OiA1cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAuYXBwIHtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmhlYWRpbmcge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICB9XHJcbiAgLmZhLTJ4IHtcclxuICAgIGZvbnQtc2l6ZTogMi4zZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhlYWRpbmctYXZhdGFyIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhlYWRpbmctYXZhdGFyLWljb24gaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICAuaGVhZGluZy1jb21wb3NlIHtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaGVhZGluZy1jb21wb3NlIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5oZWFkaW5nLWRvdCB7XHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5oZWFkaW5nLWRvdCBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuc2lkZUJhciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzMHB4KTtcclxuICB9XHJcbiAgLnNpZGVCYXItYm9keSB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5zaWRlQmFyLWF2YXRhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMCA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmF2YXRhci1pY29uIGltZyB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICB9XHJcbiAgLnNpZGVCYXItbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlQmFyLW1haW4gLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZGVCYXItbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmFtZS1tZXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWRlQmFyLXRpbWUge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGltZS1tZXRhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNCUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcbiAgLypDb252ZXJzYXRpb24qL1xyXG4gIC5jb252ZXJzYXRpb24ge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKndpZHRoOiAxMDAlOyovXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA4KTtcclxuICAgIC8qb3ZlcmZsb3cteTogYXV0bzsqL1xyXG4gIH1cclxuICAubWVzc2FnZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICB9XHJcbiAgLnJlcGx5IHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcbiAgLnJlcGx5LWVtb2ppcyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVwbHktZW1vamlzIGkge1xyXG4gICAgcGFkZGluZzogNXB4IDJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVwbHktbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yZXBseS1tYWluIHRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAucmVwbHktcmVjb3JkaW5nIHtcclxuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yZXBseS1yZWNvcmRpbmcgaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVwbHktc2VuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmVwbHktc2VuZCBpIHtcclxuICAgIHBhZGRpbmc6IDVweCAycHggNXB4IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXNzZWFnZXN7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainChatRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-chat-room',
                templateUrl: './main-chat-room.component.html',
                styleUrls: ['./main-chat-room.component.css'],
            }]
    }], function () { return [{ type: src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _servises_massages_service__WEBPACK_IMPORTED_MODULE_4__["MassagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent, LogInGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInGuardService", function() { return LogInGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servises/users.service */ "./src/app/servises/users.service.ts");
/* harmony import */ var src_app_servises_massages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servises/massages.service */ "./src/app/servises/massages.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function SignInComponent_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05D7\u05D5\u05E7\u05D9\u05EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_span_11_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_span_11_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("email").errors.email);
} }
function SignInComponent_span_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC\u05EA 4 \u05EA\u05D5\u05D5\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_span_14_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_span_14_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("password").errors.minlength);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class SignInComponent {
    constructor(fb, fs, UsersSVC, MassagesSVC) {
        this.fb = fb;
        this.fs = fs;
        this.UsersSVC = UsersSVC;
        this.MassagesSVC = MassagesSVC;
        this.userIsInList = false;
    }
    ngOnInit() {
        this.userArr$ = this.UsersSVC.users2$;
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
        });
    }
    onSubmit() {
        this.userArr$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].email == this.registerForm.value.email &&
                    res[i].password == this.registerForm.value.password) {
                    this.userIsInList = true;
                    this.UsersSVC.userInList = true;
                    this.MassagesSVC.userId = res[i].id;
                    this.MassagesSVC.name = res[i].name;
                }
            }
        })).subscribe();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servises_massages_service__WEBPACK_IMPORTED_MODULE_5__["MassagesService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 25, vars: 10, consts: [[1, "container"], [1, "first-line"], [1, "form-container"], ["action", "", 2, "width", "40%", 3, "formGroup", "ngSubmit"], [1, "email", 2, "margin-bottom", "10px"], ["id", "inputs2", "formControlName", "email", "type", "text", "placeholder", "you@example.com", 3, "ngClass"], [4, "ngIf"], [1, "password", 2, "margin-bottom", "10px"], ["id", "inputs3", "formControlName", "password", "type", "password", "placeholder", "password", 1, "b", 3, "ngClass"], ["routerLink", "/app-main-chat-room", "type", "submit", "mat-raised-button", "", "color", "primary", 2, "background-color", "#007a5a", "width", "270px", 3, "disabled", "click"], [1, "link-to-sign-up"], ["routerLink", "/log-in"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign in to Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your Slack With Email & Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignInComponent_span_11_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignInComponent_span_14_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dont Have Acount ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click Here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.registerForm.get("email").errors && ctx.registerForm.get("email").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").errors && ctx.registerForm.get("email").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.registerForm.get("password").errors && ctx.registerForm.get("password").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").errors && ctx.registerForm.get("password").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\r\n  border: rgb(229, 226, 226) solid 1px;\r\n  width: 770px;\r\n  height: 420px;\r\n  margin-top: 3%;\r\n  margin-left: 28%;\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 1px 1px 2px rgb(229, 226, 226);\r\n  border-radius: 5px;\r\n}\r\n.form-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: 33%;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  height: 30px;\r\n}\r\n.link-to-sign-up[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiByZ2IoMjI5LCAyMjYsIDIyNikgc29saWQgMXB4O1xyXG4gIHdpZHRoOiA3NzBweDtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigyMjksIDIyNiwgMjI2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcclxufVxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4ubGluay10by1zaWduLXVwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: src_app_servises_massages_service__WEBPACK_IMPORTED_MODULE_5__["MassagesService"] }]; }, null); })();
class LogInGuardService {
    constructor(router, userSVC) {
        this.router = router;
        this.userSVC = userSVC;
    }
    canActivate() {
        console.log('out', this.userSVC.userInList);
        if (this.userSVC.userInList) {
            console.log('in', this.userSVC.userInList);
            return true;
        }
        else {
            alert("You Entered Worng UserName Or Password\n Try Agian Plaese");
            return false;
        }
    }
}
LogInGuardService.ɵfac = function LogInGuardService_Factory(t) { return new (t || LogInGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"])); };
LogInGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogInGuardService, factory: LogInGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: src_app_servises_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/module-matriel/module-matriel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-matriel/module-matriel.module.ts ***!
  \*********************************************************/
/*! exports provided: ModuleMatrialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleMatrialModule", function() { return ModuleMatrialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");












































class ModuleMatrialModule {
}
ModuleMatrialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModuleMatrialModule });
ModuleMatrialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModuleMatrialModule_Factory(t) { return new (t || ModuleMatrialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModuleMatrialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleMatrialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/servises/massages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servises/massages.service.ts ***!
  \**********************************************/
/*! exports provided: MassagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassagesService", function() { return MassagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class MassagesService {
    constructor() {
        this.massageArr = [];
        this.massages$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.massageArr);
        this.userId = 0;
        this.clinetId = 0;
        this.name = '';
    }
    addUser(user) {
        this.massageArr.push(user);
        this.massages$.next(this.massageArr);
    }
    getList() {
        return this.massages$.asObservable();
    }
}
MassagesService.ɵfac = function MassagesService_Factory(t) { return new (t || MassagesService)(); };
MassagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MassagesService, factory: MassagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MassagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servises/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servises/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class UsersService {
    constructor(fs) {
        this.fs = fs;
        this.usersArr = [];
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.usersArr);
        this.users2$ = this.fs.collection('users').valueChanges();
        this.userInList = false;
    }
    addUser(user) {
        this.usersArr.push(user);
        this.users$.next(this.usersArr);
    }
    getList() {
        return this.users$.asObservable();
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyB-1ABCPo0DxL0REifuXJZp74QR--duFw4',
        authDomain: 'slack-chat-9dc63.firebaseapp.com',
        databaseURL: 'https://slack-chat-9dc63.firebaseio.com',
        projectId: 'slack-chat-9dc63',
        storageBucket: 'slack-chat-9dc63.appspot.com',
        messagingSenderId: '1024551909210',
        appId: '1:1024551909210:web:c1ddf36ec9fb5eac42a563',
        measurementId: 'G-6EHVPXDJL8',
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asher\Desktop\slack-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map