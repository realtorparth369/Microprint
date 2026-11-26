import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/images/Updated_Images/Asset 1.png', title: 'beach' },
    // { url: '/assets/images/carousel_1.jpg', title: 'beach' }
    // { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    // { url: '/assets/images/2.png', title: 'beach' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
