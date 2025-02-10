import { Injectable } from '@angular/core';
import { Landing } from '../models/landing';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  private landings: Landing[] = [
    new Landing('New York', 8419000, 'https://media.istockphoto.com/id/1454217037/fr/photo/statue-de-la-libert%C3%A9-et-new-york-city-skyline-avec-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=Bh0_fEkRd8qbhUDopYrEZfU-nsKy4B36x0o7Z6R7P14='),
    new Landing('Los Angeles', 3980000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/2560px-Los_Angeles_with_Mount_Baldy.jpg'),
    new Landing('Chicago', 2716000, 'https://ewnqp79wvj7.exactdn.com/wp-content/uploads/2022/08/boat-tour-croisiere-chicago-architecture.jpg?strip=all&lossy=1'),
    new Landing('Houston', 2328000, 'https://fr.visittheusa.ca/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/0%20HERO_HoustonTX_GettyImages-532390052.jpg?h=c5520b1b&itok=h8KIQIok'),
  ];

  getLandings(): Landing[] {
    return [...this.landings];
  }

  getOneRandomLanding(): Landing {
    const randomIndex = Math.floor(Math.random() * this.landings.length);
    return this.landings[randomIndex];
  }
}