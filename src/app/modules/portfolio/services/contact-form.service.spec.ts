import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact-form.service';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ContactService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
