import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicesview',
  templateUrl: './servicesview.pug',
})
export class ServicesViewComponent implements OnInit {
  servicesContent: Array<any> = [{
    icon: 'phone',
    caption: '+(777) 2345 7885',
    info: 'Toll-free hotline. 7 days a week from 10.00 a.m. to 6.00 p.m.'
  },
  {
    icon: 'gift',
    caption: 'Free Shipping',
    info: 'Shipping prices for any form of delivery and order’s cost is constant - $49.  A free shipping is available for orders more than $99.'
  },
  {
    icon: 'arrow-left',
    caption: 'Returns and Exchanges',
    info: 'Any goods, that was bought in our online store, can be returned during 30 days since purchase date.'
  }
]
  constructor() { }

  ngOnInit() { }
}
