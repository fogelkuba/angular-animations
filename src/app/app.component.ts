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
                backgroundColor: 'yellow',
                transform: 'translateX(0) scale(0.5)'
            })),
            transition('normal <=> highlighted', animate(1500)),
            transition('shrunken <=> *', [
                style({
                    backgroundColor: 'orange'
                }),
                animate(1000, style({
                    borderRadius: '50px'
                })),
                animate(500)
            ]),
        ]),

        trigger('listOne', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transition: 'translateX(-100px)'
                }),
                animate(500)
            ]),
            transition('* => void', [
                animate(200, style({
                    transition: 'translateX(100px)',
                    opacity: 0
                }))
            ]),
        ]),
    ]
})
export class AppComponent {
    state = 'normal';
    wildState = 'normal';
    list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrink() {
        this.wildState = 'shrunken';
    }

    onAdd(item) {
        this.list.push(item);
    }

    onDelete(item) {
        this.list.splice(this.list.indexOf(item), 1);
    }

    animationDone($event) {
        console.log($event);
    }
}
