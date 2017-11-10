import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div>
        <my-timer [duration]='timerDuration' (finish)='onTimerFinish()'></my-timer>
      </div>
    `
})
export class AppComponent {
  timerDuration = 20;

  onTimerFinish() {
    alert('finishTimer');
  }
}
