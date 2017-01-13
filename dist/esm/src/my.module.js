import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DisplayComponent } from './components';
import { RoundDownPipe } from './pipes';
export var MyModule = (function () {
    function MyModule() {
    }
    MyModule.forRoot = function () {
        return {
            ngModule: MyModule
        };
    };
    MyModule.decorators = [
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
    MyModule.ctorParameters = function () { return []; };
    return MyModule;
}());
//# sourceMappingURL=my.module.js.map