import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { BusinessService } from '../business.service';
import { Business } from '../model/business';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BusinessService]
})
export class HomeComponent implements AfterViewInit {

  private map;

  constructor(private businessService: BusinessService) { }

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

    this.businessService.getBusiness().subscribe(res => {
      for (var i = 0; i < ((<Business[]> res).length); i++){
        var business = <Business> res[i];
        var latLag = <number[]> business.location;
        var marker = L.marker([latLag[0], latLag[1]]).addTo(this.map);
        marker.bindPopup(business.name);
      }
    });
    
  }

}
