import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() btnType: 'button' | 'submit' | 'reset' = 'button';

}
