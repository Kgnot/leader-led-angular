import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerIotComponent } from './banner-iot.component';

describe('BannerIot', () => {
  let component: BannerIotComponent;
  let fixture: ComponentFixture<BannerIotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerIotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
