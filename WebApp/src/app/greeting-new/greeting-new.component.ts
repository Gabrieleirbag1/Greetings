import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GreetingService } from '../services/greeting.service';
import { Greeting } from '../models/greeting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './greeting-new.component.html',
  styleUrl: './greeting-new.component.css'
})
export class NewGreetingComponent {
  constructor(private greetingService: GreetingService, private router: Router) {}

  greetingForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    createdAt: new FormControl(new Date(), [Validators.required]),
    greetings: new FormControl(0, [Validators.required]),
    imageUrl: new FormControl('',)});

  onSubmit() {
    if (this.greetingForm.valid) {
      const greetingFormData: Greeting = this.greetingForm.value as Greeting;
      this.greetingService.addGreeting(greetingFormData).subscribe((greeting) => {
        console.log('Greeting added:', greeting);
        this.router.navigateByUrl('/greetings');
      });
    }
  }
}