import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibliityMainPageComponent } from './eligibliity-main-page.component';

describe('EligibliityMainPageComponent', () => {
  let component: EligibliityMainPageComponent;
  let fixture: ComponentFixture<EligibliityMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EligibliityMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibliityMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
