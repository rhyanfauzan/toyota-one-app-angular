import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-top-component',
  templateUrl: './navbar-top-component.component.html',
  styleUrls: ['./navbar-top-component.component.css']
})
export class NavbarTopComponentComponent {
  showDropdown = false;  // Used for toggling the dropdown

  fetchMenu(): void {
    // Implementation of what should happen when the menu item is clicked
    console.log("Menu item clicked!");  // For example, just logging to the console
    // Add actual logic here
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();  // Prevents the click event from propagating to the window
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // This ensures the dropdown closes when clicking outside
    this.showDropdown = false;
  }
}
