import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-iot',
  templateUrl: './banner-iot.component.html',
  styleUrls: ['./banner-iot.component.scss']
})
export class BannerIotComponent {

  currentImage: string = 'apagado';
  currentImageUrl: string = '';
  fadeImageUrl: string | null = null;

  private imageMap: { [key: string]: string } = {
    'apagado': '/banner-iot/IOT_SinLUZ.jpg',
    'bombilla1': '/banner-iot/IOT_LUZ1.jpg',
    'bombilla2': '/banner-iot/IOT_LUZ2.jpg',
    'bombilla3': '/banner-iot/IOT_LUZ3.jpg',
    'bombilla4': '/banner-iot/IOT_LUZ4.jpg'
  };

  constructor() {
    this.updateImageUrl();
  }

  changeImage(state: string): void {
    const newUrl = this.imageMap[state];

    if (newUrl === this.currentImageUrl) return;

    this.currentImage = state;
    this.fadeImageUrl = newUrl; // Inicia la capa de transición
  }

  finishFade() {
    // Cuando termina la animación
    this.currentImageUrl = this.fadeImageUrl!;
    this.fadeImageUrl = null; // Elimina la capa de fade
  }

  private updateImageUrl(): void {
    this.currentImageUrl = this.imageMap[this.currentImage] || this.imageMap['apagado'];
  }

  apagarTodas() { this.changeImage('apagado'); }
  prenderBombilla1() { this.changeImage('bombilla1'); }
  prenderBombilla2() { this.changeImage('bombilla2'); }
  prenderBombilla3() { this.changeImage('bombilla3'); }
  prenderBombilla4() { this.changeImage('bombilla4'); }
}
