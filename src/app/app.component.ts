import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageUpdateService } from './services/image-update.service';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ headerText }}</h2>
    <app-img [selectedPhoto]="galleryImg"></app-img>
    <app-gallery [photos]="photos" (photoSrc)="handler($event)"></app-gallery>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerText = 'Homework_7';
  public photos: string[] = [];
  public galleryImg: string;
  private listener: Subscription;

  constructor(private service: ImageUpdateService) {}

  public subscribe(): void {
    this.listener = this.service.getRandomData.subscribe((data: string) => {
      this.galleryImg = data;
    });
  }

  public handler($event: string): void {
    this.listener.unsubscribe();
    this.service.stopInterval();
    this.galleryImg = $event;
    this.subscribe();
  }

  ngOnInit(): void {
    this.photos = this.service.getData();
    this.galleryImg = this.photos[0];
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
}
