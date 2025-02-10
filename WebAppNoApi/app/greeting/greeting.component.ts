import { Component, Input } from '@angular/core';
import { Greeting } from '../models/greeting';
import { GreetingService } from '../services/greeting.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  @Input() greeting!: Greeting;

  constructor( private router: Router) {}

  onViewGreeting() {
    this.router.navigateByUrl(`/greetings/${this.greeting.id}`);
  }
  
}
