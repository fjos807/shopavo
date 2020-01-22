import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { BusinessService } from '../../service/business.service';
import { Business } from '../../model/business';

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
      center: [9.864277, -83.920707],
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    L.control.scale().addTo(this.map);

    tiles.addTo(this.map);

    this.businessService.getAllBusiness().subscribe(res => {
      for (let i = 0; i < ((res as Business[]).length); i++){
        const business = res[i] as Business;
        const latLag = business.location as number[];
        const marker = L.marker([latLag[0], latLag[1]]).addTo(this.map);
        marker.bindPopup('<a href="/store-products/' + business._id + '" class="nav-link">' + business.name + '</a>');
      }
    });

  }

}
