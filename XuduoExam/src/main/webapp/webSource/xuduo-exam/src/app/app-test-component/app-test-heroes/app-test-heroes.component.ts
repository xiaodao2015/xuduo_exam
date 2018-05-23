import { Component, OnInit, TemplateRef } from '@angular/core';
import  {Hero} from './hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-app-test-heroes',
  templateUrl: './app-test-heroes.component.html',
  styleUrls: ['./app-test-heroes.component.css']
})
export class AppTestHeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
  heroes : Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
   this.heroes = this.heroService.getHeroes();
  
  }
  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
