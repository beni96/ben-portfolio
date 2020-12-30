import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type FIELD_NAME_TYPE = 'name' | 'email' | 'message';

const ERRORS_MESSAGES = {
  name: { required: 'Required' },
  email: { required: 'Required', email: 'Invalid email' }
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
  errorMessages: { [key: string]: string };

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

  onSubmit() {}
}
