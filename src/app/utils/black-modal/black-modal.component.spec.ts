import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackModalComponent } from './black-modal.component';

describe('BlackModalComponent', () => {
  let component: BlackModalComponent;
  let fixture: ComponentFixture<BlackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
