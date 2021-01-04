import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component.aboutClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the titles after the animation', fakeAsync(() => {
    tick(5000);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const titleElement1 = component.titleElements.toArray()[0];
      expect(titleElement1.nativeElement.innerHTML).toEqual(component.titles[0]);
      const titleElement2 = component.titleElements.toArray()[0];
      expect(titleElement2.nativeElement.innerHTML).toEqual(component.titles[1]);
    });
  }));

  it('should emit an event on clicking the about button', () => {
    const aboutButton = debugElement.query(By.css('button'));
    aboutButton.triggerEventHandler('click', null);
    expect(component.aboutClicked.emit).toHaveBeenCalled();
  });
});
