import { Component, OnInit } from '@angular/core';

import { API_PLANET } from '../../app-api';
import { ListPlanets } from './list-planets.module';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent implements OnInit {

  listPlanets: ListPlanets

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planetsService.listPlanets(API_PLANET).subscribe(
      (listPlanets) => {
        this.listPlanets = listPlanets;
        console.log(this.listPlanets);
    });
  }
  next(){
    this.planetsService.listPlanets(this.listPlanets.next)
    .subscribe(listPlanets => this.listPlanets = listPlanets);
  }
  back(){
    this.planetsService.listPlanets(this.listPlanets.previous)
    .subscribe(listPlanets => this.listPlanets = listPlanets);
  }

}
