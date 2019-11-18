import { Directive, OnInit, HostListener, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSearchBox]'
})
export class SearchBoxDirective implements OnInit {
  private element: HTMLElement;

  private elSearch: HTMLElement;
  private elHelper: HTMLElement;
  private defaultBorderRadius = '26px';
  private modifyBorderRadius = '26px 26px 0 0';
  private elHelperInvisible = 'none';
  private elHelperVisible = 'block';

  private subscription = Subscription.EMPTY;

  constructor({ nativeElement: element }: ElementRef) {
    this.element = element;
  }

  public ngOnInit(): void {
    this.elSearch = this.element.querySelector('input');
    this.elHelper = this.element.lastChild as HTMLElement;
    this.elSearch.style.borderRadius = this.defaultBorderRadius;
    this.elHelper.style.display = this.elHelperInvisible;
  }

  @HostListener('document:focusin')
  public onSearchFocusin(): void {
    this.toggle();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.toggle();
  }

  private toggle(): void {
    const isOpen = document.activeElement === this.elSearch;
    this.elSearch.style.borderRadius = isOpen
      ? this.modifyBorderRadius
      : this.defaultBorderRadius;
    this.elHelper.style.display = isOpen
      ? this.elHelperVisible
      : this.elHelperInvisible;
  }
}
