import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcomponetComponent } from './customcomponet.component';

describe('CustomcomponetComponent', () => {
  let component: CustomcomponetComponent;
  let fixture: ComponentFixture<CustomcomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomcomponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
