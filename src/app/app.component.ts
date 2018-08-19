import {Component} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('divState', [
            state('normal', style({
                backgroundColor: 'red',
                transform: 'translateX(0)'
            })),
            state('highlighted', style({
                backgroundColor: 'blue',
                transform: 'translateX(100px)'
            })),
            transition('normal <=> highlighted', animate(1500)),
            // transition('highlighted => normal', animate(100)),
        ]),
        trigger('wildState', [
            state('normal', style({
                backgroundColor: 'green',
                transform: 'translateX(0) scale(1)'
            })),
            state('highlighted', style({
                backgroundColor: 'blue',
                transform: 'translateX(100px) scale(1)'
            })),
            state('shrunken', style({
                backgroundColor: 'azure',
                transform: 'translateX(100px) scale(0.5)'
            })),
            transition('normal <=> highlighted', animate(1500)),
        ]),
    ]
})
export class AppComponent {
    state = 'normal';
    wildState = 'normal';
    list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        console.log(this.state);
    }

    onShrink() {
        this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
        console.log(this.wildState);
    }

    onAdd(item) {
        this.list.push(item);
    }

    onDelete(item) {
        this.list.splice(this.list.indexOf(item), 1);
    }
}
