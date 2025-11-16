import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeCategoryItem } from './informative-category-item';

describe('InformativeCategoryItem', () => {
  let component: InformativeCategoryItem;
  let fixture: ComponentFixture<InformativeCategoryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformativeCategoryItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativeCategoryItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
