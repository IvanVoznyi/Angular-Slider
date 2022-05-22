import { Component } from '@angular/core';

enum SlideDirection {
  Left = 'left',
  Right = 'right',
  None = 'none'
}

enum FromLeft {
  FromLeft,
  None,
}

enum FromRight {
  FromRight,
  None,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  previousSlide = 0;
  currentSlide = 0;
  slideDirection: SlideDirection = SlideDirection.None;
  FromLeft: FromLeft = FromLeft.None;
  FromRight: FromRight = FromRight.None;

  slideList = [
    { url: './assets/img/city.jpg' },
    { url: './assets/img/autumn.jpg' },
    { url: './assets/img/calligraphy.jpg' },
    { url: './assets/img/mallorca.jpg' },
    { url: './assets/img/rome.jpg' },
    { url: './assets/img/chicago.jpg' },
  ];

  slideLeft() {
    this.slideDirection = SlideDirection.Left;
    this.FromLeft = FromLeft.FromLeft;

    const lastSlideIndex = this.slideList.length - 1;

    if (this.FromRight === FromRight.FromRight) {

      if(this.currentSlide === 0) {
        this.currentSlide = lastSlideIndex;
        this.previousSlide  = 0;
        return
      }

      this.currentSlide -= 1;
      this.previousSlide = this.currentSlide + 1;

      if (
        lastSlideIndex === this.currentSlide ||
        this.currentSlide === 0
      ) {
        this.FromRight = FromRight.None;
      }
      return;
    }

    if (this.currentSlide === 0) {
      this.currentSlide = lastSlideIndex;
      this.previousSlide = 0;
      return;
    }

    if (this.currentSlide === lastSlideIndex) {
      this.currentSlide -= 1;
      this.previousSlide = this.currentSlide + 1;
      return;
    }

    this.currentSlide -= 1;
    this.previousSlide = this.currentSlide + 1;
  }

  slideRight() {
    this.slideDirection = SlideDirection.Right;
    this.FromRight = FromRight.FromRight;

    const lastSlideIndex = this.slideList.length - 1;

    if (this.FromLeft === FromLeft.FromLeft) {
      if (this.currentSlide === lastSlideIndex) {
        this.FromLeft = FromLeft.None;
        this.currentSlide -= 1;
        this.previousSlide = this.currentSlide + 1;
        return;
      }

      this.currentSlide += 1;
      this.previousSlide = this.currentSlide - 1;

      if (lastSlideIndex === this.currentSlide) {
        this.FromLeft = FromLeft.None;
      }
      return;
    }

    if (this.currentSlide === lastSlideIndex) {
      this.currentSlide = 0;
      this.previousSlide = lastSlideIndex;
      return;
    }

    this.currentSlide += 1;
    this.previousSlide = this.currentSlide - 1;
  }
}
