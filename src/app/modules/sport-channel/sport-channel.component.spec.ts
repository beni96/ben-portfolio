import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportChannelComponent } from './sport-channel.component';

describe('SportChannelComponent', () => {
  let component: SportChannelComponent;
  let fixture: ComponentFixture<SportChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SportChannelComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
