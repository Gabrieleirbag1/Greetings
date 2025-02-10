import { Component, OnInit } from '@angular/core';
import { Greeting } from '../models/greeting';
import { GreetingComponent } from '../greeting/greeting.component';
import { GreetingService } from '../services/greeting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting-list',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './greeting-list.component.html',
  styleUrl: './greeting-list.component.css'
})
export class GreetingListComponent implements OnInit {
  myGreetings!: Greeting[];

  constructor(private greetingService: GreetingService, private router: Router) {}

  ngOnInit() {
    // this.myGreetings = this.greetingService.getGreetings();
    this.greetingService.getGreetingsFromDB().subscribe((greetings) => {
      this.myGreetings = greetings;
    });
  }

  redirectNewGreeting() {
    this.router.navigateByUrl('/new-greeting');
  }

}
