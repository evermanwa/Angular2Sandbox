import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../Templates/dashboard.component.html',
  styleUrls: [ '../Styles/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){ }

  ngOnInit(): void {
    this.heroService.getHeroesSlowly()
      .then(data => {
        this.heroes = data.slice(0,4);
      });
  }
}
