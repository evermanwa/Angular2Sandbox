import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Hero} from "../Data Objects/hero";
import { HeroService } from  "../Services/hero.service";

@Component({
  selector: 'my-hero-detail',
  templateUrl: '../Templates/hero-detail.component.html'
})

export  class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location){
  }

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(data => this.hero = data);
  }

  goBack(): void{
   this.location.back();
  }

  save(): void{
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
