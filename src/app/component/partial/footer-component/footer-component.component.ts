import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnDestroy {
  showFooter = true;
  timeout: any;

  constructor() { }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Hide the footer when scrolling
    this.showFooter = false;

    // Clear the previous timeout
    clearTimeout(this.timeout);

    // Set a timeout to show the footer after scrolling stops
    this.timeout = setTimeout(() => {
      this.showFooter = true;
    }, 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
