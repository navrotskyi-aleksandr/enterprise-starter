import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { getAttributes } from './getAttributes';
import { Attrs, Icon } from './icons.model';

@Directive()
export class CreeSharedUiIconsBaseDirective implements AfterViewInit {
  @Input() ariaLabel?: string;
  @Input() ariaLabelledby?: string;
  @Input() ariaHidden?: boolean;
  @Input() title!: string;
  @Input() isFocusable = 'false';
  @Input() size!: string;

  protected icons!: Icon;

  constructor(protected elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.setAttr();
  }

  private setAttr(): void {
    const svg = this.elementRef.nativeElement;
    const icon = this.icons[this.size];
    svg.setAttribute('xmlns', icon.descriptor.attrs.xmlns);
    const domParser = new DOMParser();
    const rawSVG = icon.svg;
    const svgElement = domParser.parseFromString(rawSVG, 'image/svg+xml').documentElement;
    let node = svgElement.firstChild;

    while (node) {
      svg.appendChild(svg.ownerDocument.importNode(node, true));
      node = node.nextSibling;
    }

    const attributes = getAttributes({
      width: icon.descriptor.attrs.height,
      height: icon.descriptor.attrs.height,
      viewBox: icon.descriptor.attrs.viewBox,
      title: this.title,
      'aria-label': this.ariaLabel,
      'aria-labelledby': this.ariaLabelledby,
      'aria-hidden': this.ariaHidden,
      focusable: this.isFocusable.toString(),
    });

    for (const key in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, key)) {
        const value = attributes[<keyof Attrs>key];

        if (key === 'title') {
          continue;
        }

        if (value) {
          svg.setAttribute(key, value);
        }
      }
    }

    if (attributes.title) {
      const title = document.createElement('title');
      title.textContent = attributes.title;
      svg.appendChild(title);
    }
  }
}
