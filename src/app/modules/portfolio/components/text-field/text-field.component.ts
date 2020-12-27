import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() isTextarea = false;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() errorMessage: string;
}
