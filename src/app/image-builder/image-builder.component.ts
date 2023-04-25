import { Component } from '@angular/core';

type ImageMap = {
  Vagina: string[],
  Labios: string[],
  Clitoris: string[],
  'Vello Pubico': string[],
  Accesorios: string[],
  'Color de piel': string[]
};

@Component({
  selector: 'app-image-builder',
  template: `
    <div class="image-builder">
      <div class="title">
        Ten una cita contigo <br>
        misma, ¡y conviertete <br>
        <span class="red">tu vulva en arte!</span>
      </div>
      <div id="canvas"></div>
      <div class="category-selector">
        <div class="category" (click)="loadImages('Vagina')">Vagina</div>
        <div class="category" (click)="loadImages('Labios')">Labios</div>
        <div class="category" (click)="loadImages('Clitoris')">Clitoris</div>
        <div class="category" (click)="loadImages('Vello Pubico')">Vello Pubico</div>
        <div class="category" (click)="loadImages('Accesorios')">Accesorios</div>
        <div class="category" (click)="loadImages('Color de piel')">Color de piel</div>
      </div>
      <div id="image-grid">
        <img *ngFor="let image of images" [src]="image">
      </div>
    </div>
  `,
  styleUrls: ['./image-builder.component.scss']
})
export class ImageBuilderComponent {
  images: string[] = [];

  loadImages(category: keyof ImageMap) {
    const imageMap: ImageMap = {
      Vagina: ['vagina-image-1.jpg', 'vagina-image-2.jpg', 'vagina-image-3.jpg'],
      Labios: ['labios-image-1.jpg', 'labios-image-2.jpg', 'labios-image-3.jpg'],
      Clitoris: ['clitoris-image-1.jpg', 'clitoris-image-2.jpg', 'clitoris-image-3.jpg'],
      'Vello Pubico': ['vello-pubico-image-1.jpg', 'vello-pubico-image-2.jpg', 'vello-pubico-image-3.jpg'],
      Accesorios: ['accesorios-image-1.jpg', 'accesorios-image-2.jpg', 'accesorios-image-3.jpg'],
      'Color de piel': ['color-de-piel-image-1.jpg', 'color-de-piel-image-2.jpg', 'color-de-piel-image-3.jpg']
    };

    this.images = imageMap[category];
  }
}
