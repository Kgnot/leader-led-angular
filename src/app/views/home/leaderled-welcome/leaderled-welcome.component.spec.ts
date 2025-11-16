import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderledWelcomeComponent } from './leaderled-welcome.component';

describe('LeaderledWelcome', () => {
  let component: LeaderledWelcomeComponent;
  let fixture: ComponentFixture<LeaderledWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderledWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderledWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
