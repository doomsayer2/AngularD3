import { Component } from '@angular/core';


@Component({
    selector: "my-element-navigation",
    template: `
    <div class="navbar navbar-default">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <a routerLink="/">Home</a>
                </li>
                <li routerLinkActive="active">
                    <a routerLink="/about-us/123">About Us</a>
                </li>
            
            </ul>
        </div>
    </div>
    
    `
})
export class NavigationComponent {}