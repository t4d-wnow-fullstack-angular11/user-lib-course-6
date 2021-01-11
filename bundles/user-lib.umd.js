(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/material/list'), require('@angular/material/toolbar'), require('@angular/material/sidenav'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/table'), require('@angular/material/snack-bar'), require('@t4d-wnow/shared-lib'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('lodash-es')) :
    typeof define === 'function' && define.amd ? define('user-lib', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/common/http', '@angular/material/list', '@angular/material/toolbar', '@angular/material/sidenav', '@angular/material/icon', '@angular/material/card', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/menu', '@angular/material/table', '@angular/material/snack-bar', '@t4d-wnow/shared-lib', '@angular/router', 'rxjs', 'rxjs/operators', 'lodash-es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['user-lib'] = {}, global.ng.common, global.ng.core, global.ng.forms, global.ng.common.http, global.ng.material.list, global.ng.material.toolbar, global.ng.material.sidenav, global.ng.material.icon, global.ng.material.card, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.menu, global.ng.material.table, global.ng.material.snackBar, global['t4d-wnow-shared-lib'], global.ng.router, global.rxjs, global.rxjs.operators, global['lodash-es']));
}(this, (function (exports, i2, i0, i1, i1$1, i7, toolbar, sidenav, i6, i6$1, i5, i3, i4, i5$1, table, i2$1, sharedLib, i1$2, rxjs, operators, lodashEs) { 'use strict';

    function ChangePasswordFormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "mat-icon", 10);
            i0.ɵɵtext(2, "error");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " The new password and the confirm password do not match. ");
            i0.ɵɵelementEnd();
        }
    }
    var ChangePasswordFormComponent = /** @class */ (function () {
        function ChangePasswordFormComponent(fb) {
            this.fb = fb;
            this.changePassword = new i0.EventEmitter();
        }
        ChangePasswordFormComponent.prototype.ngOnInit = function () {
            this.changePasswordForm = this.fb.group({
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }, { validators: [sharedLib.confirmValue('newPassword', 'confirmPassword')] });
        };
        ChangePasswordFormComponent.prototype.doChangePassword = function () {
            if (this.changePasswordForm.valid) {
                this.changePassword.emit(this.changePasswordForm.value);
            }
        };
        return ChangePasswordFormComponent;
    }());
    ChangePasswordFormComponent.ɵfac = function ChangePasswordFormComponent_Factory(t) { return new (t || ChangePasswordFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    ChangePasswordFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordFormComponent, selectors: [["app-change-password-form"]], outputs: { changePassword: "changePassword" }, decls: 20, vars: 2, consts: [[1, "change-password-form", 3, "formGroup"], ["class", "mat-error error", 4, "ngIf"], [1, "form-field"], ["appearance", "outline"], ["matInput", "", "type", "password", "formControlName", "currentPassword"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], [1, "buttons"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-error", "error"], ["aria-hidden", "false", "aria-label", "Error"]], template: function ChangePasswordFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵtemplate(1, ChangePasswordFormComponent_div_1_Template, 4, 0, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "mat-form-field", 3);
                i0.ɵɵelementStart(4, "mat-label");
                i0.ɵɵtext(5, "Current Password");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 2);
                i0.ɵɵelementStart(8, "mat-form-field", 3);
                i0.ɵɵelementStart(9, "mat-label");
                i0.ɵɵtext(10, "New Password");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(11, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 2);
                i0.ɵɵelementStart(13, "mat-form-field", 3);
                i0.ɵɵelementStart(14, "mat-label");
                i0.ɵɵtext(15, "Confirm Password");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(16, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 7);
                i0.ɵɵelementStart(18, "button", 8);
                i0.ɵɵlistener("click", function ChangePasswordFormComponent_Template_button_click_18_listener() { return ctx.doChangePassword(); });
                i0.ɵɵtext(19, " Change Password ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.changePasswordForm);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.changePasswordForm == null ? null : ctx.changePasswordForm.errors == null ? null : ctx.changePasswordForm.errors.confirmValue);
            }
        }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i5.MatButton, i6.MatIcon], styles: [".error[_ngcontent-%COMP%]{padding:10px;text-align:center}.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.buttons[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:4px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChangePasswordFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-change-password-form',
                        templateUrl: './change-password-form.component.html',
                        styleUrls: ['./change-password-form.component.css']
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, { changePassword: [{
                    type: i0.Output
                }] });
    })();

    var CurrentUser = /** @class */ (function () {
        function CurrentUser(username, userKind, displayName) {
            this.username = username;
            this.userKind = userKind;
            this.displayName = displayName;
            this.roles = [];
        }
        CurrentUser.prototype.addRole = function (roleName) {
            if (!roleName)
                throw new Error('role name cannot be empty');
            this.roles.push(roleName);
            return this;
        };
        CurrentUser.prototype.hasRole = function (roleNames) {
            return lodashEs.intersection(this.roles, roleNames).length > 0;
        };
        return CurrentUser;
    }());

    var UsersService = /** @class */ (function () {
        function UsersService(httpClient) {
            this.httpClient = httpClient;
            this.accessToken = null;
            this.currentUser = null;
        }
        UsersService.prototype.loginEmployee = function (username, password) {
            var _this = this;
            return this.httpClient
                .post('/api/users/login', { username: username, password: password, kind: 'employee' })
                .pipe(operators.tap(function (userResult) {
                _this.accessToken = userResult.accessToken;
                localStorage.refreshToken = userResult.refreshToken;
            }), operators.map(function (userResult) {
                var currentUser = new CurrentUser(userResult.username, userResult.userKind, userResult.displayName);
                userResult.roles.forEach(function (role) { return currentUser.addRole(role); });
                return currentUser;
            }), operators.tap(function (currentUser) {
                _this.currentUser = currentUser;
            }));
        };
        UsersService.prototype.refreshUser = function () {
            var _this = this;
            return this.httpClient.get('/api/users/refresh').pipe(operators.tap(function (userRefresh) {
                _this.accessToken = userRefresh.accessToken;
                localStorage.refreshToken = userRefresh.refreshToken;
            }), operators.map(function () { return rxjs.of(true); }));
        };
        UsersService.prototype.changePassword = function (username, userKind, oldPassword, newPassword) {
            return this.httpClient.post('/api/users/change-password', {
                username: username, userKind: userKind, oldPassword: oldPassword, newPassword: newPassword,
            });
        };
        UsersService.prototype.getCurrentUser = function () {
            return this.currentUser;
        };
        UsersService.prototype.getAccessToken = function () {
            return this.accessToken;
        };
        UsersService.prototype.getRefreshToken = function () {
            return localStorage.refreshToken;
        };
        UsersService.prototype.logoutUser = function () {
            this.accessToken = null;
            this.currentUser = null;
            localStorage.refreshToken = null;
        };
        return UsersService;
    }());
    UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject(i1$1.HttpClient)); };
    UsersService.ɵprov = i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UsersService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1$1.HttpClient }]; }, null);
    })();

    function CurrentUserComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵelementStart(2, "mat-icon", 2);
            i0.ɵɵtext(3, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-menu", null, 3);
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function CurrentUserComponent_div_0_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.navigateToProfile(); });
            i0.ɵɵtext(9, "Profile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function CurrentUserComponent_div_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.navigateToLogout(); });
            i0.ɵɵtext(11, "Logout");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r2 = i0.ɵɵreference(7);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matMenuTriggerFor", _r2);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate2("", ctx_r0.displayName, " (", ctx_r0.username, ")");
        }
    }
    function CurrentUserComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "button", 5);
            i0.ɵɵlistener("click", function CurrentUserComponent_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.navigateToLogin(); });
            i0.ɵɵelementStart(2, "mat-icon", 2);
            i0.ɵɵtext(3, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Login");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var CurrentUserComponent = /** @class */ (function () {
        function CurrentUserComponent(router, usersSvc) {
            this.router = router;
            this.usersSvc = usersSvc;
        }
        Object.defineProperty(CurrentUserComponent.prototype, "loggedIn", {
            get: function () {
                return !!this.usersSvc.getCurrentUser();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserComponent.prototype, "displayName", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.displayName) !== null && _b !== void 0 ? _b : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserComponent.prototype, "username", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : '';
            },
            enumerable: false,
            configurable: true
        });
        CurrentUserComponent.prototype.ngOnInit = function () {
        };
        CurrentUserComponent.prototype.navigateToProfile = function () {
            return this.router.navigateByUrl('/profile');
        };
        CurrentUserComponent.prototype.navigateToLogout = function () {
            return this.router.navigateByUrl('/logout');
        };
        CurrentUserComponent.prototype.navigateToLogin = function () {
            return this.router.navigateByUrl('/login');
        };
        return CurrentUserComponent;
    }());
    CurrentUserComponent.ɵfac = function CurrentUserComponent_Factory(t) { return new (t || CurrentUserComponent)(i0.ɵɵdirectiveInject(i1$2.Router), i0.ɵɵdirectiveInject(UsersService)); };
    CurrentUserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CurrentUserComponent, selectors: [["app-current-user"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "User Account"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "click"]], template: function CurrentUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CurrentUserComponent_div_0_Template, 12, 3, "div", 0);
                i0.ɵɵtemplate(1, CurrentUserComponent_div_1_Template, 6, 0, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.loggedIn);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.loggedIn);
            }
        }, directives: [i2.NgIf, i5.MatButton, i5$1.MatMenuTrigger, i6.MatIcon, i5$1.MatMenu, i5$1.MatMenuItem], styles: ["mat-icon[_ngcontent-%COMP%]{margin-right:4px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CurrentUserComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-current-user',
                        templateUrl: './current-user.component.html',
                        styleUrls: ['./current-user.component.css']
                    }]
            }], function () { return [{ type: i1$2.Router }, { type: UsersService }]; }, null);
    })();

    function LoginFormComponent_mat_card_0_mat_list_item_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-item", 15);
            i0.ɵɵelementStart(1, "mat-icon", 16);
            i0.ɵɵtext(2, "arrow_right");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Username is required. ");
            i0.ɵɵelementEnd();
        }
    }
    function LoginFormComponent_mat_card_0_mat_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list-item", 15);
            i0.ɵɵelementStart(1, "mat-icon", 16);
            i0.ɵɵtext(2, "arrow_right");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Password is required. ");
            i0.ɵɵelementEnd();
        }
    }
    function LoginFormComponent_mat_card_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 10);
            i0.ɵɵelementStart(1, "mat-card-header", 11);
            i0.ɵɵelementStart(2, "mat-card-title", 12);
            i0.ɵɵtext(3, " Errors ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-card-content");
            i0.ɵɵelementStart(5, "mat-list", 13);
            i0.ɵɵtemplate(6, LoginFormComponent_mat_card_0_mat_list_item_6_Template, 4, 0, "mat-list-item", 14);
            i0.ɵɵtemplate(7, LoginFormComponent_mat_card_0_mat_list_item_7_Template, 4, 0, "mat-list-item", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx_r0.showUsernameError);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.showPasswordError);
        }
    }
    function LoginFormComponent_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "Username is required");
            i0.ɵɵelementEnd();
        }
    }
    function LoginFormComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "Password is required");
            i0.ɵɵelementEnd();
        }
    }
    var LoginFormComponent = /** @class */ (function () {
        function LoginFormComponent(fb) {
            this.fb = fb;
            this.loginFormSubmitted = false;
            this.login = new i0.EventEmitter();
            this.clear = new i0.EventEmitter();
        }
        Object.defineProperty(LoginFormComponent.prototype, "showLoginFormValidationSummary", {
            get: function () {
                return this.loginForm.invalid && this.loginFormSubmitted;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginFormComponent.prototype, "showUsernameError", {
            get: function () {
                var usernameFormControl = this.loginForm.get('username');
                return usernameFormControl.invalid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginFormComponent.prototype, "showPasswordError", {
            get: function () {
                var passwordFormControl = this.loginForm.get('password');
                return passwordFormControl.invalid;
            },
            enumerable: false,
            configurable: true
        });
        // username: 'adodsworth'
        // password: 'testpass'
        LoginFormComponent.prototype.ngOnInit = function () {
            this.loginForm = this.fb.group({
                username: ['adodsworth', { validators: [i1.Validators.required] }],
                password: ['testpass', { validators: [i1.Validators.required] }],
            });
        };
        LoginFormComponent.prototype.doLogin = function () {
            this.loginFormSubmitted = true;
            if (this.loginForm.invalid)
                return;
            this.login.emit(this.loginForm.value);
        };
        LoginFormComponent.prototype.doClear = function () {
            this.loginForm.reset();
            this.clear.emit();
        };
        return LoginFormComponent;
    }());
    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    LoginFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginFormComponent, selectors: [["app-login-form"]], outputs: { login: "login", clear: "clear" }, decls: 19, vars: 4, consts: [["class", "validation-summary-card", 4, "ngIf"], [1, "login-form", 3, "formGroup", "submit"], [1, "form-field"], ["appearance", "outline"], ["matInput", "", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "formControlName", "password"], [1, "buttons"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", 3, "click"], [1, "validation-summary-card"], [1, "validation-summary-header"], [1, "validation-summary-title"], ["role", "list", "dense", ""], ["role", "listitem", 4, "ngIf"], ["role", "listitem"], ["mat-list-icon", ""]], template: function LoginFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, LoginFormComponent_mat_card_0_Template, 8, 2, "mat-card", 0);
                i0.ɵɵelementStart(1, "form", 1);
                i0.ɵɵlistener("submit", function LoginFormComponent_Template_form_submit_1_listener() { return ctx.doLogin(); });
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "mat-form-field", 3);
                i0.ɵɵelementStart(4, "mat-label");
                i0.ɵɵtext(5, "Username");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "input", 4);
                i0.ɵɵtemplate(7, LoginFormComponent_mat_error_7_Template, 2, 0, "mat-error", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 2);
                i0.ɵɵelementStart(9, "mat-form-field", 3);
                i0.ɵɵelementStart(10, "mat-label");
                i0.ɵɵtext(11, "Password");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(12, "input", 6);
                i0.ɵɵtemplate(13, LoginFormComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 7);
                i0.ɵɵelementStart(15, "button", 8);
                i0.ɵɵtext(16, "Login");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "button", 9);
                i0.ɵɵlistener("click", function LoginFormComponent_Template_button_click_17_listener() { return ctx.doClear(); });
                i0.ɵɵtext(18, "Clear");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.showLoginFormValidationSummary);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.loginForm);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", ctx.showUsernameError);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", ctx.showPasswordError);
            }
        }, directives: [i2.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatFormField, i3.MatLabel, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i5.MatButton, i6$1.MatCard, i6$1.MatCardHeader, i6$1.MatCardTitle, i6$1.MatCardContent, i7.MatList, i7.MatListItem, i6.MatIcon, i7.MatListIconCssMatStyler, i3.MatError], styles: [".buttons[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]{padding:6px 0;text-align:center}.buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:4px}.validation-summary-card[_ngcontent-%COMP%]{margin:0 auto 20px;max-width:400px;padding:0}.validation-summary-header[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.validation-summary-title[_ngcontent-%COMP%]{font-size:1.1rem;margin:0;padding:12px}.mat-card-content[_ngcontent-%COMP%]{padding:8px 0}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item.mat-list-item-with-avatar[_ngcontent-%COMP%], .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option.mat-list-item-with-avatar[_ngcontent-%COMP%]{height:32px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:.9rem}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LoginFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-login-form',
                        templateUrl: './login-form.component.html',
                        styleUrls: ['./login-form.component.css']
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, { login: [{
                    type: i0.Output
                }], clear: [{
                    type: i0.Output
                }] });
    })();

    var UserProfileComponent = /** @class */ (function () {
        function UserProfileComponent() {
            this.userProfile = null;
        }
        UserProfileComponent.prototype.ngOnInit = function () {
        };
        return UserProfileComponent;
    }());
    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
    UserProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserProfileComponent, selectors: [["app-user-profile"]], inputs: { userProfile: "userProfile" }, decls: 7, vars: 3, template: function UserProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "div");
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div");
                i0.ɵɵtext(4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div");
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Username: ", ctx.userProfile == null ? null : ctx.userProfile.username, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Display Name: ", ctx.userProfile == null ? null : ctx.userProfile.displayName, "");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Roles: ", ctx.userProfile == null ? null : ctx.userProfile.roles == null ? null : ctx.userProfile.roles.join(", "), "");
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserProfileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-user-profile',
                        templateUrl: './user-profile.component.html',
                        styleUrls: ['./user-profile.component.css']
                    }]
            }], function () { return []; }, { userProfile: [{
                    type: i0.Input
                }] });
    })();

    var UserLibModule = /** @class */ (function () {
        function UserLibModule() {
        }
        return UserLibModule;
    }());
    UserLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: UserLibModule });
    UserLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UserLibModule_Factory(t) { return new (t || UserLibModule)(); }, imports: [[
                i2.CommonModule,
                i1.ReactiveFormsModule,
                i1$1.HttpClientModule,
                i7.MatListModule,
                toolbar.MatToolbarModule,
                sidenav.MatSidenavModule,
                i5.MatButtonModule,
                i6.MatIconModule,
                i6$1.MatCardModule,
                i3.MatFormFieldModule,
                i4.MatInputModule,
                i5$1.MatMenuModule,
                table.MatTableModule,
                i2$1.MatSnackBarModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UserLibModule, { declarations: [ChangePasswordFormComponent,
                CurrentUserComponent,
                LoginFormComponent,
                UserProfileComponent], imports: [i2.CommonModule,
                i1.ReactiveFormsModule,
                i1$1.HttpClientModule,
                i7.MatListModule,
                toolbar.MatToolbarModule,
                sidenav.MatSidenavModule,
                i5.MatButtonModule,
                i6.MatIconModule,
                i6$1.MatCardModule,
                i3.MatFormFieldModule,
                i4.MatInputModule,
                i5$1.MatMenuModule,
                table.MatTableModule,
                i2$1.MatSnackBarModule], exports: [ChangePasswordFormComponent,
                CurrentUserComponent,
                LoginFormComponent,
                UserProfileComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ChangePasswordFormComponent,
                            CurrentUserComponent,
                            LoginFormComponent,
                            UserProfileComponent,
                        ],
                        imports: [
                            i2.CommonModule,
                            i1.ReactiveFormsModule,
                            i1$1.HttpClientModule,
                            i7.MatListModule,
                            toolbar.MatToolbarModule,
                            sidenav.MatSidenavModule,
                            i5.MatButtonModule,
                            i6.MatIconModule,
                            i6$1.MatCardModule,
                            i3.MatFormFieldModule,
                            i4.MatInputModule,
                            i5$1.MatMenuModule,
                            table.MatTableModule,
                            i2$1.MatSnackBarModule,
                        ],
                        exports: [
                            ChangePasswordFormComponent,
                            CurrentUserComponent,
                            LoginFormComponent,
                            UserProfileComponent,
                        ],
                    }]
            }], null, null);
    })();

    var AllowedRolesGuardService = /** @class */ (function () {
        function AllowedRolesGuardService(usersSvc, snackBar) {
            this.usersSvc = usersSvc;
            this.snackBar = snackBar;
        }
        AllowedRolesGuardService.prototype.canActivate = function (route, state) {
            var _a;
            if (!((_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.hasRole(route.data.roles))) {
                var snackBarRef_1 = this.snackBar.open("You are not allowed to navigate to the " + route.data.title + ".", 'Dismiss');
                snackBarRef_1.onAction().subscribe(function () {
                    snackBarRef_1.dismiss();
                });
                return false;
            }
            else {
                return true;
            }
        };
        return AllowedRolesGuardService;
    }());
    AllowedRolesGuardService.ɵfac = function AllowedRolesGuardService_Factory(t) { return new (t || AllowedRolesGuardService)(i0.ɵɵinject(UsersService), i0.ɵɵinject(i2$1.MatSnackBar)); };
    AllowedRolesGuardService.ɵprov = i0.ɵɵdefineInjectable({ token: AllowedRolesGuardService, factory: AllowedRolesGuardService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AllowedRolesGuardService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: UsersService }, { type: i2$1.MatSnackBar }]; }, null);
    })();

    var AuthorizationInterceptorService = /** @class */ (function () {
        function AuthorizationInterceptorService(usersSvc) {
            this.usersSvc = usersSvc;
        }
        AuthorizationInterceptorService.prototype.withAccessToken = function (req) {
            return req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getAccessToken()),
            });
        };
        AuthorizationInterceptorService.prototype.withRefreshToken = function (req) {
            return req.clone({
                method: 'GET',
                headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getRefreshToken()),
            });
        };
        AuthorizationInterceptorService.prototype.intercept = function (req, next) {
            var _this = this;
            if (req.url.endsWith('/api/users/login')) {
                return next.handle(req);
            }
            if (req.url.endsWith('/api/users/refresh')) {
                return next.handle(this.withRefreshToken(req));
            }
            return next.handle(this.withAccessToken(req)).pipe(operators.catchError(function (err, caught) {
                if (err instanceof i1$1.HttpErrorResponse) {
                    if (err.status === 401) {
                        return _this.usersSvc.refreshUser()
                            .pipe(operators.switchMap(function () { return next.handle(_this.withAccessToken(req)); }));
                    }
                    else {
                        return rxjs.throwError(err);
                    }
                }
                return caught;
            }));
        };
        return AuthorizationInterceptorService;
    }());
    AuthorizationInterceptorService.ɵfac = function AuthorizationInterceptorService_Factory(t) { return new (t || AuthorizationInterceptorService)(i0.ɵɵinject(UsersService)); };
    AuthorizationInterceptorService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthorizationInterceptorService, factory: AuthorizationInterceptorService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthorizationInterceptorService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: UsersService }]; }, null);
    })();

    var LoggedInGuardService = /** @class */ (function () {
        function LoggedInGuardService(usersSvc, router) {
            this.usersSvc = usersSvc;
            this.router = router;
        }
        LoggedInGuardService.prototype.canActivate = function (route, state) {
            if (!this.usersSvc.getCurrentUser()) {
                return this.router.parseUrl('/login');
            }
            else {
                return true;
            }
        };
        return LoggedInGuardService;
    }());
    LoggedInGuardService.ɵfac = function LoggedInGuardService_Factory(t) { return new (t || LoggedInGuardService)(i0.ɵɵinject(UsersService), i0.ɵɵinject(i1$2.Router)); };
    LoggedInGuardService.ɵprov = i0.ɵɵdefineInjectable({ token: LoggedInGuardService, factory: LoggedInGuardService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LoggedInGuardService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: UsersService }, { type: i1$2.Router }]; }, null);
    })();

    /*
     * Public API Surface of user-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AllowedRolesGuardService = AllowedRolesGuardService;
    exports.AuthorizationInterceptorService = AuthorizationInterceptorService;
    exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
    exports.CurrentUser = CurrentUser;
    exports.CurrentUserComponent = CurrentUserComponent;
    exports.LoggedInGuardService = LoggedInGuardService;
    exports.LoginFormComponent = LoginFormComponent;
    exports.UserLibModule = UserLibModule;
    exports.UserProfileComponent = UserProfileComponent;
    exports.UsersService = UsersService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=user-lib.umd.js.map
