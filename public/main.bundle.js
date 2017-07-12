webpackJsonp([1,5],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 119;


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(240),
        styles: [__webpack_require__(218)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_video_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sevice_video_serivce__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__postvideo_postvideo_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__videodetail_videodetail_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__xemvideotheoloai_xemvideotheoloai_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__xemvideotheoquocgia_xemvideotheoquocgia_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__timvideo_timvideo_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dangky_dangky_component__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', redirectTo: 'video', pathMatch: 'full' },
    { path: 'postvideo', component: __WEBPACK_IMPORTED_MODULE_12__postvideo_postvideo_component__["a" /* PostvideoComponent */] },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_9__video_video_component__["a" /* VideoComponent */] },
    { path: 'video/:id', component: __WEBPACK_IMPORTED_MODULE_13__videodetail_videodetail_component__["a" /* VideodetailComponent */] },
    { path: 'xem-video-the-loai/:id', component: __WEBPACK_IMPORTED_MODULE_14__xemvideotheoloai_xemvideotheoloai_component__["a" /* XemvideotheoloaiComponent */] },
    { path: 'xem-video-theo-quoc-gia/:id', component: __WEBPACK_IMPORTED_MODULE_15__xemvideotheoquocgia_xemvideotheoquocgia_component__["a" /* XemvideotheoquocgiaComponent */] },
    { path: 'tim-video/:id', component: __WEBPACK_IMPORTED_MODULE_16__timvideo_timvideo_component__["a" /* TimvideoComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_18__dangky_dangky_component__["a" /* DangkyComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__video_video_component__["a" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__postvideo_postvideo_component__["a" /* PostvideoComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_13__videodetail_videodetail_component__["a" /* VideodetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__xemvideotheoloai_xemvideotheoloai_component__["a" /* XemvideotheoloaiComponent */],
            __WEBPACK_IMPORTED_MODULE_15__xemvideotheoquocgia_xemvideotheoquocgia_component__["a" /* XemvideotheoquocgiaComponent */],
            __WEBPACK_IMPORTED_MODULE_16__timvideo_timvideo_component__["a" /* TimvideoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dangky_dangky_component__["a" /* DangkyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_10__sevice_video_serivce__["a" /* VideoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DangkyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DangkyComponent = (function () {
    function DangkyComponent(router, validateSevice, videoService, _flashMessagesService) {
        this.router = router;
        this.validateSevice = validateSevice;
        this.videoService = videoService;
        this._flashMessagesService = _flashMessagesService;
        this.check = false;
    }
    DangkyComponent.prototype.ngOnInit = function () {
    };
    DangkyComponent.prototype.SignUp = function () {
        var _this = this;
        var signup = {
            username: this.username,
            password: this.password,
            email: this.email
        };
        if (this.validateSevice.validateSignUp(signup)) {
            if (this.password_again === this.password && this.password.length > 6) {
                if (this.validateSevice.validateEmail(this.email)) {
                    this.videoService.SignUp(signup).subscribe(function (res) {
                        if (res.success) {
                            _this._flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 2000 });
                            _this.username = "";
                            _this.password = "";
                            _this.email = "";
                            _this.router.navigate(['/']);
                        }
                        else {
                            _this._flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2000 });
                        }
                    });
                }
                else {
                    this._flashMessagesService.show("Email không hợp lệ", { cssClass: 'alert-danger', timeout: 2000 });
                }
            }
            else {
                this._flashMessagesService.show("Password không trùng khớp", { cssClass: 'alert-danger', timeout: 2000 });
            }
        }
        else {
            this._flashMessagesService.show("Bạn nhập thiếu thông tin", { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    return DangkyComponent;
}());
DangkyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dangky',
        template: __webpack_require__(241),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DangkyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dangky.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(242),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(router, validateSevice, videoService, _flashMessagesService) {
        this.router = router;
        this.validateSevice = validateSevice;
        this.videoService = videoService;
        this._flashMessagesService = _flashMessagesService;
        this.check = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // kim  tra neu co ton tai thi gan bien de dang xuat
        if (localStorage.getItem("User") && localStorage.getItem("Email")) {
            this.check = true;
        }
    };
    NavbarComponent.prototype.search = function () {
        var giatri = this.tim;
        var link = ['/tim-video', giatri];
        this.router.navigate(link);
        this.tim = "";
    };
    NavbarComponent.prototype.Login = function () {
        var _this = this;
        var login = {
            username: this.username,
            password: this.password
        };
        // Check Form
        if (!this.validateSevice.validateLogin(login)) {
            this._flashMessagesService.show("Bạn nhập thiếu thông tin", { cssClass: 'alert-danger', timeout: 2000 });
        }
        else {
            // Gui dư liệu đến nodejs
            this.videoService.SignIn(login).subscribe(function (res) {
                if (res.success) {
                    _this._flashMessagesService.show("Đăng nhập thành công", { cssClass: 'alert-success', timeout: 2000 });
                    _this.check = true;
                    // Tao du lieu Username va email tren localStorage
                    localStorage.setItem("User", res.username);
                    localStorage.setItem("Email", res.email);
                    _this.router.navigate(["/"]);
                }
                else {
                    _this._flashMessagesService.show("Đăng nhập thất bại", { cssClass: 'alert-danger', timeout: 2000 });
                }
            });
        }
    };
    NavbarComponent.prototype.Logout = function () {
        this.check = false;
        localStorage.removeItem("User");
        localStorage.removeItem("Email");
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(243),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostvideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'https://webphim.herokuapp.com/product/addvideo';
var PostvideoComponent = (function () {
    function PostvideoComponent(http, el, _flashMessagesService, router) {
        this.http = http;
        this.el = el;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.edited_hinh = false;
        this.edited_thongtin = false;
    }
    PostvideoComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
    };
    PostvideoComponent.prototype.upload = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#video');
        var fileCount = inputEl.files.length;
        var link_video_lan_dau = JSON.stringify(inputEl.files[0].name);
        //xoa " lan dau
        var link_video_lan_sau = link_video_lan_dau.replace('"', "");
        //xoa " lan sau
        this.link = link_video_lan_sau.replace('"', "");
        var formData = new FormData();
        if (fileCount > 0) {
            formData.append('photo', inputEl.files.item(0));
            this.http
                .post(URL, formData).map(function (res) { return res; }).subscribe(function (success) {
                //alert(success._body);
                _this._flashMessagesService.show(success._body, { cssClass: 'alert-success', timeout: 2000 });
            }, function (error) {
                //alert(error)
                _this._flashMessagesService.show("Thêm video không thành công", { cssClass: 'alert-danger', timeout: 2000 });
            });
        }
    };
    PostvideoComponent.prototype.upload_hinh = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#hinh');
        var fileCount = inputEl.files.length;
        var link_hinh_lan_dau = JSON.stringify(inputEl.files[0].name);
        //xoa " lan dau
        var link_hinh_lan_sau = link_hinh_lan_dau.replace('"', "");
        //xoa " lan sau
        this.hinh = link_hinh_lan_sau.replace('"', "");
        var formData = new FormData();
        if (fileCount > 0) {
            formData.append('hinh', inputEl.files.item(0));
            this.http
                .post("https://webphim.herokuapp.com/addhinh", formData).map(function (res) { return res; }).subscribe(function (success) {
                //          alert(success._body);
                _this._flashMessagesService.show(success._body, { cssClass: 'alert-success', timeout: 2000 });
            }, function (error) {
                //alert(error)
                _this._flashMessagesService.show("Thêm hình đại diện không thành công", { cssClass: 'alert-danger', timeout: 2000 });
            });
        }
    };
    PostvideoComponent.prototype.showHinh = function () {
        this.edited_hinh = true;
    };
    PostvideoComponent.prototype.showThongtin = function () {
        this.edited_thongtin = true;
    };
    PostvideoComponent.prototype.onAddProductSubmit = function () {
        var _this = this;
        var product = {
            ten: this.ten,
            the_loai: this.the_loai,
            hinh: this.hinh,
            link: this.link,
            quoc_gia: this.quoc_gia,
            dien_vien: this.dien_vien,
            thoi_luong: this.thoi_luong,
            nam_phat_hanh: this.nam_phat_hanh
        };
        this.http.post("https://webphim.herokuapp.com/product/add", product).map(function (res) { return res; }).subscribe(function (success) {
            _this.router.navigate(['/']);
            _this._flashMessagesService.show("Thêm thông tin mô tả thành công", { cssClass: 'alert-success', timeout: 2000 });
        }, function (error) {
            _this._flashMessagesService.show("Thêm thông tin mô tả không thành công", { cssClass: 'alert-danger', timeout: 2000 });
        });
    };
    return PostvideoComponent;
}());
PostvideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-postvideo',
        template: __webpack_require__(244),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostvideoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=postvideo.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimvideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimvideoComponent = (function () {
    function TimvideoComponent(route, location, videoSerive, _flashMessagesService, router) {
        this.route = route;
        this.location = location;
        this.videoSerive = videoSerive;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    TimvideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.videoSerive.getVideoname(params['id']); })
            .subscribe(function (video) {
            if (video.success) {
                _this.video = video.docs;
            }
            else {
                _this._flashMessagesService.show("Không tìm thấy video này", { cssClass: 'alert-danger', timeout: 3000 });
                var link = ['/'];
                _this.router.navigate(link);
            }
        });
    };
    return TimvideoComponent;
}());
TimvideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timvideo',
        template: __webpack_require__(245),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], TimvideoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=timvideo.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sevice_video_serivce__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoComponent = (function () {
    function VideoComponent(videoService) {
        this.videoService = videoService;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Tat ca video
        this.videoService.getVideo().subscribe(function (video) {
            _this.video = video.slice(0, 9);
        });
        // video hai huoc qua thong tin la hai huoc
        this.videoService.getVideoFilde("hai-huoc").subscribe(function (haihuoc) {
            _this.haihuoc = haihuoc.slice(0, 4);
        });
        // video kinh di qua thong tin la kinh di
        this.videoService.getVideoFilde("kinh-di").subscribe(function (kinhdi) {
            _this.kinhdi = kinhdi.slice(0, 4);
        });
        // video tinh cam qua thong tin la tinh cam
        this.videoService.getVideoFilde("tinh-cam").subscribe(function (tinhcam) {
            _this.tinhcam = tinhcam.slice(0, 4);
        });
        // video tam ly qua thong tin la tam ly
        this.videoService.getVideoFilde("tam-ly").subscribe(function (tamly) {
            _this.tamly = tamly.slice(0, 4);
        });
        // video hoat hinh qua thong tin la hoat hinh
        this.videoService.getVideoFilde("hoat-hinh").subscribe(function (hoathinh) {
            _this.hoathinh = hoathinh.slice(0, 4);
        });
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-video',
        template: __webpack_require__(246),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sevice_video_serivce__["a" /* VideoService */]) === "function" && _a || Object])
], VideoComponent);

var _a;
//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videodetail_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideodetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideodetailComponent = (function () {
    function VideodetailComponent(route, location, videoSerive, validateSevice, chatService) {
        this.route = route;
        this.location = location;
        this.videoSerive = videoSerive;
        this.validateSevice = validateSevice;
        this.chatService = chatService;
        this.messages = [];
        // disable button commnet
        this.show_err = false;
        this.edited_hinh = false;
    }
    VideodetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.videoSerive.getvideoOne(params['id']); })
            .subscribe(function (video) {
            _this.video = video;
            _this.id_video = video[0]._id;
            //lay id web site cho viec binh luan
            _this.ten_web = _this.id_video;
            // lay phim khac theo the loai tu video
            _this.videoSerive.getVideoFilde(video[0].the_loai).subscribe(function (phimkhac) {
                _this.phimkhac = phimkhac;
            });
            _this.videoSerive.getCommnet(_this.id_video).subscribe(function (comment_list) {
                _this.comment_list = comment_list;
            });
        });
        if (localStorage.getItem("User") && localStorage.getItem("Email")) {
            this.name = localStorage.getItem("User");
            this.email = localStorage.getItem("Email");
        }
        else {
            this.name = "";
            this.email = "";
        }
        this.connection = this.chatService.getMessages().subscribe(function (message) {
            _this.ten_web_socket = message["web"];
            // kiem tra neu 2 id website trung nhau thi them vao mang
            // id web goc va id web duoc nhan tu socket.io
            if (_this.ten_web === _this.ten_web_socket) {
                _this.messages.push(message["text"]);
            }
        });
    };
    VideodetailComponent.prototype.binh_luan = function () {
        var _this = this;
        var contentComment = {
            name: this.name,
            email: this.email,
            comment: this.comment,
            id_video: this.id_video
        };
        // ADD comment
        if (this.validateSevice.validateComment(contentComment) && this.validateSevice.validateEmail(contentComment.email)) {
            this.videoSerive.postComment(contentComment).subscribe(function (res) {
                if (res) {
                    _this.chatService.sendMessage(contentComment, _this.ten_web);
                }
            });
        }
        else {
            this.show_err = !this.show_err;
            setTimeout(function () {
                _this.show_err = false;
            }, 5000);
        }
        this.comment = "";
    };
    VideodetailComponent.prototype.showButton = function () {
        var _this = this;
        this.edited_hinh = !this.edited_hinh;
        setTimeout(function () {
            _this.edited_hinh = false;
        }, 5000);
    };
    return VideodetailComponent;
}());
VideodetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-videodetail',
        template: __webpack_require__(247),
        styles: [__webpack_require__(225)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__videodetail_service__["a" /* ChatService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sevice_video_serivce__["a" /* VideoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__validate_service__["a" /* ValidateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__videodetail_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__videodetail_service__["a" /* ChatService */]) === "function" && _e || Object])
], VideodetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=videodetail.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        // Our localhost address that we set in our server code
        this.url = 'https://webphim.herokuapp.com/';
    }
    ChatService.prototype.sendMessage = function (message, ten_web) {
        // Make sure the "add-message" is written here because this is referenced in on() in our server
        this.socket.emit('add-message', { message: message, web: ten_web });
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());

//# sourceMappingURL=videodetail.service.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sevice_video_serivce__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XemvideotheoloaiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var XemvideotheoloaiComponent = (function () {
    function XemvideotheoloaiComponent(route, location, videoSerive) {
        this.route = route;
        this.location = location;
        this.videoSerive = videoSerive;
    }
    XemvideotheoloaiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.videoSerive.getVideoFilde(params['id']); })
            .subscribe(function (video) {
            _this.video = video;
        });
    };
    return XemvideotheoloaiComponent;
}());
XemvideotheoloaiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-xemvideotheoloai',
        template: __webpack_require__(248),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sevice_video_serivce__["a" /* VideoService */]) === "function" && _c || Object])
], XemvideotheoloaiComponent);

var _a, _b, _c;
//# sourceMappingURL=xemvideotheoloai.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sevice_video_serivce__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XemvideotheoquocgiaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var XemvideotheoquocgiaComponent = (function () {
    function XemvideotheoquocgiaComponent(route, location, videoSerive) {
        this.route = route;
        this.location = location;
        this.videoSerive = videoSerive;
    }
    XemvideotheoquocgiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.videoSerive.getVideoNation(params['id']); })
            .subscribe(function (video) {
            _this.video = video;
        });
    };
    return XemvideotheoquocgiaComponent;
}());
XemvideotheoquocgiaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-xemvideotheoquocgia',
        template: __webpack_require__(249),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sevice_video_serivce__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sevice_video_serivce__["a" /* VideoService */]) === "function" && _c || Object])
], XemvideotheoquocgiaComponent);

var _a, _b, _c;
//# sourceMappingURL=xemvideotheoquocgia.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = 'https://webphim.herokuapp.com/product/';
var URL_cm = 'https://webphim.herokuapp.com/comment/';
var URL_user = 'https://webphim.herokuapp.com/user/';
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
    }
    // lay tat ca video
    VideoService.prototype.getVideo = function () {
        return this.http.get(URL + "get").map(function (res) { return res.json(); });
    };
    // lay 1 video
    VideoService.prototype.getvideoOne = function (id) {
        return this.http.get(URL + "get/" + id).map(function (res) { return res.json(); });
    };
    // Lay video qa the loai 
    VideoService.prototype.getVideoFilde = function (theloai) {
        return this.http.get(URL + "get-filde/" + theloai).map(function (res) { return res.json(); });
    };
    // Lay video qa quoc gia
    VideoService.prototype.getVideoNation = function (quocgia) {
        return this.http.get(URL + "nation/" + quocgia).map(function (res) { return res.json(); });
    };
    // Tìm kiếm video qua ten
    VideoService.prototype.getVideoname = function (ten) {
        return this.http.get(URL + "search/" + ten).map(function (res) { return res.json(); });
    };
    // Lấy tất cả comment về 1 video ra 
    VideoService.prototype.getCommnet = function (id) {
        return this.http.get(URL_cm + "get/" + id).map(function (res) { return res.json(); });
    };
    // Them comment ve 1 video
    VideoService.prototype.postComment = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.post(URL_cm + "post/comment", JSON.stringify(comment), { headers: headers }).map(function (res) { return res.json(); });
    };
    // Đăng nhập
    VideoService.prototype.SignIn = function (login) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.post(URL_user + "signin", JSON.stringify(login), { headers: headers }).map(function (res) { return res.json(); });
    };
    VideoService.prototype.SignUp = function (signup) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.post(URL_user + "signup", JSON.stringify(signup), { headers: headers }).map(function (res) { return res.json(); });
    };
    return VideoService;
}());
VideoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.serivce.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n</div>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <div class=\"left-sidebar\">\n          <h2>Category</h2>\n          <div class=\"panel-group category-products\" id=\"accordian\">\n            <!--category-productsr-->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\n                    <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> GHOST\n                  </a>\n                </h4>\n              </div>\n              <div id=\"sportswear\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <ul>\n                    <li><a href=\"#\">Ghost USA </a></li>\n                    <li><a href=\"#\">Ghost VIETNAM </a></li>\n                    <li><a href=\"#\">Ghost KOREA </a></li>\n                    <li><a href=\"#\">Ghost JAPAN </a></li>\n                    <li><a href=\"#\">Ghost THAI </a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\n                    <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> LOVE STORY\n                  </a>\n                </h4>\n              </div>\n              <div id=\"mens\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <ul>\n                    <li><a href=\"#\">Love Story USA</a></li>\n                    <li><a href=\"#\">Love Story THAI</a></li>\n                    <li><a href=\"#\">Love Story VIETNAM</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\n                    <span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> CARTOON\n                  </a>\n                </h4>\n              </div>\n              <div id=\"womens\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <ul>\n                    <li><a href=\"#\">CARTOON USA</a></li>\n                    <li><a href=\"#\">Cartoon VIET</a></li>\n                    <li><a href=\"#\">Cartoon THAI</a></li>\n                    <li><a href=\"#\">Cartoon KOREA</a></li>\n                    <li><a href=\"#\">Cartoon UK</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <!--/category-products-->\n        </div>\n      </div>\n      <style>\n        .ng-valid[required],\n        .ng-valid.required {\n          border-left: 5px solid #42A948;\n          /* green */\n        }\n        \n        .ng-invalid:not(form) {\n          border-left: 5px solid #a94442;\n          /* red */\n        }\n        \n        h2 {\n          text-align: center;\n        }\n        \n        form {\n          margin: auto;\n          margin-bottom: 20px;\n          position: relative;\n          width: 400px;\n          height: auto;\n          font-size: 14px;\n          font-style: italic;\n          line-height: 24px;\n          font-weight: bold;\n          color: #09C;\n          text-decoration: none;\n          border-bottom-left-radius: 10px;\n          border-top-left-radius: 10px;\n          padding: 10px;\n          border-left: 3px solid #999;\n          -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\n          -moz-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\n        }\n        \n        input {\n          width: 375px;\n          font-weight: bold;\n          display: block;\n          border: 1px solid #999;\n          height: 40px;\n          -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\n          -moz-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\n        }\n        \n        textarea#feedback {\n          width: 375px;\n          height: 150px;\n          display: block;\n        }\n        \n        input.button:hover {\n          background: #000;\n          color: #09C;\n        }\n      </style>\n      <div class=\"col-sm-9 padding-right\">\n        <h2 style=\"font-weight:bold;color:#29487d\">CREATE NEW ACCOUNT</h2>\n        <form>\n          <div>\n            <span>Username</span><input id=\"name\" [(ngModel)]=\"username\" type=\"text\" #name=\"ngModel\" name=\"username\" required\n            />\n\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n              Bạn chưa nhập username\n            </div>\n            <span>Password</span><input id=\"password\" minlength=\"6\" [(ngModel)]=\"password\" #pass=\"ngModel\" type=\"password\"\n              name=\"password\" required/>\n              <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n                Bạn cần nhập password lớn hơn 6 ký tự\n              </div>\n            <span>Password-again</span><input  minlength=\"6\" [(ngModel)]=\"password_again\" #again =\"ngModel\" type=\"password\" name=\"password_again\"\n            />\n            <div [hidden]=\"again.valid || again.pristine\" class=\"alert alert-danger\">\n              Bạn cần nhập password-again lớn hơn 6 ký tự\n            </div>\n            <span>Email</span><input id=\"email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [(ngModel)]=\"email\" name=\"email\" #Email=\"ngModel\" required/>\n            <div [hidden]=\"Email.valid || Email.pristine\" class=\"alert alert-danger\">\n              Bạn cần nhập email đúng chuẩn\n            </div>\n            <input type=\"button\" class=\"btn btn-primary\" (click)=\"SignUp()\" value=\"Đăng Ký\" />\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "\t\n\t<footer id=\"footer\"><!--Footer-->\n\t\t<div class=\"footer-top\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<div class=\"companyinfo\">\n\t\t\t\t\t\t\t<h2><span>KHO</span>-PHIM</h2>\n\t\t\t\t\t\t\t<p>Kho phim lớn nhất việt nam, cam kết không quảng cáo với mọi hình thức</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"http://phimvuihd.net/tag/phim3s.net/\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/phim3s.jpg\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Phim 3s</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"http://phimmoi.net\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/phimmoi.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Phim mới</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"http://xemphimon.com\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/xemphimon.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Xem phim on</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"video-gallery text-center\">\n\t\t\t\t\t\t\t\t<a href=\"http://phimbathu.com\">\n\t\t\t\t\t\t\t\t\t<div class=\"iframe-img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/home/phimbathu.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p>Phim bất hủ</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\n\t\t<div class=\"footer-bottom\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<p class=\"pull-left\">Copyright Product of Student CTU</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</footer><!--/Footer-->\n\t"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n\t<!--header-->\n\t<!-- Trigger the modal with a button -->\n\n\t<div class=\"header_top\">\n\t\t<!--header_top-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"contactinfo\">\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"social-icons pull-right\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t<li *ngIf=\"!check\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"check\"><a href=\"#\" (click)=\"Logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li *ngIf=\"!check\"><a routerLink=\"/signup\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/postvideo\" routerLinkActive=\"active\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--/header_top-->\n\n\t<div class=\"header-middle\">\n\t\t<!--header-middle-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"logo pull-left\">\n\t\t\t\t\t\t<a routerLink=\"/\"><img src=\"images/home/logo.png\" alt=\"\" width=\"150px\" height=\"80px\" /></a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t<!--/header-middle-->\n\n\t<div class=\"header-bottom\">\n\n\t\t<!--header-bottom-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mainmenu pull-left\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav collapse navbar-collapse\">\n\t\t\t\t\t\t\t<li><a routerLink=\"/\" routerLinkActive=\"active\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a></li>\n\t\t\t\t\t\t\t<li class=\"dropdown\"><a href=\"#\">Thể Loại<i class=\"fa fa-angle-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul role=\"menu\" class=\"sub-menu\">\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-the-loai','hai-huoc']\">Phim hài hước</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-the-loai','kinh-di']\">Phim kinh dị</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-the-loai','tinh-cam']\">Phim tình cảm</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-the-loai','tam-ly']\">Phim tâm lý</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-the-loai','hoat-hinh']\">Phim hoạt hình</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"dropdown\"><a href=\"#\">Quốc gia<i class=\"fa fa-angle-down\"></i></a>\n\t\t\t\t\t\t\t\t<ul role=\"menu\" class=\"sub-menu\">\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-theo-quoc-gia','viet-nam']\">Việt nam</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-theo-quoc-gia','thai-lan']\">Thái lan</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-theo-quoc-gia','nhat-ban']\">Nhật bản</a></li>\n\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['/xem-video-theo-quoc-gia','han-quoc']\">Hàn quốc</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-3\">\n\n\t\t\t\t\t<div class=\"search_box pull-right\">\n\t\t\t\t\t\t<form (submit)=\"search()\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search\" name=\"tim\" [(ngModel)]=\"tim\" />\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!--/header-bottom-->\n\t<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\" style=\"background-color:#FE980F\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\" style=\"color:#fff\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> SIGN IN</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"username\">Username:</label>\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"Username\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"pwd\">Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"pwd\" name=\"password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn\" data-dismiss=\"modal\" (click)=\"Login()\">ĐĂNG NHẬP</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</header>\n<!--/header-->"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!edited_hinh\">\n    <h2>Thêm Video</h2>\n    <div class=\"form-group\">\n      <label>Link video</label>\n      <input type=\"file\" accept=\"video/mp4,video/x-m4v,video/*\" id=\"video\" [(ngModel)]=\"link\" name=\"link\" class=\"form-control\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"upload();showHinh()\">Thêm Video</button>\n    </div>\n  </div>\n  <div *ngIf=\"edited_hinh && !edited_thongtin\">\n    <h2>Thêm Hình Đại Diện</h2>\n    <div class=\"form-group\">\n      <label>Hình đại diện</label>\n      <input type=\"file\" accept=\"image/*\" id=\"hinh\" [(ngModel)]=\"hinh\" name=\"hinh\" class=\"form-control\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"upload_hinh();showThongtin()\">Thêm Hình Đại Diện</button>\n    </div>\n  </div>\n  <div *ngIf=\"edited_thongtin\">\n\n    <h2>Thêm bài viết</h2>\n    <form >\n      <div class=\"form-group\">\n        <label> Tên video</label>\n        <input type=\"text\" [(ngModel)]=\"ten\" name=\"name\" class=\"form-control\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Thể loại</label>\n       <!-- <input type=\"text\" class=\"form-control\"> -->\n        <select class=\"selectpicker form-control\"  [(ngModel)]=\"the_loai\" name=\"the_loai\" required>\n  <option value=\"hai-huoc\" selected>Hài hước</option>\n  <option value=\"kinh-di\">Kinh dị</option>\n  <option value=\"tinh-cam\">Tình cảm</option>\n  <option value=\"tam-ly\">Tâm lý</option>\n  <option value=\"hoat-hinh\">Hoạt hình</option>\n</select>\n\n      </div>\n      <div class=\"form-group\">\n        <label>Quốc gia</label>\n        <!--<input type=\"type\" [(ngModel)]=\"quoc_gia\" name=\"quoc_gia\" class=\"form-control\"> -->\n         <select class=\"selectpicker form-control\"   [(ngModel)]=\"quoc_gia\" name=\"quoc_gia\" required>\n  <option value=\"viet-nam\" selected>Việt Nam</option>\n  <option value=\"thai-lan\">Thái Lan</option>\n  <option value=\"nhat-ban\">Nhật Bản</option>\n  <option value=\"han-quoc\">Hàn Quốc</option>\n  <option value=\"my\">Mỹ</option>\n</select>\n      </div>\n      <div class=\"form-group\">\n        <label>Diễn viên</label>\n        <input type=\"type\" [(ngModel)]=\"dien_vien\" name=\"dien_vien\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Thời lượng</label>\n        <input type=\"number\" [(ngModel)]=\"thoi_luong\" name=\"thoi_luong\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Năm phát hành</label>\n        <input type=\"date\" [(ngModel)]=\"nam_phat_hanh\" name=\"nam_phat_hanh\" class=\"form-control\" style=\"width: 50%\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onAddProductSubmit()\">Thêm Thông Tin Mô Tả</button>\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<section>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"left-sidebar\">\n\t\t\t\t\t<h2>Category</h2>\n\t\t\t\t\t<div class=\"panel-group category-products\" id=\"accordian\">\n\t\t\t\t\t\t<!--category-productsr-->\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> GHOST\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"sportswear\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost USA </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost VIETNAM </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost KOREA </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost JAPAN </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost THAI </a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> LOVE STORY\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"mens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story USA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story THAI</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story VIETNAM</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> CARTOON\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"womens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">CARTOON USA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon VIET</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon THAI</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon KOREA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon UK</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--/category-products-->\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-9 padding-right\">\n\t\t\t\t<div class=\"features_items\">\n\t\t\t\t\t<h2 class=\"title text-center\">Tất Cả Phim Liên Quan Tìm Thấy</h2>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let video of video\">\n\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\n\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{video.hinh}}\" alt=\"\" height=\"200px\" />\n\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\n\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Ngày chiếu: {{video.nam_phat_hanh}}</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<section>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"left-sidebar\">\n\t\t\t\t\t<h2>Category</h2>\n\t\t\t\t\t<div class=\"panel-group category-products\" id=\"accordian\">\n\t\t\t\t\t\t<!--category-productsr-->\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> GHOST\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"sportswear\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost USA </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost VIETNAM </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost KOREA </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost JAPAN </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost THAI </a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> LOVE STORY\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"mens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story USA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story THAI</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story VIETNAM</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> CARTOON\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"womens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">CARTOON USA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon VIET</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon THAI</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon KOREA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon UK</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--/category-products-->\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-9 padding-right\">\n\t\t\t\t<div class=\"features_items\">\n\t\t\t\t\t<!--features_items-->\n\t\t\t\t\t<h2 class=\"title text-center\">Phim Mới</h2>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let video of video\">\n\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\n\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{video.hinh}}\" alt=\"\" height=\"200px\" />\n\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\n\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\n\t\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"choose\">\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Ngày chiếu: {{video.nam_phat_hanh}}</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\t\t\t\t<!--features_items-->\n\n\t\t\t\t<div class=\"category-tab\">\n\t\t\t\t\t<!--category-tab-->\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#tshirt\" data-toggle=\"tab\">Hài Hước</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#blazers\" data-toggle=\"tab\">Kinh Dị</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#sunglass\" data-toggle=\"tab\">Tình Cảm</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#kids\" data-toggle=\"tab\">Tâm Lý</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#poloshirt\" data-toggle=\"tab\">Hoạt Hình</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t<div class=\"tab-pane fade active in\" id=\"tshirt\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let haihuoc of haihuoc\">\n\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{haihuoc.hinh}}\" height=\"150px\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{haihuoc.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',haihuoc.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"blazers\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let kinhdi of kinhdi\">\n\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{kinhdi.hinh}}\" height=\"150px\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{kinhdi.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',kinhdi.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"sunglass\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let tinhcam of tinhcam\">\n\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{tinhcam.hinh}}\" height=\"150px\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{tinhcam.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',tinhcam.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"kids\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let tamly of tamly\">\n\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{tamly.hinh}}\" height=\"150px\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{tamly.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',tamly.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"poloshirt\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let hoathinh of hoathinh\">\n\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\">\n\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{hoathinh.hinh}}\" height=\"150px\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{hoathinh.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',hoathinh.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--/category-tab-->\n\t\t\t\t<div class=\"recommended_items\">\n\t\t\t\t\t<!--recommended_items-->\n\t\t\t\t\t<h2 class=\"title text-center\">Nhiều phim khác</h2>\n\n\t\t\t\t\t<div id=\"recommended-item-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let hoathinh of hoathinh\">\n\t\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\" style=\"height:274px\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{hoathinh.hinh}}\" alt=\"\" height=\"155px\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{hoathinh.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Ngày phát hành: {{hoathinh.nam_phat_hanh}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',hoathinh.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let tamly of tamly\">\n\t\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\" style=\"height:274px\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{tamly.hinh}}\" alt=\"\" height=\"155px\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{tamly.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Ngày phát hành: {{tamly.nam_phat_hanh}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',tamly.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let tinhcam of tinhcam\">\n\t\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\" style=\"height:274px\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{tinhcam.hinh}}\" alt=\"\" height=\"155px\" />\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{tinhcam.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Ngày phát hành: {{tinhcam.nam_phat_hanh}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',tinhcam.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"left recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"prev\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"right recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"next\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--/recommended_items-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<section>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"left-sidebar\">\n\t\t\t\t\t<h2>Category</h2>\n\t\t\t\t\t<div class=\"panel-group category-products\" id=\"accordian\">\n\t\t\t\t\t\t<!--category-productsr-->\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> GHOST\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"sportswear\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost USA </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost VIETNAM </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost KOREA </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost JAPAN </a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost THAI </a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> LOVE STORY\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"mens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story USA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story THAI</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story VIETNAM</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> CARTOON\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"womens\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">CARTOON USA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon VIET</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon THAI</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon KOREA</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon UK</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--/category-products-->\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-9 padding-right\">\n\t\t\t\t<div class=\"product-details\">\n\t\t\t\t\t<!--product-details-->\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"view-product\" *ngFor=\"let video of video\">\n\t\t\t\t\t\t\t<video width=\"100%\" height=\"400px\" controls autoplay>\n\t\t\t\t\t\t\t\t<source src=\"uploads/{{video.link}}\" type=\"video/mp4\">\n\t\t\t\t\t\t\t</video>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!--/product-details-->\n\n\t\t\t\t<div class=\"category-tab shop-details-tab\">\n\t\t\t\t\t<!--category-tab-->\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t<li><a href=\"#details\" data-toggle=\"tab\">Phim khác</a></li>\n\n\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#reviews\" data-toggle=\"tab\">Bình luận về phim này</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"details\">\n\t\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let phimkhac of phimkhac\">\n\t\t\t\t\t\t\t\t<div class=\"product-image-wrapper\" style=\"height:300px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"single-products\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{phimkhac.hinh}}\" alt=\"\" height=\"200px\" />\n\t\t\t\t\t\t\t\t\t\t\t<p>Tên : {{phimkhac.ten}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',phimkhac.ten]\"><i class=\"fa fa-eye\"></i>Xem</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"tab-pane fade active in\" id=\"reviews\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-user\"></i>EUGEN</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-clock-o\"></i>12:41 PM</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-calendar-o\"></i>31 DEC 2014</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<p>Bình luận của bạn giúp chúng tôi hoàn thiện hơn xin cảm ơn bạn đã xem phim và theo dỗi website của chúng tôi, chúng\n\t\t\t\t\t\t\t\t\ttôi sẽ update nhiều phim hơn trong thời gian gần nhất .\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t<p class=\"comment\" *ngFor=\"let comment_list of comment_list\">\n\t\t\t\t\t\t\t\t\t<span style=\"color:#128ee9; font-weight:bold\">{{comment_list.name}}:</span>\n\t\t\t\t\t\t\t\t\t<span>{{comment_list.comment}}</span>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div id=\"messages\" *ngFor=\"let message of messages\">\n\t\t\t\t\t\t\t\t\t<span style=\"color:#128ee9; font-weight:bold\">{{message.name}}:</span>\n\t\t\t\t\t\t\t\t\t<span>{{message.comment}}</span><br><br>\n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t<p><b>Bình luận dưới đây</b></p>\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"edited_hinh\">\n\t\t\t\t\t\t\t\t\tBạn vui lòng đợi <strong>5s</strong> tiếp tục bình luận.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"show_err\">\n\t\t\t\t\t\t\t\t\tBạn nhập sai email hoặc thiếu thông tin\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"name\" [(ngModel)]=\"name\"  placeholder=\"Your Name\"/>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" [(ngModel)]=\"email\"  placeholder=\"Email Address\"/>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<textarea name=\"comment\" [(ngModel)]=\"comment\"></textarea>\n\t\t\t\t\t\t\t\t\t<b>Rating: </b> <img src=\"images/product-details/rating.png\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"edited_hinh\" class=\"btn btn-default pull-right\" (click)=\"binh_luan() ; showButton();\">\n\t\t\t\t\t\t\t\t\t\t\tBình Luận\n\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--/category-tab-->\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<section>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t<div class=\"left-sidebar\">\r\n\t\t\t\t\t<h2>Category</h2>\r\n\t\t\t\t\t<div class=\"panel-group category-products\" id=\"accordian\">\r\n\t\t\t\t\t\t<!--category-productsr-->\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> GHOST\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"sportswear\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost USA </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost VIETNAM </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost KOREA </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost JAPAN </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost THAI </a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> LOVE STORY\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"mens\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story USA</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story THAI</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story VIETNAM</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> CARTOON\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"womens\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">CARTOON USA</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon VIET</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon THAI</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon KOREA</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon UK</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--/category-products-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-sm-9 padding-right\">\r\n\t\t\t\t<div class=\"features_items\">\r\n\t\t\t\t\t<h2 class=\"title text-center\">Phim Theo Thể Loại Mới Nhất</h2>\r\n\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let video of video\">\r\n\t\t\t\t\t\t<div class=\"product-image-wrapper\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"single-products\">\r\n\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{video.hinh}}\" alt=\"\" height=\"200px\" />\r\n\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\r\n\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\r\n\t\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"choose\">\r\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\r\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Ngày chiếu: {{video.nam_phat_hanh}}</a></li>\r\n\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<section>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t<div class=\"left-sidebar\">\r\n\t\t\t\t\t<h2>Category</h2>\r\n\t\t\t\t\t<div class=\"panel-group category-products\" id=\"accordian\">\r\n\t\t\t\t\t\t<!--category-productsr-->\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#sportswear\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> GHOST\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"sportswear\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost USA </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost VIETNAM </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost KOREA </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost JAPAN </a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Ghost THAI </a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#mens\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> LOVE STORY\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"mens\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story USA</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story THAI</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Love Story VIETNAM</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordian\" href=\"#womens\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge pull-right\"><i class=\"fa fa-plus\"></i></span> CARTOON\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"womens\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">CARTOON USA</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon VIET</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon THAI</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon KOREA</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Cartoon UK</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--/category-products-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-sm-9 padding-right\">\r\n\t\t\t\t<div class=\"features_items\">\r\n\t\t\t\t\t<h2 class=\"title text-center\">Phim Theo Quốc Gia Mới Nhất</h2>\r\n\t\t\t\t\t<div class=\"col-sm-4\" *ngFor=\"let video of video\">\r\n\t\t\t\t\t\t<div class=\"product-image-wrapper\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"single-products\">\r\n\t\t\t\t\t\t\t\t<div class=\"productinfo text-center\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"uploads/{{video.hinh}}\" alt=\"\" height=\"200px\" />\r\n\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\r\n\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-overlay\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>{{video.thoi_luong}} phút</h2>\r\n\t\t\t\t\t\t\t\t\t\t<p>Tên : {{video.ten}}</p>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/video',video.ten]\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-eye\"></i>Xem</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"choose\">\r\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-pills nav-justified\">\r\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-plus-square\"></i>Ngày chiếu: {{video.nam_phat_hanh}}</a></li>\r\n\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateComment = function (comment) {
        if (comment.name == undefined || comment.email == undefined || comment.comment == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (login) {
        if (login.username == undefined || login.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateSignUp = function (signup) {
        if (signup.username == undefined || signup.password == undefined || signup.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.bundle.js.map