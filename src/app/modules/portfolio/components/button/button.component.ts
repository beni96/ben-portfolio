import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() color: 'primary' | 'secondary';
  @Input() size: 'lg' | 'md';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  getButtonClasses() {
    return `${this.color} ${this.size}`;
  }
}
