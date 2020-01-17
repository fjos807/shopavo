import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements AfterViewInit {

  private map;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [9.7489166, -83.7534256],
      zoom: 9
    });
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    L.control.scale().addTo(this.map);

    tiles.addTo(this.map);
  }

}
