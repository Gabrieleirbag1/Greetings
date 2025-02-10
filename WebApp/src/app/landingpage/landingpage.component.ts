import { Component, OnInit } from '@angular/core';
import { Landing } from '../models/landing';
import { LandingService } from '../services/landing.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent implements OnInit {
  myLanding!: Landing;

  constructor(private landingService: LandingService, private router: Router) {}

  ngOnInit() {
    this.myLanding = this.landingService.getOneRandomLanding();
  }

  onClickRouterButton() {
    this.router.navigateByUrl('/greetings');
  }
}