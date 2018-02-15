import { Component, OnInit } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-carousel',
  template: `<app-carouselview
            [carouselConfig]="carouselConfig"
            [carouselItems]="carouselItems"
            >
            </app-carouselview>`,

})
export class CarouselComponent implements OnInit {

  public carouselConfig: NgxCarousel;
  carouselItems: any = [
    {
      image: 'spotlight_mock.jpg',
      content: 'speaker bottle',
      price: '121$',
      info: 'Portable Bluetooth stereo speakers',
    },
    {
      image: 'spotlight_mock.jpg',
      content: 'Bluetooth Speaker',
      price: '121$',
      info: 'Portable Bluetooth stereo speakers',
    },
    {
      image: 'spotlight_mock.jpg',
      content: 'Superman Cap',
      price: '121$',
      info: 'Portable Bluetooth stereo speakers',
    },
    {
      image: 'spotlight_mock.jpg',
      content: 'Mad Max Cap',
      price: '91$',
      info: 'Portable Bluetooth stereo speakers',
    },
    {
      image: 'spotlight_mock.jpg',
      content: 'samsung a8+',
      price: '71$',
      info: 'Portable Bluetooth stereo speakers',
    },
    {
      image: 'spotlight_mock.jpg',
      content: 'Oneplus 7+',
      price: '715$',
      info: 'Portable Bluetooth stereo speakers',
    },
  ];

  constructor() {
    this.carouselConfig = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }




  ngOnInit() { }
}
