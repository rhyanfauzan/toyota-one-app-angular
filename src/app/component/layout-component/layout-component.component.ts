import { Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.css'],
  encapsulation: ViewEncapsulation.None // Add this line to disable encapsulation
})
export class LayoutComponentComponent {
  mobileScreen = window.matchMedia("(max-width: 990px )");

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  toggleDropdown(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const dropdown = target.closest('.dashboard-nav-dropdown');
    if (dropdown) {
      const show = dropdown.classList.contains('show');
      this.clearDropdowns();
      if (!show) {
        this.renderer.addClass(dropdown, 'show');
      }
    }
  }

  toggleMenu() {
    if (this.mobileScreen.matches) {
      const nav = this.el.nativeElement.querySelector('.dashboard-nav');
      this.toggleClass(nav, 'mobile-show');
    } else {
      const dashboard = this.el.nativeElement.querySelector('.dashboard');
      this.toggleClass(dashboard, 'dashboard-compact');
    }
  }

  clearDropdowns() {
    const dropdowns = this.el.nativeElement.querySelectorAll('.dashboard-nav-dropdown.show');
    dropdowns.forEach((dropdown: HTMLElement) => {
      this.renderer.removeClass(dropdown, 'show');
    });
  }

  private toggleClass(element: HTMLElement, className: string) {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
    }
  }
}
