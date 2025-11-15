import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaPor } from './pregunta-por';

describe('PreguntaPor', () => {
  let component: PreguntaPor;
  let fixture: ComponentFixture<PreguntaPor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntaPor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaPor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
