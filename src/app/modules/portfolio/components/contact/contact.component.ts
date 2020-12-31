import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type FIELD_NAME_TYPE = 'name' | 'email' | 'message';

const ERRORS_MESSAGES = {
  name: { required: 'Required' },
  email: { required: 'Required', pattern: 'Invalid email' },
  message: { required: 'Required' },
};

const EMAIL_FORMAT = '^[\\w]+(([\\w-+\\.]+[\\w])*)+@([\\w-]+\\.)+[\\w-]+[\\w-]*$';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  formControls: { [key: string]: FormControl };
  fieldNames: FIELD_NAME_TYPE[] = ['name', 'email', 'message'];
  errorMessages: { [key: string]: string } = {};

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.generateControls();
    this.form = this.formbuilder.group(this.formControls);
  }

  generateControls() {
    this.formControls = {
      name: this.formbuilder.control('', Validators.required),
      email: this.formbuilder.control('', [Validators.required, Validators.pattern(EMAIL_FORMAT)]),
      message: this.formbuilder.control('', Validators.required),
    };
  }

  onSubmit() {
    if (this.validateForm()) {
      // TODO(beni96): Send the message.
    }
  }

  validateForm(): boolean {
    this.errorMessages = {};
    this.fieldNames.forEach(fieldName => {
      const errors = this.formControls[fieldName].errors;
      if (errors) {
        const fieldErrorNames = Object.keys(errors);
        const errorName = fieldErrorNames[0];
        this.errorMessages[fieldName] = ERRORS_MESSAGES[fieldName][errorName];
      }
    });
    return this.form.valid;
  }
}
