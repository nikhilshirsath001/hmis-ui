import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingMainPageComponent } from './billing-main-page.component';

describe('BillingMainPageComponent', () => {
  let component: BillingMainPageComponent;
  let fixture: ComponentFixture<BillingMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
