import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./hero";
import { Router } from '@angular/router';
import {HeroService} from "./hero.service";

const HEROES: Hero[] = [];

@Component({
  selector: 'my-heroes',
  templateUrl: '../Templates/heroes.component.html',
  styleUrls: [ '../Styles/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes = HEROES;

  constructor(private heroService: HeroService, private router: Router){
    //do nothing right now
  }

  ngOnInit(): void {
    this.getHeroes();
  };

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
      .then(() => {
      //do nothing when promise is returned
      })
  }

  getHeroes(): void{
    this.heroService.getHeroesSlowly()
      .then(data => {
        this.heroes = data
      });
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
