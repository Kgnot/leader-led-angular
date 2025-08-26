import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextEnterpriseComponent } from './context-enterprise.component';

describe('ContextEnterprise', () => {
  let component: ContextEnterpriseComponent;
  let fixture: ComponentFixture<ContextEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextEnterpriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
