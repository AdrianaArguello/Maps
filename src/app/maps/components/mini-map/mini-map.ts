import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environments } from '../../../../environments/environment';

mapboxgl.accessToken = environments.mapboxkey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  styleUrl: './mini-map.css',
})
export class MiniMap implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  zoom = input<number>(14);

  coordinates =  input.required<{ lng: number; lat: number }>();

  async ngAfterViewInit() {
    if (!this.divElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.coordinates(),
      zoom: this.zoom(),
      interactive: false,
      pitch: 30
    });

    new mapboxgl.Marker().setLngLat(this.coordinates()).addTo(map);

    this.mapListeners(map);
  }
  
  mapListeners(map: mapboxgl.Map){
    this.map.set(map);
  }
}
