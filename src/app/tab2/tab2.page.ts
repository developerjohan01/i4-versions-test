import {
    Component,
    ElementRef, OnInit,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    @ViewChild('iframeContainer', {static: true}) iframeContainer: ElementRef;
    @ViewChild('iframeContainer2', {read: ElementRef, static: true}) iframeContainer2: ElementRef;

    constructor() {
        console.log('constructor');
        console.log(this.iframeContainer);
        console.log(this.iframeContainer2);
    }

    ngOnInit(): void {
        console.log('ngOnInit');
        console.log(this.iframeContainer);
        console.log(this.iframeContainer2);
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');
        console.log(this.iframeContainer);
        console.log(this.iframeContainer2);
    }

}
