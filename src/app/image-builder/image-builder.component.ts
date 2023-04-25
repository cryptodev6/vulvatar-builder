import { Component, OnInit, ElementRef } from '@angular/core';

interface ImageMap {
  [category: string]: {
    id: string,
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
      <div id="canvas" #canvas></div>
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

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  loadImages(category: keyof ImageMap) {
    console.log("category", category);
    const imageMap: ImageMap = {
      vagina: [ // cuales son las imagenes?
        {id: "vagina1", imageUrl: '../assets/VULVATAR_ELEMENTOS/BASES/01.png'},
        {id: "vagina2", imageUrl: '../assets/VULVATAR_ELEMENTOS/BASES/01.png'},
        {id: "vagina3", imageUrl: '../assets/VULVATAR_ELEMENTOS/BASES/01.png'}
      ],
      labios: [ // ok
        {id: "labios1", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/01.png'},
        {id: "labios2", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/02.png'},
        {id: "labios3", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/03.png'},
        {id: "labios4", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/04.png'},
        {id: "labios5", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/05.png'},
        {id: "labios6", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/06.png'},
        {id: "labios7", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/07.png'},
        {id: "labios8", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/08.png'},
        {id: "labios9", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/09.png'},
        {id: "labios10", imageUrl: '../assets/VULVATAR_ELEMENTOS/LABIOS/10.png'}
      ],
      clitoris: [ // ok
        {id: "clitoris1", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/01.png'},
        {id: "clitoris2", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/02.png'},
        {id: "clitoris3", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/03.png'},
        {id: "clitoris4", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/04.png'},
        {id: "clitoris5", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/05.png'},
        {id: "clitoris6", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/06.png'},
        {id: "clitoris7", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/07.png'},
        {id: "clitoris8", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/08.png'},
        {id: "clitoris9", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/09.png'},
        {id: "clitoris10", imageUrl: '../assets/VULVATAR_ELEMENTOS/CLITORIS/10.png'}
      ],
      vello_pubico: [
        {id: "vello_pubico1", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/01.png'},
        {id: "vello_pubico2", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/02.png'},
        {id: "vello_pubico3", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/03.png'},
        {id: "vello_pubico4", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/04.png'},
        {id: "vello_pubico5", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/05.png'},
        {id: "vello_pubico6", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/06.png'},
        {id: "vello_pubico7", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/07.png'},
        {id: "vello_pubico8", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/08.png'},
        {id: "vello_pubico9", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/09.png'},
        {id: "vello_pubico10", imageUrl: '../assets/VULVATAR_ELEMENTOS/VELLO_PUBICO/10.png'}
      ],
      accesorios: [ // ok
        {id: "accesorios1", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/01.png'},
        {id: "accesorios2", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/02.png'},
        {id: "accesorios3", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/03.png'},
        {id: "accesorios4", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/04.png'},
        {id: "accesorios5", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/05.png'},
        {id: "accesorios6", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/06.png'},
        {id: "accesorios7", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/07.png'},
        {id: "accesorios8", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/08.png'},
        {id: "accesorios9", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/09.png'},
        {id: "accesorios10", imageUrl: '../assets/VULVATAR_ELEMENTOS/ACCESORIOS/10.png'}
      ],
      color_piel: [ // ok
        {id: "color_piel1", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/01.png'},
        {id: "color_piel2", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/02.png'},
        {id: "color_piel3", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/03.png'},
        {id: "color_piel4", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/04.png'},
        {id: "color_piel5", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/05.png'},
        {id: "color_piel6", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/06.png'},
        {id: "color_piel7", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/07.png'},
        {id: "color_piel8", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/08.png'},
        {id: "color_piel9", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/09.png'},
        {id: "color_piel10", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/10.png'}
      ]
    };
    this.selectedCategory = category;
    this.images = imageMap[category];
  }

  selectImage(image: any) {
    for (var i=0; i<= this.selectedImages.length; i++) {
      if (this.selectedImages[i].category === this.selectedCategory) {
        if (this.selectedImages[i].selectedId === null) {
          // Is the first time that its adding an image
          this.selectedImages[i].selectedId = image.id;
          this.appendDiv(image.imageUrl, image.id, this.selectedCategory);
        } else {
          this.deleteDiv(this.selectedImages[i].selectedId);
          this.selectedImages[i].selectedId = image.id;
          this.appendDiv(image.imageUrl, image.id, this.selectedCategory);
        }
        break;
      }
    }
  }

  appendDiv(imageUrl: string, imageId: string, selectedCategory: string) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.id = imageId;
    img.style.position = 'fixed';
    img.style.height = '400px';
    img.style.top = '100px';
    img.style.pointerEvents = "none";
    if (selectedCategory === "color_piel") {
      img.style.zIndex = "-1";
    }
    const canvas = document.querySelector("#canvas");
    canvas?.appendChild(img);
  }

  deleteDiv(imageId: string) {
    const img = document.getElementById(imageId);
    if (!!img) {
      img.remove();
    }
  }

}
