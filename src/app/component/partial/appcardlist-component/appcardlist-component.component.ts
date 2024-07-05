import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-appcardlist-component',
  templateUrl: './appcardlist-component.component.html',
  styleUrl: './appcardlist-component.component.css'
})
export class AppcardlistComponentComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() redirectUrl: string = '';
  @Output() loginClicked: EventEmitter<void> = new EventEmitter<void>();

  onLoginClick(): void {
    this.loginClicked.emit();
  }
}
