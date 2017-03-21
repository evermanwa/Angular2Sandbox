import {Component, OnInit} from '@angular/core';
import { Hero } from '../Data Objects/hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../Templates/dashboard.component.html',
  styleUrls: [ '../Styles/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){ }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(data => {
        this.heroes = data.slice(0,4);
      });
  }
}
