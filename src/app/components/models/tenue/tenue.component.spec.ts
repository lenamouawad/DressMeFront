import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenueComponent } from './tenue.component';

describe('TenueComponent', () => {
  let component: TenueComponent;
  let fixture: ComponentFixture<TenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
