import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tilesview',
  templateUrl: './tilesview.pug'
})
export class TilesViewComponent implements OnInit {
  tilesContent: Array<any> = [
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    },
    {
      link: '#',
      background: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
