import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `
    <div>\${{ price }}</div>
  `

})
export class PriceDisplayComponent {
  @Input() price: number;
  @HostBinding('class') cssClass = 'justify-self-end';
}
