import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeselectionApiComponent } from './runtimeselection-api.component';

describe('RuntimeselectionApiComponent', () => {
  let component: RuntimeselectionApiComponent;
  let fixture: ComponentFixture<RuntimeselectionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuntimeselectionApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimeselectionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
