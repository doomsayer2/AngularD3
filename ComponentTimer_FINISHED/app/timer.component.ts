import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-timer',
  template: `
    <div>
        TimerComponent: {{ duration }}
    </div>
  `
})
export class TimerComponent {
  @Input() duration: number;
  @Output() finish = new EventEmitter();    // For events we give something back to the top component so we put
                                            // somehting out of the components context.
  constructor() {
    setInterval(() => {
      this.duration -= 1;
      if (this.duration === 0) {
        this.finish.emit();   // Emit the event after a specific time for example.
      }
    }, 1000);
  }
}
