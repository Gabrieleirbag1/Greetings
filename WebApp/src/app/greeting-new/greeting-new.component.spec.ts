import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGreetingComponent } from './greeting-new.component';

describe('NewGreetingComponent', () => {
  let component: NewGreetingComponent;
  let fixture: ComponentFixture<NewGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGreetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
