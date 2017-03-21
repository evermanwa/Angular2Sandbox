import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "../Data Objects/hero";
import { Router } from '@angular/router';
import {HeroService} from "../Services/hero.service";

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
    this.heroService.getHeroes()
      .then(data => {
        this.heroes = data;
      });
  };

  add(name: string): void{
    name = name.trim();
    if(!name){ return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void{
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h!== hero);
        if (this.selectedHero === hero){ this.selectedHero=null; }
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
