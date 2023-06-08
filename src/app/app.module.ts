import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBuilderComponent } from './image-builder/image-builder.component';
import { LoadingComponent } from './loading/loading.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PopupComponent } from './shared/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBuilderComponent,
    LoadingComponent,
    IntroductionComponent,
    GalleryComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
