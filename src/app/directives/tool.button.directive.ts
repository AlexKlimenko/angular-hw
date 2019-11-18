import {
  Directive,
  Input,
  OnInit,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appToolButton]'
})
export class ToolButtonDirective implements OnInit {
  @HostBinding('style.opacity')
  private opacity = '1.000';

  @Input()
  private default = '0.333';
  @Input()
  private stHover = '1';
  @Input()
  private stClick = '0.75';

  public ngOnInit(): void {
    this.opacity = this.default;
  }

  @HostListener('mouseenter')
  public enterHandler(): void {
    this.opacity = this.stHover;
  }

  @HostListener('mouseleave')
  public leaveHandler(): void {
    this.opacity = this.default;
  }

  @HostListener('mousedown')
  public downHandler(): void {
    this.opacity = this.stClick;
  }

  @HostListener('mouseup')
  public upHandler(): void {
    this.opacity = this.stHover;
  }
}
