import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component.pageClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event on clicking on a page and close the menu', () => {
    const page = debugElement.queryAll(By.css('.page'))[3];
    page.triggerEventHandler('click', null);
    expect(component.currentPage).toEqual(3);
    expect(component.pageClicked.emit).toHaveBeenCalledWith(3);
    expect(component.isMenuOpened).toBeFalsy();
  });

  it('should toggle menu value on clicking the menu icon', () => {
    component.isMenuOpened = true;
    const menuIcon = debugElement.query(By.css('.fa-caret-down'));
    menuIcon.triggerEventHandler('click', null);
    expect(component.isMenuOpened).toBeFalsy();
  });
});
