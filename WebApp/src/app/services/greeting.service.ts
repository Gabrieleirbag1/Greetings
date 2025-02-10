import { Injectable } from '@angular/core';
import { Greeting } from '../models/greeting';
import { GreetingType } from '../models/greeting-type.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  
  private greetings: Greeting[] = [
    new Greeting(
      '0',
      'Hello, World!',
      "J'espère que tu vas dire bonjour!",
      new Date(),
      10,
      'https://c8.alamy.com/compfr/p53dx4/homme-avec-chemise-bleue-en-disant-bonjour-en-agitant-une-main-bienvenue-accueil-inscription-p53dx4.jpg'
    ).withLocation('Berlin'),
    new Greeting(
      '1',
      'Salut, Monde!',
      'Je pense que tu vas dire bonjour!',
      new Date(),
      0,
      'https://www.shutterstock.com/shutterstock/videos/17966008/thumb/6.jpg?ip=x480'
    ),
    new Greeting(
      '2',
      'Bonjour, Monde!',
      "Tu vas dire bonjour, n'est-ce pas?",
      new Date(),
      120,
      'https://img.freepik.com/photos-gratuite/beau-jeune-afro-americain-tshirt-polo-rose_176420-32105.jpg'
    ),
  ];

  private apiUrl = 'http://localhost:3000/api/greetings';

  constructor(private http: HttpClient) {}

  getGreetings(): Greeting[] {
    return [...this.greetings];
  }

  getGreetingsFromDB(): Observable<Greeting[]> {
    return this.http.get<Greeting[]>(this.apiUrl);
  }

  addGreeting(greeting: Greeting): Observable<Greeting> {
    return this.http.post<Greeting>(this.apiUrl, greeting);
  }

  updateGreetingDb(greeting: Greeting): Observable<Greeting> {
    return this.http.put<Greeting>(`${this.apiUrl}/${greeting._id}`, greeting);
  }

  deleteGreetingDb(greetingId: string): Observable<Greeting> {
    console.log("url:", `${this.apiUrl}/${greetingId}`);
    return this.http.delete<Greeting>(`${this.apiUrl}/${greetingId}`);
  }

  getGreetingsFromDbById(greetingId: string): Observable<Greeting> {
    return this.http.get<Greeting>(`${this.apiUrl}/${greetingId}`);
  }

  greetingFromDbById(greetingId: string, greetType: GreetingType): void {
    const greeting = this.getGreetingsFromDbById(greetingId);
    greeting.subscribe((greeting) => greeting.greet(greetType));
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
