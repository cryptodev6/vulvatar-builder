import { Component, OnInit, ElementRef } from '@angular/core';
import { imageMap } from './imageMap';

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
    
    // TODO no se que es COLOR_PIEL_PSI
    // TODO no se que es EXTRAS_Fondos_Vulvatars
    // TODO cuales son los valores por defecto que cargan la primera vez
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
    img.style.position = 'absolute';
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
