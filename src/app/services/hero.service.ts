import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' //when you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it
})
export class HeroService {

  constructor(private messageService: MessageService) { } //this is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent

  getHeroes(): Observable<Hero[]> {
    //TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  }

  getHero(id: number): Observable<Hero> {
    //TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id))
  } 
}
