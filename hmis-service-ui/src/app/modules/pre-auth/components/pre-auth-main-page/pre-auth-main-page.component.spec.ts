import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthMainPageComponent } from './pre-auth-main-page.component';

describe('PreAuthMainPageComponent', () => {
  let component: PreAuthMainPageComponent;
  let fixture: ComponentFixture<PreAuthMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreAuthMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreAuthMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
