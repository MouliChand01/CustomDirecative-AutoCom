import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostercomponentComponent } from './tostercomponent.component';

describe('TostercomponentComponent', () => {
  let component: TostercomponentComponent;
  let fixture: ComponentFixture<TostercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TostercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TostercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
