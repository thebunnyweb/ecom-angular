import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-carouselview',
  templateUrl: './carouselview.html'
})
export class CarouselViewComponent {
  @Input() carouselConfig;
  @Input() carouselItems;


  constructor() {}

  ngOnInit() {}


}
