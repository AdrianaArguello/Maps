import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesPage } from './houses-page';

describe('HousesPage', () => {
  let component: HousesPage;
  let fixture: ComponentFixture<HousesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
