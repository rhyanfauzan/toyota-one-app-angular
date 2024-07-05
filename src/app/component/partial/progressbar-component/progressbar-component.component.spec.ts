import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarComponentComponent } from './progressbar-component.component';

describe('ProgressbarComponentComponent', () => {
  let component: ProgressbarComponentComponent;
  let fixture: ComponentFixture<ProgressbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressbarComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
