import { Component, Input } from '@angular/core';

@Component({
    selector: 'cm-display',
    template: `<div><p class="message">{{message}}</p></div>`
})
export class DisplayComponent {
    @Input() public message: string;
}
