import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPageComponent } from './ad-page.component';

describe('AdPageComponent', () => {
  let component: AdPageComponent;
  let fixture: ComponentFixture<AdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
