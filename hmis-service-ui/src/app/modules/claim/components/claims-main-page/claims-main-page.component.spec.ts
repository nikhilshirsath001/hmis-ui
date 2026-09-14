import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsMainPageComponent } from './claims-main-page.component';

describe('ClaimsMainPageComponent', () => {
  let component: ClaimsMainPageComponent;
  let fixture: ComponentFixture<ClaimsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimsMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
