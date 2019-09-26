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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card style=\"width:500px; margin: 0 auto;\">\n    <nb-card-header>Login</nb-card-header>\n        <nb-card-body>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <input type=\"text\" fullWidth formControlName=\"email\" nbInput placeholder=\"Email\">\n            <input type=\"password\" fullWidth formControlName=\"password\" nbInput placeholder=\"Password\">\n            <button [disabled]=\"loginForm.invalid\" fullWidth nbButton>Login</button>\n            </form>\n        </nb-card-body>\n    \n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card style=\"margin: 20px;\">\n    <nb-card-header>SignUp</nb-card-header>\n        <nb-card-body>\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n            <input type=\"text\" formControlName=\"email\" style=\"width: 40%;\" nbInput placeholder=\"Email\">\n            <input type=\"password\" formControlName=\"password\" style=\"width: 40%;\" nbInput placeholder=\"Password\">\n            <button [disabled]=\"signupForm.invalid\" nbButton style=\"width: 20%;\">SignUp</button>\n            </form>\n        </nb-card-body>\n    \n</nb-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/general/batch-info/batch-info.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general/batch-info/batch-info.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <nb-card>\n    <nb-card-body>\n      <table>\n        <tr\n          formArrayName=\"batchFields\"\n          *ngFor=\"let field of formData(); let i = index\"\n        >\n          <div [formGroupName]=\"i\">\n            <td>\n              <input\n                formControlName=\"batchNumber\"\n                type=\"number\"\n                nbInput\n                fieldSize=\"medium\"\n                placeholder=\"BatchNumber\"\n              />\n            </td>\n            <td>\n              <input\n                formControlName=\"batchTime\"\n                type=\"text\"\n                nbInput\n                fieldSize=\"medium\"\n                placeholder=\"BatchTime\"\n              />\n            </td>\n            <td>\n              <input\n                formControlName=\"batchRate\"\n                type=\"number\"\n                nbInput\n                fieldSize=\"medium\"\n                placeholder=\"RatePerDay\"\n              />\n            </td>\n            <td>\n              <button\n                type=\"button\"\n                (click)=\"deleteField(i)\"\n                nbButton\n                status=\"danger\"\n                shape=\"round\"\n              >\n                <nb-icon icon=\"close-outline\"></nb-icon>\n              </button>\n            </td>\n          </div>\n        </tr>\n      </table>\n    </nb-card-body>\n  </nb-card>\n\n  <nb-card>\n    <nb-card-body>\n      <button\n        type=\"button\"\n        style=\"width: 98%;\"\n        (click)=\"addNewField()\"\n        nbButton\n        status=\"success\"\n      >\n        Add New Field\n      </button>\n\n      <button\n        [disabled]=\"!form.valid\"\n        type=\"submit\"\n        style=\"width: 98%;\"\n        nbButton\n        status=\"primary\"\n      >\n        Submit Form\n      </button>\n    </nb-card-body>\n  </nb-card>\n</form>\n\n<nb-card>\n  <nb-card-header>EditFields</nb-card-header>\n  <table>\n    <tr>\n      <td>Number</td>\n      <td>Time</td>\n      <td>Rate</td>\n    </tr>\n\n    <tr *ngFor=\"let field of existFields; let i = index\">\n      <td>{{ field.batchNumber }}</td>\n      <td>{{ field.batchTime }}</td>\n      <td>{{ field.batchRate }}</td>\n      <td>\n        <button\n          type=\"button\"\n          (click)=\"editField(i)\"\n          nbButton\n          status=\"primary\"\n          shape=\"round\"\n        >\n          <nb-icon icon=\"edit-outline\"></nb-icon>\n        </button>\n      </td>\n    </tr>\n  </table>\n</nb-card>\n\n<ng-template #contentTemplate let-data>\n  <form (ngSubmit)=\"onEditField(f)\" #f=\"ngForm\">\n    <input type=\"hidden\" name=\"id\" [(ngModel)]=\"existFieldData.id\" />\n    <input\n      type=\"hidden\"\n      name=\"fieldOrder\"\n      [(ngModel)]=\"existFieldData.fieldOrder\"\n    />\n    <input\n      name=\"batchNumber\"\n      type=\"number\"\n      [(ngModel)]=\"existFieldData.batchNumber\"\n      nbInput\n      fullWidth\n      fieldSize=\"medium\"\n      placeholder=\"Number\"\n    />\n    <input\n      name=\"batchTime\"\n      type=\"text\"\n      [(ngModel)]=\"existFieldData.batchTime\"\n      nbInput\n      fullWidth\n      fieldSize=\"medium\"\n      placeholder=\"Time\"\n    />\n    <input\n      name=\"batchRate\"\n      type=\"number\"\n      [(ngModel)]=\"existFieldData.batchRate\"\n      nbInput\n      fullWidth\n      fieldSize=\"medium\"\n      placeholder=\"Rate\"\n    />\n    <button\n      [disabled]=\"!f.valid\"\n      type=\"submit\"\n      style=\"width: 98%\"\n      nbButton\n      status=\"success\"\n    >\n      Update\n    </button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/general/working-days/working-days.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general/working-days/working-days.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onWorkingDays(f)\" #f=\"ngForm\">\n  <nb-card>\n    <nb-card-header>WorkingDays</nb-card-header>\n    <nb-card-body>\n      <table>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Mon\" [(ngModel)]=\"Mon\" status=\"primary\"\n              >Monday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Tue\" [(ngModel)]=\"Tue\" status=\"primary\"\n              >Tuesday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Wed\" [(ngModel)]=\"Wed\" status=\"primary\"\n              >Wednesday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Thu\" [(ngModel)]=\"Thu\" status=\"primary\"\n              >Thursday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Fri\" [(ngModel)]=\"Fri\" status=\"primary\"\n              >Friday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Sat\" [(ngModel)]=\"Sat\" status=\"primary\"\n              >Saturday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <nb-checkbox name=\"Sun\" [(ngModel)]=\"Sun\" status=\"primary\"\n              >Sunday</nb-checkbox\n            >\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <button\n              [disabled]=\"!f.valid\"\n              type=\"submit\"\n              style=\"width: 98%\"\n              nbButton\n              status=\"success\"\n            >\n              Submit\n            </button>\n          </td>\n        </tr>\n      </table>\n    </nb-card-body>\n  </nb-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <div class=\"header-left\" style=\"width: 60%;\">\n      <nb-actions size=\"small\">\n        <nb-action\n          *ngIf=\"isAuth\"\n          class=\"control-item\"\n          icon=\"menu-2-outline\"\n          (click)=\"toggle()\"\n        ></nb-action>\n        <nb-action style=\"font-size: 25px;\">Naren Nutritional Hub</nb-action>\n      </nb-actions>\n    </div>\n    <div class=\"header-left\" style=\"width: 40%;\">\n      <nb-select style=\"margin-right: 15px;\" size=\"medium\" [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\n        <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\n      </nb-select>\n      <button\n        *ngIf=\"isAuth\"\n        nbButton\n        shape=\"round\"\n        size=\"small\"\n        status=\"primary\"\n      >\n        <nb-icon icon=\"refresh-outline\"></nb-icon>\n      </button>\n      <button\n        *ngIf=\"isAuth\"\n        (click)=\"onLogout()\"\n        nbButton\n        shape=\"round\"\n        size=\"small\"\n        status=\"primary\"\n      >\n        <nb-icon icon=\"log-out-outline\"></nb-icon>\n      </button>\n      \n    </div>\n  </nb-layout-header>\n\n  <nb-sidebar *ngIf=\"isAuth\" tag=\"left\">\n    <nb-menu [items]=\"items\"></nb-menu>\n  </nb-sidebar>\n\n  <nb-layout-column class=\"colored-column-warning\">\n    <router-outlet></router-outlet>\n  </nb-layout-column>\n</nb-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/member/add-member/add-member.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/member/add-member/add-member.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"onSubmit(form)\">\n  <nb-card [nbSpinner]=\"loading\">\n    <nb-card-header>MemberInfo</nb-card-header>\n    <table>\n      <tr *ngFor=\"let field of formFormatData; let i = index\">\n        <td *ngIf=\"!field.fieldDisabled\">{{ field.fieldName }}</td>\n        <td *ngIf=\"field.fieldType === 'text' && !field.fieldDisabled\">\n          <input\n            name=\"{{ field.fieldName }}\"\n            type=\"text\"\n            ngModel\n            style=\"width:70%;\"\n            nbInput\n            fieldSize=\"medium\"\n            placeholder=\"{{ field.fieldName }}\"\n            required\n          />\n        </td>\n        <td *ngIf=\"field.fieldType === 'number' && !field.fieldDisabled\">\n          <input\n            name=\"{{ field.fieldName }}\"\n            type=\"number\"\n            ngModel\n            style=\"width:70%;\"\n            nbInput\n            fieldSize=\"medium\"\n            placeholder=\"{{ field.fieldName }}\"\n            required\n          />\n        </td>\n        <td *ngIf=\"field.fieldType === 'textarea' && !field.fieldDisabled\">\n          <textarea\n            name=\"{{ field.fieldName }}\"\n            ngModel\n            style=\"width:70%;\"\n            nbInput\n            placeholder=\"Textarea\"\n            required\n          ></textarea>\n        </td>\n      </tr>\n\n      <tr>\n        <td>Small Note</td>\n        <td>\n          <textarea\n            name=\"note\"\n            [(ngModel)]=\"note\"\n            style=\"width:70%;\"\n            nbInput\n            placeholder=\"Textarea\"\n          ></textarea>\n        </td>\n      </tr>\n\n      <tr>\n        <td>Photo</td>\n        <td>\n          <div class=\"upload-btn-wrapper\">\n            <button class=\"btn\">Upload Photo</button>\n            <input type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n          </div>\n        </td>\n      </tr>\n\n      <tr>\n        <td></td>\n        <td>\n          <progress\n            style=\"height: 5px;\"\n            max=\"100\"\n            [value]=\"uploadProgress | async\"\n          ></progress>\n        </td>\n      </tr>\n\n      <tr>\n        <td>SelectBatch</td>\n        <td>\n          <nb-select\n            name=\"batch\"\n            [(ngModel)]=\"batchValue\"\n            placeholder=\"SelectBatch\"\n            (ngModelChange)=\"batchChange($event)\"\n          >\n            <nb-option\n              *ngFor=\"let field of batchData\"\n              [value]=\"field.fieldOrder\"\n            >\n              {{ field.batchNumber }} :: {{ field.batchTime }} ::\n              {{ field.batchRate }}\n            </nb-option>\n          </nb-select>\n        </td>\n      </tr>\n\n      <tr>\n        <td>StartingDate</td>\n        <td>\n          <input\n            nbInput\n            name=\"sDate\"\n            [(ngModel)]=\"sDate\"\n            placeholder=\"Starting Date\"\n            [nbDatepicker]=\"startingDate\"\n            (ngModelChange)=\"sDateChange($event)\"\n            required\n          />\n          <nb-datepicker #startingDate></nb-datepicker>\n        </td>\n      </tr>\n\n      <tr>\n        <td>EndingDate</td>\n        <td>\n          <input\n            nbInput\n            name=\"eDate\"\n            [(ngModel)]=\"eDate\"\n            placeholder=\"Ending Date\"\n            [nbDatepicker]=\"endingDate\"\n            (ngModelChange)=\"eDateChange($event)\"\n            required\n          />\n          <nb-datepicker #endingDate></nb-datepicker>\n        </td>\n      </tr>\n\n      <tr>\n        <td>Total Payble Amount</td>\n        <td>\n          <input\n            name=\"totalCost\"\n            type=\"text\"\n            [(ngModel)]=\"totalCost\"\n            style=\"width:70%;\"\n            nbInput\n            fieldSize=\"medium\"\n            placeholder=\"Total Amount\"\n          />\n        </td>\n      </tr>\n\n      <tr>\n        <td colspan=\"2\">\n          <button\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            nbButton\n            status=\"primary\"\n            shape=\"round\"\n          >\n            Submit\n          </button>\n        </td>\n      </tr>\n    </table>\n  </nb-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/member/attendance/attendance.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/member/attendance/attendance.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <table>\n      <tr>\n        <td>\n          <nb-select\n            [(ngModel)]=\"batchValue\"\n            placeholder=\"SelectBatch\"\n            (ngModelChange)=\"batchChange($event)\"\n          >\n            <nb-option\n              *ngFor=\"let field of batchData\"\n              [value]=\"field.fieldOrder\"\n            >\n              {{ field.batchNumber }} :: {{ field.batchTime }} ::\n              {{ field.batchRate }}\n            </nb-option>\n          </nb-select>\n        </td>\n        <td>\n          <input\n            nbInput\n            [(ngModel)]=\"date\"\n            placeholder=\"Starting Date\"\n            [nbDatepicker]=\"startingDate\"\n            (ngModelChange)=\"dateChange($event)\"\n          />\n          <nb-datepicker #startingDate></nb-datepicker>\n        </td>\n      </tr>\n    </table>\n  </nb-card-body>\n</nb-card>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <nb-card *ngIf=\"formDisplay\">\n    <nb-card-body>\n      <table>\n        <tr\n          formArrayName=\"attendanceField\"\n          *ngFor=\"\n            let field of formData1();\n            let i = index\n          \"\n        >\n          <div [formGroupName]=\"i\">\n            <td>\n              <input\n                formControlName=\"name\"\n                type=\"text\"\n                nbInput\n                fieldSize=\"medium\"\n                readonly\n              />\n            </td>\n            <td>\n              <nb-checkbox formControlName=\"attendance\"\n                >Present/Absent</nb-checkbox\n              >\n            </td>\n          </div>\n        </tr>\n      </table>\n    </nb-card-body>\n  </nb-card>\n\n  <nb-card>\n    <nb-card-body>\n      <button\n        [disabled]=\"!form.valid\"\n        type=\"submit\"\n        style=\"width: 98%;\"\n        nbButton\n        status=\"primary\"\n      >\n        Submit\n      </button>\n    </nb-card-body>\n  </nb-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/member/form-format/form-format.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/member/form-format/form-format.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <nb-card>\n    <nb-card-body>\n      <table>\n        <tr\n          formArrayName=\"memberFields\"\n          *ngFor=\"let field of formData(); let i = index\"\n        >\n          <div [formGroupName]=\"i\">\n            <td>\n              <input\n                formControlName=\"fieldName\"\n                type=\"text\"\n                nbInput\n                fieldSize=\"medium\"\n                placeholder=\"FieldName\"\n              />\n            </td>\n            <td>\n              <nb-select formControlName=\"fieldType\" palceholder=\"FieldType\">\n                <nb-option value=\"text\">Text</nb-option>\n                <nb-option value=\"textarea\">TextArea</nb-option>\n                <nb-option value=\"number\">Number</nb-option>\n              </nb-select>\n            </td>\n            <td>\n              <nb-checkbox formControlName=\"fieldRequired\"\n                >Required</nb-checkbox\n              >\n            </td>\n            <td>\n              <nb-checkbox formControlName=\"fieldDisabled\"\n                >Disabled</nb-checkbox\n              >\n            </td>\n            <td>\n              <button\n                type=\"button\"\n                (click)=\"deleteField(i)\"\n                nbButton\n                status=\"danger\"\n                shape=\"round\"\n              >\n                <nb-icon icon=\"close-outline\"></nb-icon>\n              </button>\n            </td>\n          </div>\n        </tr>\n      </table>\n    </nb-card-body>\n  </nb-card>\n\n  <nb-card>\n    <nb-card-body>\n      <button\n        type=\"button\"\n        style=\"width: 98%;\"\n        (click)=\"addNewField()\"\n        nbButton\n        status=\"success\"\n      >\n        Add New Field\n      </button>\n\n      <button\n        [disabled]=\"!form.valid\"\n        type=\"submit\"\n        style=\"width: 98%;\"\n        nbButton\n        status=\"primary\"\n      >\n        Submit Form\n      </button>\n    </nb-card-body>\n  </nb-card>\n</form>\n\n<nb-card>\n  <nb-card-header>EditFields</nb-card-header>\n  <table>\n    <tr *ngFor=\"let field of existFields; let i = index\">\n      <td>{{ field.fieldName }}</td>\n      <td>\n        <button\n          type=\"button\"\n          (click)=\"editField(i)\"\n          nbButton\n          status=\"primary\"\n          shape=\"round\"\n        >\n          <nb-icon icon=\"edit-outline\"></nb-icon>\n        </button>\n      </td>\n    </tr>\n  </table>\n</nb-card>\n\n<ng-template #contentTemplate let-data>\n  <form (ngSubmit)=\"onEditField(f)\" #f=\"ngForm\">\n    <input type=\"hidden\" name=\"id\" [(ngModel)]=\"existFieldData.id\" />\n    <input\n      type=\"hidden\"\n      name=\"fieldOrder\"\n      [(ngModel)]=\"existFieldData.fieldOrder\"\n    />\n    <input\n      name=\"fieldName\"\n      type=\"text\"\n      [(ngModel)]=\"existFieldData.fieldName\"\n      nbInput\n      fullWidth\n      fieldSize=\"medium\"\n      placeholder=\"FieldName\"\n    />\n    <nb-select\n      name=\"fieldType\"\n      palceholder=\"FieldType\"\n      fullWidth\n      [(ngModel)]=\"existFieldData.fieldType\"\n    >\n      <nb-option value=\"text\">Text</nb-option>\n      <nb-option value=\"textarea\">TextArea</nb-option>\n      <nb-option value=\"number\">Number</nb-option>\n      <nb-option value=\"file\">Photo</nb-option>\n    </nb-select>\n    <nb-checkbox name=\"fieldRequired\" [(ngModel)]=\"existFieldData.fieldRequired\"\n      >Required</nb-checkbox\n    >\n    <nb-checkbox name=\"fieldDisabled\" [(ngModel)]=\"existFieldData.fieldDisabled\"\n      >Disabled</nb-checkbox\n    >\n    <button\n      [disabled]=\"!f.valid\"\n      type=\"submit\"\n      style=\"width: 98%\"\n      nbButton\n      status=\"success\"\n    >\n      Update\n    </button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/member/member-info/member-info.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/member/member-info/member-info.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-container\">\n  <nb-flip-card>\n    <nb-card-front>\n      <nb-card>\n        <nb-card-header>MemberInfo</nb-card-header>\n        <table style=\"margin: 15px 0 15px 0;\">\n          <tr *ngFor=\"let member of memberData | keyvalue\">\n            <td>{{ member.key }}</td>\n            <td>{{ member.value }}</td>\n          </tr>\n        </table>\n\n        <nb-card-footer>EditInfo</nb-card-footer>\n      </nb-card>\n    </nb-card-front>\n    <nb-card-back>\n      <nb-card>\n        <nb-card-header>EditMemberInfo </nb-card-header>\n        <table *ngIf=\"!memberEditStatus\" style=\"margin: 15px 0 15px 0;\">\n          <tr *ngFor=\"let member of memberData | keyvalue\">\n            <td>{{ member.key }}</td>\n            <td>{{ member.value }}</td>\n          </tr>\n        </table>\n\n        <form\n          *ngIf=\"memberEditStatus\"\n          #form=\"ngForm\"\n          (submit)=\"onMemberEdit(form)\"\n        >\n          <div *ngFor=\"let member of memberEditData\">\n            <input\n              *ngIf=\"member.fieldType === 'text'\"\n              name=\"{{ member.fieldName }}\"\n              type=\"text\"\n              fieldSize=\"small\"\n              [(ngModel)]=\"member.fieldValue\"\n              style=\"width:85%;\"\n              nbInput\n              placeholder=\"{{ member.fieldName }}\"\n              required\n            />\n            <input\n              *ngIf=\"member.fieldType === 'number'\"\n              name=\"{{ member.fieldName }}\"\n              type=\"number\"\n              fieldSize=\"small\"\n              [(ngModel)]=\"member.fieldValue\"\n              style=\"width:85%;\"\n              nbInput\n              placeholder=\"{{ member.fieldName }}\"\n              required\n            />\n            <textarea\n              *ngIf=\"member.fieldType === 'textarea'\"\n              name=\"{{ member.fieldName }}\"\n              [(ngModel)]=\"member.fieldValue\"\n              style=\"width:85%;\"\n              nbInput\n              placeholder=\"Textarea\"\n              required\n            ></textarea>\n          </div>\n          <button\n            type=\"submit\"\n            [disabled]=\"form.invalid\"\n            nbButton\n            status=\"primary\"\n            shape=\"round\"\n          >\n            Edit\n          </button>\n        </form>\n        <nb-card-footer>MemberInfo</nb-card-footer>\n      </nb-card>\n    </nb-card-back>\n  </nb-flip-card>\n\n  <nb-card>\n    <nb-card-header>JoiningInfo</nb-card-header>\n    <table *ngFor=\"let joining of joiningData; let i = index\">\n      <tr *ngIf=\"i == 0\">\n        <td>StartingDate:</td>\n        <td>{{ joining.StartingDate.seconds * 1000 | date }}</td>\n      </tr>\n      <tr *ngIf=\"i == 0\">\n        <td>EndingDate:</td>\n        <td>{{ joining.EndingDate.seconds * 1000 | date }}</td>\n      </tr>\n    </table>\n\n    <table>\n      <tr>\n        <td>\n          <nb-select\n            name=\"batch\"\n            [(ngModel)]=\"batchValue\"\n            placeholder=\"Batch Change\"\n            (ngModelChange)=\"batchChange($event)\"\n          >\n            <nb-option\n              *ngFor=\"let field of batchData\"\n              [value]=\"field.fieldOrder\"\n            >\n              {{ field.batchNumber }} :: {{ field.batchTime }} ::\n              {{ field.batchRate }}\n            </nb-option>\n          </nb-select>\n        </td>\n\n        <td>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"batchChangeAmount\"\n            nbInput\n            fullWidth\n            fieldSize=\"medium\"\n            required\n          />\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <button\n            (click)=\"onBatchChange()\"\n            type=\"submit\"\n            style=\"width: 98%\"\n            nbButton\n            status=\"primary\"\n          >\n            Change Batch\n          </button>\n        </td>\n      </tr>\n    </table>\n  </nb-card>\n  <nb-card style=\"max-height: 550px; overflow: scroll;\">\n    <nb-card-header>Attendance Data </nb-card-header>\n    <nb-card-body>\n      <div *ngFor=\"let attendance of attendanceData\">\n        <div\n          *ngIf=\"attendance.attendance\"\n          class=\"round\"\n          style=\"background:#77ff59;\"\n          nbTooltip=\"{{ attendance.DateString }}\"\n        ></div>\n        <div\n          *ngIf=\"!attendance.attendance\"\n          class=\"round\"\n          style=\"background-color:#ff6459;\"\n          nbTooltip=\"{{ attendance.DateString }}\"\n        ></div>\n      </div>\n    </nb-card-body>\n  </nb-card>\n</div>\n<div class=\"right-container\">\n  <nb-card style=\"max-height: 550px; overflow: scroll;\">\n    <nb-card-header>\n      Passbook\n      <button\n        (click)=\"onAccountAdd()\"\n        nbButton\n        shape=\"round\"\n        size=\"small\"\n        status=\"success\"\n      >\n        <nb-icon icon=\"edit-2-outline\"></nb-icon>\n      </button>\n    </nb-card-header>\n    <table>\n      <tr>\n        <th>Amount</th>\n        <th>Date</th>\n        <th>Note</th>\n        <th>Edit</th>\n      </tr>\n\n      <tr *ngFor=\"let account of accountInfo; let i = index\">\n        <td *ngIf=\"account.Credit != 0\" style=\"color:greenyellow;\">\n          <b>+ {{ account.Credit }}</b>\n        </td>\n        <td *ngIf=\"account.Debit != 0\" style=\"color:deeppink;\">\n          <b>- {{ account.Debit }}</b>\n        </td>\n        <td>{{ account.Date.seconds * 1000 | date }}</td>\n        <td>{{ account.Note }}</td>\n        <td>\n          <button\n            (click)=\"onAccountEdit(i)\"\n            nbButton\n            shape=\"round\"\n            size=\"small\"\n            status=\"primary\"\n          >\n            <nb-icon icon=\"edit-outline\"></nb-icon>\n          </button>\n        </td>\n      </tr>\n    </table>\n  </nb-card>\n  <nb-card style=\"max-height: 550px; overflow: scroll;\">\n    <nb-card-header\n      >Joining History\n      <button\n        (click)=\"onRenew()\"\n        nbButton\n        shape=\"round\"\n        size=\"small\"\n        status=\"success\"\n      >\n        <nb-icon icon=\"edit-2-outline\"></nb-icon>\n      </button>\n    </nb-card-header>\n    <nb-card-body>\n      <tr>\n        <th>SDate</th>\n        <th>EDate</th>\n      </tr>\n      <tr *ngFor=\"let joining of joiningData; let i = index\">\n        <td>{{ joining.StartingDate.seconds * 1000 | date }}</td>\n        <td>{{ joining.EndingDate.seconds * 1000 | date }}</td>\n      </tr>\n    </nb-card-body>\n  </nb-card>\n</div>\n\n<div class=\"main-container\" style=\"width: 100%; overflow: hidden;\">\n  <nb-card>\n    <nb-card-header\n      >ConsultDetail\n      <button\n        (click)=\"onConsult()\"\n        nbButton\n        shape=\"round\"\n        size=\"small\"\n        status=\"success\"\n      >\n        <nb-icon icon=\"edit-2-outline\"></nb-icon>\n      </button>\n    </nb-card-header>\n    <nb-card-body>\n      <div class=\"consult-container\" *ngFor=\"let consult of consultData\">\n        <div class=\"consult-date\">\n          {{ consult.Date.seconds * 1000 | date }}\n          <button\n            (click)=\"onConsultDelete(consult.id)\"\n            nbButton\n            shape=\"round\"\n            size=\"tiny\"\n            status=\"danger\"\n          >\n            <nb-icon icon=\"close-outline\"></nb-icon>\n          </button>\n        </div>\n        <div class=\"consult-photo\">\n          <img src=\"{{ consult.Photo }}\" height=\"250px\" width=\"225px\" />\n        </div>\n        <div class=\"consult-note\">{{ consult.Note }}</div>\n      </div>\n    </nb-card-body>\n  </nb-card>\n</div>\n\n<ng-template #editAccount let-data>\n  <form (ngSubmit)=\"onEditAccount(f)\" #f=\"ngForm\">\n    <input type=\"hidden\" name=\"id\" [(ngModel)]=\"accountEditData.id\" />\n    <input\n      nbInput\n      name=\"Date\"\n      ngModel\n      placeholder=\"Date\"\n      [nbDatepicker]=\"date\"\n      required\n    />\n    : {{ accountEditData.Date.seconds * 1000 | date }}\n    <nb-datepicker #date></nb-datepicker>\n    <input\n      *ngIf=\"accountEditData.Credit > 0\"\n      name=\"Credit\"\n      type=\"text\"\n      [(ngModel)]=\"accountEditData.Credit\"\n      nbInput\n      fullWidth\n      fieldSize=\"medium\"\n      placeholder=\"{{ accountEditData.Credit }}\"\n      required\n    />\n    <input\n      *ngIf=\"accountEditData.Debit > 0\"\n      name=\"Debit\"\n      type=\"text\"\n      [(ngModel)]=\"accountEditData.Debit\"\n      nbInput\n      fullWidth\n      fieldSize=\"medium\"\n      placeholder=\"{{ accountEditData.Debit }}\"\n      required\n    />\n    <textarea\n      name=\"Note\"\n      [(ngModel)]=\"accountEditData.Note\"\n      style=\"width:70%;\"\n      nbInput\n      placeholder=\"Textarea\"\n      required\n    ></textarea>\n    <button\n      [disabled]=\"!f.valid\"\n      type=\"submit\"\n      style=\"width: 98%\"\n      nbButton\n      status=\"success\"\n    >\n      Update\n    </button>\n  </form>\n</ng-template>\n\n<ng-template #addAccount let-data>\n  <form (ngSubmit)=\"onAddAccount(f)\" #f=\"ngForm\">\n    <input\n      nbInput\n      name=\"Date\"\n      ngModel\n      placeholder=\"Date\"\n      [nbDatepicker]=\"date\"\n      required\n    />\n    <nb-datepicker #date></nb-datepicker>\n    <input\n      name=\"Amount\"\n      type=\"text\"\n      ngModel\n      nbInput\n      fieldSize=\"medium\"\n      placeholder=\"Amount\"\n      required\n    />\n    <nb-radio-group name=\"Type\" ngModel required>\n      <nb-radio value=\"Credit\">Credit</nb-radio>\n      <nb-radio value=\"Debit\">Debit</nb-radio>\n    </nb-radio-group>\n    <textarea\n      name=\"Note\"\n      ngModel\n      style=\"width:70%;\"\n      nbInput\n      placeholder=\"SmallNote\"\n      required\n    ></textarea>\n    <button\n      [disabled]=\"!f.valid\"\n      type=\"submit\"\n      style=\"width: 98%\"\n      nbButton\n      status=\"success\"\n    >\n      Add\n    </button>\n  </form>\n</ng-template>\n\n<ng-template #renewAccount let-data>\n  <form (ngSubmit)=\"onRenewAccount(f)\" #f=\"ngForm\">\n    <input\n      nbInput\n      name=\"sDate\"\n      [(ngModel)]=\"sDate\"\n      placeholder=\"Starting Date\"\n      [nbDatepicker]=\"startingDate\"\n      (ngModelChange)=\"sDateChange($event)\"\n      required\n    />\n    <nb-datepicker #startingDate></nb-datepicker>\n    <input\n      nbInput\n      name=\"eDate\"\n      [(ngModel)]=\"eDate\"\n      placeholder=\"Ending Date\"\n      [nbDatepicker]=\"endingDate\"\n      (ngModelChange)=\"eDateChange($event)\"\n      required\n    />\n    <nb-datepicker #endingDate></nb-datepicker>\n    <nb-select\n      name=\"batch\"\n      [(ngModel)]=\"renewBatchValue\"\n      placeholder=\"SelectBatch\"\n      (ngModelChange)=\"renewBatchChange($event)\"\n    >\n      <nb-option *ngFor=\"let field of batchData\" [value]=\"field.fieldOrder\">\n        {{ field.batchNumber }} :: {{ field.batchTime }} ::\n        {{ field.batchRate }}\n      </nb-option>\n    </nb-select>\n    <input\n      name=\"totalCost\"\n      type=\"text\"\n      [(ngModel)]=\"totalCost\"\n      style=\"width:70%;\"\n      nbInput\n      fieldSize=\"medium\"\n      placeholder=\"Total Amount\"\n    />\n    <button\n      [disabled]=\"!f.valid\"\n      type=\"submit\"\n      style=\"width: 98%\"\n      nbButton\n      status=\"success\"\n    >\n      Renew\n    </button>\n  </form>\n</ng-template>\n\n<ng-template #consult let-data>\n  <form (ngSubmit)=\"onSubmitConsult(f)\" #f=\"ngForm\">\n    <textarea\n      name=\"note\"\n      [(ngModel)]=\"note\"\n      nbInput\n      placeholder=\"Note\"\n      required\n    ></textarea\n    ><br />\n    <div class=\"upload-btn-wrapper\">\n      <button class=\"btn\">Upload Photo</button>\n      <input type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n    </div>\n    <br />\n    <progress\n      style=\"height: 5px;\"\n      max=\"100\"\n      [value]=\"uploadProgress | async\"\n    ></progress>\n    <button\n      [disabled]=\"!f.valid\"\n      type=\"submit\"\n      style=\"width: 98%\"\n      nbButton\n      status=\"success\"\n    >\n      Submit\n    </button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/member/member.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/member/member.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card [nbSpinner]=\"loading\">\n  <nb-card-body>\n    <label class=\"search-label\" for=\"search\">Search:</label>\n    <input\n      nbInput\n      [nbFilterInput]=\"dataSource\"\n      id=\"search\"\n      class=\"search-input\"\n    />\n\n    <table\n      [nbTreeGrid]=\"dataSource\"\n      [nbSort]=\"dataSource\"\n      (sort)=\"updateSort($event)\"\n    >\n      <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n      <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n      <ng-container\n        *ngFor=\"let column of defaultColumns; let index = index\"\n        [nbTreeGridColumnDef]=\"column\"\n        [showOn]=\"getShowOn(index)\"\n      >\n        <th\n          nbTreeGridHeaderCell\n          [nbSortHeader]=\"getSortDirection(column)\"\n          *nbTreeGridHeaderCellDef\n        >\n          <div *ngIf=\"column != 'id'\">{{ column }}</div>\n          <div *ngIf=\"column == 'id'\">Info</div>\n        </th>\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n          <div *ngIf=\"column != 'id'\">{{ row.data[column] || '-' }}</div>\n          <div *ngIf=\"column == 'id'\">\n            <button (click)=\"onInfo(row.data[column])\" nbButton size=\"tiny\">\n              Info\n            </button>\n          </div>\n        </td>\n      </ng-container>\n    </table>\n  </nb-card-body>\n</nb-card>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _member_form_format_form_format_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member/form-format/form-format.component */ "./src/app/member/form-format/form-format.component.ts");
/* harmony import */ var _general_batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general/batch-info/batch-info.component */ "./src/app/general/batch-info/batch-info.component.ts");
/* harmony import */ var _member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./member/add-member/add-member.component */ "./src/app/member/add-member/add-member.component.ts");
/* harmony import */ var _member_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member/attendance/attendance.component */ "./src/app/member/attendance/attendance.component.ts");
/* harmony import */ var _member_member_info_member_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./member/member-info/member-info.component */ "./src/app/member/member-info/member-info.component.ts");
/* harmony import */ var _general_working_days_working_days_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general/working-days/working-days.component */ "./src/app/general/working-days/working-days.component.ts");













var routes = [
    { path: '', redirectTo: '/member', pathMatch: 'full' },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'member', component: _member_member_component__WEBPACK_IMPORTED_MODULE_5__["MemberComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: 'member/form-format',
        component: _member_form_format_form_format_component__WEBPACK_IMPORTED_MODULE_7__["FormFormatComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'member/add-member',
        component: _member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_9__["AddMemberComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'member/attendance',
        component: _member_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_10__["AttendanceComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'member/member-info/:memberId',
        component: _member_member_info_member_info_component__WEBPACK_IMPORTED_MODULE_11__["MemberInfoComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'general/batch-info',
        component: _general_batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_8__["BatchInfoComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'general/working-days',
        component: _general_working_days_working_days_component__WEBPACK_IMPORTED_MODULE_12__["WorkingDaysComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initAuthListener();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_member_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _member_form_format_form_format_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./member/form-format/form-format.component */ "./src/app/member/form-format/form-format.component.ts");
/* harmony import */ var _general_batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./general/batch-info/batch-info.component */ "./src/app/general/batch-info/batch-info.component.ts");
/* harmony import */ var _member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./member/add-member/add-member.component */ "./src/app/member/add-member/add-member.component.ts");
/* harmony import */ var _member_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./member/attendance/attendance.component */ "./src/app/member/attendance/attendance.component.ts");
/* harmony import */ var _member_member_info_member_info_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./member/member-info/member-info.component */ "./src/app/member/member-info/member-info.component.ts");
/* harmony import */ var _general_working_days_working_days_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./general/working-days/working-days.component */ "./src/app/general/working-days/working-days.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                _member_member_component__WEBPACK_IMPORTED_MODULE_19__["MemberComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_20__["LayoutComponent"],
                _member_form_format_form_format_component__WEBPACK_IMPORTED_MODULE_21__["FormFormatComponent"],
                _general_batch_info_batch_info_component__WEBPACK_IMPORTED_MODULE_22__["BatchInfoComponent"],
                _member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_23__["AddMemberComponent"],
                _member_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_24__["AttendanceComponent"],
                _member_member_info_member_info_component__WEBPACK_IMPORTED_MODULE_25__["MemberInfoComponent"],
                _general_working_days_working_days_component__WEBPACK_IMPORTED_MODULE_26__["WorkingDaysComponent"]
            ],
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"].forRoot({ name: 'dark' }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbLayoutModule"],
                _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__["NbEvaIconsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbToastrModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbWindowModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbDatepickerModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSpinnerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbRadioModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTooltipModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _shared_member_service__WEBPACK_IMPORTED_MODULE_13__["MemberService"],
                { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["StorageBucket"], useValue: 'gs://gymm-f032c.appspot.com/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isAuthenticated = false;
    }
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.authChange.next(true);
                _this.router.navigate(['/member']);
            }
            else {
                _this.authChange.next(false);
                _this.router.navigate(['/login']);
                _this.isAuthenticated = false;
            }
        });
    };
    AuthService.prototype.registerUser = function (authData) {
        this.afAuth.auth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.login = function (authData) {
        this.afAuth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(function (result) {
            console.log(result);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.authService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        this.authService.registerUser({
            email: this.signupForm.value.email,
            password: this.signupForm.value.password
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/general/batch-info/batch-info.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/general/batch-info/batch-info.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  margin: 0 auto;\n}\n\ntable th,\ntd {\n  width: 25%;\n}\n\ntable th,\ntd {\n  text-align: center;\n}\n\nnb-select {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9nZW5lcmFsL2JhdGNoLWluZm8vYmF0Y2gtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2VuZXJhbC9iYXRjaC1pbmZvL2JhdGNoLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBOztFQUVFLFVBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhbC9iYXRjaC1pbmZvL2JhdGNoLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50ZCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxudGFibGUgdGgsXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5iLXNlbGVjdCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxudGFibGUgdGgsXG50ZCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbnRhYmxlIHRoLFxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm5iLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/general/batch-info/batch-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/general/batch-info/batch-info.component.ts ***!
  \************************************************************/
/*! exports provided: BatchInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchInfoComponent", function() { return BatchInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");







var BatchInfoComponent = /** @class */ (function () {
    function BatchInfoComponent(memberService, fb, firestore, toastrService, windowService) {
        this.memberService = memberService;
        this.fb = fb;
        this.firestore = firestore;
        this.toastrService = toastrService;
        this.windowService = windowService;
        this.existFields = [];
        this.existFieldData = [];
        this.fieldOrder = 0;
    }
    BatchInfoComponent.prototype.showToast = function (position, status) {
        this.toastrService.show(status || 'Success', "Data Added Successfully!", {
            position: position,
            status: status
        });
    };
    BatchInfoComponent.prototype.onEditField = function (form) {
        this.firestore.doc('batch-info/' + form.value.id).update(form.value);
        this.showToast('top-right', 'success');
    };
    BatchInfoComponent.prototype.editField = function (i) {
        this.existFieldData = this.existFields[i];
        this.windowService.open(this.contentTemplate, {
            title: 'EditField',
            context: {
                text: 'some text to pass into template'
            }
        });
    };
    BatchInfoComponent.prototype.formData = function () {
        return this.form.get('batchFields').controls;
    };
    BatchInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getBatchInfo().subscribe(function (actionArray) {
            _this.existFields = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            _this.fieldOrder = _this.existFields.length;
        });
        this.form = this.fb.group({
            batchFields: this.fb.array([
                this.fb.group({
                    batchNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    batchTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    batchRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                })
            ])
        });
    };
    BatchInfoComponent.prototype.addNewField = function () {
        var creds = this.form.controls.batchFields;
        creds.push(this.fb.group({
            batchNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batchTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batchRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    };
    BatchInfoComponent.prototype.deleteField = function (index) {
        this.form.get('batchFields').removeAt(index);
    };
    BatchInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        for (var i = 0; i < this.form.value.batchFields.length; i++) {
            this.form.value.batchFields[i].fieldOrder = this.fieldOrder;
            this.firestore
                .collection('batch-info')
                .add(this.form.value.batchFields[i])
                .then(function (res) {
                _this.showToast('top-right', 'success');
            }, function (err) { return console.log(err); });
            this.fieldOrder++;
        }
    };
    BatchInfoComponent.ctorParameters = function () { return [
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentTemplate', { static: false })
    ], BatchInfoComponent.prototype, "contentTemplate", void 0);
    BatchInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-batch-info',
            template: __webpack_require__(/*! raw-loader!./batch-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/general/batch-info/batch-info.component.html"),
            styles: [__webpack_require__(/*! ./batch-info.component.scss */ "./src/app/general/batch-info/batch-info.component.scss")]
        })
    ], BatchInfoComponent);
    return BatchInfoComponent;
}());



/***/ }),

/***/ "./src/app/general/working-days/working-days.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/general/working-days/working-days.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvd29ya2luZy1kYXlzL3dvcmtpbmctZGF5cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/general/working-days/working-days.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/general/working-days/working-days.component.ts ***!
  \****************************************************************/
/*! exports provided: WorkingDaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingDaysComponent", function() { return WorkingDaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var WorkingDaysComponent = /** @class */ (function () {
    function WorkingDaysComponent(memberService, toastrService, firestore) {
        this.memberService = memberService;
        this.toastrService = toastrService;
        this.firestore = firestore;
    }
    WorkingDaysComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status || 'Success', message, {
            position: position,
            status: status
        });
    };
    WorkingDaysComponent.prototype.onWorkingDays = function (form) {
        this.firestore.doc('general-info/working-days').update(form.value);
        this.showToast('top-right', 'success', 'Updated Successfully!');
    };
    WorkingDaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getGeneralInfo().subscribe(function (actionArray) {
            _this.generalInfo = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            _this.Mon = _this.generalInfo[0].Mon;
            _this.Tue = _this.generalInfo[0].Tue;
            _this.Wed = _this.generalInfo[0].Wed;
            _this.Thu = _this.generalInfo[0].Thu;
            _this.Fri = _this.generalInfo[0].Fri;
            _this.Sat = _this.generalInfo[0].Sat;
            _this.Sun = _this.generalInfo[0].Sun;
        });
    };
    WorkingDaysComponent.ctorParameters = function () { return [
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    WorkingDaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-working-days',
            template: __webpack_require__(/*! raw-loader!./working-days.component.html */ "./node_modules/raw-loader/index.js!./src/app/general/working-days/working-days.component.html"),
            styles: [__webpack_require__(/*! ./working-days.component.scss */ "./src/app/general/working-days/working-days.component.scss")]
        })
    ], WorkingDaysComponent);
    return WorkingDaysComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(sidebarService, themeService, authService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.authService = authService;
        this.isAuth = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.themes = [
            { value: 'default', name: 'Light', },
            { value: 'dark', name: 'Dark', },
            { value: 'cosmic', name: 'Cosmic', },
            { value: 'corporate', name: 'Corporate', },
        ];
        this.items = [
            {
                title: 'Members',
                icon: 'people-outline',
                children: [
                    {
                        title: 'Add New Member',
                        link: ['member/add-member'],
                        icon: 'person-add-outline'
                    },
                    {
                        title: 'View Members',
                        link: ['member'],
                        icon: 'person-outline'
                    },
                    {
                        title: 'Attendance',
                        link: ['member/attendance'],
                        icon: 'calendar-outline'
                    }
                ]
            },
            {
                title: 'General Settings',
                icon: 'settings-outline',
                children: [
                    {
                        title: 'Member Format',
                        link: ['member/form-format'],
                        icon: 'file-text-outline'
                    },
                    {
                        title: 'Batches',
                        link: ['general/batch-info'],
                        icon: 'clock-outline'
                    },
                    {
                        title: 'Working Days',
                        link: ['general/working-days'],
                        icon: 'calendar-outline'
                    }
                ]
            }
        ];
        this.currentTheme = 'default';
        this.themeService
            .onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var name = _a.name;
            return name;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (themeName) { return (_this.currentTheme = themeName); });
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authChange.subscribe(function (authStatus) {
            _this.isAuth = authStatus;
            console.log(_this.isAuth);
        });
    };
    LayoutComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    LayoutComponent.prototype.changeTheme = function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    LayoutComponent.prototype.toggle = function () {
        this.sidebarService.toggle(true, 'left');
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/member/add-member/add-member.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/member/add-member/add-member.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  margin: 0 auto;\n}\n\ntable th,\ntd {\n  text-align: center;\n}\n\nnb-select {\n  padding: 10px;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  border: 2px solid gray;\n  color: gray;\n  background-color: #172845;\n  padding: 8px 15px;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9tZW1iZXIvYWRkLW1lbWJlci9hZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW1iZXIvYWRkLW1lbWJlci9hZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9hZGQtbWVtYmVyL2FkZC1tZW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5uYi1zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBjb2xvcjogZ3JheTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyODQ1O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG50YWJsZSB0aCxcbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5uYi1zZWxlY3Qge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3Mjg0NTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/member/add-member/add-member.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/member/add-member/add-member.component.ts ***!
  \***********************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");








var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(memberService, fb, firestore, toastrService, afStorage) {
        this.memberService = memberService;
        this.fb = fb;
        this.firestore = firestore;
        this.toastrService = toastrService;
        this.afStorage = afStorage;
        this.downloadURL = null;
        this.formFormatData = [];
        this.batchData = [];
        this.generalInfoData = [];
        this.sDate = null;
        this.eDate = null;
        this.batchValue = 0;
        this.totalCost = 0;
        this.loading = false;
    }
    AddMemberComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status || 'Success', message, {
            position: position,
            status: status
        });
    };
    AddMemberComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loading = true;
        delete form.value.note;
        delete form.value.batch;
        delete form.value.sDate;
        delete form.value.eDate;
        delete form.value.totalCost;
        this.firestore
            .collection('member-info')
            .add(form.value)
            .then(function (res) {
            var memberPath = res.path;
            _this.firestore
                .collection(memberPath + '/joining-detail')
                .add({
                StartingDate: _this.sDate,
                EndingDate: _this.eDate,
                Batch: _this.batchValue
            })
                .then(function (res) {
                _this.firestore
                    .collection(memberPath + '/account-detail')
                    .add({
                    Date: _this.sDate,
                    Credit: 0,
                    Debit: _this.totalCost,
                    Note: 'Joining Payment'
                })
                    .then(function (res) {
                    _this.firestore
                        .collection(memberPath + '/consult-detail')
                        .add({
                        Date: _this.sDate,
                        Note: _this.note,
                        Photo: _this.downloadURL
                    })
                        .then(function (res) {
                        _this.loading = false;
                        _this.showToast('top-right', 'success', 'Data Added Successfully!');
                    }, function (err) { return console.log(err); });
                }, function (err) { return console.log(err); });
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    AddMemberComponent.prototype.upload = function (event) {
        var _this = this;
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref = this.afStorage.ref(randomId);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        this.task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (downloadURL) {
                _this.downloadURL = downloadURL;
                _this.showToast('top-right', 'success', 'Image Added Successfully!');
            });
        }))
            .subscribe();
    };
    AddMemberComponent.prototype.batchChange = function (b) {
        if (this.sDate < this.eDate) {
            var dates = this.getDates(this.sDate, this.eDate);
            var weekDays = this.filterWeekDays(dates, this.getHolidays());
            this.totalCost =
                (dates.length - weekDays.length) *
                    this.batchData[this.batchValue].batchRate;
        }
    };
    AddMemberComponent.prototype.sDateChange = function (s) {
        if (this.sDate < this.eDate) {
            var dates = this.getDates(this.sDate, this.eDate);
            var weekDays = this.filterWeekDays(dates, this.getHolidays());
            this.totalCost =
                (dates.length - weekDays.length) *
                    this.batchData[this.batchValue].batchRate;
        }
    };
    AddMemberComponent.prototype.eDateChange = function (e) {
        if (this.sDate < this.eDate) {
            var dates = this.getDates(this.sDate, this.eDate);
            var weekDays = this.filterWeekDays(dates, this.getHolidays());
            this.totalCost =
                (dates.length - weekDays.length) *
                    this.batchData[this.batchValue].batchRate;
        }
    };
    AddMemberComponent.prototype.getHolidays = function () {
        var holidays = [];
        for (var key in this.generalInfoData[0]) {
            if (key == 'Mon' && !this.generalInfoData[0][key]) {
                holidays.push(0);
            }
            else if (key == 'Tue' && !this.generalInfoData[0][key]) {
                holidays.push(1);
            }
            else if (key == 'Wed' && !this.generalInfoData[0][key]) {
                holidays.push(2);
            }
            else if (key == 'Thu' && !this.generalInfoData[0][key]) {
                holidays.push(3);
            }
            else if (key == 'Fri' && !this.generalInfoData[0][key]) {
                holidays.push(4);
            }
            else if (key == 'Sat' && !this.generalInfoData[0][key]) {
                holidays.push(5);
            }
            else if (key == 'Sun' && !this.generalInfoData[0][key]) {
                holidays.push(6);
            }
        }
        return holidays;
    };
    AddMemberComponent.prototype.getDates = function (dateStart, dateEnd) {
        var currentDate = dateStart, dates = [];
        while (currentDate <= dateEnd) {
            dates.push(currentDate);
            var d = new Date(currentDate.valueOf());
            d.setDate(d.getDate() + 1);
            currentDate = d;
        }
        return dates;
    };
    AddMemberComponent.prototype.filterWeekDays = function (dates, includeDays) {
        var weekdays = [];
        dates.forEach(function (day) {
            includeDays.forEach(function (include) {
                if (day.getDay() == include) {
                    weekdays.push(day);
                }
            });
        });
        return weekdays;
    };
    AddMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getGeneralInfo().subscribe(function (actionArray) {
            _this.generalInfoData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item.payload.doc.data());
            });
        });
        this.memberService.getBatchInfo().subscribe(function (actionArray) {
            _this.batchData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        this.memberService.getFormFormat().subscribe(function (actionArray) {
            _this.formFormatData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    AddMemberComponent.ctorParameters = function () { return [
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
    ]; };
    AddMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! raw-loader!./add-member.component.html */ "./node_modules/raw-loader/index.js!./src/app/member/add-member/add-member.component.html"),
            styles: [__webpack_require__(/*! ./add-member.component.scss */ "./src/app/member/add-member/add-member.component.scss")]
        })
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "./src/app/member/attendance/attendance.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/member/attendance/attendance.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  margin: 0 auto;\n}\n\ntable th,\ntd {\n  width: 25%;\n}\n\ntable th,\ntd {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9tZW1iZXIvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW1iZXIvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxVQUFBO0FDQ0Y7O0FERUE7O0VBRUUsa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50ZCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxudGFibGUgdGgsXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnRhYmxlIHRoLFxudGQge1xuICB3aWR0aDogMjUlO1xufVxuXG50YWJsZSB0aCxcbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/member/attendance/attendance.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/member/attendance/attendance.component.ts ***!
  \***********************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");








var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(memberService, fb, firestore, toastrService, windowService, datePipe) {
        this.memberService = memberService;
        this.fb = fb;
        this.firestore = firestore;
        this.toastrService = toastrService;
        this.windowService = windowService;
        this.datePipe = datePipe;
        this.date = new Date();
        this.batchValue = 0;
        this.formDisplay = false;
    }
    AttendanceComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status || 'Success', message, {
            position: position,
            status: status
        });
    };
    AttendanceComponent.prototype.batchChange = function (batch) {
        this.formData();
        this.formDisplay = true;
    };
    AttendanceComponent.prototype.dateChange = function (date) {
        this.formData();
        this.formDisplay = true;
    };
    AttendanceComponent.prototype.onSubmit = function () {
        var _this = this;
        var selectedDate = this.datePipe.transform(this.date, 'dd-MM-yyyy');
        for (var i = 0; i < this.form.value.attendanceField.length; i++) {
            this.firestore
                .collection('member-info')
                .doc(this.form.value.attendanceField[i].id)
                .collection('attendance-detail')
                .doc(selectedDate)
                .set({
                Date: this.date,
                DateString: selectedDate,
                attendance: this.form.value.attendanceField[i].attendance
            })
                .then(function (res) {
                _this.formDisplay = false;
                _this.showToast('top-right', 'success', 'Attendance Added Successfully!');
            }, function (err) { return console.log(err); });
        }
    };
    AttendanceComponent.prototype.formData1 = function () {
        return this.form.get('attendanceField').controls;
    };
    AttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            attendanceField: this.fb.array([])
        });
        this.memberService.getBatchInfo().subscribe(function (actionArray) {
            _this.batchData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    AttendanceComponent.prototype.formData = function () {
        var _this = this;
        var selectedDate = this.datePipe.transform(this.date, 'dd-MM-yyyy');
        var creds = this.form.controls.attendanceField;
        creds.controls = [];
        this.memberService.getMemberInfo().subscribe(function (actionArray) {
            var e_1, _a;
            _this.memberData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            var _loop_1 = function (member) {
                _this.memberService.getJoiningInfo(member.id).subscribe(function (actionArray) {
                    _this.joiningData = actionArray.map(function (item) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                    });
                    if (_this.batchValue == _this.joiningData[0].Batch) {
                        _this.memberService
                            .getMemberAttendanceInfo(member.id, selectedDate)
                            .subscribe(function (actionArray) {
                            _this.attendanceMemberData = actionArray.map(function (item) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                            });
                            if (_this.attendanceMemberData.length > 0) {
                                var creds_1 = _this.form.controls.attendanceField;
                                creds_1.push(_this.fb.group({
                                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](member.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](member.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                    attendance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.attendanceMemberData[0].attendance)
                                }));
                            }
                            else {
                                var creds_2 = _this.form.controls.attendanceField;
                                creds_2.push(_this.fb.group({
                                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](member.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](member.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                                    attendance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
                                }));
                            }
                        });
                    }
                });
            };
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.memberData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var member = _c.value;
                    _loop_1(member);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    AttendanceComponent.ctorParameters = function () { return [
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbWindowService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    AttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! raw-loader!./attendance.component.html */ "./node_modules/raw-loader/index.js!./src/app/member/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.scss */ "./src/app/member/attendance/attendance.component.scss")]
        })
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/member/form-format/form-format.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/member/form-format/form-format.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  margin: 0 auto;\n}\n\ntable th, td {\n  width: 25%;\n}\n\ntable th, td {\n  text-align: center;\n}\n\nnb-select {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9tZW1iZXIvZm9ybS1mb3JtYXQvZm9ybS1mb3JtYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbWJlci9mb3JtLWZvcm1hdC9mb3JtLWZvcm1hdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL2Zvcm0tZm9ybWF0L2Zvcm0tZm9ybWF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG50YWJsZSB0aCx0ZCB7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxudGFibGUgdGgsdGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubmItc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG50YWJsZSB0aCwgdGQge1xuICB3aWR0aDogMjUlO1xufVxuXG50YWJsZSB0aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm5iLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/member/form-format/form-format.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/form-format/form-format.component.ts ***!
  \*************************************************************/
/*! exports provided: FormFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFormatComponent", function() { return FormFormatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");







var FormFormatComponent = /** @class */ (function () {
    function FormFormatComponent(memberService, fb, firestore, toastrService, windowService) {
        this.memberService = memberService;
        this.fb = fb;
        this.firestore = firestore;
        this.toastrService = toastrService;
        this.windowService = windowService;
        this.loading = false;
        this.existFields = [];
        this.existFieldData = [];
    }
    FormFormatComponent.prototype.showToast = function (position, status) {
        this.toastrService.show(status || 'Success', "Data Added Successfully!", {
            position: position,
            status: status
        });
    };
    FormFormatComponent.prototype.onEditField = function (form) {
        this.firestore.doc('form-format/' + form.value.id).update(form.value);
        this.showToast('top-right', 'success');
    };
    FormFormatComponent.prototype.editField = function (i) {
        this.existFieldData = this.existFields[i];
        this.windowService.open(this.contentTemplate, {
            title: 'EditField',
            context: {
                text: 'some text to pass into template'
            }
        });
    };
    FormFormatComponent.prototype.formData = function () {
        return this.form.get('memberFields').controls;
    };
    FormFormatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getFormFormat().subscribe(function (actionArray) {
            _this.existFields = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            _this.fieldOrder = _this.existFields.length;
        });
        this.form = this.fb.group({
            memberFields: this.fb.array([
                this.fb.group({
                    fieldName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    fieldType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('text', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    fieldRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                    fieldDisabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
                })
            ])
        });
    };
    FormFormatComponent.prototype.addNewField = function () {
        var creds = this.form.controls.memberFields;
        creds.push(this.fb.group({
            fieldName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fieldType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('text', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fieldRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            fieldDisabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        }));
    };
    FormFormatComponent.prototype.deleteField = function (index) {
        this.form.get('memberFields').removeAt(index);
    };
    FormFormatComponent.prototype.onSubmit = function () {
        var _this = this;
        for (var i = 0; i < this.form.value.memberFields.length; i++) {
            this.form.value.memberFields[i].fieldOrder = this.fieldOrder;
            this.firestore
                .collection('form-format')
                .add(this.form.value.memberFields[i])
                .then(function (res) {
                _this.showToast('top-right', 'success');
            }, function (err) { return console.log(err); });
            this.fieldOrder++;
        }
    };
    FormFormatComponent.ctorParameters = function () { return [
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentTemplate', { static: false })
    ], FormFormatComponent.prototype, "contentTemplate", void 0);
    FormFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-format',
            template: __webpack_require__(/*! raw-loader!./form-format.component.html */ "./node_modules/raw-loader/index.js!./src/app/member/form-format/form-format.component.html"),
            styles: [__webpack_require__(/*! ./form-format.component.scss */ "./src/app/member/form-format/form-format.component.scss")]
        })
    ], FormFormatComponent);
    return FormFormatComponent;
}());



/***/ }),

/***/ "./src/app/member/member-info/member-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/member/member-info/member-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-container {\n  width: 45%;\n  float: left;\n  margin: 20px;\n}\n\n.right-container {\n  width: 45%;\n  float: left;\n  margin: 20px;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n}\n\ntable th,\ntd {\n  width: 25%;\n  padding: 20px;\n}\n\ntable th,\ntd {\n  text-align: center;\n}\n\n.round {\n  width: 10px;\n  height: 10px;\n  margin: 2px;\n  border-radius: 10px;\n  float: left;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  border: 2px solid gray;\n  color: gray;\n  background-color: #172845;\n  padding: 8px 15px;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.consult-container {\n  background: #202842;\n  width: 225px;\n  height: 350px;\n  text-align: center;\n  float: left;\n  border-radius: 10px;\n  margin: 5px;\n}\n\n.consult-date {\n  height: 50px;\n  line-height: 50px;\n}\n\n.consult-photo {\n  height: 250px;\n}\n\n.consult-note {\n  height: 50px;\n  font-size: 14px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9tZW1iZXIvbWVtYmVyLWluZm8vbWVtYmVyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbWJlci9tZW1iZXItaW5mby9tZW1iZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBOztFQUVFLFVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7O0VBRUUsa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL21lbWJlci1pbmZvL21lbWJlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxudGFibGUgdGgsXHJcbnRkIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm91bmQge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3Mjg0NTtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvbnN1bHQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjAyODQyO1xyXG4gIHdpZHRoOiAyMjVweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uY29uc3VsdC1kYXRlIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jb25zdWx0LXBob3RvIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uY29uc3VsdC1ub3RlIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuIiwiLmxlZnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnJpZ2h0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0NSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG50YWJsZSB0aCxcbnRkIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxudGFibGUgdGgsXG50ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvdW5kIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3Mjg0NTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jb25zdWx0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMyMDI4NDI7XG4gIHdpZHRoOiAyMjVweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jb25zdWx0LWRhdGUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29uc3VsdC1waG90byB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5jb25zdWx0LW5vdGUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/member/member-info/member-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/member-info/member-info.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberInfoComponent", function() { return MemberInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var MemberInfoComponent = /** @class */ (function () {
    function MemberInfoComponent(route, router, firestore, memberService, datePipe, toastrService, windowService, afStorage) {
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.memberService = memberService;
        this.datePipe = datePipe;
        this.toastrService = toastrService;
        this.windowService = windowService;
        this.afStorage = afStorage;
        this.memberEditData = [];
        this.memberEditStatus = true;
        this.batchValue = 0;
        this.renewBatchValue = 0;
        this.sDate = null;
        this.eDate = null;
        this.totalCost = 0;
        this.batchChangeAmount = 0;
    }
    MemberInfoComponent.prototype.showToast = function (position, status, message) {
        this.toastrService.show(status || 'Success', message, {
            position: position,
            status: status
        });
    };
    MemberInfoComponent.prototype.onSubmitConsult = function (form) {
        var _this = this;
        if (!this.downloadURL) {
            this.downloadURL = null;
        }
        this.firestore
            .collection('member-info/' + this.memberId + '/consult-detail/')
            .add({
            Date: new Date(),
            Note: form.value.note,
            Photo: this.downloadURL
        })
            .then(function (res) {
            _this.showToast('top-right', 'success', 'Consult Detail Added Successfully!');
        }, function (err) { return console.log(err); });
    };
    MemberInfoComponent.prototype.upload = function (event) {
        var _this = this;
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref = this.afStorage.ref(randomId);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        this.task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (downloadURL) {
                _this.downloadURL = downloadURL;
                _this.showToast('top-right', 'success', 'Image Added Successfully!');
            });
        }))
            .subscribe();
    };
    MemberInfoComponent.prototype.onConsult = function () {
        this.windowService.open(this.consult, {
            title: 'Consult',
            context: {
                text: 'some text to pass into template'
            }
        });
    };
    MemberInfoComponent.prototype.onConsultDelete = function (id) {
        this.firestore
            .doc('member-info/' + this.memberId + '/consult-detail/' + id)
            .delete();
        this.showToast('top-right', 'success', 'Deleted Successfully!');
    };
    MemberInfoComponent.prototype.onRenewAccount = function (form) {
        var _this = this;
        this.firestore
            .collection('member-info')
            .doc(this.memberId)
            .collection('account-detail')
            .add({
            Date: new Date(),
            Note: 'Renew Payment',
            Credit: 0,
            Debit: this.totalCost
        })
            .then(function (res) {
            _this.firestore
                .collection('member-info/' + _this.memberId + '/joining-detail/')
                .add({
                StartingDate: _this.sDate,
                EndingDate: _this.eDate,
                Batch: _this.renewBatchValue
            })
                .then(function (res) {
                _this.showToast('top-right', 'success', 'Added Successfully!');
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    MemberInfoComponent.prototype.renewBatchChange = function (b) {
        if (this.sDate < this.eDate) {
            var dates = this.getDates(this.sDate, this.eDate);
            var weekDays = this.filterWeekDays(dates, this.getHolidays());
            this.totalCost =
                (dates.length - weekDays.length) *
                    this.batchData[this.renewBatchValue].batchRate;
        }
    };
    MemberInfoComponent.prototype.sDateChange = function (s) {
        if (this.sDate < this.eDate) {
            var dates = this.getDates(this.sDate, this.eDate);
            var weekDays = this.filterWeekDays(dates, this.getHolidays());
            this.totalCost =
                (dates.length - weekDays.length) *
                    this.batchData[this.renewBatchValue].batchRate;
        }
    };
    MemberInfoComponent.prototype.eDateChange = function (e) {
        if (this.sDate < this.eDate) {
            var dates = this.getDates(this.sDate, this.eDate);
            var weekDays = this.filterWeekDays(dates, this.getHolidays());
            this.totalCost =
                (dates.length - weekDays.length) *
                    this.batchData[this.renewBatchValue].batchRate;
        }
    };
    MemberInfoComponent.prototype.onRenew = function () {
        this.windowService.open(this.renewAccount, {
            title: 'Renew',
            context: {
                text: 'some text to pass into template'
            }
        });
    };
    MemberInfoComponent.prototype.onMemberEdit = function (form) {
        this.firestore.doc('member-info/' + this.memberId).update(form.value);
        this.memberEditStatus = false;
        this.showToast('top-right', 'success', 'Updated Successfully!');
    };
    MemberInfoComponent.prototype.onBatchChange = function () {
        var _this = this;
        this.firestore
            .collection('member-info')
            .doc(this.memberId)
            .collection('account-detail')
            .add({
            Date: new Date(),
            Note: 'Batch Change Payment',
            Credit: 0,
            Debit: this.batchChangeAmount
        })
            .then(function (res) {
            _this.firestore
                .collection('member-info')
                .doc(_this.memberId)
                .collection('joining-detail')
                .doc(_this.joiningData[0].id)
                .update({
                Batch: _this.batchValue
            })
                .then(function (res) {
                _this.showToast('top-right', 'success', 'Added Successfully!');
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    MemberInfoComponent.prototype.batchChange = function (b) {
        var currentBatch = this.joiningData[0].Batch;
        var currentBatchRate = this.batchData[currentBatch].batchRate;
        var newBatchRate = this.batchData[b].batchRate;
        var endingDate = this.joiningData[0].EndingDate.toDate();
        if (currentBatchRate < newBatchRate) {
            this.batchChangeAmount = newBatchRate - currentBatchRate;
        }
        else {
            this.batchChangeAmount = 0;
        }
        var dates = this.getDates(new Date(), endingDate);
        var weekDays = this.filterWeekDays(dates, this.getHolidays());
        this.batchChangeAmount =
            (dates.length - weekDays.length) * this.batchChangeAmount;
    };
    MemberInfoComponent.prototype.getHolidays = function () {
        var holidays = [];
        for (var key in this.generalInfoData[0]) {
            if (key == 'Mon' && !this.generalInfoData[0][key]) {
                holidays.push(0);
            }
            else if (key == 'Tue' && !this.generalInfoData[0][key]) {
                holidays.push(1);
            }
            else if (key == 'Wed' && !this.generalInfoData[0][key]) {
                holidays.push(2);
            }
            else if (key == 'Thu' && !this.generalInfoData[0][key]) {
                holidays.push(3);
            }
            else if (key == 'Fri' && !this.generalInfoData[0][key]) {
                holidays.push(4);
            }
            else if (key == 'Sat' && !this.generalInfoData[0][key]) {
                holidays.push(5);
            }
            else if (key == 'Sun' && !this.generalInfoData[0][key]) {
                holidays.push(6);
            }
        }
        return holidays;
    };
    MemberInfoComponent.prototype.getDates = function (dateStart, dateEnd) {
        var currentDate = dateStart, dates = [];
        while (currentDate <= dateEnd) {
            dates.push(currentDate);
            var d = new Date(currentDate.valueOf());
            d.setDate(d.getDate() + 1);
            currentDate = d;
        }
        return dates;
    };
    MemberInfoComponent.prototype.filterWeekDays = function (dates, includeDays) {
        var weekdays = [];
        dates.forEach(function (day) {
            includeDays.forEach(function (include) {
                if (day.getDay() == include) {
                    weekdays.push(day);
                }
            });
        });
        return weekdays;
    };
    MemberInfoComponent.prototype.onAddAccount = function (form) {
        var _this = this;
        var creditAmount = 0;
        var debitAmount = 0;
        if (form.value.Type == 'Credit') {
            creditAmount = parseInt(form.value.Amount);
        }
        if (form.value.Type == 'Debit') {
            debitAmount = parseInt(form.value.Amount);
        }
        this.firestore
            .collection('member-info')
            .doc(this.memberId)
            .collection('account-detail')
            .add({
            Date: form.value.Date,
            Note: form.value.Note,
            Credit: creditAmount,
            Debit: debitAmount
        })
            .then(function (res) {
            _this.showToast('top-right', 'success', 'Added Successfully!');
        }, function (err) { return console.log(err); });
    };
    MemberInfoComponent.prototype.onAccountAdd = function () {
        this.windowService.open(this.addAccount, {
            title: 'Add',
            context: {
                text: 'some text to pass into template'
            }
        });
    };
    MemberInfoComponent.prototype.onEditAccount = function (form) {
        var _this = this;
        if (!form.value.Credit) {
            form.value.Credit = 0;
        }
        if (!form.value.Debit) {
            form.value.Debit = 0;
        }
        this.firestore
            .collection('member-info')
            .doc(this.memberId)
            .collection('account-detail')
            .doc(form.value.id)
            .set({
            Date: form.value.Date,
            Note: form.value.Note,
            Credit: parseInt(form.value.Credit),
            Debit: parseInt(form.value.Debit)
        })
            .then(function (res) {
            _this.showToast('top-right', 'success', 'Edited Successfully!');
        }, function (err) { return console.log(err); });
    };
    MemberInfoComponent.prototype.onAccountEdit = function (i) {
        this.accountEditData = this.accountInfo[i];
        this.windowService.open(this.editAccount, {
            title: 'EditPassbook',
            context: {
                id: i
            }
        });
    };
    MemberInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getGeneralInfo().subscribe(function (actionArray) {
            _this.generalInfoData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item.payload.doc.data());
            });
        });
        this.route.params.subscribe(function (params) {
            _this.memberId = params['memberId'];
            _this.memberService.getMemberInfo().subscribe(function (actionArray) {
                _this.memberInfoData = actionArray.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                });
                _this.memberService.getFormFormat().subscribe(function (actionArray) {
                    var e_1, _a, e_2, _b;
                    _this.formFormatData = actionArray.map(function (item) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                    });
                    try {
                        for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.memberInfoData), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var member = _d.value;
                            if (member.id == _this.memberId) {
                                _this.memberData = member;
                                delete _this.memberData.id;
                                try {
                                    for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.formFormatData), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var formFormatData = _f.value;
                                        var fieldName = formFormatData.fieldName;
                                        var fieldType = formFormatData.fieldType;
                                        var fieldValue = member[fieldName];
                                        _this.memberEditData.push({
                                            fieldName: fieldName,
                                            fieldValue: fieldValue,
                                            fieldType: fieldType
                                        });
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                });
            });
            _this.memberService
                .getAccountInfo(_this.memberId)
                .subscribe(function (actionArray) {
                _this.accountInfo = actionArray.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                });
            });
            _this.memberService
                .getJoiningInfo(_this.memberId)
                .subscribe(function (actionArray) {
                _this.joiningData = actionArray.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                });
            });
            _this.memberService.getBatchInfo().subscribe(function (actionArray) {
                _this.batchData = actionArray.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                });
            });
            _this.memberService
                .getMemberAttendanceHistory(_this.memberId)
                .subscribe(function (actionArray) {
                _this.attendanceData = actionArray.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                });
            });
            _this.memberService
                .getMemberConsultHistory(_this.memberId)
                .subscribe(function (actionArray) {
                _this.consultData = actionArray.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                });
            });
        });
    };
    MemberInfoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editAccount', { static: false })
    ], MemberInfoComponent.prototype, "editAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addAccount', { static: false })
    ], MemberInfoComponent.prototype, "addAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('renewAccount', { static: false })
    ], MemberInfoComponent.prototype, "renewAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('consult', { static: false })
    ], MemberInfoComponent.prototype, "consult", void 0);
    MemberInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-info',
            template: __webpack_require__(/*! raw-loader!./member-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/member/member-info/member-info.component.html"),
            styles: [__webpack_require__(/*! ./member-info.component.scss */ "./src/app/member/member-info/member-info.component.scss")]
        })
    ], MemberInfoComponent);
    return MemberInfoComponent;
}());



/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/member.service */ "./src/app/shared/member.service.ts");






var MemberComponent = /** @class */ (function () {
    function MemberComponent(dataSourceBuilder, memberService, datePipe, router, route) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.memberService = memberService;
        this.datePipe = datePipe;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.data = [];
        this.defaultColumns = ['EndingDate', 'DaysLeft', 'Account', 'BatchNo', 'id'];
        this.allColumns = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.defaultColumns);
        this.sortDirection = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSortDirection"].NONE;
    }
    MemberComponent.prototype.onInfo = function (id) {
        this.router.navigate(['member-info/' + id], { relativeTo: this.route });
    };
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getFormFormat().subscribe(function (actionArray) {
            var e_1, _a;
            _this.formFormatData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.formFormatData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var formData = _c.value;
                    _this.defaultColumns.push(formData.fieldName);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        this.loading = true;
        this.memberService.getMemberInfo().subscribe(function (actionArray) {
            _this.memberData = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            var _loop_1 = function (i) {
                _this.memberService
                    .getAccountInfo(_this.memberData[i].id)
                    .subscribe(function (actionArray) {
                    _this.accountData = actionArray.map(function (item) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                    });
                    var credit = 0;
                    var debit = 0;
                    for (var i_1 = 0; i_1 < _this.accountData.length; i_1++) {
                        credit = credit + _this.accountData[i_1].Credit;
                        debit = debit + _this.accountData[i_1].Debit;
                    }
                    _this.memberData[i].Account = credit - debit;
                });
                _this.memberService
                    .getJoiningInfo(_this.memberData[i].id)
                    .subscribe(function (actionArray) {
                    _this.joiningData = actionArray.map(function (item) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                    });
                    _this.memberService
                        .getBatchNumber(parseInt(_this.joiningData[0].Batch))
                        .subscribe(function (actionArray) {
                        _this.batchNumber = actionArray.map(function (item) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                        });
                        _this.memberData[i].BatchNo = _this.batchNumber[0].batchNumber;
                    });
                    _this.memberData[i].EndingDate = _this.datePipe.transform(_this.joiningData[0].EndingDate.toDate(), 'dd-MM-yyyy');
                    var date = new Date();
                    if (date < _this.joiningData[0].EndingDate.toDate()) {
                        var diff = Math.abs(_this.joiningData[0].EndingDate.toDate().getTime() -
                            date.getTime());
                        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                        _this.memberData[i].DaysLeft = diffDays;
                    }
                    else {
                        _this.memberData[i].DaysLeft = 0;
                    }
                });
                _this.data.push({ data: _this.memberData[i] });
            };
            for (var i = 0; i < _this.memberData.length; i++) {
                _loop_1(i);
            }
            _this.dataSource = _this.dataSourceBuilder.create(_this.data);
            _this.loading = false;
        });
    };
    MemberComponent.prototype.updateSort = function (sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    };
    MemberComponent.prototype.getSortDirection = function (column) {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSortDirection"].NONE;
    };
    MemberComponent.prototype.getShowOn = function (index) {
        var minWithForMultipleColumns = 400;
        var nextColumnStep = 100;
        return minWithForMultipleColumns + nextColumnStep * index;
    };
    MemberComponent.ctorParameters = function () { return [
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridDataSourceBuilder"] },
        { type: src_app_shared_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'member',
            template: __webpack_require__(/*! raw-loader!./member.component.html */ "./node_modules/raw-loader/index.js!./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./tree-grid-shared.scss */ "./src/app/member/tree-grid-shared.scss"), __webpack_require__(/*! ./tree-grid-showcase.component.scss */ "./src/app/member/tree-grid-showcase.component.scss")]
        })
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/member/tree-grid-shared.scss":
/*!**********************************************!*\
  !*** ./src/app/member/tree-grid-shared.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep body {\n  min-height: 20rem;\n}\n::ng-deep .nb-tree-grid-header-cell,\n::ng-deep .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9tZW1iZXIvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic3JjL2FwcC9tZW1iZXIvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjtBREdFOztFQUVFLDBCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXIvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xyXG4gIH1cclxuXHJcbiAgLm5iLXRyZWUtZ3JpZC1oZWFkZXItY2VsbCxcclxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIGJvZHkge1xuICBtaW4taGVpZ2h0OiAyMHJlbTtcbn1cbjo6bmctZGVlcCAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuOjpuZy1kZWVwIC5uYi10cmVlLWdyaWQtaGVhZGVyLWNlbGwgYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"

/***/ }),

/***/ "./src/app/member/tree-grid-showcase.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/member/tree-grid-showcase.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button[nbTreeGridRowToggle] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\n.search-label {\n  display: block;\n}\n\n.search-input {\n  margin-bottom: 1rem;\n}\n\n.nb-column-name {\n  width: 100%;\n}\n\n@media screen and (min-width: 400px) {\n  .nb-column-name,\n.nb-column-size {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .nb-column-name,\n.nb-column-size,\n.nb-column-kind {\n    width: 33.333%;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .nb-column-name {\n    width: 31%;\n  }\n\n  .nb-column-size,\n.nb-column-kind,\n.nb-column-items {\n    width: 23%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdXNoYWxwYXJpa2gvRGVza3RvcC9hbmd1bGFyLXByb2plY3RzL2d5bW0xL2d5bW0vc3JjL2FwcC9tZW1iZXIvdHJlZS1ncmlkLXNob3djYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW1iZXIvdHJlZS1ncmlkLXNob3djYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURDQTtFQUNFOztJQUVFLFVBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0U7OztJQUdFLGNBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0VDQUY7O0VERUE7OztJQUdFLFVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL3RyZWUtZ3JpZC1zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltuYlRyZWVHcmlkUm93VG9nZ2xlXSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zZWFyY2gtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5uYi1jb2x1bW4tbmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbiAgLm5iLWNvbHVtbi1uYW1lLFxyXG4gIC5uYi1jb2x1bW4tc2l6ZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAubmItY29sdW1uLW5hbWUsXHJcbiAgLm5iLWNvbHVtbi1zaXplLFxyXG4gIC5uYi1jb2x1bW4ta2luZCB7XHJcbiAgICB3aWR0aDogMzMuMzMzJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5iLWNvbHVtbi1uYW1lIHtcclxuICAgIHdpZHRoOiAzMSU7XHJcbiAgfVxyXG4gIC5uYi1jb2x1bW4tc2l6ZSxcclxuICAubmItY29sdW1uLWtpbmQsXHJcbiAgLm5iLWNvbHVtbi1pdGVtcyB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gIH1cclxufVxyXG4iLCJidXR0b25bbmJUcmVlR3JpZFJvd1RvZ2dsZV0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2VhcmNoLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubmItY29sdW1uLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lLFxuLm5iLWNvbHVtbi1zaXplIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAubmItY29sdW1uLW5hbWUsXG4ubmItY29sdW1uLXNpemUsXG4ubmItY29sdW1uLWtpbmQge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAubmItY29sdW1uLW5hbWUge1xuICAgIHdpZHRoOiAzMSU7XG4gIH1cblxuICAubmItY29sdW1uLXNpemUsXG4ubmItY29sdW1uLWtpbmQsXG4ubmItY29sdW1uLWl0ZW1zIHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/member.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/member.service.ts ***!
  \******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var MemberService = /** @class */ (function () {
    function MemberService(firestore) {
        this.firestore = firestore;
    }
    MemberService.prototype.getFormFormat = function () {
        return this.firestore
            .collection('form-format', function (ref) { return ref.orderBy('fieldOrder'); })
            .snapshotChanges();
    };
    MemberService.prototype.getBatchInfo = function () {
        return this.firestore
            .collection('batch-info', function (ref) { return ref.orderBy('fieldOrder'); })
            .snapshotChanges();
    };
    MemberService.prototype.getBatchNumber = function (fieldOrder) {
        return this.firestore
            .collection('batch-info/', function (ref) {
            return ref.where('fieldOrder', '==', fieldOrder);
        })
            .snapshotChanges();
    };
    MemberService.prototype.getGeneralInfo = function () {
        return this.firestore.collection('general-info').snapshotChanges();
    };
    MemberService.prototype.getMemberInfo = function () {
        return this.firestore.collection('member-info').snapshotChanges();
    };
    MemberService.prototype.getJoiningInfo = function (id) {
        return this.firestore
            .collection('member-info/' + id + '/joining-detail', function (ref) {
            return ref.orderBy('StartingDate', 'desc');
        })
            .snapshotChanges();
    };
    MemberService.prototype.getAccountInfo = function (id) {
        return this.firestore
            .collection('member-info/' + id + '/account-detail', function (ref) {
            return ref.orderBy('Date', 'desc');
        })
            .snapshotChanges();
    };
    MemberService.prototype.getMemberAttendanceInfo = function (id, date) {
        return this.firestore
            .collection('member-info/' + id + '/attendance-detail', function (ref) {
            return ref.where('DateString', '==', date);
        })
            .snapshotChanges();
    };
    MemberService.prototype.getMemberAttendanceHistory = function (id) {
        return this.firestore
            .collection('member-info/' + id + '/attendance-detail', function (ref) {
            return ref.orderBy('Date', 'desc').limit(30);
        })
            .snapshotChanges();
    };
    MemberService.prototype.getMemberConsultHistory = function (id) {
        return this.firestore
            .collection('member-info/' + id + '/consult-detail', function (ref) {
            return ref.orderBy('Date', 'desc').limit(10);
        })
            .snapshotChanges();
    };
    MemberService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MemberService);
    return MemberService;
}());



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
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDGBExppOVTFG5iwsS_xdsx_zA6UBx3BO0',
        authDomain: 'gymm-f032c.firebaseapp.com',
        databaseURL: 'https://gymm-f032c.firebaseio.com',
        projectId: 'gymm-f032c',
        storageBucket: 'gs://gymm-f032c.appspot.com',
        messagingSenderId: '823371686174',
        appId: '1:823371686174:web:b5e473186c8466dbbfa90f'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kushalparikh/Desktop/angular-projects/gymm1/gymm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map