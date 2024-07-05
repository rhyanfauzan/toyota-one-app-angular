import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrl: './carousel-component.component.css'
})
export class CarouselComponentComponent {
  @Input() imageUrls: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
