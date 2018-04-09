import { Injectable } from '@angular/core';
import { Hero } from './app-test-heroes/hero';
import { HEROES } from './app-test-heroes/mock-heroes';
import { Observable} from 'rxjs'

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
}
