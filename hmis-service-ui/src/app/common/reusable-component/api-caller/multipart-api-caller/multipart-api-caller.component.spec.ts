import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipartApiCallerComponent } from './multipart-api-caller.component';

describe('MultipartApiCallerComponent', () => {
  let component: MultipartApiCallerComponent;
  let fixture: ComponentFixture<MultipartApiCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipartApiCallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipartApiCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
