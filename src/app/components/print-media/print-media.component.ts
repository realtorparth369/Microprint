import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-print-media',
  templateUrl: './print-media.component.html',
  styleUrls: ['./print-media.component.css']
})
export class PrintMediaComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/images/Updated_Images/Asset 31.png', title: 'beach' },
    // { url: '/assets/images/carousel_1.jpg', title: 'beach' }
    // { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    // { url: '/assets/images/2.png', title: 'beach' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
