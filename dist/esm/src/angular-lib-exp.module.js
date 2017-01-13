import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
            ngModule: AngularLibExpModule,
            providers: []
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
                        CommonModule,
                        FormsModule,
                        HttpModule,
                    ],
                    exports: [
                        RoundDownPipe,
                        DisplayComponent
                    ],
                    entryComponents: [DisplayComponent]
                },] },
    ];
    /** @nocollapse */
    AngularLibExpModule.ctorParameters = function () { return []; };
    return AngularLibExpModule;
}());
//# sourceMappingURL=angular-lib-exp.module.js.map