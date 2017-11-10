import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-select',
    template: `
        <!-- Single button -->
        <div class='btn-group'>
        <button type='button' class='btn btn-default dropdown-toggle' 
            (click)='dropDownOpened = !dropDownOpened'>
        {{ buttonLabel }} <span class='caret'></span>
        </button>
        <ul class='dropdown-menu' style='display: block' *ngIf='dropDownOpened'>
            <li *ngFor='let option of options'>
                <a (click)='onClickOption(option)'>{{ option }}</a>
            </li>
        </ul>
        </div>
    `
})
export class SelectComponent {
    dropDownOpened: boolean = false;
    buttonLabel: string = '-- Choose --';

    @Input() options: String[];
    @Output() onChange = new EventEmitter();

    onClickOption(clickOption: string) {
        this.buttonLabel = clickOption;
        this.dropDownOpened = false;
        this.onChange.emit(clickOption);
    }
}