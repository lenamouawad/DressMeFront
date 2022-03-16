import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDressingComponent } from './mon-dressing.component';

describe('MonDressingComponent', () => {
  let component: MonDressingComponent;
  let fixture: ComponentFixture<MonDressingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonDressingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonDressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
