import { Component } from '@angular/core';

type ImageMap = {
  vagina: string[],
  labios: string[],
  clitoris: string[],
  vello_pubico: string[],
  accesorios: string[],
  color_piel: string[]
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
        <div class="category" (click)="loadImages('vagina')">Vagina</div>
        <div class="category" (click)="loadImages('labios')">Labios</div>
        <div class="category" (click)="loadImages('clitoris')">Clitoris</div>
        <div class="category" (click)="loadImages('vello_pubico')">Vello Pubico</div>
        <div class="category" (click)="loadImages('accesorios')">Accesorios</div>
        <div class="category" (click)="loadImages('color_piel')">Color de piel</div>
      </div>
      <div id="image-grid">
        <img *ngFor="let image of images" [src]="image" class="image-selector">
      </div>
    </div>
  `,
  styleUrls: ['./image-builder.component.scss']
})
export class ImageBuilderComponent {
  images: string[] = [];

  loadImages(category: keyof ImageMap) {
    const imageMap: ImageMap = {
      vagina: ['vagina-image-1.jpg', 'vagina-image-2.jpg', 'vagina-image-3.jpg'],
      labios: [
        '../assets/VULVATAR_ELEMENTOS/LABIOS/01.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/02.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/03.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/04.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/05.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/06.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/07.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/08.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/09.png',
        '../assets/VULVATAR_ELEMENTOS/LABIOS/10.png',
      ],
      clitoris: [
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/01.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/02.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/03.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/04.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/05.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/06.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/07.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/08.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/09.png',
        '../assets/VULVATAR_ELEMENTOS/CLITORIS/10.png'
      ],
      vello_pubico: [
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/01.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/02.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/03.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/04.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/05.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/06.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/07.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/08.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/09.png',
        '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/10.png'
      ],
      accesorios: [
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/01.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/02.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/03.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/04.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/05.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/06.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/07.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/08.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/09.png',
        '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/10.png'
      ],
      color_piel: [
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/01.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/02.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/03.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/04.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/05.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/06.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/07.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/08.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/09.png',
        '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/10.png'
      ]
    };

    this.images = imageMap[category];
  }
}
