import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyMainPageComponent } from './policy-main-page.component';

describe('PolicyMainPageComponent', () => {
  let component: PolicyMainPageComponent;
  let fixture: ComponentFixture<PolicyMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
