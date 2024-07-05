import { Component, ViewChild, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-progressbar-component',
  templateUrl: './progressbar-component.component.html',
  styleUrls: ['./progressbar-component.component.css']
})
export class ProgressbarComponentComponent {
  @Input() isLoading: boolean = false;
  @Input() message: string = '';
  @ViewChild('lottieAnimation', { static: false }) lottieAnimation!: ElementRef;

  constructor(private cdr: ChangeDetectorRef){}

  playAnimate(isLoading : boolean) {
    this.isLoading = isLoading;
    this.cdr.detectChanges(); 
    if (this.lottieAnimation) {
      const animation: AnimationItem = lottie.loadAnimation({
        container: this.lottieAnimation.nativeElement,
        renderer: 'svg', // Choose the renderer: svg, canvas, html
        loop: true,
        autoplay: true,
        path: 'assets/images/car_animate.json' // Path to your animation JSON file
      });
    } else {
      console.error('ViewChild lottieAnimation is not defined.');
    }
  }
}
