import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGridComponent } from './items-grid.component';

describe('ItemGrid', () => {
  let component: ItemsGridComponent;
  let fixture: ComponentFixture<ItemsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
