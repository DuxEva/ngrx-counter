import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() width: string = 'w-auto';
  @Input() borderRadius?: string;
}
