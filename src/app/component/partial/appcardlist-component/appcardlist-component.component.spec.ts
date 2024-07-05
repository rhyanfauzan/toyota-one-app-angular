import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcardlistComponentComponent } from './appcardlist-component.component';

describe('AppcardlistComponentComponent', () => {
  let component: AppcardlistComponentComponent;
  let fixture: ComponentFixture<AppcardlistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppcardlistComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppcardlistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
