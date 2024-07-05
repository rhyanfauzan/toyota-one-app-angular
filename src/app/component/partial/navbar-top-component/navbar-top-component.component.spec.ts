import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTopComponentComponent } from './navbar-top-component.component';

describe('NavbarTopComponentComponent', () => {
  let component: NavbarTopComponentComponent;
  let fixture: ComponentFixture<NavbarTopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarTopComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
