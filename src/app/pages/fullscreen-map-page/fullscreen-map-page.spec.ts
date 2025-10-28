import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMapPage } from './fullscreen-map-page';

describe('FullscreenMapPage', () => {
  let component: FullscreenMapPage;
  let fixture: ComponentFixture<FullscreenMapPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenMapPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
