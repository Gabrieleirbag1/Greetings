import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../services/greeting.service';
import { ActivatedRoute } from '@angular/router';
import { Greeting } from '../models/greeting';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { GreetingType } from '../models/greeting-type.type';

@Component({
  selector: 'app-singlegreeting',
  standalone: true,
  imports: [NgClass, NgStyle, UpperCasePipe],
  templateUrl: './singlegreeting.component.html',
  styleUrl: './singlegreeting.component.css',
})
export class SingleGreetingComponent implements OnInit {
  greeting!: Greeting
  greetingText!: string;
  haveGreeted!: boolean;

  constructor(
    private greetingService: GreetingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getGreeting();
  }

  private prepareInterface() {
    this.greetingText = 'Dîtes lui bonjour!';
    this.haveGreeted = false;
  }

  private getGreeting() {
    const greetingId = this.route.snapshot.params['id'];
    this.greeting = this.greetingService.getGreetingById(greetingId);
  }

  onAddGreeting() {
    if (!this.haveGreeted) {
      // this.greeting.addGreeting();
      this.onGreet('Bonjour!', true, 'greet');
    } else {
      // this.greeting.removeGreeting();
      this.onGreet('Au revoir!', false, 'ungreet');
    }
  }
  onGreet(greetingText: string, haveGreeted: boolean, greetType: GreetingType) {
    this.greetingService.greetingById(this.greeting.id, greetType);
    this.greetingText = greetingText;
    this.haveGreeted = haveGreeted;
  }
}
