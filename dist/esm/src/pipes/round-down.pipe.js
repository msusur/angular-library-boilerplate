import { Pipe } from '@angular/core';
export var RoundDownPipe = (function () {
    function RoundDownPipe() {
    }
    RoundDownPipe.prototype.transform = function (input) {
        return Math.floor(input);
    };
    RoundDownPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'roundDown'
                },] },
    ];
    /** @nocollapse */
    RoundDownPipe.ctorParameters = function () { return []; };
    return RoundDownPipe;
}());
//# sourceMappingURL=round-down.pipe.js.map