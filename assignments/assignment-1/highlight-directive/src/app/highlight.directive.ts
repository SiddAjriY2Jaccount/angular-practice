import { Directive, Renderer2, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appMyDirective]"
})
export class HighlightDirective {
  setBgColor(color: string) {
    this.renderer.setStyle(this.elref.nativeElement, "backgroundColor", color);
  }

  constructor(private elref: ElementRef, private renderer: Renderer2) {
    this.setBgColor("");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.setBgColor("lime");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBgColor("");
  }
}
