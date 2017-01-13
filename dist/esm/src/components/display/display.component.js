import { Component, Input } from '@angular/core';
export var DisplayComponent = (function () {
    function DisplayComponent() {
    }
    DisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cm-display',
                    template: "<div><p class=\"message\">{{message}}</p></div>"
                },] },
    ];
    /** @nocollapse */
    DisplayComponent.ctorParameters = function () { return []; };
    DisplayComponent.propDecorators = {
        'message': [{ type: Input },],
    };
    return DisplayComponent;
}());
//# sourceMappingURL=display.component.js.map