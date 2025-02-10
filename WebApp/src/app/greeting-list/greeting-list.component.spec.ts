import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingListComponent } from './greeting-list.component';

describe('GreetingListComponent', () => {
  let component: GreetingListComponent;
  let fixture: ComponentFixture<GreetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
