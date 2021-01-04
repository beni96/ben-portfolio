import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pages scrollHeight properly', () => {
    const scrollHeight1 = component.pages.toArray()[1].nativeElement.scrollHeight;
    const scrollHeight2 = component.pages.toArray()[2].nativeElement.scrollHeight;

    expect(component.pagesScrollHeight.length).toEqual(5);
    expect(component.pagesScrollHeight[0]).toEqual(0);
    expect(component.pagesScrollHeight[2]).toEqual(scrollHeight1 + scrollHeight2);
  });

  it('should change current page according to scroller', () => {
    document.scrollingElement.scrollTop = component.pagesScrollHeight[0] + 10;
    const event = new Event('scroll');
    document.dispatchEvent(event);
    expect(component.currentPage).toEqual(1);
  });

  it('should scroll to selected page on clicking it in the header', () => {
    spyOn(component.pages.toArray()[1].nativeElement, 'scrollIntoView');
    const header = debugElement.query(By.css('app-header'));
    header.triggerEventHandler('pageClicked', 1);
    expect(component.pages.toArray()[1].nativeElement.scrollIntoView).toHaveBeenCalled();
  });
});
