import { Component, OnInit } from '@angular/core';
import { Greeting } from '../models/greeting';
import { GreetingComponent } from '../greeting/greeting.component';
import { GreetingService } from '../services/greeting.service';

@Component({
  selector: 'app-greeting-list',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './greeting-list.component.html',
  styleUrl: './greeting-list.component.css'
})
export class GreetingListComponent implements OnInit {
  myGreetings!: Greeting[];

  constructor(private greetingService: GreetingService) {}

  ngOnInit() {
    this.myGreetings = this.greetingService.getGreetings();
  }

}
