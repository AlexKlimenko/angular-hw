import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImgComponent } from './img/img.component';
import { ImageUpdateService } from './services/image-update.service';

@NgModule({
  declarations: [AppComponent, GalleryComponent, ImgComponent],
  imports: [BrowserModule],
  providers: [ImageUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
