import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-service-second',
  templateUrl: './service-second.component.html',
  styleUrls: ['./service-second.component.css']
})
export class ServiceSecondComponent implements OnInit {
  slides: SlideInterface[] = [
    { url: '/assets/images/Updated_Images/information-sign-wall.jpg', title: 'beach' },
    // { url: '/assets/images/carousel_1.jpg', title: 'beach' }
    // { url: '/assets/images/service_background_1.jpg', title: 'beach' },
    // { url: '/assets/images/2.png', title: 'beach' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
