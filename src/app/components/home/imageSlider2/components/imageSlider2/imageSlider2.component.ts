import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import {
//   interval,
//   Observable,
//   startWith,
//   Subject,
//   switchMap,
//   timer,
// } from 'rxjs';
import { SlideInterface } from '../../types/slide.interface';

@Component({
  selector: 'image-slidersmall',
  templateUrl: './imageSlider2.component.html',
  styleUrls: ['./imageSlider2.component.css'],
})
export class ImageSlider2Component implements OnInit, OnDestroy {
  @Input() slides2: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides2.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides2.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides2[this.currentIndex].url}')`;
  }
}
