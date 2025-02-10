import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGreetingComponent } from './singlegreeting.component';

describe('SinglegreetingComponent', () => {
  let component: SingleGreetingComponent;
  let fixture: ComponentFixture<SingleGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleGreetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
