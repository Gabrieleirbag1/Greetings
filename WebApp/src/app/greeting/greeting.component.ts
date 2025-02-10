import { Component, Input } from '@angular/core';
import { Greeting } from '../models/greeting';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { GreetingService } from '../services/greeting.service';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  @Input() greeting!: Greeting;

  constructor(private greetingService: GreetingService, private router: Router) {}

  onViewGreeting() {
    this.router.navigateByUrl(`/greetings/${this.greeting._id}`);
  }

  deleteGreeting() {
    const element = document.getElementById(this.greeting._id);
    if (element) {
      element.remove();
    }
    this.greetingService.deleteGreetingDb(this.greeting._id).subscribe(() => {
      console.log('Greeting deleted:', this.greeting);
    });
  }
}