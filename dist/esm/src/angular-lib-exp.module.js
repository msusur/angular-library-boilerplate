import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DisplayComponent } from './components';
import { RoundDownPipe } from './pipes';
export var AngularLibExpModule = (function () {
    function AngularLibExpModule() {
    }
    AngularLibExpModule.forRoot = function () {
        return {
            ngModule: AngularLibExpModule
        };
    };
    AngularLibExpModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DisplayComponent,
                        RoundDownPipe
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule
                    ]
                },] },
    ];
    /** @nocollapse */
    AngularLibExpModule.ctorParameters = function () { return []; };
    return AngularLibExpModule;
}());
//# sourceMappingURL=angular-lib-exp.module.js.map