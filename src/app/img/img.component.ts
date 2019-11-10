import { Component, DoCheck } from '@angular/core';
import store from '../redux/store';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements DoCheck {
  public selectedImage: string;

  ngDoCheck(): void {
    store.subscribe(() => {
      this.selectedImage = store.getState();
    });
  }
}
