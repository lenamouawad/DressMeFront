import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVoyageComponent } from './page-voyage.component';

describe('PageVoyageComponent', () => {
  let component: PageVoyageComponent;
  let fixture: ComponentFixture<PageVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
