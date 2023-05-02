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
  templateUrl: './image-builder.component.html',
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
    this.loadImages('color_piel');
    this.selectImage({id: "color_piel10", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL/04.png'})
    this.loadImages('vagina');
  }

  loadImages(category: keyof ImageMap) {
    this.selectedCategory = category;
    this.images = imageMap[category];
  }

  selectImage(image: any) {
    for (var i=0; i< this.selectedImages.length; i++) {
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
        console.log("this.selectedImages", this.selectedImages);
        break;
      }
    }
  }

  appendDiv(imageUrl: string, imageId: string, selectedCategory: string) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.id = imageId;
    img.style.position = 'absolute';
    img.style.height = '350px';
    img.style.width = '100%';
    img.style.top = '100px';
    img.style.pointerEvents = "none";
    if (selectedCategory === "color_piel") {
      img.style.zIndex = "-1";
    }
    const canvas = document.querySelector("#canvas");
    canvas?.appendChild(img);
    // this.refreshImageSelection(imageId, selectedCategory); 
  }

  refreshImageSelection(imageId: string, selectedCategory: string) {
    // TODO: Create function
    console.log("entered refreshImageSelection", this.images, imageId);
    for (var i=0; i< this.images.length; i++) {
      if (imageId === this.images[i].id) {
        console.log("found image to change background", this.images[i]);
        let searchString = "#image-" + imageId;
        let canvas = document.querySelector(searchString) as HTMLCanvasElement;
        if (!!canvas ) {
          canvas.style.backgroundColor  = 'blue';
        }
      }
    }
  }

  reset() {
    this.selectedImages = [
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

    const canvas = this.el.nativeElement.querySelector('#canvas');
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }
  }

  returnImage() {
    // Get the last selected image and remove it from the selectedImages array
    const lastSelectedImage = this.selectedImages.pop();

    // Remove the last added image div from the canvas
    const canvas = document.getElementById('canvas');
    const lastImageDiv = canvas?.lastChild as Node;
    canvas?.removeChild(lastImageDiv);

    // Set the selectedImages array to its previous state if an image was removed
    if (lastSelectedImage) {
      this.selectedImages = [...this.selectedImages];
    }
  }



  deleteDiv(imageId: string) {
    const img = document.getElementById(imageId);
    if (!!img) {
      img.remove();
    }
  }

  saveImage() {
    console.log("selectedImages", this.selectedImages);
    // redirect here
  }

}
