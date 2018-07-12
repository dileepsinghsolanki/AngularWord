webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet> \n\n<div>\n  <toaster-container [toasterconfig]=\"config1\"></toaster-container>\n</div>\n<div>\n  <!-- <app-cockpit *ngFor=\"let data of datas\"\n    [list]=\"data\"\n    [userName]=\"name\">\n  </app-cockpit> -->\n</div>  \n<!-- <app-footer></app-footer>  -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.datas = [
            { name: 'Mr. IQ' },
            { name: 'Magneta' },
            { name: 'Bombasto' }
        ];
        this.name = 'COMING FROM PARENT';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/esm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/ngx-pipes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_file__ = __webpack_require__("../../../../angular-file/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular_file__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_rainbow_directive__ = __webpack_require__("../../../../../src/app/shared/rainbow.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__parent_parent_component__ = __webpack_require__("../../../../../src/app/parent/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__child_child_component__ = __webpack_require__("../../../../../src/app/child/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__filter_orderby_pipe__ = __webpack_require__("../../../../../src/app/filter/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_demo_service__ = __webpack_require__("../../../../../src/app/services/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__cockpit_cockpit_component__ = __webpack_require__("../../../../../src/app/cockpit/cockpit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__server_elemnet_server_elemnet_component__ = __webpack_require__("../../../../../src/app/server-elemnet/server-elemnet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__directory_directory_component__ = __webpack_require__("../../../../../src/app/directory/directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_directory_service__ = __webpack_require__("../../../../../src/app/services/directory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_auth_interceptor__ = __webpack_require__("../../../../../src/app/services/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__upload_image_upload_image_component__ = __webpack_require__("../../../../../src/app/upload-image/upload-image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { OrderModule } from 'ngx-order-pipe'; // Angular 4+


//import {HttpInterceptor} from "./shared/http-interceptor";

















//import { CategoryPipe } from './filter/category.pipe';












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */] },
    { path: 'userDetail/:id/:name', component: __WEBPACK_IMPORTED_MODULE_22__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'parent', component: __WEBPACK_IMPORTED_MODULE_23__parent_parent_component__["a" /* ParentComponent */] },
    { path: 'child', component: __WEBPACK_IMPORTED_MODULE_24__child_child_component__["a" /* ChildComponent */] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_27__category_category_component__["a" /* CategoryComponent */] },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_34__server_elemnet_server_elemnet_component__["a" /* ServerElemnetComponent */] },
    { path: 'output', component: __WEBPACK_IMPORTED_MODULE_33__cockpit_cockpit_component__["a" /* CockpitComponent */] },
    { path: 'pagination', component: __WEBPACK_IMPORTED_MODULE_35__pagination_pagination_component__["a" /* PaginationComponent */] },
    { path: 'directory', component: __WEBPACK_IMPORTED_MODULE_36__directory_directory_component__["a" /* DirectoryComponent */] },
    { path: 'uploadImage', component: __WEBPACK_IMPORTED_MODULE_39__upload_image_upload_image_component__["a" /* UploadImageComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__shared_dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_21__shared_rainbow_directive__["a" /* RainbowDirective */],
                __WEBPACK_IMPORTED_MODULE_22__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__parent_parent_component__["a" /* ParentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__child_child_component__["a" /* ChildComponent */],
                __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__category_category_component__["a" /* CategoryComponent */],
                // CategoryPipe,
                __WEBPACK_IMPORTED_MODULE_28__filter_orderby_pipe__["a" /* OrderrByPipe */],
                __WEBPACK_IMPORTED_MODULE_33__cockpit_cockpit_component__["a" /* CockpitComponent */],
                __WEBPACK_IMPORTED_MODULE_34__server_elemnet_server_elemnet_component__["a" /* ServerElemnetComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_36__directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_39__upload_image_upload_image_component__["a" /* UploadImageComponent */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__["FileSelectDirective"],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pipes__["a" /* NgPipesModule */],
                //OrderModule, // Angular 4+
                __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_search_filter__["Ng2SearchPipeModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                    confirmButtonType: 'danger' // set defaults here
                }),
                __WEBPACK_IMPORTED_MODULE_14_angular_file__["ngfModule"],
                __WEBPACK_IMPORTED_MODULE_17_ngx_image_cropper__["a" /* ImageCropperModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_29__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_30__services_people_service__["a" /* PeopleService */], __WEBPACK_IMPORTED_MODULE_32__services_pager_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_31__services_demo_service__["a" /* DemoService */], __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_37__services_directory_service__["a" /* DirectoryService */], { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_38__services_auth_interceptor__["a" /* AuthInterceptor */], multi: true }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div><h3>Filter and Sorting</h3></div>\n<div class=\"row\">\n<div class=\"form-group\">\n  <div class=\"col-md-6\" >\n    <input type=\"text\" [(ngModel)]=\"searchText\" \n           class=\"form-control\" placeholder=\"Search By Category\" />\n  </div>\n</div>\n  <div class=\"col-md-12\" style=\"margin-top:12px\">\n    <table class=\"table table-responsive table-hover\">\n      <tr>\n        <th class=\"pointer\" (click)=\"sort('CategoryID')\"> Category ID <i class=\"fa\" \n          [ngClass]=\"{'fa-sort': column != 'CategoryID', 'fa-sort-asc': (column == 'CategoryID' && !isDesc), 'fa-sort-desc': (column == 'CategoryID' && isDesc) }\"\n          aria-hidden=\"true\"> </i></th>\n        <th class=\"pointer\" (click)=\"sort('CategoryName')\"> Category <i class=\"fa\" \n          [ngClass]=\"{'fa-sort': column != 'CategoryName', 'fa-sort-asc': (column == 'CategoryName' && !isDesc), 'fa-sort-desc': (column == 'CategoryName' && isDesc) }\"\n          aria-hidden=\"true\"> </i></th>\n        <th class=\"pointer\" (click)=\"sort('Description')\" >Description <i class=\"fa\" \n          [ngClass]=\"{'fa-sort': column != 'Description', 'fa-sort-asc': (column == 'Description' && !isDesc),'fa-sort-desc': (column == 'Description' && isDesc) }\"\n          aria-hidden=\"true\"> </i></th>\n      </tr>\n      <tr *ngFor=\"let item of records | filter: searchText | orderBy: {property: column, direction: direction}\">\n      <!-- <tr *ngFor=\"let item of records | category: searchText | orderBy: order\">  Order by plugin -->\n        <td>{{item.CategoryID}}</td>\n        <td>{{item.CategoryName}}</td>\n        <td>{{item.Description}}</td>\n      </tr>\n    </table>\n  </div>\n </div> "

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = (function () {
    function CategoryComponent() {
        this.isDesc = false;
        this.column = 'CategoryName';
        /* End Sorting */
        this.order = 'CategoryName';
    }
    // Change sort function to this: 
    CategoryComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.records = [
            { CategoryID: 1, CategoryName: "Beverages", Description: "Coffees, teas" },
            { CategoryID: 2, CategoryName: "Condiments", Description: "Sweet and savory sauces" },
            { CategoryID: 3, CategoryName: "Confections", Description: "Desserts and candies" },
            { CategoryID: 4, CategoryName: "Cheeses", Description: "Smetana, Quark and Cheddar Cheese" },
            { CategoryID: 5, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
            { CategoryID: 6, CategoryName: "Beverages", Description: "Beers, and ales" },
            { CategoryID: 7, CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
            { CategoryID: 8, CategoryName: "Confections", Description: "Sweet breads" },
            { CategoryID: 9, CategoryName: "Cheeses", Description: "Cheese Burger" },
            { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
        ];
        this.sort(this.column); // Sorting
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category/category.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/child/child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/child/child.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">  \n      <input type=\"text\" #serverName>\n      <button class=\"btn btn-primary\" (click)=\"onAddServer(serverName.value)\">Add Server</button>\n      <br><br>\n      <button class=\"btn btn-primary\" (click)=\"onSave()\">Save Servers</button>\n      <button class=\"btn btn-primary\" (click)=\"onGet()\">Get Servers</button>\n      <hr>\n      <ul class=\"list-group\" *ngFor=\"let server of servers\">\n        <li class=\"list-group-item\">{{ server.name }} (ID: {{ server.id }})</li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<ul>\n  <li> <input type=\"checkbox\" [(ngModel)]=\"selectedAll\" (change)=\"selectAll();\"/>\n  </li>\n  <li *ngFor=\"let n of names\"> \n  <input type=\"checkbox\" [(ngModel)]=\"n.selected\" (change)=\"checkIfAllSelected();\">\n  {{n.name}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/child/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildComponent = (function () {
    function ChildComponent(peopleService) {
        this.peopleService = peopleService;
        this.appName = this.peopleService.getAppName();
        this.servers = [
            {
                name: 'Testserver',
                capacity: 10,
                id: this.generateId()
            },
            {
                name: 'Liveserver',
                capacity: 100,
                id: this.generateId()
            }
        ];
        this.names = [
            { name: 'Prashobh', selected: false },
            { name: 'Abraham', selected: false },
            { name: 'Anil', selected: false },
            { name: 'Sam', selected: false },
            { name: 'Natasha', selected: false },
            { name: 'Marry', selected: false },
            { name: 'Zian', selected: false },
            { name: 'karan', selected: false },
        ];
    }
    ChildComponent.prototype.ngOnInit = function () { };
    ChildComponent.prototype.onAddServer = function (name) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    };
    ChildComponent.prototype.onSave = function () {
        this.peopleService.storeServers(this.servers)
            .subscribe(function (response) { return console.log("response", response); }, function (error) { return console.log("error", error); });
    };
    ChildComponent.prototype.onGet = function () {
        var _this = this;
        this.peopleService.getServers()
            .subscribe(function (servers) { return _this.servers = servers; }, function (error) { return console.log(error); });
    };
    ChildComponent.prototype.generateId = function () {
        return Math.round(Math.random() * 10000);
    };
    /* Chk Box */
    ChildComponent.prototype.selectAll = function () {
        for (var i = 0; i < this.names.length; i++) {
            this.names[i].selected = this.selectedAll;
        }
    };
    ChildComponent.prototype.checkIfAllSelected = function () {
        this.selectedAll = this.names.every(function (item) {
            console.log("item", item);
            return item.selected == true;
        });
    };
    ChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child',
            template: __webpack_require__("../../../../../src/app/child/child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/child/child.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_people_service__["a" /* PeopleService */]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cockpit/cockpit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cockpit/cockpit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cockpit *ngFor=\"let data of datas\"\n    [list]=\"data\"\n    [userName]=\"name\">\n</app-cockpit>\n{{list | json}}"

/***/ }),

/***/ "../../../../../src/app/cockpit/cockpit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CockpitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CockpitComponent = (function () {
    function CockpitComponent() {
    }
    CockpitComponent.prototype.ngOnInit = function () {
        console.log(this.list);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CockpitComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('userName'),
        __metadata("design:type", String)
    ], CockpitComponent.prototype, "masterName", void 0);
    CockpitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cockpit',
            template: __webpack_require__("../../../../../src/app/cockpit/cockpit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cockpit/cockpit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CockpitComponent);
    return CockpitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directory/directory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#mat-autocomplete-0 {\r\n    visibility: visible;\r\n    background: blue!important;\r\n    z-index: 999999!important;\r\n    position: fixed!important;\r\n}\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/directory/directory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"openAddDirModal(content)\"> Add User </button>        \n        <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">First Name</th>\n                <th scope=\"col\">Last Name</th>                \n                <th scope=\"col\">Category</th>\n                <th scope=\"col\">Operations</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let dirData of dirUserData; index as i\">\n                <th scope=\"row\">{{i+1}}</th>\n                <td>{{dirData.email}}</td>\n                <td>{{dirData.firstName}}</td>\n                <td>{{dirData.lastName}}</td>\n                <td>{{dirData.businessCategory}}</td>\n                <td>\n                  <button class=\"btn btn-primary\" (click)=\"editCustomExcelData(dirData);openAddDirModal(content)\" >UPDATE</button>\n                  <button\n      class=\"btn btn-default\"\n      mwlConfirmationPopover\n      [popoverTitle]=\"popoverTitle\"\n      [popoverMessage]=\"popoverMessage\"\n      placement=\"left\"\n      (confirm)=\"confirmClicked = deleteUser(dirData.id)\"\n      (cancel)=\"cancelClicked = true\">\n      Click me!\n    </button></td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n  </div>\n</div>  \n<!-- Add Directory User -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Add Directory</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <form  class=\"form-horizontal\" name=\"addDirectoryForm\"  class=\"example-form\">\n\n            <div class=\"form-group\">               \n                <div class=\"col-md-9\">\n                  <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"directory.email\" required>\n                  <span class=\"help-block\" style=\"color:red\">Please Enter a valid email</span>\n                </div>\n            </div>\n\n            <div class=\"form-group\">            \n              <div class=\"col-md-9\">\n                <input type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\" [(ngModel)]=\"directory.firstName\" required>\n              </div>\n            </div>\n\n            <div class=\"form-group\">    \n              <div class=\"col-md-9\">\n                <input type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\" [(ngModel)]=\"directory.lastName\" required>\n              </div>\n            </div>\n\n            <div class=\"form-group\">    \n              <div class=\"col-md-9\">\n                <input type=\"text\" class=\"form-control\" name=\"companyname\" placeholder=\"Company Name\" [(ngModel)]=\"directory.companyName\" required>\n              </div>\n            </div>\n\n            <div class=\"form-group\">    \n                <div class=\"col-md-9\">\n                  \n        <mat-form-field class=\"example-full-width\">\n          <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" [(ngModel)]=\"directory.businessCategory\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.subCategory\"  (onSelect)=\"onOptionSelect(option)\">\n              {{ option.subCategory }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n                    \n                  <!-- <input type=\"text\" class=\"form-control\" name=\"category\" placeholder=\"Category\"  required> -->\n                </div>\n            </div>\n\n            <div class=\"form-group\">    \n                <div class=\"col-md-9\">\n                  <input type=\"text\" class=\"form-control\" name=\"groupName\" placeholder=\"Group Name\" [(ngModel)]=\"directory.groupName\" required>\n                </div>\n            </div>\n\n            <div class=\"form-group\">    \n                <div class=\"col-md-9\">\n                    <textarea id=\"message\"  class=\"form-control\" name=\"address\" placeholder=\"Message\" [(ngModel)]=\"directory.address\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-md-offset-3 col-md-9\" *ngIf = \"!editProfile\">\n                <button  id=\"btn-signup\" type=\"button\" class=\"btn btn-info\"  (click)=\"addCustomExcel(directory)\">\n                  <i class=\"icon-hand-right\"></i> Confirm </button>\n              </div>\n              <div class=\"col-md-offset-3 col-md-9\" *ngIf = \"editProfile\">\n                  <button id=\"btn-signup\" type=\"button\" class=\"btn btn-info\"  (click)=\"updateCustomExcelData(directory)\">\n                    <i class=\"icon-hand-right\"></i> Update </button>\n                </div>\n            </div>\n          </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/directory/directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_directory_service__ = __webpack_require__("../../../../../src/app/services/directory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as $ from 'jquery'; 



var DirectoryComponent = (function () {
    function DirectoryComponent(dirService, modalService, cookieService) {
        this.dirService = dirService;
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        this.popoverTitle = 'Delete confirmation';
        this.popoverMessage = 'Are you sure you want to delete the contact?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.dirUserData = [];
        this.dataDirectory = {};
        this.directory = {};
        this.customData = {};
        this.excelCustomRecord = {};
        this.excelDataArray = [];
        this.directoryRequests = [];
        this.options = [
            'One',
            'Two',
            'Three'
        ];
        /** Start autocomplete search from here ***/
        this.businessCategory = [];
        this.updateCustomExcelData = function (directory) {
            this.dirService.updateCustomExcelData(directory).subscribe(function (Response) {
                if (Response.statusCode === 200) {
                    alert("Data Upadted successfull");
                    console.log("bbbb");
                }
            }, function (err) {
                alert("error occured");
            });
        };
        this.deleteUser = function (did) {
            var _this = this;
            this.dirService.deleteUser(did).subscribe(function (response) {
                if (response.statusCode === 200) {
                    alert("Deletes successfully");
                    _this.getDirectoryUser();
                }
            }, function (err) {
                alert("error Occured");
            });
        };
        this.editProfile = false;
        this.formHeader = "Add Directory";
        this.dataDirectory = {
            "clientUserId": 5414029078036480,
            "pageNumber": 1,
            "pageSize": 10,
        };
    }
    DirectoryComponent.prototype.getDirectoryUser = function () {
        var _this = this;
        this.dirService.getDirectoryUser(this.dataDirectory).
            subscribe(function (resultArray) {
            var list = resultArray['list'];
            _this.dirUserData = list;
        }, function (err) {
            console.log("Error occured");
        });
    };
    DirectoryComponent.prototype.addCustomExcel = function (directory) {
        var _this = this;
        this.customData = {
            "email": this.directory['email'],
            "firstName": this.directory['firstName'],
            "lastName": this.directory['lastName'],
            "businessCategory": this.directory['businessCategory'],
            "address": this.directory['address'],
            "companyName": "",
            "groupName": this.directory['groupName'],
            "mobile": ""
        };
        this.excelDataArray.push(this.customData);
        this.excelCustomRecord['clientUserId'] = 5414029078036480;
        this.excelCustomRecord['directoryRequests'] = this.excelDataArray;
        this.dirService.addCustomExcel(this.excelCustomRecord).
            subscribe(function (resultArray) {
            if (resultArray['statusCode'] === 201) {
                _this.directory = '';
                alert("Data Added successfully");
                _this.getDirectoryUser();
            }
        }, function (err) {
            console.log("Error Occured");
        });
    };
    DirectoryComponent.prototype.getOtherCategory = function () {
        var _this = this;
        var URL = "http://103.76.253.133:8752/api/v1/user/category/6421608541454336";
        this.dirService.getEventTemplate(URL).subscribe(function (response) {
            _this.businessCategory = response['list'];
            console.log("businessCategory", _this.businessCategory);
        });
    };
    DirectoryComponent.prototype.filter = function (val) {
        console.log("val", val);
        return this.businessCategory.filter(function (option) {
            return option.subCategory.indexOf(val) === 0;
        });
    };
    DirectoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDirectoryUser();
        this.getOtherCategory();
        // $('button').click(function(){ //console.log("Jquery Is working") // })
        console.log("this.myControl.valueChanges", this.myControl.valueChanges);
        this.filteredOptions = this.myControl.valueChanges.map(function (val) { return _this.filter(val); });
        // .pipe(
        //   startWith(''),
        //   map(val => this.filter(val))
        // );
    };
    DirectoryComponent.prototype.onOptionSelect = function (val) {
        console.log("val=", val);
    };
    DirectoryComponent.prototype.openAddDirModal = function (content) {
        var _this = this;
        console.log("content", content);
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log("this.closeResult", _this.closeResult);
        });
    };
    DirectoryComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    DirectoryComponent.prototype.editCustomExcelData = function (directory) {
        console.log("directory", directory);
        this.formHeader = "Update Directory";
        this.editProfile = true;
        console.log("editCustomExcelData", directory);
        this.directory = directory;
    };
    DirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-directory',
            template: __webpack_require__("../../../../../src/app/directory/directory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/directory/directory.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_directory_service__["a" /* DirectoryService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], DirectoryComponent);
    return DirectoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderrByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderrByPipe = (function () {
    function OrderrByPipe() {
    }
    OrderrByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    OrderrByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy' })
    ], OrderrByPipe);
    return OrderrByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer {\r\n    position:absolute;\r\n    bottom:0;\r\n    width:100%;\r\n    height:60px;   /* Height of the footer */\r\n    background:#d9edf7;\r\n    text-align: center;\r\n    padding: 36px;\r\n    font-size: 16px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p id=\"footer\">\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default {\r\n    background-color: #d9edf7;\r\n}\r\n.navbar-nav{\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n        -ms-flex-direction: row !important;\r\n            flex-direction: row !important;\r\n}\r\n\r\nul li{\r\n    padding-left: 15px;\r\n}\r\n.active{\r\n    background-color: #f1d7d7;\r\n    padding: 0 20px;\r\n    margin: 0 10px;\r\n    color: blue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div>\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\" style=\"color:black\">Angular4 App</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><a [routerLink] = \"['/']\">Home</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/userDetail/0007/DIleep']\">User Deatil</a></li>  \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/parent']\">Parent</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/child']\">Child</a></li>   \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/category']\">Category</a></li>  \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/input']\">Input</a></li>   \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/output']\">Output</a></li> \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/pagination']\">Pagination</a></li>      \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/directory']\">Directory</a></li> \n          <li routerLinkActive=\"active\"><a [routerLink] = \"['/uploadImage']\">Upload Image</a></li>\n          <li style=\"cursor: pointer\" (click)=\"logout()\">Logout</li> \n    </ul>    \n    <!-- <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\" appDropdown>\n        <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu appDropdown\">\n          <li><a href=\"#\">Page1</a></li>\n          <li><a href=\"#\">Page2</a></li>\n          <li><a href=\"#\">Logout</a></li>\n        </ul>\n      </li>\n    </ul> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(userService, cookieService, router) {
        this.userService = userService;
        this.cookieService = cookieService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (response) {
            if (response['statusCode'] === 200) {
                _this.cookieService.deleteAll();
                alert("Logout Successfully");
                _this.router.navigate(['/']);
            }
        }, function (err) {
            console.log("error ocured");
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"container\"> \n      <div *ngIf=\"!signUP\" id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-title\">Sign In</div>\n            <div style=\"float:right; font-size: 80%; position: relative; top:-10px\">\n            <a style=\"cursor:pointer\" (click)=\"signUpPage()\">\n              SignUp\n            </a>\n            </div>\n          </div>\n\n          <div style=\"padding-top:30px\" class=\"panel-body\">\n            <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n            <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n\n              <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-user\"></i>\n                </span>\n                <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username or email\" [(ngModel)]=\"model.name\">\n              </div>\n\n              <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-lock\"></i>\n                </span>\n                <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\">\n              </div>\n\n              <div class=\"input-group\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n                  </label>\n                </div>\n              </div>\n\n              <div style=\"margin-top:10px\" class=\"form-group\">\n                <div class=\"col-sm-12 controls\">\n                  <a id=\"btn-login\" class=\"btn btn-success\" (click)=\"login(model)\">Login </a>\n                  <a id=\"btn-fblogin\" href=\"#\" class=\"btn btn-primary\" (click()=\"fbLogin()\">Login with Facebook</a>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div> \n      <div *ngIf=\"signUP\" id=\"signupbox\" style=\"margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-title\">Sign Up (Reactive From)</div>\n            <div style=\"float:right; font-size: 85%; position: relative; top:-10px\">\n              <a id=\"signinlink\" (click)=\"signInPage()\" style=\"cursor:pointer\">Sign In</a>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n            <form  class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\n                <p>Error:</p>\n                <span></span>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label for=\"firstname\" class=\"col-md-3 control-label\">First Name</label>\n                <div class=\"col-md-9\">\n                  <input type=\"text\" class=\"form-control\" name=\"firstname\" ngModel required>\n                </div>\n              </div>\n \n              <div class=\"form-group\">\n                <label for=\"lastname\" class=\"col-md-3 control-label\">Last Name</label>\n                <div class=\"col-md-9\">\n                  <input type=\"text\" class=\"form-control\" name=\"lastname\" ngModel required lastName #lastName=\"ngModel\">\n                  <span class=\"help-block\" style=\"color:red\"  *ngIf=\"lastName.errors?.required && (lastName.dirty || lastName.touched)\">Please Enter a Last name</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                    <label for=\"icode\" class=\"col-md-3 control-label\">Email</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"email\" class=\"form-control\" name=\"email\" ngModel required email #email=\"ngModel\">\n                      <span class=\"help-block\" style=\"color:red\"  *ngIf=\"!email.valid && email.touched\">Please Enter a valid email</span>\n                    </div>\n                </div>\n\n              <div class=\"form-group\">\n                <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n                <div class=\"col-md-9\">\n                  <input type=\"password\" class=\"form-control\" name=\"passwd\"  ngModel>\n                </div>\n              </div>\n\n               <div class=\"form-group\">\n                    <label for=\"secret\" class=\"col-md-3 control-label\">Question</label>\n                    <div class=\"col-md-9\">\n                    <select  class=\"form-control\" name=\"secret\" [ngModel]=\"defultQuestion\"> \n                      <option value=\"test1\">Your First Test</option>\n                      <option value=\"demoTest222222222222222\">Your Second</option>\n                    </select>\n                    </div>\n                </div>\n\n               <div class=\"form-group\">\n                    <label for=\"message\" class=\"col-md-3 control-label\">Message</label>\n                    <div class=\"col-md-9\">\n                      <textarea id=\"message\"  class=\"form-control\" name=\"message\" [(ngModel)]=\"msg\"></textarea>\n                      <span>Your Message: {{msg}}</span>\n                    </div>                    \n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\">Gender</label>    \n                    <div class=\"col-md-offset-3 radio col-md-9\" *ngFor=\"let gender of genders\">                   \n                        <input type=\"radio\" id=\"gender\" xclass=\"form-control\" name=\"gender\" ngModel [value]=\"gender\">\n                        <span>{{gender}}</span>\n                    </div>                    \n                 </div>\n\n              <div class=\"form-group\">\n                <div class=\"col-md-offset-3 col-md-9\">\n                  <button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\" [disabled]=\"!f.valid\">\n                    <i class=\"icon-hand-right\"></i> Sign Up</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<form [formGroup]=\"heroForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label class=\"center-block\">Name:\n      <input class=\"form-control\" formControlName=\"name\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-md-offset-3 col-md-9\">\n      <button id=\"btn-signup\" type=\"submit\" class=\"btn btn-info\">\n        <i class=\"icon-hand-right\"></i> Sign Up</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, toasterService, userService, cookieService) {
        this.router = router;
        this.userService = userService;
        this.cookieService = cookieService;
        this.defultQuestion = 'test1';
        this.msg = '';
        this.genders = ['Male', 'Female', 'Other'];
        this.signUP = false;
        this.model = {};
        this.Toast = {};
        this.data = {};
        this.getUserDaetil = {};
        this.toasterService = toasterService;
        //  this.signUP = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.heroForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](null)
        });
    };
    LoginComponent.prototype.fbLogin = function () {
        this.cookieService.delete('userDeatil');
    };
    LoginComponent.prototype.signUpPage = function () {
        this.signUP = true;
    };
    LoginComponent.prototype.signInPage = function () {
        this.signUP = false;
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("sssssssssssss", this.heroForm);
    };
    // onSubmit(){
    //   console.log("valllllllllll",this.signUpForm);
    // // this.signUpForm.reset();
    // }
    LoginComponent.prototype.login = function (obj) {
        var _this = this;
        this.userService.loginUser().subscribe(function (resultArray) {
            console.log("resultArray", resultArray);
            if (resultArray['access_token']) {
                alert("Login successfully");
                var authToken = JSON.stringify(resultArray);
                _this.cookieService.set("userDetail", authToken);
                _this.router.navigate(['/directory']);
                return false;
            }
        }, function (err) {
            if (err.error instanceof Error) {
                alert("Client-side error occured.");
                console.log("errerrerrerr", err);
            }
            else {
                console.log("errerrerrerr", err.error.error_description);
                var toast = {
                    type: 'error',
                    title: 'Login',
                    showCloseButton: true,
                    body: err.error.error_description
                };
                _this.toasterService.pop(toast);
                // this.toasterService.pop('error', 'Login', 'Wrong Credential');
                _this.model = '';
                alert("Server-side error occured.");
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n      <div class=\"text-center\">\n          <h3>Angular 2 - Pagination Example with logic like Google</h3>\n\n          <!-- items being paged -->\n          <div class=\"container\">        \n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Email</th>\n                  <th>City</th>\n                  <th>Age</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of pagedItems\">\n                  <td>{{item.name}}</td>\n                  <td>{{item.email}}</td>\n                  <td>{{item.city}}</td>\n                  <td>{{item.age}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <!-- pager -->\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n              <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a (click)=\"setPage(1)\">First</a>\n              </li>\n              <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                  <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n              </li>\n              <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                  <a (click)=\"setPage(page)\">{{page}}</a>\n              </li>\n              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n              </li>\n              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                  <a (click)=\"setPage(pager.totalPages)\">Last</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n  <hr />\n</div>"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaginationComponent = (function () {
    function PaginationComponent(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
    }
    PaginationComponent.prototype.ngOnInit = function () {
        // get dummy data
        // this.http.get('https://jsonplaceholder.typicode.com/users')
        //     .map((response: Response) => response.json())
        //     .subscribe(data => {
        //         // set items to json response
        //         this.allItems = data;
        //         console.log("dataaaaaaaa", data)
        //         // initialize to page 1
        //         this.setPage(1);
        //     });
        this.allItems = [
            {
                "name": "Wing",
                "email": "tellus.eu.augue@arcu.com",
                "regDate": "2016-01-09T14:48:34-08:00",
                "city": "Paglieta",
                "age": 25
            },
            {
                "name": "Whitney",
                "email": "sed.dictum@Donec.org",
                "regDate": "2017-01-23T20:09:52-08:00",
                "city": "Bear",
                "age": 32
            },
            {
                "name": "Wing",
                "email": "tellus.eu.augue@arcu.com",
                "regDate": "2016-01-09T14:48:34-08:00",
                "city": "Paglieta",
                "age": 25
            },
            {
                "name": "Whitney",
                "email": "sed.dictum@Donec.org",
                "regDate": "2017-01-23T20:09:52-08:00",
                "city": "Bear",
                "age": 32
            },
            {
                "name": "Oliver",
                "email": "mauris@Craslorem.ca",
                "regDate": "2015-11-19T19:11:33-08:00",
                "city": "Bruderheim",
                "age": 31
            },
            {
                "name": "Vladimir",
                "email": "mi.Aliquam@Phasellus.net",
                "regDate": "2015-11-02T07:59:34-08:00",
                "city": "Andenne",
                "age": 50
            },
            {
                "name": "Maggy",
                "email": "ligula@acorciUt.edu",
                "regDate": "2017-02-25T15:42:17-08:00",
                "city": "HomprŽ",
                "age": 24
            },
            {
                "name": "Unity",
                "email": "Nunc.commodo@justo.org",
                "regDate": "2016-03-07T03:47:55-08:00",
                "city": "Ried im Innkreis",
                "age": 23
            },
            {
                "name": "Ralph",
                "email": "augue@penatibuset.net",
                "regDate": "2017-02-27T20:03:50-08:00",
                "city": "Cwmbran",
                "age": 45
            },
            {
                "name": "Medge",
                "email": "sagittis.augue@taciti.edu",
                "regDate": "2016-03-02T03:59:17-08:00",
                "city": "Maranguape",
                "age": 21
            },
            {
                "name": "Orli",
                "email": "nascetur@mipedenonummy.edu",
                "regDate": "2016-11-07T20:48:43-08:00",
                "city": "Gibbons",
                "age": 38
            },
            {
                "name": "Ainsley",
                "email": "morbi.tristique.senectus@enim.ca",
                "regDate": "2016-02-11T22:14:36-08:00",
                "city": "Guardia Perticara",
                "age": 43
            },
            {
                "name": "Candice",
                "email": "turpis.non.enim@fringillami.com",
                "regDate": "2015-04-23T12:29:39-07:00",
                "city": "Aylmer",
                "age": 25
            },
            {
                "name": "Alexis",
                "email": "lacinia.orci.consectetuer@dolorFuscefeugiat.ca",
                "regDate": "2016-08-18T12:06:56-07:00",
                "city": "Halkirk",
                "age": 35
            },
            {
                "name": "Diana",
                "email": "pede.Cras@a.edu",
                "regDate": "2016-12-24T00:53:04-08:00",
                "city": "Palermo",
                "age": 31
            },
            {
                "name": "Tyrone",
                "email": "ornare.In@duilectus.co.uk",
                "regDate": "2015-03-31T11:45:57-07:00",
                "city": "Bellevue",
                "age": 36
            },
            {
                "name": "Brennan",
                "email": "scelerisque.lorem@enim.net",
                "regDate": "2016-09-07T16:12:31-07:00",
                "city": "Oxford County",
                "age": 38
            },
            {
                "name": "Lillith",
                "email": "non@lectus.edu",
                "regDate": "2016-08-01T12:45:06-07:00",
                "city": "Lillois-WitterzŽe",
                "age": 25
            },
            {
                "name": "Wayne",
                "email": "at.egestas.a@Pellentesque.edu",
                "regDate": "2016-02-23T10:20:18-08:00",
                "city": "Baie-Saint-Paul",
                "age": 32
            },
            {
                "name": "Vielka",
                "email": "Nam.porttitor@Uttincidunt.ca",
                "regDate": "2016-07-18T19:26:59-07:00",
                "city": "Rodgau",
                "age": 21
            },
            {
                "name": "Armando",
                "email": "Aliquam@orciin.net",
                "regDate": "2016-12-07T17:31:26-08:00",
                "city": "Khanewal",
                "age": 30
            },
            {
                "name": "Justin",
                "email": "gravida.non.sollicitudin@placerataugue.edu",
                "regDate": "2016-09-23T20:17:41-07:00",
                "city": "İslahiye",
                "age": 20
            },
            {
                "name": "Zorita",
                "email": "enim@risus.org",
                "regDate": "2015-06-14T12:12:00-07:00",
                "city": "Burdinne",
                "age": 20
            },
            {
                "name": "Mariam",
                "email": "purus.mauris.a@odiosagittis.ca",
                "regDate": "2016-10-14T18:52:48-07:00",
                "city": "Bharatpur",
                "age": 22
            },
            {
                "name": "Malik",
                "email": "Nam@enimEtiam.org",
                "regDate": "2016-09-20T18:06:55-07:00",
                "city": "Neerheylissem",
                "age": 28
            },
            {
                "name": "Claire",
                "email": "sapien@Nullamlobortis.ca",
                "regDate": "2016-12-29T09:49:13-08:00",
                "city": "San Fratello",
                "age": 24
            },
            {
                "name": "Hilel",
                "email": "tempor@purusmaurisa.edu",
                "regDate": "2016-07-09T12:03:31-07:00",
                "city": "La Cruz",
                "age": 30
            },
            {
                "name": "Alea",
                "email": "vulputate@orciUt.ca",
                "regDate": "2015-03-21T02:28:40-07:00",
                "city": "Leominster",
                "age": 43
            },
            {
                "name": "Nash",
                "email": "Nunc.ullamcorper.velit@egetmetuseu.edu",
                "regDate": "2016-10-21T10:38:41-07:00",
                "city": "Gravataí",
                "age": 20
            },
            {
                "name": "Brennan",
                "email": "Vestibulum@Sedpharetra.org",
                "regDate": "2016-06-06T22:37:33-07:00",
                "city": "Carleton",
                "age": 31
            },
            {
                "name": "Diana",
                "email": "Cras.vulputate@erosturpisnon.edu",
                "regDate": "2016-09-07T18:40:26-07:00",
                "city": "Ripabottoni",
                "age": 36
            },
            {
                "name": "Farrah",
                "email": "dignissim.tempor.arcu@gravidamaurisut.edu",
                "regDate": "2016-11-30T23:52:41-08:00",
                "city": "Aguacaliente (San Francisco)",
                "age": 37
            },
            {
                "name": "August",
                "email": "tincidunt.Donec@dictumeleifendnunc.org",
                "regDate": "2016-11-21T05:57:31-08:00",
                "city": "Hameln",
                "age": 21
            },
            {
                "name": "Reese",
                "email": "et.magnis.dis@montesnasceturridiculus.net",
                "regDate": "2015-07-01T14:09:53-07:00",
                "city": "St. Catharines",
                "age": 22
            },
            {
                "name": "Pascale",
                "email": "pede.ultrices@lacinia.com",
                "regDate": "2016-02-18T05:11:43-08:00",
                "city": "Newmarket",
                "age": 50
            },
            {
                "name": "Gage",
                "email": "In.mi.pede@diameu.edu",
                "regDate": "2016-07-31T17:51:58-07:00",
                "city": "Ilhéus",
                "age": 20
            },
            {
                "name": "Nora",
                "email": "Ut.semper.pretium@luctussit.net",
                "regDate": "2016-01-23T17:01:09-08:00",
                "city": "Kirkintilloch",
                "age": 32
            },
            {
                "name": "Jameson",
                "email": "dolor.Fusce.feugiat@tempusnon.ca",
                "regDate": "2016-06-24T08:52:43-07:00",
                "city": "Uikhoven",
                "age": 46
            },
            {
                "name": "Ryder",
                "email": "Vestibulum.accumsan@egetmetus.co.uk",
                "regDate": "2015-08-02T00:01:28-07:00",
                "city": "São Gonçalo",
                "age": 28
            },
            {
                "name": "Lyle",
                "email": "libero.nec.ligula@euaugueporttitor.co.uk",
                "regDate": "2015-11-15T05:40:15-08:00",
                "city": "Vieux-Genappe",
                "age": 29
            },
            {
                "name": "Carly",
                "email": "vitae.sodales@pretium.co.uk",
                "regDate": "2016-01-11T16:09:51-08:00",
                "city": "Spresiano",
                "age": 48
            },
            {
                "name": "Hector",
                "email": "luctus@orci.com",
                "regDate": "2016-12-20T18:58:28-08:00",
                "city": "Jerzu",
                "age": 35
            },
            {
                "name": "Luke",
                "email": "luctus.aliquet.odio@bibendumDonecfelis.edu",
                "regDate": "2016-03-06T03:19:08-08:00",
                "city": "Bothey",
                "age": 45
            },
            {
                "name": "Celeste",
                "email": "et.malesuada.fames@utdolordapibus.org",
                "regDate": "2015-10-04T23:37:46-07:00",
                "city": "Armstrong",
                "age": 42
            },
            {
                "name": "Ila",
                "email": "urna.Nullam@nullaCraseu.ca",
                "regDate": "2015-05-10T09:00:25-07:00",
                "city": "Flint",
                "age": 34
            },
            {
                "name": "Leila",
                "email": "vehicula@orciUtsagittis.net",
                "regDate": "2016-11-13T02:20:11-08:00",
                "city": "Ulloa (Barrial)",
                "age": 35
            },
            {
                "name": "Zahir",
                "email": "eleifend.non.dapibus@auguescelerisque.edu",
                "regDate": "2015-07-13T14:10:16-07:00",
                "city": "Ñuñoa",
                "age": 21
            },
            {
                "name": "Jin",
                "email": "fames.ac.turpis@Namligula.edu",
                "regDate": "2015-06-17T23:31:55-07:00",
                "city": "San Felipe",
                "age": 25
            },
            {
                "name": "Wallace",
                "email": "natoque.penatibus@tortorIntegeraliquam.com",
                "regDate": "2016-11-02T22:00:54-07:00",
                "city": "Rock Springs",
                "age": 39
            },
            {
                "name": "Wallace",
                "email": "nulla.magna.malesuada@cursusNuncmauris.edu",
                "regDate": "2016-01-25T09:13:43-08:00",
                "city": "Copiapó",
                "age": 31
            },
            {
                "name": "Buffy",
                "email": "est@Vestibulumanteipsum.edu",
                "regDate": "2016-10-10T13:54:26-07:00",
                "city": "Sens",
                "age": 48
            },
            {
                "name": "Jin",
                "email": "orci.in@nuncsitamet.org",
                "regDate": "2017-01-23T07:56:18-08:00",
                "city": "Drumheller",
                "age": 44
            },
            {
                "name": "Ethan",
                "email": "ad@enimcommodohendrerit.com",
                "regDate": "2015-07-09T20:16:24-07:00",
                "city": "Ghaziabad",
                "age": 32
            },
            {
                "name": "Sheila",
                "email": "dictum@rhoncus.com",
                "regDate": "2015-10-15T05:15:47-07:00",
                "city": "Hay River",
                "age": 25
            },
            {
                "name": "Jolie",
                "email": "facilisis@uterat.net",
                "regDate": "2016-04-30T20:48:31-07:00",
                "city": "Anderlues",
                "age": 32
            },
            {
                "name": "Eugenia",
                "email": "dolor@nibhsit.ca",
                "regDate": "2017-01-23T06:17:22-08:00",
                "city": "Wardha",
                "age": 36
            },
            {
                "name": "Suki",
                "email": "pretium.neque@consequatnecmollis.net",
                "regDate": "2016-04-20T07:03:02-07:00",
                "city": "Meldert",
                "age": 42
            },
            {
                "name": "Barrett",
                "email": "a@lobortismaurisSuspendisse.edu",
                "regDate": "2015-08-27T11:25:51-07:00",
                "city": "Keith",
                "age": 40
            },
            {
                "name": "Tashya",
                "email": "nascetur@tinciduntadipiscingMauris.ca",
                "regDate": "2015-05-31T10:57:18-07:00",
                "city": "Sint-Amandsberg",
                "age": 30
            },
            {
                "name": "Doris",
                "email": "vitae@Ut.net",
                "regDate": "2015-03-17T08:21:56-07:00",
                "city": "Freirina",
                "age": 27
            },
            {
                "name": "Herrod",
                "email": "arcu.Vestibulum@augueporttitorinterdum.co.uk",
                "regDate": "2016-08-31T10:30:49-07:00",
                "city": "Hollabrunn",
                "age": 47
            },
            {
                "name": "Patience",
                "email": "gravida@in.ca",
                "regDate": "2017-02-26T03:44:58-08:00",
                "city": "Borsbeek",
                "age": 21
            },
            {
                "name": "Arden",
                "email": "tincidunt.nunc.ac@nibhenim.ca",
                "regDate": "2017-01-29T12:42:50-08:00",
                "city": "Wolkrange",
                "age": 36
            },
            {
                "name": "Harper",
                "email": "tempor.lorem@quisturpis.edu",
                "regDate": "2016-04-07T12:53:49-07:00",
                "city": "Marano Lagunare",
                "age": 49
            },
            {
                "name": "Burke",
                "email": "lobortis@velpede.ca",
                "regDate": "2015-06-01T22:29:44-07:00",
                "city": "Nadiad",
                "age": 49
            },
            {
                "name": "Jael",
                "email": "hendrerit.a.arcu@montes.edu",
                "regDate": "2016-05-08T03:28:35-07:00",
                "city": "Cuenca",
                "age": 32
            },
            {
                "name": "Stephanie",
                "email": "dictum@Inmi.net",
                "regDate": "2016-03-29T01:03:51-07:00",
                "city": "Driekapellen",
                "age": 39
            },
            {
                "name": "Frances",
                "email": "lectus.quis.massa@non.ca",
                "regDate": "2015-05-21T14:05:00-07:00",
                "city": "Bama",
                "age": 38
            },
            {
                "name": "Mark",
                "email": "est.Mauris@arcuvel.ca",
                "regDate": "2015-08-01T19:53:38-07:00",
                "city": "St. Andrews",
                "age": 44
            },
            {
                "name": "Roth",
                "email": "enim.non.nisi@Lorem.net",
                "regDate": "2016-10-12T15:20:15-07:00",
                "city": "Teltow",
                "age": 26
            },
            {
                "name": "Dakota",
                "email": "sed.orci@ligulaAeneaneuismod.org",
                "regDate": "2016-05-21T06:15:26-07:00",
                "city": "Dover",
                "age": 25
            },
            {
                "name": "Teegan",
                "email": "augue.eu.tempor@Integervulputate.org",
                "regDate": "2017-02-18T17:49:14-08:00",
                "city": "Hattem",
                "age": 40
            },
            {
                "name": "Chandler",
                "email": "a.odio@sedturpis.edu",
                "regDate": "2015-05-23T17:57:39-07:00",
                "city": "Wellington",
                "age": 34
            },
            {
                "name": "Kathleen",
                "email": "Ut.tincidunt.vehicula@consectetuerrhoncusNullam.edu",
                "regDate": "2016-03-09T13:50:40-08:00",
                "city": "Weelde",
                "age": 30
            },
            {
                "name": "Scarlet",
                "email": "Suspendisse.non@montesnascetur.com",
                "regDate": "2015-06-21T11:13:19-07:00",
                "city": "Tuktoyaktuk",
                "age": 32
            },
            {
                "name": "Haley",
                "email": "risus@Cras.net",
                "regDate": "2017-01-22T07:25:39-08:00",
                "city": "Hudiksvall",
                "age": 23
            },
            {
                "name": "Jesse",
                "email": "odio@amet.org",
                "regDate": "2016-01-29T13:03:43-08:00",
                "city": "Veere",
                "age": 43
            },
            {
                "name": "Noble",
                "email": "vulputate.risus.a@Quisqueliberolacus.co.uk",
                "regDate": "2016-08-16T08:07:57-07:00",
                "city": "Cornwall",
                "age": 47
            },
            {
                "name": "Phelan",
                "email": "nascetur.ridiculus@fringilla.edu",
                "regDate": "2015-11-09T06:20:07-08:00",
                "city": "Oosterhout",
                "age": 50
            },
            {
                "name": "Amos",
                "email": "Phasellus.fermentum@montesnascetur.ca",
                "regDate": "2016-01-20T22:02:46-08:00",
                "city": "Llaillay",
                "age": 31
            },
            {
                "name": "Pandora",
                "email": "aliquet.Phasellus@sociis.ca",
                "regDate": "2016-02-21T02:47:32-08:00",
                "city": "São José dos Pinhais",
                "age": 38
            },
            {
                "name": "Jada",
                "email": "eu@a.edu",
                "regDate": "2016-01-10T23:12:06-08:00",
                "city": "Venezia",
                "age": 33
            },
            {
                "name": "Abraham",
                "email": "Nunc@Vivamus.com",
                "regDate": "2017-02-15T20:23:36-08:00",
                "city": "Wambeek",
                "age": 41
            },
            {
                "name": "Bert",
                "email": "non.bibendum@mollisduiin.org",
                "regDate": "2015-07-17T06:27:40-07:00",
                "city": "Vezzi Portio",
                "age": 35
            },
            {
                "name": "Lars",
                "email": "dolor.Fusce.feugiat@metusurnaconvallis.ca",
                "regDate": "2015-07-05T17:29:50-07:00",
                "city": "Pinneberg",
                "age": 21
            },
            {
                "name": "Bethany",
                "email": "Sed.nulla.ante@sociosquadlitora.net",
                "regDate": "2015-12-23T01:47:18-08:00",
                "city": "Idaho Falls",
                "age": 20
            },
            {
                "name": "Jasmine",
                "email": "id.enim.Curabitur@tellus.com",
                "regDate": "2016-11-23T15:51:48-08:00",
                "city": "Narbonne",
                "age": 48
            },
            {
                "name": "Brody",
                "email": "ac.orci@facilisisnon.com",
                "regDate": "2015-11-18T20:56:24-08:00",
                "city": "Livingston",
                "age": 30
            },
            {
                "name": "Alec",
                "email": "in@aliquameu.org",
                "regDate": "2015-04-21T03:17:43-07:00",
                "city": "Harlingen",
                "age": 21
            },
            {
                "name": "Audrey",
                "email": "Donec@Aliquamadipiscinglobortis.org",
                "regDate": "2016-12-06T20:14:43-08:00",
                "city": "Sars-la-Buissire",
                "age": 25
            },
            {
                "name": "Forrest",
                "email": "leo.elementum@ridiculus.co.uk",
                "regDate": "2015-09-15T11:17:42-07:00",
                "city": "Langholm",
                "age": 50
            },
            {
                "name": "Jessica",
                "email": "a.mi.fringilla@montes.net",
                "regDate": "2016-07-29T15:13:38-07:00",
                "city": "Sioux City",
                "age": 42
            },
            {
                "name": "Cedric",
                "email": "Praesent.eu.nulla@tempordiamdictum.co.uk",
                "regDate": "2016-10-02T05:17:43-07:00",
                "city": "Nazilli",
                "age": 21
            },
            {
                "name": "Maile",
                "email": "pharetra@Duisatlacus.edu",
                "regDate": "2016-12-29T18:47:43-08:00",
                "city": "Salerno",
                "age": 40
            },
            {
                "name": "Acton",
                "email": "consequat.auctor@Quisque.org",
                "regDate": "2017-01-19T05:53:38-08:00",
                "city": "Motta Camastra",
                "age": 46
            },
            {
                "name": "Macey",
                "email": "faucibus@tellus.org",
                "regDate": "2015-10-30T13:07:22-07:00",
                "city": "St. Thomas",
                "age": 40
            },
            {
                "name": "Iona",
                "email": "rutrum.justo@eu.org",
                "regDate": "2015-11-10T14:36:30-08:00",
                "city": "Legal",
                "age": 48
            },
            {
                "name": "Eve",
                "email": "risus.Morbi@aliquameros.com",
                "regDate": "2015-12-21T09:25:33-08:00",
                "city": "Illapel",
                "age": 42
            },
            {
                "name": "Jayme",
                "email": "a.nunc.In@convallisante.ca",
                "regDate": "2016-02-07T10:22:09-08:00",
                "city": "Ville de Maniwaki",
                "age": 30
            },
            {
                "name": "Bo",
                "email": "posuere.cubilia.Curae@estNunclaoreet.net",
                "regDate": "2016-08-16T20:42:44-07:00",
                "city": "Pak Pattan",
                "age": 24
            },
            {
                "name": "Matthew",
                "email": "enim.Mauris.quis@vehicula.edu",
                "regDate": "2015-05-01T01:53:59-07:00",
                "city": "Alacant",
                "age": 35
            },
            {
                "name": "Justina",
                "email": "Donec.nibh@Vivamusmolestie.ca",
                "regDate": "2015-06-24T14:38:07-07:00",
                "city": "Kobbegem",
                "age": 22
            }
        ];
        // initialize to page 1
        this.setPage(1);
    };
    PaginationComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parent/parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  p {\r\n    color: blue;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parent/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button (click)=\"loadUser()\">Load profile</button>\n  {{ profile | json }}\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <p>Add new Servers or blueprints!</p>\n      <label>Server Name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerName\">\n      <label>Server Content</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerContent\">\n      <br>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"onAddServer()\">Add Server</button>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"onAddBlueprint()\">Add Server Blueprint</button>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div\n        class=\"panel panel-default\"\n        *ngFor=\"let element of serverElements\">\n        <div class=\"panel-heading\">{{ element.name }}</div>\n        <div class=\"panel-body\">\n          <p>\n            <strong *ngIf=\"element.type === 'server'\" style=\"color: red\">{{ element.content }}</strong>\n            <em *ngIf=\"element.type === 'blueprint'\">{{ element.content }}</em>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/parent/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentComponent = (function () {
    function ParentComponent(userService) {
        this.userService = userService;
        this.profile = {};
        /* Input output Related*/
        this.serverElements = [];
        this.newServerName = '';
        this.newServerContent = '';
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (data) { return _this.profile = data; });
    };
    ParentComponent.prototype.onAddServer = function () {
        this.serverElements.push({
            type: 'server',
            name: this.newServerName,
            content: this.newServerContent
        });
    };
    ParentComponent.prototype.onAddBlueprint = function () {
        this.serverElements.push({
            type: 'blueprint',
            name: this.newServerName,
            content: this.newServerContent
        });
    };
    ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__("../../../../../src/app/parent/parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/server-elemnet/server-elemnet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  p {\r\n    color: blue;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/server-elemnet/server-elemnet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <p>Add new Servers or blueprints!</p>\n        <label>Server Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerName\">\n        <label>Server Content</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerContent\">\n        <br>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"onAddServer()\">Add Server</button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"onAddBlueprint()\">Add Server Blueprint</button>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div\n          class=\"panel panel-default\"\n          *ngFor=\"let element of serverElements\">\n          <div class=\"panel-heading\">{{ element.name }}</div>\n          <div class=\"panel-body\">\n            <p>\n              <strong *ngIf=\"element.type === 'server'\" style=\"color: red\">{{ element.content }}</strong>\n              <em *ngIf=\"element.type === 'blueprint'\">{{ element.content }}</em>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/server-elemnet/server-elemnet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerElemnetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerElemnetComponent = (function () {
    function ServerElemnetComponent() {
    }
    ServerElemnetComponent.prototype.ngOnInit = function () {
    };
    ServerElemnetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-server-elemnet',
            template: __webpack_require__("../../../../../src/app/server-elemnet/server-elemnet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/server-elemnet/server-elemnet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerElemnetComponent);
    return ServerElemnetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = (function () {
    function AuthInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var cookiesData = this.cookieService.get('userDetail');
        if (cookiesData) {
            var userData = JSON.parse(cookiesData);
            req = req.clone({
                setHeaders: {
                    'Authorization': "bearer " + userData.access_token,
                }
            });
        }
        return next.handle(req);
        // if (req.body) {
        // const duplicate = req.clone({params:req.params.set('Authorization', "BearereyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6NjQyMTYwODU0MTQ1NDMzNiwidXNlcl9uYW1lIjoic29uaUB5b3BtYWlsLmNvbSIsInJvbGVJZCI6MiwiZnVsbE5hbWUiOiJzdW5kZXIgcGljaGFpIiwidGltZVpvbmUiOiJBc2lhL0NhbGN1dHRhIiwicGVybWlzc2lvbiI6IlVzZXI6KjtFdmVudDoqO0RpcmVjdG9yeToqO05vdGlmaWNhdGlvbjoqO0ludml0YXRpb246KjtDb21tZW50Oio7Q2F0ZWdvcnk6KjtCcmllZmNhc2U6KjsiLCJ1c2VySWQiOjU0MTQwMjkwNzgwMzY0ODAsImNsaWVudF9pZCI6Im15LXRydXN0ZWQtY2xpZW50IiwiYXVkIjpbImFwaXMiXSwicHJvZmlsZUltYWdlVGh1bWJuYWlsVXJsIjoiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZXYtdWhwZWVyL3RodW1ibmFpbHMvcHJvZmlsZS9pbWFnZTE1MTQyODg4NzkxNzgucG5nIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXSwiZXhwIjoxNTIxNTUzMjgyLCJwcm9maWxlSW1hZ2VVcmwiOiJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2Rldi11aHBlZXIvcHJvZmlsZS9pbWFnZTE1MTQyODg4NzkxNzgucG5nIiwianRpIjoiNDFmZTA1YzktMWY5OS00MGFlLTkwNTYtNTk0MjFiMDE5ZjQ4IiwiYXBpU3RhdHVzIjp0cnVlLCJ1c2VybmFtZSI6InNvbmlAeW9wbWFpbC5jb20ifQ.QqtLAiym7wxp2HOG6K79de-QjrYCGMTf90JdFK_BwzPzEdzhMj4fKcuVHuog5ngLxPvTWgq8CrITyd2Nqp30ZwbBosPs2ZaW-ZVyCRRUdLVFiU2462OeXfuFckWlAEkS8YAqDhv2_x6L99l9vTmHh6HazKZBoKLzr-iup4o1TtEQqFXNtiUSLq9dlI9xVI9-kqhceIYQ3H2NkFsDpZR_yq4fLv6aR7VqZgRFaLtAJqv2QBTEawXJBAkUmHf_ECm3YZsf7LE2mUPN3ggQiLH1G-IeXvvPXp5bAfBl0jvTkGBfI6KnJYuU_znzV3gfpEwzK-augasHShREqwfC4D-8Dw")});
        //return next.handle(duplicate);
        // }
        // return next.handle(req);
        // return next.handle(req).do(evt => {
        //   if (evt instanceof HttpResponse) {
        //     console.log('---> status:', evt.status);
        //     console.log('---> filter:', req.params.get('filter'));
        //   }
        // });
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http, Response } from '@angular/http';




var DemoService = (function () {
    function DemoService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    DemoService.prototype.uploadFile = function (data) {
        var cookiesData = this.cookieService.get('userDetail');
        var userData = JSON.parse(cookiesData);
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': "bearer " + userData.access_token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: head });
        this._url = 'http://103.76.253.133:8752/api/v1/cloud/aws/upload';
        return this.http.post(this._url, data, options)
            .map(this.handleData)
            .catch(this.handleError);
    };
    DemoService.prototype.handleData = function (res) {
        var data = res.json();
        return data;
    };
    DemoService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('API failed');
    };
    DemoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], DemoService);
    return DemoService;
}());

// import { Injectable } from '@angular/core';
// @Injectable()
// export class DemoService {
//     someMethod() {
//         return 'Service Call!';
//     }
// } 


/***/ }),

/***/ "../../../../../src/app/services/directory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectoryService = (function () {
    //public headers = new HttpHeaders().set('Accept','application/json').set('Content-Type', 'application/json');
    function DirectoryService(httpClient) {
        this.httpClient = httpClient;
    }
    DirectoryService.prototype.getDirectoryUser = function (data) {
        console.log(data);
        return this.httpClient.post("http://103.76.253.133:8752/api/v1/user/directory/filter", data);
    };
    DirectoryService.prototype.addCustomExcel = function (data) {
        console.log("data", data);
        return this.httpClient.post("http://103.76.253.133:8752/api/v1/user/directory", data);
    };
    DirectoryService.prototype.updateCustomExcelData = function (data) {
        return this.httpClient.put("http://103.76.253.133:8752/api/v1/user/directory", data);
    };
    DirectoryService.prototype.deleteUser = function (did) {
        var deleteUrl = "http://103.76.253.133:8752/api/v1/user/directory/" + did;
        return this.httpClient.delete(deleteUrl);
    };
    // getDirectoryUser(data:{}) {
    //   console.log(data);        
    //   return this.httpClient.post("http://103.76.253.133:8752/api/v1/user/directory/filter", data, {headers:this.headers});
    // }
    DirectoryService.prototype.getEventTemplate = function (url) {
        return this.httpClient.get(url);
    };
    DirectoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DirectoryService);
    return DirectoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/people.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.storeServers = function (servers) {
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*'
        };
        var requestOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
        };
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.put('https://udemy-ng-http.firebaseio.com/data.json', servers, requestOptions).catch(this.handleError);
        ;
    };
    PeopleService.prototype.getServers = function () {
        var headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type,',
            'Access-Control-Allow-Origin': '*'
        };
        var requestOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headerDict),
        };
        return this.http.get('https://udemy-ng-http.firebaseio.com/data', requestOptions)
            .map(function (response) {
            var data = response.json();
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var server = data_1[_i];
                server.name = 'FETCHED_' + server.name;
            }
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    PeopleService.prototype.getAppName = function () {
        return this.http.get('https://udemy-ng-http.firebaseio.com/appName.json')
            .map(function (response) {
            return response.json();
        });
    };
    PeopleService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    PeopleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]().set('Accept', 'application/json').set('Content-Type', 'multipart/form-data');
    }
    UserService.prototype.getUser = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(function (res) { return res.json(); });
        //.map((res:Response) => res.json());
    };
    // loginUser(data) {    
    //   let head = new Headers({'Accept':'application/json'});
    //   let options = new RequestOptions({ headers: head });
    //   let body = JSON.stringify(data);  
    //   return this.http.post('http://dev.workplaceofthefuture.co:3002/ui/login',body, options).map((res: Response) => res.json());
    // }
    UserService.prototype.loginUser = function () {
        alert("comeeeeeeeee");
        var loginUrl = "http://103.76.253.133:8752/userauth/oauth/token?&grant_type=password&roleId=3&username=soni@yopmail.com&password=zxc123";
        return this.httpClient.post(loginUrl, {});
    };
    UserService.prototype.logout = function () {
        var logOutUrl = "http://103.76.253.133:8752/userauth/oauth/revokeToken";
        return this.httpClient.delete(logOutUrl, {});
    };
    UserService.prototype.fileUpload = function (fileData) {
        console.log("fileUpload", this.fileUpload);
        var uplURL = "http://103.76.253.133:8752/api/v1/cloud/aws/upload";
        return this.httpClient.post(uplURL, fileData);
    };
    UserService.prototype.checkProgressCall = function (randomString) {
        var progressUrl = "http://103.76.253.133:8752/api/v1/public/cloud/aws/uploadProgress/" + randomString;
        return this.httpClient.get(progressUrl, { headers: { 'Accept': 'application/Json', 'content-Type': 'application/json' } });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/rainbow.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RainbowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RainbowDirective = (function () {
    function RainbowDirective() {
        this.possibleColors = [
            'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
            'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
        ];
    }
    RainbowDirective.prototype.newColor = function () {
        var colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.borderColor = this.possibleColors[colorPick];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.color'),
        __metadata("design:type", String)
    ], RainbowDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.border-color'),
        __metadata("design:type", String)
    ], RainbowDirective.prototype, "borderColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RainbowDirective.prototype, "newColor", null);
    RainbowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appRainbow]'
        })
    ], RainbowDirective);
    return RainbowDirective;
}());



/***/ }),

/***/ "../../../../../src/app/upload-image/upload-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n    .my-drop-zone { border: dotted 3px lightgray; }\r\n    /* Default class applied to drop zones on over */\r\n    .invalid-drag { border: dotted 3px red; }\r\n    .valid-drag { border: dotted 3px green; }\r\n    html, body { height: 100%; }\r\n    .previewIcon{\r\n      width:100px;height:100px;\r\n      background-size:cover;\r\n      background-repeat:no-repeat;\r\n    }\r\n   \r\n    .inline-block{\r\n      display:inline-block;\r\n      margin:.2em;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-image/upload-image.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"img\">\n<!-- \n    <div class=\"inline-block\">\n      Single\n      <input ngfSelect type=\"file\" [(files)]=\"files\" [accept]=\"accept\" [maxSize]=\"maxSize\" [(lastInvalids)]=\"lastInvalids\" />\n    </div>\n\n    <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploadFiles(files)\" [disabled]=\"!files.length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Upload \n    </button>\n\n    <button (click)=\"submit()\">Submit</button>\n\n    <img *ngIf=\"imageUrl\"  [src] =\"imageUrl\" alt=\"Image\"/>\n-->\n  <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\n  <div style=\"display:inline-flex\">\n    <div>Cropping Image : <img [src]=\"croppedImage\" /></div>\n    <div style=\"margin-left:20px;\">Cropped Image : <img *ngIf=\"imageUrl\"  [src] =\"imageUrl\" alt=\"Image\"/></div> \n  </div>\n  <div style=\"clear: both\" ></div>\n  <button (click)=\"submit()\">Submit</button>\n  <image-cropper\n      [imageChangedEvent]=\"imageChangedEvent\"\n      [maintainAspectRatio]=\"true\"\n      [aspectRatio]=\"2/1\"\n      [resizeToWidth]=\"128\"\n      format=\"png\"\n      (imageCropped)=\"imageCropped($event)\"\n      (imageLoaded)=\"imageLoaded()\"\n      (loadImageFailed)=\"loadImageFailed()\"\n  ></image-cropper>\n\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/upload-image/upload-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { UplImage } from "./upl-img-interface";
var UploadImageComponent = (function () {
    function UploadImageComponent(userService) {
        this.userService = userService;
        this.postUrl = '...';
        this.accept = '*';
        this.files = [];
        this.hasBaseDropZoneOver = false;
        this.base64textString = "";
        this.staticChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.randomString = function (length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        };
        /**** Croppinggggggggggggg ****** */
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    UploadImageComponent.prototype.ngOnInit = function () { };
    /*
      _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = "data:image/png;base64," + btoa(binaryString);
        console.log(this.base64textString);
        var dataURI = this.base64textString;
        var array, binary, i,temp;
        binary = atob(dataURI.split(",")[1]);
        array = [];
        i = 0;
        while (i < binary.length) {
          array.push(binary.charCodeAt(i));
          i++;
        }
        this.blobData  = new Blob([new Uint8Array(array)], {
          type: "image/jpeg"
        });
        console.log("this.blobData==", this.blobData);
        // this.base64textString = dataUrltoBlob(this.base64textString);
      }
      uploadFiles(files) {
        var file = files[0];
        if (files && file) {
          var reader = new FileReader();
          reader.onload = this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
        }
      }
    */
    UploadImageComponent.prototype.checkProgressCall = function (randomNumber) {
        var _this = this;
        this.userService.checkProgressCall(randomNumber).subscribe(function (response) {
            _this.dataResponse = response;
            console.log("response", _this.dataResponse.statusCode);
            if (response['status'] == 'Completed') {
                _this.imageUrl = "https://s3-us-west-2.amazonaws.com/dev-uhpeer/" + response["s3FilePath"];
            }
        }, function (err) {
            if (err.error instanceof Error) {
                alert("Client-side error occured.");
                console.log("errerrerrerr", err);
            }
            else {
                console.log("errerrerrerr", err.error.error_description);
                alert("Server-side error occured.");
                clearInterval(_this.interval);
            }
        });
    };
    UploadImageComponent.prototype.submit = function () {
        var _this = this;
        var self = this;
        console.log("submit call", this.imageName);
        var formdata = new FormData();
        // for(var i=0;i<this.files.length;i++){
        //   formdata.append("file", this.files[i]);
        // }
        formdata.append("file", this.imageName);
        var RS = this.randomString(10, this.staticChar);
        var data = {
            fileKey: RS,
            filePath: 'profile/' + this.imageName,
            mFile: this.blobData,
            thumbnailHeight: 200,
            thumbnailWidth: 200,
            isCreateThumbnail: true
        };
        // formdata.append('data', JSON.stringify(data));
        formdata.append('fileKey', RS);
        formdata.append('filePath', data['filePath']);
        formdata.append('mFile', this.blobData);
        formdata.append('thumbnailHeight', JSON.stringify(data['thumbnailHeight']));
        formdata.append('thumbnailWidth', JSON.stringify(data['thumbnailWidth']));
        formdata.append('isCreateThumbnail', JSON.stringify(data['isCreateThumbnail']));
        this.userService.fileUpload(formdata).
            subscribe(function (resultArray) {
            console.log("resultArray", resultArray);
            _this.interval = setInterval(function () {
                self.checkProgressCall(RS);
            }, 2000);
        }, function (err) {
            console.log("Error occured");
        });
    };
    UploadImageComponent.prototype.fileChangeEvent = function (event) {
        this.imageName = event.target.files[0].name;
        this.imageChangedEvent = event;
    };
    UploadImageComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
        this.base64textString = this.croppedImage;
        var dataURI = this.base64textString;
        var array, binary, i, temp;
        binary = atob(dataURI.split(",")[1]);
        array = [];
        i = 0;
        while (i < binary.length) {
            array.push(binary.charCodeAt(i));
            i++;
        }
        this.blobData = new Blob([new Uint8Array(array)], {
            type: "image/jpeg"
        });
    };
    UploadImageComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    UploadImageComponent.prototype.loadImageFailed = function () {
        // show message
    };
    UploadImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-image',
            template: __webpack_require__("../../../../../src/app/upload-image/upload-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload-image/upload-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UploadImageComponent);
    return UploadImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blink_me {\r\n    -webkit-animation: blinker 1s linear infinite;\r\n            animation: blinker 1s linear infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes blinker {  \r\n    50% { opacity: 0; }\r\n  }\r\n  \r\n  @keyframes blinker {  \r\n    50% { opacity: 0; }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blink_me\" style=\"color:red\">{{title}}</div>\n\n<p>\n  routing-param works!\n  ID: {{user.id}}<br>\n  Name : {{user.name}}  \n</p>\n\n<a [routerLink] = \"['/userDetail',200, 'Raj Singh solanki']\"> Change route Parameter (200) </a><br><br> \n\n<div class=\"row\">\n  <div class=\"col-md-8\">\n  </div>\n  <div class=\"col-md-4\">\n      <div class=\"alert alert-success alert-dismissable\" *ngIf=\"msg\">\n      <a href=\"javascript:void(0)\" class=\"close\" (click)=\"clickMe()\">&times;</a>\n      {{msg}}\n      </div>\n  </div>\n</div>  \n<div class=\"clearfix\"></div>\n<div class=\"container\"> \n  <div class=\"row\">\n    <div class=\"col-md-7 border-color\">\n      {{names | uppercase}}\n        <h5>Create data:</h5>\n        <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\" for=\"name\">Name:</label>\n              <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"name\" \n              name=\"name\" [(ngModel)]=\"model.name\" placeholder=\"Enter your name\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\" for=\"position\">Position:</label>\n              <div class=\"col-sm-10\"> \n              <input type=\"text\" class=\"form-control\" id=\"position\"\n              name=\"position\" [(ngModel)]=\"model.position\" placeholder=\"Enter your position\">\n              </div>\n          </div>\n          <div class=\"form-group\"> \n              <div class=\"col-sm-offset-2 col-sm-10\">\n              <button type=\"submit\" class=\"btn btn-success\" (click)=\"addEmployee(model)\">Save</button>\n              </div>\n          </div>\n        </form>\n        \n        <div><span class=\"pull-left\"><h5>Read data & (Delete data): </h5></span>\n          <span class=\"pull-right\"><h5><input class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"search text goes here\"> </h5></span></div>\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th width=400>Name</th>\n              <th width=400>Position</th>\n              <th width=250>Actions</th>\n              <th>{{'Foo Bar' | slugify }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let employee of employees; let i=index\">\n              <td>{{employee.name }}</td>\n              <td>{{employee.position}}</td>\n              <td>\n                  <a class=\"btn btn-success\" (click)=\"editEmployee(i)\">Edit</a>\n                  <a class=\"btn btn-danger\" (click)=\"deleteEmployee(i)\">Delete</a>\n              </td>\n            </tr>\n      \n          </tbody>\n        </table>\n        <div [hidden]=\"editFrm\">\n        <h5>Update data:</h5>\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"name\">Name:</label>\n                <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" \n                name=\"name\" [(ngModel)]=\"model2.name\" placeholder=\"Enter your name\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2\" for=\"position\">Position:</label>\n                <div class=\"col-sm-10\"> \n                <input type=\"text\" class=\"form-control\" id=\"position\"\n                name=\"position\" [(ngModel)]=\"model2.position\" placeholder=\"Enter your position\">\n                </div>\n            </div>\n        \n            <div class=\"form-group\"> \n                <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateEmployee()\">Update</button>\n                </div>\n            </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_demo_service__ = __webpack_require__("../../../../../src/app/services/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(demoService, route) {
        this.demoService = demoService;
        this.route = route;
        //   order = "name";
        // ascending = true;
        this.editFrm = true;
        this.employees = [
            { name: "Sikandar", position: "Programmer" },
            { name: "Alex", position: "Designer" },
            { name: "Maria", position: "Manager" }
        ];
        this.model = {};
        this.model2 = {};
        this.msg = "";
        this.names = "dileep";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.title = this.demoService.someMethod();
        // Get Query and fragment Paramter
        console.log(this.route.snapshot.queryParamMap);
        console.log(this.route.snapshot.fragment);
        this.route.queryParams.subscribe();
        this.route.fragment.subscribe();
        // Show Direct Value
        this.user = {
            id: this.route.snapshot.params['id'],
            name: this.route.snapshot.params['name']
        };
        // After change route param
        // Without unsubscribe
        // this.route.params
        //   .subscribe(
        //     (params: Params) => {
        //       this.user.id = params['id'],
        //       this.user.name = params['name'];
        //     }
        //   );
        this.paramsSubscription = this.route.params
            .subscribe(function (params) {
            _this.user.id = params['id'],
                _this.user.name = params['name'];
        });
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    UserProfileComponent.prototype.addEmployee = function () {
        this.employees.push(this.model);
        console.log("this.employees", this.employees);
        this.model = {};
        this.msg = "Record is successfully added..... ";
    };
    UserProfileComponent.prototype.deleteEmployee = function (i) {
        this.employees.splice(i, 1);
        this.msg = "Record is successfully deleted..... ";
    };
    UserProfileComponent.prototype.clickMe = function () {
        var self = this;
        setTimeout(function () {
            self.msg = "";
        }, 2000);
    };
    UserProfileComponent.prototype.editEmployee = function (k) {
        this.editFrm = false;
        this.model2.name = this.employees[k].name;
        this.model2.position = this.employees[k].position;
        this.myValue = k;
    };
    UserProfileComponent.prototype.updateEmployee = function () {
        var k = this.myValue;
        for (var i = 0; i < this.employees.length; i++) {
            if (i == k) {
                this.employees[i] = this.model2;
                this.model2 = {};
                this.msg = "Record is successfully updated..... ";
                this.editFrm = true;
            }
        }
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_demo_service__["a" /* DemoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map