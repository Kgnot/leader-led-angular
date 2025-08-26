import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServicesPageComponent } from './company-services-page.component';

describe('CompanyServicesPageComponent', () => {
  let component: CompanyServicesPageComponent;
  let fixture: ComponentFixture<CompanyServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyServicesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
