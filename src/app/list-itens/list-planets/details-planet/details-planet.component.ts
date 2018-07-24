import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsPlanetService } from './details-planet.service';
import { Planet } from '../planet.module';

@Component({
  selector: 'app-details-planet',
  templateUrl: './details-planet.component.html',
  styleUrls: ['./details-planet.component.css']
})
export class DetailsPlanetComponent implements OnInit {

  planet: Planet;
  url: string;

  constructor(private route: ActivatedRoute, private planetService: DetailsPlanetService) {
    this.route.params.subscribe(res => this.url = res.id);
   }

  ngOnInit() {
    this.planetService.DetailsPlanet(this.url).subscribe(
      (planet) => {
        this.planet = planet;
        console.log(planet);
      });
  }

}


