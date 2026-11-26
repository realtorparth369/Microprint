import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import {
//   interval,
//   Observable,
//   startWith,
//   Subject,
//   switchMap,
//   timer,
// } from 'rxjs';
import { SlideInterface2 } from '../../types/slide.interface';

@Component({
  selector: 'image-slidersmall2',
  templateUrl: './imageSlider3.component.html',
  styleUrls: ['./imageSlider3.component.css'],
})
export class ImageSlider3Component implements OnInit, OnDestroy {
  @Input() slides3: SlideInterface2[] = [];

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
      ? this.slides3.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides3.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides3[this.currentIndex].url}')`;
  }
}
