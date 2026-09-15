import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiCallerComponent } from './post-api-caller.component';

describe('PostApiCallerComponent', () => {
  let component: PostApiCallerComponent;
  let fixture: ComponentFixture<PostApiCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiCallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
