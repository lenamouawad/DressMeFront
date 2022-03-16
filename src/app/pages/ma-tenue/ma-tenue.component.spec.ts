import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTenueComponent } from './ma-tenue.component';

describe('MaTenueComponent', () => {
  let component: MaTenueComponent;
  let fixture: ComponentFixture<MaTenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaTenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaTenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
