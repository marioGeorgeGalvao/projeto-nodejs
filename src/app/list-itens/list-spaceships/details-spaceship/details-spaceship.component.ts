import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsSpaceshipService } from './details-spaceship.service';
import { SpaceShip } from '../spaceship.module';

@Component({
  selector: 'app-details-spaceship',
  templateUrl: './details-spaceship.component.html',
  styleUrls: ['./details-spaceship.component.css']
})
export class DetailsSpaceshipComponent implements OnInit {

  spaceship: SpaceShip;
  url: string;

  constructor(private route: ActivatedRoute, private spaceshipService: DetailsSpaceshipService) {
    this.route.params.subscribe(res => this.url = res.id);
   }

  ngOnInit() {
    this.spaceshipService.DetailsSpaceship(this.url).subscribe(
      (spaceship) => {
        this.spaceship = spaceship;
        console.log(spaceship);
      });
  }

}



