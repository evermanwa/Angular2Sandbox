import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';

import { AppComponent }  from './Components/app.component';
import { HeroDetailComponent } from './Components/hero-detail.component';
import {HeroesComponent} from "./Components/heroes.component";
import {HeroService} from "./Services/hero.service";
import {DashboardComponent} from "./Components/dashboard.component";

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent],
  providers: [ HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
