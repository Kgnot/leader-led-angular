import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsGeneralComponent } from './brands-general.component';

describe('BradnsGeneral', () => {
  let component: BrandsGeneralComponent;
  let fixture: ComponentFixture<BrandsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
