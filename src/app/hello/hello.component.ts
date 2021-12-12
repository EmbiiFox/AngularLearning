import {Component} from '@angular/core';
@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styles:[`
        h1{
            color:red;
        }
    `],
})
export class HelloComponent{
    title="Xin chào";
}