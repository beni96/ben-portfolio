import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Output, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('displayButton', [
      state('hidden', style({
        opacity: 0,
        top: '150px',
      })),
      state('visible', style({
        opacity: 1,
        top: '0',
      })),
      transition('visible => hidden', [
        animate('0.4s')
      ]),
      transition('hidden => rotate', [
        animate('1s', keyframes([
          style({ opacity: 1, top: '-20px', offset: 0.6 }),
          style({ opacity: 1, top: '10px', offset: 0.8 }),
          style({ opacity: 1, top: 0, offset: 1 }),
        ]))
      ]),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit {
  titles = ['Ben Golan', 'Welcome to My portfolio'];
  shouldDisplayButton = false;
  interval: any;

  @Output() aboutClicked = new EventEmitter<void>();

  @ViewChildren('title') titleElements;

  ngAfterViewInit() {
    this.typeTitle(0);
  }

  typeTitle(index: number) {
    if (index === this.titles.length) {
      return this.shouldDisplayButton = true;
    }

    const element = this.titleElements.toArray()[index];
    const letters = this.titles[index].split('');
    let letterIndex = 0;

    this.interval = setInterval(() => {
      if (element.nativeElement.innerHTML === this.titles[index]) {
        clearInterval(this.interval);
        return this.typeTitle(index + 1);
      }
      const elementInner = element.nativeElement.innerHTML;
      element.nativeElement.innerHTML = elementInner + letters[letterIndex];
      letterIndex++;
    }, 100);
  }

  onAboutClick() {
    this.aboutClicked.emit();
  }
}
