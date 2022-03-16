import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFavorisComponent } from './articles-favoris.component';

describe('ArticlesFavorisComponent', () => {
  let component: ArticlesFavorisComponent;
  let fixture: ComponentFixture<ArticlesFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesFavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
