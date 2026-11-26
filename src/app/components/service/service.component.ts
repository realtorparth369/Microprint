import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';
// import { SlideInterface } from './';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/images/Updated_Images/woman-using-a-laptop-mockup-2023-11-27-04-54-09-utc.jpg', title: 'beach' },
    // { url: '/assets/images/2.png', title: 'beach' },
    // { url: '/assets/images/carousel_1.jpg', title: 'beach' },
    // { url: '/assets/images/service_background_2.jpg', title: 'beach' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
