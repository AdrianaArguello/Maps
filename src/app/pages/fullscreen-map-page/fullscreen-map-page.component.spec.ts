import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMapPageComponent } from './fullscreen-map-page.component';

describe('FullscreenMapPageComponent', () => {
  let component: FullscreenMapPageComponent;
  let fixture: ComponentFixture<FullscreenMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenMapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
