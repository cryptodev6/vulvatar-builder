import { Component, OnInit } from '@angular/core';

interface ImageMap {
  [category: string]: {
    id: number,
    imageUrl: string
  }[];
}

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
        <img *ngFor="let image of images" (click)="selectImage(image)" [src]="image.imageUrl" class="image-selector">
      </div>
    </div>
  `,
  styleUrls: ['./image-builder.component.scss']
})
export class ImageBuilderComponent implements OnInit {
  images: any[] = [];
  userSelection: any = [];
  selectedCategory: any = '';
  selectedImages: any[] = [
    {
      "category": "vagina",
      "selectedId": null
    },
    {
      "category": "labios",
      "selectedId": null
    },
    {
      "category": "clitoris",
      "selectedId": null
    },
    {
      "category": "vello_pubico",
      "selectedId": null
    },
    {
      "category": "accesorios",
      "selectedId": null
    },
    {
      "category": "color_piel",
      "selectedId": null
    }
  ];

  ngOnInit() {

  }

  loadImages(category: keyof ImageMap) {
    console.log("category", category);
    const imageMap: ImageMap = {
      vagina: [
        {id: 1, imageUrl: 'vagina-image-1.jpg'},
        {id: 2, imageUrl: 'vagina-image-2.jpg'},
        {id: 3, imageUrl: 'vagina-image-3.jpg'}
      ],
      labios: [
        {id: 1, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/01.png'},
        {id: 2, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/02.png'},
        {id: 3, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/03.png'},
        {id: 4, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/04.png'},
        {id: 5, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/05.png'},
        {id: 6, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/06.png'},
        {id: 7, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/07.png'},
        {id: 8, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/08.png'},
        {id: 9, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/09.png'},
        {id: 10, imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/10.png'}
      ],
      clitoris: [
        {id: 1, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/01.png'},
        {id: 2, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/02.png'},
        {id: 3, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/03.png'},
        {id: 4, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/04.png'},
        {id: 5, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/05.png'},
        {id: 6, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/06.png'},
        {id: 7, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/07.png'},
        {id: 8, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/08.png'},
        {id: 9, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/09.png'},
        {id: 10, imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/10.png'}
      ],
      vello_pubico: [
        {id: 1, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/01.png'},
        {id: 2, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/02.png'},
        {id: 3, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/03.png'},
        {id: 4, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/04.png'},
        {id: 5, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/05.png'},
        {id: 6, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/06.png'},
        {id: 7, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/07.png'},
        {id: 8, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/08.png'},
        {id: 9, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/09.png'},
        {id: 10, imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/10.png'}
      ],
      accesorios: [
        {id: 1, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/01.png'},
        {id: 2, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/02.png'},
        {id: 3, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/03.png'},
        {id: 4, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/04.png'},
        {id: 5, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/05.png'},
        {id: 6, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/06.png'},
        {id: 7, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/07.png'},
        {id: 8, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/08.png'},
        {id: 9, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/09.png'},
        {id: 10, imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/10.png'}
      ],
      color_piel: [
        {id: 1, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/01.png'},
        {id: 2, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/02.png'},
        {id: 3, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/03.png'},
        {id: 4, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/04.png'},
        {id: 5, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/05.png'},
        {id: 6, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/06.png'},
        {id: 7, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/07.png'},
        {id: 8, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/08.png'},
        {id: 9, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/09.png'},
        {id: 10, imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/10.png'}
      ]
    };
    this.selectedCategory = category;
    this.images = imageMap[category];
  }

  selectImage(image: any) {
    for (var i=0; i<= this.selectedImages.length; i++) {
      if (this.selectedImages[i].category === this.selectedCategory) {
        this.selectedImages[i].selectedId = image.id;
        break;
      }
    }
    console.log("this.selectedImages", this.selectedImages);
  }
}
