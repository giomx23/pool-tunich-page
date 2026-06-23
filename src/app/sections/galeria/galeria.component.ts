import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  imports: [NgFor],
  styleUrls: ['./galeria.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GaleriaComponent {

  images = [
    {
      src: 'images/trabajo-tren-maya.jpg',
      title: 'Fachada Estación Tren Maya',
      description: 'Material tradicional con gran durabilidad.'
    },
    {
      src: 'images/trabajo-iglesia-1.jpg',
      title: 'Mesa y Porta Libro para Iglesia',
      description: 'Acabado fino ideal con gran durabilidad.'
    },
    {
      src: 'images/trabajo-casa-4.jpg',
      title: 'Cocina Casa 1',
      description: 'Granito fino con gran durabilidad y calidad.'
    },
    {
      src: 'images/trabajo-casa-3.jpg',
      title: 'Bar Casa 2',
      description: 'Fachada, lavamanos y meceta de gran calidad.'
    },
    {
      src: 'images/feria.jpg',
      title: 'Feria Artesanal del Tunich',
      description: 'Participación en la Feria del Tunich 2022.'
    },
    {
      src: 'images/placa-feria-1.jpg',
      title: 'Dinámica Feria Artesanal del Tunich 2024',
      description: 'Entrega de la primera placa para centro de mesa.'
    },
    {
      src: 'images/placa-feria-2.jpg',
      title: 'Dinámica Feria Artesanal del Tunich 2024',
      description: 'Entrega de la segunda placa para centro de mesa.'
    },
  ];
}
