import {AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { environments } from '../../../environments/environment';
import { v4 as UUIDV4 } from 'uuid';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environments.mapboxkey;

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.html',
  styleUrl: './markers-page.css'
})
export class MarkersPage implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  markers = signal<Marker[]>([]);

  async ngAfterViewInit() {
    if (!this.divElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-71.59388268871405, 10.655949612959983], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map){
    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent){
    if(!this.map()) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const map = event.target;
    const coords = event.lngLat;


    const marker = new mapboxgl.Marker({
      draggable: false,
      color: color
    })
    .setLngLat(coords)
    .addTo(map)

    const newMarker: Marker = {
      id: UUIDV4(),
      mapboxMarker: marker
    }

    this.markers.update(markers => [newMarker, ...markers])
  }

  flyToMarker( lnglat: LngLatLike ){
    if(!this.map()) return;

    this.map()?.flyTo({
      zoom: 14,
      center: lnglat
    })
  }

  deleteMarker(marker: Marker){
    if(!this.map()) return;
    
    const map = this.map();
    marker.mapboxMarker.remove();

    this.markers.update(markers => markers.filter(m => m.id !== marker.id))
  }
}
