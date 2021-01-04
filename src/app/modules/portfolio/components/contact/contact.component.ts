import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { SendEmailRequest, SendEmailResponse } from '../../interfaces/contact';
import { ContactService } from '../../services/contact-form.service';

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
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  formControls: { [key: string]: FormControl };
  fieldNames: FIELD_NAME_TYPE[] = ['name', 'email', 'message'];
  errorMessages: { [key: string]: string } = {};
  fieldsValue = '';
  snackbarLabelSubject$ = new Subject<string>();

  constructor(private formbuilder: FormBuilder, private contactService: ContactService) {}

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
      const body: SendEmailRequest = {
        _subject: this.formControls.name.value,
        email: this.formControls.email.value,
        message: this.formControls.message.value,
      };
      const request = this.contactService.generateRequest(body);
      this.contactService.sendRequest(request).subscribe(
        (response: SendEmailResponse) => {
          if (response.ok) {
            this.form.reset();
          }
          const snackbarLabel = response.ok ? 'Message sent' : 'Oops something went wrong';
          return this.snackbarLabelSubject$.next(snackbarLabel);
        },
        () => this.snackbarLabelSubject$.next('Oops something went wrong')
      );
    }
  }

  validateForm(): boolean {
    this.errorMessages = {};
    this.fieldNames.forEach((fieldName) => {
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
