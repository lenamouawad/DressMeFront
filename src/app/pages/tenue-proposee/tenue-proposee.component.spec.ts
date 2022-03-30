import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenueProposeeComponent } from './tenue-proposee.component';

describe('TenueProposeeComponent', () => {
  let component: TenueProposeeComponent;
  let fixture: ComponentFixture<TenueProposeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenueProposeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenueProposeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
