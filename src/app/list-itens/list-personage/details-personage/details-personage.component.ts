import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsPersonageService } from './details-personage.service';
import { Personage } from '../personage.module';
import { Planet } from '../../list-planets/planet.module';
import { Specie } from '../../list-species/specie.module';

@Component({
  selector: 'app-details-personage',
  templateUrl: './details-personage.component.html',
  styleUrls: ['./details-personage.component.css']
})
export class DetailsPersonageComponent implements OnInit {

  personage: Personage;
  planet: Planet;
  specie: Specie;
  url: string;

  constructor(
    private route: ActivatedRoute, 
    private personageService: DetailsPersonageService,
    ) {this.route.params.subscribe(res => this.url = res.id);}

  ngOnInit() {
    this.loadPersonage();
  }
  loadPersonage(): any{
    this.personageService.detailsPersonage(this.url).
    subscribe((personage) => {
      this.personage = personage;
      console.log(personage);
    });
  }
  loadPlanet(): any {
    this.personageService.getPlanet(this.personage.homeworld).subscribe(
      planet => this.planet = planet);
  }
  

}

