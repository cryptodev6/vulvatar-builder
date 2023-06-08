import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  showPopup: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openPopup() {
    console.log("open popup");
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

}
