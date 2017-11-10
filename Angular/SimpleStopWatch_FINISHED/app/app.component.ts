import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <button *ngIf='!counterRunning' (click)='onStartCounter()'>Start watch!</button>
        <p *ngIf='counterRunning'>{{ currentTime }}</p>
        <button *ngIf='counterRunning' (click)='onStopCounter()'>Stop watch!</button>
      </div>
    `
})
export class AppComponent {
    counterRunning: boolean = false;
    currentTime = 0;

    private intervalId: any;

    onStartCounter() {
        this.counterRunning = true;
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
        }, 1000);
    }

    onStopCounter() {
        this.counterRunning = false;
        clearInterval(this.intervalId);
    }
}
