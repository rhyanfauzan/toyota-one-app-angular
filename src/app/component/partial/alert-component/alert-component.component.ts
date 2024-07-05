import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.css'
})
export class AlertComponentComponent {
  @Input() isLoading: boolean = false;
  @Input() message: string = '';
  @ViewChild('lottieAnimation', { static: false }) lottieAnimation!: ElementRef;

  constructor(private cdr: ChangeDetectorRef){}

  playAnimate(isLoading : boolean, animationPath: string) {
    this.isLoading = isLoading;
    this.cdr.detectChanges(); 
    if (this.lottieAnimation) {
      const animation: AnimationItem = lottie.loadAnimation({
        container: this.lottieAnimation.nativeElement,
        renderer: 'svg', // Choose the renderer: svg, canvas, html
        loop: true,
        autoplay: true,
        path: animationPath
      });
    } else {
      console.error('ViewChild lottieAnimation is not defined.');
    }
  }
}
