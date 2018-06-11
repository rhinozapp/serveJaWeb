import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public breakpoint : number = 2;
    constructor() {}

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
    }

    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
    }
}
