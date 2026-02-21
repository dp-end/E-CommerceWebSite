import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoporateDashboard } from './coporate-dashboard';

describe('CoporateDashboard', () => {
  let component: CoporateDashboard;
  let fixture: ComponentFixture<CoporateDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoporateDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoporateDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
