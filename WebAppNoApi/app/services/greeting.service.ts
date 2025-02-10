import { Injectable } from '@angular/core';
import { Greeting } from '../models/greeting';
import { GreetingType } from '../models/greeting-type.type';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  
  private greetings: Greeting[] = [
    new Greeting(
      'Hello, World!',
      "J'espère que tu vas dire bonjour!",
      new Date(),
      10,
      'https://c8.alamy.com/compfr/p53dx4/homme-avec-chemise-bleue-en-disant-bonjour-en-agitant-une-main-bienvenue-accueil-inscription-p53dx4.jpg'
    ).withLocation('Berlin'),
    new Greeting(
      'Salut, Monde!',
      'Je pense que tu vas dire bonjour!',
      new Date(),
      0,
      'https://www.shutterstock.com/shutterstock/videos/17966008/thumb/6.jpg?ip=x480'
    ),
    new Greeting(
      'Bonjour, Monde!',
      "Tu vas dire bonjour, n'est-ce pas?",
      new Date(),
      120,
      'https://img.freepik.com/photos-gratuite/beau-jeune-afro-americain-tshirt-polo-rose_176420-32105.jpg'
    ),
  ];

  getGreetings(): Greeting[] {
    return [...this.greetings];
  }
  
  getGreetingById(greetingId: string): Greeting {
    const foundGreeting = this.greetings.find(
      (greeting) => greeting.id === greetingId
    );
    if (!foundGreeting) {
      throw new Error('Greeting not found!');
    }
    return foundGreeting;
  }

  greetingById(greetingId: string, greetType: GreetingType): void {
    const greeting = this.getGreetingById(greetingId);
    greeting.greet(greetType);
  }

}
