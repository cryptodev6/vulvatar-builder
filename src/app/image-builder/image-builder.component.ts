import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { saveAs } from 'file-saver';
import { imageMap } from './imageMap';
import html2canvas from 'html2canvas';
import { MockLoginService } from '../shared/services/mock-login.service';
import { ImageBuilderService } from '../shared/services/image-builder.service';
import { ToastrService } from 'ngx-toastr';


interface ImageMap {
  [category: string]: {
    id: string,
    imageUrl: string
  }[];
}
/*
- Agregar fondos - Extras imagenes
- Eliminar cropping
- Para votar se necesita facebook login 
- Animacion de spotify en landing page https://spotify.design/

- Orden de jerarquia segun el selector


*/
@Component({
  selector: 'app-image-builder',
  templateUrl: './image-builder.component.html',
  styleUrls: ['./image-builder.component.scss']
})
export class ImageBuilderComponent implements OnInit {
  images: any[] = [];
  userSelection: any = [];
  @ViewChild('canvasContainer', { static: true }) canvasContainer: ElementRef<HTMLDivElement>;
  selectedCategory: any = '';
  previousSelections: { [category: string]: string | null } = {};
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
    },
    {
      "category": "fondos",
      "selectedId": null
    },
  ];

  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropFinished: boolean = false;
  imageFile: any = '';
  imageBase64: any = '';

  fileChangeEvent(event: any): void {

  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  onCropConfirm() {
    // Perform desired action or launch a function
    // For example, you can call another method or navigate to a different route
    // Here's an example of calling a function:
    this.downloadImage();
  }

  constructor(
    private el: ElementRef, private renderer: Renderer2,
    public mockLoginService : MockLoginService ,
    public imageBuilderService : ImageBuilderService ,

    private toastr: ToastrService) { }

  ngOnInit() {
    this.loadImages('color_piel');
    this.selectImage({id: "color_piel15", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL_PSI/05.png'});
    this.loadImages('vagina');
  }

  ngAfterViewInit(): void {
    const containerElement = this.canvasContainer.nativeElement;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  loadImages(category: keyof ImageMap) {
    this.selectedCategory = category;
    this.images = imageMap[category];
  }

  selectImage(image: any) {
    const category = this.selectedCategory;

    if (this.selectedImages.some(item => item.category === category)) {
      const previousSelection = this.previousSelections[category];

      if (previousSelection === image.id) {
        // User clicked on the same image, return to the previous selection
        this.returnToPreviousSelection(category);
        return;
      }

      const selectedId = this.selectedImages.find(item => item.category === category)?.selectedId;

      if (selectedId !== null) {
        // Remove the last selected image div
        this.deleteDiv(selectedId);
      }
    }

    const categoryIndex = this.selectedImages.findIndex(item => item.category === category);

    if (categoryIndex !== -1) {
      // Update selectedId and add the new image div
      this.selectedImages[categoryIndex].selectedId = image.id;
      this.appendDiv(image.imageUrl, image.id, category);

      // Update previous selection
      this.previousSelections[category] = image.id;
    }
  }

  returnToPreviousSelection(category: string) {
    const previousSelection = this.previousSelections[category];
    console.log("previousSelection",previousSelection);
    const currentSelection = this.selectedImages.find(item => item.category === category);
    console.log("currentSelection", currentSelection);
    if (currentSelection && previousSelection !== null && previousSelection !== currentSelection.selectedId) {
      // Get the image to be added back
      const imageToAdd = this.images.find(item => item.id === previousSelection);

      if (imageToAdd) {
        // Remove the current selected image div
        this.deleteDiv(currentSelection.selectedId);

        // Add back the previous selected image div
        this.appendDiv(imageToAdd.imageUrl, imageToAdd.id, category);
        currentSelection.selectedId = imageToAdd.id;
        this.previousSelections[category] = imageToAdd.id;
      }
    }
  }

  appendDiv(imageUrl: string, imageId: string, selectedCategory: string) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.id = imageId;
    img.style.position = 'absolute';
    img.style.height = '450px';
    img.style.width = '100%';
    img.style.top = '0px';
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
        "category": "fondos",
        "selectedId": null
      },
      {
        "category": "color_piel",
        "selectedId": ""
      }
    ];
    const canvas = this.el.nativeElement.querySelector('#canvas');
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }
    this.selectImage({id: "color_piel15", imageUrl: '../assets/VULVATAR_ELEMENTOS/COLOR_PIEL_PSI/05.png'});
  }

  returnImage() {
    const category = this.selectedCategory;
    this.returnToPreviousSelection(category);

    const canvas = document.getElementById('canvas');
    const lastImageDiv = canvas?.lastChild as Node;
    canvas?.removeChild(lastImageDiv);
  }

  deleteDiv(imageId: string) {
    const img = document.getElementById(imageId);
    if (!!img) {
      img.remove();
    }
  }

  saveImage() {
    const requiredCategories = ['vagina', 'labios', 'clitoris'];
    // Check if all required categories are selected
    const missingCategories = requiredCategories.filter(category => {
      return !this.selectedImages.find(image => image.category === category && image.selectedId !== null);
    });
       if (missingCategories.length === 0) {
      this.transformDivToCanvas("canvas");
    } else {
      this.toastr.error("Para guardar el vulvatar tienes que seleccionar obligatoriamente vagina, clitoris y labios", 'Error');
    }
  }

  transformDivToCanvas(divId: string) {
    document.getElementById("reset-button").style.display = "none";
    document.getElementById("return-button").style.display = "none";
    document.getElementById("save-button").style.display = "none";
    const element: any = document.getElementById(divId);
    html2canvas(element).then((canvas) => {
      const convertedCanvas = canvas as HTMLCanvasElement;
      document.getElementById("canvas").style.display = "none";
      const dataURL = convertedCanvas.toDataURL();
      const image = new Image();
      image.src = dataURL;
      image.style.height="450px";
      image.style.position="absolute";
      image.style.width="100%";
      image.style.top="0px";
      image.style.pointerEvents="0px";
      image.style.zIndex ="-1";
      document.getElementById("canvasContainer").appendChild(image);
      document.getElementById("canvasContainer").style.display = "block";
      image.onload = () => {
        this.imageBase64 = dataURL;
        this.croppedImage = dataURL;
        document.getElementById("image-cropper").style.display = "none";
        document.getElementById("image-cropper").style.padding = "0px";
        document.getElementById("canvasContainer").style.display = "block";
        document.getElementById("category-selector").style.display = "none";
        document.getElementById("image-grid").style.display = "none";
        document.getElementById("vulvatar-confirmation").style.display = "block";
        this.cropFinished = true;
      };
    });
  }

  shareImage() {
    const base64ImageUrl = this.croppedImage;
    const byteCharacters = atob(base64ImageUrl.split(',')[1]);
    const byteArrays = [];
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }
    const byteArray = new Uint8Array(byteArrays);
    const blob = new Blob([byteArray], { type: 'image/png' });
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
    console.log('Blob' , blob)
    console.log('File' , file)

    const formData = new FormData()
    formData.append('vulvavatar_image' , file)
    formData.append('name' , 'test image')
    this.imageBuilderService.uploadShareImage(formData).subscribe(
      response => {
        console.log('response' , response);
        if(response.status === 1){
          this.toastr.success(response.message, 'Success');
          const share_url = response.data.photo_url
          const image_name = response.data.name
          console.log("share_url" ,share_url)
        }
        else{
          this.toastr.error(response.message, 'Error');
        }
      },
      error => {
        const errmsg = error.error.error || error.error.message || 'Somthing went wrong'
        this.toastr.error(errmsg, 'Error');
      }
    );

  }

  downloadImage() {
    const base64ImageUrl = this.croppedImage;
    const byteCharacters = atob(base64ImageUrl.split(',')[1]);
    const byteArrays = [];
    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays.push(byteCharacters.charCodeAt(i));
    }
    const byteArray = new Uint8Array(byteArrays);
    const blob = new Blob([byteArray], { type: 'image/png' });
    saveAs(blob, 'vulvatar.png');
  }

}
