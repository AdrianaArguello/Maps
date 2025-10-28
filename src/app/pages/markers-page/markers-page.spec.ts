import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersPage } from './markers-page';

describe('MarkersPage', () => {
  let component: MarkersPage;
  let fixture: ComponentFixture<MarkersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
