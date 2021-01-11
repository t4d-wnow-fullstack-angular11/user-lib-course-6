import { NgIf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, EventEmitter, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵtemplate, ɵɵelement, ɵɵlistener, ɵɵproperty, ɵɵadvance, ɵsetClassMetadata, Component, Output, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵreference, ɵɵtextInterpolate2, ɵɵtextInterpolate1, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MatList, MatListItem, MatListIconCssMatStyler, MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatMenuTrigger, MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { confirmValue } from '@t4d-wnow/shared-lib';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { intersection } from 'lodash-es';

function ChangePasswordFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "mat-icon", 10);
    ɵɵtext(2, "error");
    ɵɵelementEnd();
    ɵɵtext(3, " The new password and the confirm password do not match. ");
    ɵɵelementEnd();
} }
class ChangePasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.changePassword = new EventEmitter();
    }
    ngOnInit() {
        this.changePasswordForm = this.fb.group({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        }, { validators: [confirmValue('newPassword', 'confirmPassword')] });
    }
    doChangePassword() {
        if (this.changePasswordForm.valid) {
            this.changePassword.emit(this.changePasswordForm.value);
        }
    }
}
ChangePasswordFormComponent.ɵfac = function ChangePasswordFormComponent_Factory(t) { return new (t || ChangePasswordFormComponent)(ɵɵdirectiveInject(FormBuilder)); };
ChangePasswordFormComponent.ɵcmp = ɵɵdefineComponent({ type: ChangePasswordFormComponent, selectors: [["app-change-password-form"]], outputs: { changePassword: "changePassword" }, decls: 20, vars: 2, consts: [[1, "change-password-form", 3, "formGroup"], ["class", "mat-error error", 4, "ngIf"], [1, "form-field"], ["appearance", "outline"], ["matInput", "", "type", "password", "formControlName", "currentPassword"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], [1, "buttons"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-error", "error"], ["aria-hidden", "false", "aria-label", "Error"]], template: function ChangePasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵtemplate(1, ChangePasswordFormComponent_div_1_Template, 4, 0, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "mat-form-field", 3);
        ɵɵelementStart(4, "mat-label");
        ɵɵtext(5, "Current Password");
        ɵɵelementEnd();
        ɵɵelement(6, "input", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 2);
        ɵɵelementStart(8, "mat-form-field", 3);
        ɵɵelementStart(9, "mat-label");
        ɵɵtext(10, "New Password");
        ɵɵelementEnd();
        ɵɵelement(11, "input", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 2);
        ɵɵelementStart(13, "mat-form-field", 3);
        ɵɵelementStart(14, "mat-label");
        ɵɵtext(15, "Confirm Password");
        ɵɵelementEnd();
        ɵɵelement(16, "input", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 7);
        ɵɵelementStart(18, "button", 8);
        ɵɵlistener("click", function ChangePasswordFormComponent_Template_button_click_18_listener() { return ctx.doChangePassword(); });
        ɵɵtext(19, " Change Password ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.changePasswordForm);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.changePasswordForm == null ? null : ctx.changePasswordForm.errors == null ? null : ctx.changePasswordForm.errors.confirmValue);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatButton, MatIcon], styles: [".error[_ngcontent-%COMP%]{padding:10px;text-align:center}.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.buttons[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:4px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChangePasswordFormComponent, [{
        type: Component,
        args: [{
                selector: 'app-change-password-form',
                templateUrl: './change-password-form.component.html',
                styleUrls: ['./change-password-form.component.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, { changePassword: [{
            type: Output
        }] }); })();

class CurrentUser {
    constructor(username, userKind, displayName) {
        this.username = username;
        this.userKind = userKind;
        this.displayName = displayName;
        this.roles = [];
    }
    addRole(roleName) {
        if (!roleName)
            throw new Error('role name cannot be empty');
        this.roles.push(roleName);
        return this;
    }
    hasRole(roleNames) {
        return intersection(this.roles, roleNames).length > 0;
    }
}

class UsersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.accessToken = null;
        this.currentUser = null;
    }
    loginEmployee(username, password) {
        return this.httpClient
            .post('/api/users/login', { username, password, kind: 'employee' })
            .pipe(tap(userResult => {
            this.accessToken = userResult.accessToken;
            localStorage.refreshToken = userResult.refreshToken;
        }), map(userResult => {
            const currentUser = new CurrentUser(userResult.username, userResult.userKind, userResult.displayName);
            userResult.roles.forEach(role => currentUser.addRole(role));
            return currentUser;
        }), tap(currentUser => {
            this.currentUser = currentUser;
        }));
    }
    refreshUser() {
        return this.httpClient.get('/api/users/refresh').pipe(tap(userRefresh => {
            this.accessToken = userRefresh.accessToken;
            localStorage.refreshToken = userRefresh.refreshToken;
        }), map(() => of(true)));
    }
    changePassword(username, userKind, oldPassword, newPassword) {
        return this.httpClient.post('/api/users/change-password', {
            username, userKind, oldPassword, newPassword,
        });
    }
    getCurrentUser() {
        return this.currentUser;
    }
    getAccessToken() {
        return this.accessToken;
    }
    getRefreshToken() {
        return localStorage.refreshToken;
    }
    logoutUser() {
        this.accessToken = null;
        this.currentUser = null;
        localStorage.refreshToken = null;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(ɵɵinject(HttpClient)); };
UsersService.ɵprov = ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

function CurrentUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "button", 1);
    ɵɵelementStart(2, "mat-icon", 2);
    ɵɵtext(3, "account_circle");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-menu", null, 3);
    ɵɵelementStart(8, "button", 4);
    ɵɵlistener("click", function CurrentUserComponent_div_0_Template_button_click_8_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.navigateToProfile(); });
    ɵɵtext(9, "Profile");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 4);
    ɵɵlistener("click", function CurrentUserComponent_div_0_Template_button_click_10_listener() { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.navigateToLogout(); });
    ɵɵtext(11, "Logout");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r2);
    ɵɵadvance(4);
    ɵɵtextInterpolate2("", ctx_r0.displayName, " (", ctx_r0.username, ")");
} }
function CurrentUserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function CurrentUserComponent_div_1_Template_button_click_1_listener() { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(); return ctx_r6.navigateToLogin(); });
    ɵɵelementStart(2, "mat-icon", 2);
    ɵɵtext(3, "account_circle");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Login");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class CurrentUserComponent {
    constructor(router, usersSvc) {
        this.router = router;
        this.usersSvc = usersSvc;
    }
    get loggedIn() {
        return !!this.usersSvc.getCurrentUser();
    }
    get displayName() {
        var _a, _b;
        return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.displayName) !== null && _b !== void 0 ? _b : '';
    }
    get username() {
        var _a, _b;
        return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : '';
    }
    ngOnInit() {
    }
    navigateToProfile() {
        return this.router.navigateByUrl('/profile');
    }
    navigateToLogout() {
        return this.router.navigateByUrl('/logout');
    }
    navigateToLogin() {
        return this.router.navigateByUrl('/login');
    }
}
CurrentUserComponent.ɵfac = function CurrentUserComponent_Factory(t) { return new (t || CurrentUserComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(UsersService)); };
CurrentUserComponent.ɵcmp = ɵɵdefineComponent({ type: CurrentUserComponent, selectors: [["app-current-user"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "User Account"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "click"]], template: function CurrentUserComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CurrentUserComponent_div_0_Template, 12, 3, "div", 0);
        ɵɵtemplate(1, CurrentUserComponent_div_1_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.loggedIn);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.loggedIn);
    } }, directives: [NgIf, MatButton, MatMenuTrigger, MatIcon, MatMenu, MatMenuItem], styles: ["mat-icon[_ngcontent-%COMP%]{margin-right:4px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CurrentUserComponent, [{
        type: Component,
        args: [{
                selector: 'app-current-user',
                templateUrl: './current-user.component.html',
                styleUrls: ['./current-user.component.css']
            }]
    }], function () { return [{ type: Router }, { type: UsersService }]; }, null); })();

function LoginFormComponent_mat_card_0_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-item", 15);
    ɵɵelementStart(1, "mat-icon", 16);
    ɵɵtext(2, "arrow_right");
    ɵɵelementEnd();
    ɵɵtext(3, " Username is required. ");
    ɵɵelementEnd();
} }
function LoginFormComponent_mat_card_0_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-item", 15);
    ɵɵelementStart(1, "mat-icon", 16);
    ɵɵtext(2, "arrow_right");
    ɵɵelementEnd();
    ɵɵtext(3, " Password is required. ");
    ɵɵelementEnd();
} }
function LoginFormComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-card", 10);
    ɵɵelementStart(1, "mat-card-header", 11);
    ɵɵelementStart(2, "mat-card-title", 12);
    ɵɵtext(3, " Errors ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-card-content");
    ɵɵelementStart(5, "mat-list", 13);
    ɵɵtemplate(6, LoginFormComponent_mat_card_0_mat_list_item_6_Template, 4, 0, "mat-list-item", 14);
    ɵɵtemplate(7, LoginFormComponent_mat_card_0_mat_list_item_7_Template, 4, 0, "mat-list-item", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵproperty("ngIf", ctx_r0.showUsernameError);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.showPasswordError);
} }
function LoginFormComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Username is required");
    ɵɵelementEnd();
} }
function LoginFormComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Password is required");
    ɵɵelementEnd();
} }
class LoginFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.loginFormSubmitted = false;
        this.login = new EventEmitter();
        this.clear = new EventEmitter();
    }
    get showLoginFormValidationSummary() {
        return this.loginForm.invalid && this.loginFormSubmitted;
    }
    get showUsernameError() {
        const usernameFormControl = this.loginForm.get('username');
        return usernameFormControl.invalid;
    }
    get showPasswordError() {
        const passwordFormControl = this.loginForm.get('password');
        return passwordFormControl.invalid;
    }
    // username: 'adodsworth'
    // password: 'testpass'
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['adodsworth', { validators: [Validators.required] }],
            password: ['testpass', { validators: [Validators.required] }],
        });
    }
    doLogin() {
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid)
            return;
        this.login.emit(this.loginForm.value);
    }
    doClear() {
        this.loginForm.reset();
        this.clear.emit();
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(ɵɵdirectiveInject(FormBuilder)); };
LoginFormComponent.ɵcmp = ɵɵdefineComponent({ type: LoginFormComponent, selectors: [["app-login-form"]], outputs: { login: "login", clear: "clear" }, decls: 19, vars: 4, consts: [["class", "validation-summary-card", 4, "ngIf"], [1, "login-form", 3, "formGroup", "submit"], [1, "form-field"], ["appearance", "outline"], ["matInput", "", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "formControlName", "password"], [1, "buttons"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "reset", "mat-raised-button", "", 3, "click"], [1, "validation-summary-card"], [1, "validation-summary-header"], [1, "validation-summary-title"], ["role", "list", "dense", ""], ["role", "listitem", 4, "ngIf"], ["role", "listitem"], ["mat-list-icon", ""]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, LoginFormComponent_mat_card_0_Template, 8, 2, "mat-card", 0);
        ɵɵelementStart(1, "form", 1);
        ɵɵlistener("submit", function LoginFormComponent_Template_form_submit_1_listener() { return ctx.doLogin(); });
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "mat-form-field", 3);
        ɵɵelementStart(4, "mat-label");
        ɵɵtext(5, "Username");
        ɵɵelementEnd();
        ɵɵelement(6, "input", 4);
        ɵɵtemplate(7, LoginFormComponent_mat_error_7_Template, 2, 0, "mat-error", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 2);
        ɵɵelementStart(9, "mat-form-field", 3);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Password");
        ɵɵelementEnd();
        ɵɵelement(12, "input", 6);
        ɵɵtemplate(13, LoginFormComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 7);
        ɵɵelementStart(15, "button", 8);
        ɵɵtext(16, "Login");
        ɵɵelementEnd();
        ɵɵelementStart(17, "button", 9);
        ɵɵlistener("click", function LoginFormComponent_Template_button_click_17_listener() { return ctx.doClear(); });
        ɵɵtext(18, "Clear");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.showLoginFormValidationSummary);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.loginForm);
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.showUsernameError);
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.showPasswordError);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatButton, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatList, MatListItem, MatIcon, MatListIconCssMatStyler, MatError], styles: [".buttons[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]{padding:6px 0;text-align:center}.buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:4px}.validation-summary-card[_ngcontent-%COMP%]{margin:0 auto 20px;max-width:400px;padding:0}.validation-summary-header[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.validation-summary-title[_ngcontent-%COMP%]{font-size:1.1rem;margin:0;padding:12px}.mat-card-content[_ngcontent-%COMP%]{padding:8px 0}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item.mat-list-item-with-avatar[_ngcontent-%COMP%], .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option.mat-list-item-with-avatar[_ngcontent-%COMP%]{height:32px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:.9rem}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoginFormComponent, [{
        type: Component,
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, { login: [{
            type: Output
        }], clear: [{
            type: Output
        }] }); })();

class UserProfileComponent {
    constructor() {
        this.userProfile = null;
    }
    ngOnInit() {
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = ɵɵdefineComponent({ type: UserProfileComponent, selectors: [["app-user-profile"]], inputs: { userProfile: "userProfile" }, decls: 7, vars: 3, template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div");
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div");
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Username: ", ctx.userProfile == null ? null : ctx.userProfile.username, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Display Name: ", ctx.userProfile == null ? null : ctx.userProfile.displayName, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Roles: ", ctx.userProfile == null ? null : ctx.userProfile.roles == null ? null : ctx.userProfile.roles.join(", "), "");
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserProfileComponent, [{
        type: Component,
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            }]
    }], function () { return []; }, { userProfile: [{
            type: Input
        }] }); })();

class UserLibModule {
}
UserLibModule.ɵmod = ɵɵdefineNgModule({ type: UserLibModule });
UserLibModule.ɵinj = ɵɵdefineInjector({ factory: function UserLibModule_Factory(t) { return new (t || UserLibModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            HttpClientModule,
            MatListModule,
            MatToolbarModule,
            MatSidenavModule,
            MatButtonModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatMenuModule,
            MatTableModule,
            MatSnackBarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UserLibModule, { declarations: [ChangePasswordFormComponent,
        CurrentUserComponent,
        LoginFormComponent,
        UserProfileComponent], imports: [CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTableModule,
        MatSnackBarModule], exports: [ChangePasswordFormComponent,
        CurrentUserComponent,
        LoginFormComponent,
        UserProfileComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserLibModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MatListModule,
                    MatToolbarModule,
                    MatSidenavModule,
                    MatButtonModule,
                    MatIconModule,
                    MatCardModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatMenuModule,
                    MatTableModule,
                    MatSnackBarModule,
                ],
                exports: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
            }]
    }], null, null); })();

class AllowedRolesGuardService {
    constructor(usersSvc, snackBar) {
        this.usersSvc = usersSvc;
        this.snackBar = snackBar;
    }
    canActivate(route, state) {
        var _a;
        if (!((_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.hasRole(route.data.roles))) {
            const snackBarRef = this.snackBar.open(`You are not allowed to navigate to the ${route.data.title}.`, 'Dismiss');
            snackBarRef.onAction().subscribe(() => {
                snackBarRef.dismiss();
            });
            return false;
        }
        else {
            return true;
        }
    }
}
AllowedRolesGuardService.ɵfac = function AllowedRolesGuardService_Factory(t) { return new (t || AllowedRolesGuardService)(ɵɵinject(UsersService), ɵɵinject(MatSnackBar)); };
AllowedRolesGuardService.ɵprov = ɵɵdefineInjectable({ token: AllowedRolesGuardService, factory: AllowedRolesGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AllowedRolesGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UsersService }, { type: MatSnackBar }]; }, null); })();

class AuthorizationInterceptorService {
    constructor(usersSvc) {
        this.usersSvc = usersSvc;
    }
    withAccessToken(req) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getAccessToken()),
        });
    }
    withRefreshToken(req) {
        return req.clone({
            method: 'GET',
            headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getRefreshToken()),
        });
    }
    intercept(req, next) {
        if (req.url.endsWith('/api/users/login')) {
            return next.handle(req);
        }
        if (req.url.endsWith('/api/users/refresh')) {
            return next.handle(this.withRefreshToken(req));
        }
        return next.handle(this.withAccessToken(req)).pipe(catchError((err, caught) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    return this.usersSvc.refreshUser()
                        .pipe(switchMap(() => next.handle(this.withAccessToken(req))));
                }
                else {
                    return throwError(err);
                }
            }
            return caught;
        }));
    }
}
AuthorizationInterceptorService.ɵfac = function AuthorizationInterceptorService_Factory(t) { return new (t || AuthorizationInterceptorService)(ɵɵinject(UsersService)); };
AuthorizationInterceptorService.ɵprov = ɵɵdefineInjectable({ token: AuthorizationInterceptorService, factory: AuthorizationInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthorizationInterceptorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UsersService }]; }, null); })();

class LoggedInGuardService {
    constructor(usersSvc, router) {
        this.usersSvc = usersSvc;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.usersSvc.getCurrentUser()) {
            return this.router.parseUrl('/login');
        }
        else {
            return true;
        }
    }
}
LoggedInGuardService.ɵfac = function LoggedInGuardService_Factory(t) { return new (t || LoggedInGuardService)(ɵɵinject(UsersService), ɵɵinject(Router)); };
LoggedInGuardService.ɵprov = ɵɵdefineInjectable({ token: LoggedInGuardService, factory: LoggedInGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoggedInGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UsersService }, { type: Router }]; }, null); })();

/*
 * Public API Surface of user-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AllowedRolesGuardService, AuthorizationInterceptorService, ChangePasswordFormComponent, CurrentUser, CurrentUserComponent, LoggedInGuardService, LoginFormComponent, UserLibModule, UserProfileComponent, UsersService };
//# sourceMappingURL=user-lib.js.map
