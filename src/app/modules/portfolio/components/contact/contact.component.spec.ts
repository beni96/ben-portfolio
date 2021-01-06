import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { from } from 'rxjs';
import { FirebaseStub } from '../../common/firebase-stub';
import { ContactService } from '../../services/contact-form.service';
import { FIREBASE_TOKEN } from '../../tokens/firebase-token';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debugElement: DebugElement;
  let contactServiceMock: jasmine.SpyObj<ContactService>;
  const firebaseMock = new FirebaseStub();

  beforeEach(async(() => {
    contactServiceMock = jasmine.createSpyObj('ContactService', ['generateRequest', 'sendRequest']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [
        { provide: ContactService, useValue: contactServiceMock },
        { provide: FIREBASE_TOKEN, useValue: firebaseMock },
      ],
      declarations: [ContactComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    contactServiceMock.sendRequest.and.returnValue(from([{ ok: true, next: '' }]));
    fixture.detectChanges();

    spyOn(component.form, 'reset');
    spyOn(component.snackbarLabelSubject$, 'next');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set errors on empty fields', () => {
    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(component.errorMessages.name).toEqual('Required');
    expect(component.errorMessages.email).toEqual('Required');
    expect(component.errorMessages.message).toEqual('Required');
  });

  it('should set errors on invalid email field', () => {
    component.formControls.email.setValue('value');
    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(component.errorMessages.email).toEqual('Invalid email');
  });

  it('should reset fields and show snackbar on submiting form', () => {
    component.formControls.name.setValue('name');
    component.formControls.email.setValue('user@gmail.com');
    component.formControls.message.setValue('message');
    fixture.detectChanges();

    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(component.form.reset).toHaveBeenCalled();
    expect(component.snackbarLabelSubject$.next).toHaveBeenCalledWith('Message sent');
  });

  it('should show error snackbar on error response', () => {
    component.formControls.name.setValue('name');
    component.formControls.email.setValue('user@gmail.com');
    component.formControls.message.setValue('message');
    fixture.detectChanges();

    contactServiceMock.sendRequest.and.returnValue(from([{ ok: false, next: '' }]));

    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    expect(component.snackbarLabelSubject$.next).toHaveBeenCalledWith('Oops something went wrong');
  });
});
