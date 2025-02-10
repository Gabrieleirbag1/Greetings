import { GreetingType } from './greeting-type.type';

export class Greeting {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public greetings: number,
    public imageUrl: string
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addGreeting() {
    this.greetings++;
  }

  removeGreeting() {
    this.greetings--;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): Greeting {
    this.setLocation(location);
    return this;
  }

  greet(greetType: GreetingType) {
    if (greetType === 'greet') {
      this.addGreeting();
    } else if (greetType === 'ungreet') {
      this.removeGreeting();
    }
  }
}
