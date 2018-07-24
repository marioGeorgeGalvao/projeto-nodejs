import { Component, OnInit } from '@angular/core';

import { ListSpaceShips } from './list-spaceships.module';
import { SpaceShipsService } from './spaceships.service';
import { API_SPACESHIP } from '../../app-api';

@Component({
  selector: 'app-list-spaceships',
  templateUrl: './list-spaceships.component.html',
  styleUrls: ['./list-spaceships.component.css']
})
export class ListSpaceshipsComponent implements OnInit {

  listSpaceShip: ListSpaceShips

  constructor(private spaceShipService: SpaceShipsService) { }

  ngOnInit() {
    this.spaceShipService.listSpaceShips(API_SPACESHIP).subscribe(
      (listSpaceShip) => {
        this.listSpaceShip = listSpaceShip;
        console.log(this.listSpaceShip);
      });
  }
  next(){
    this.spaceShipService.listSpaceShips(this.listSpaceShip.next).subscribe(
      listSpaceShip => this.listSpaceShip = listSpaceShip);
  }
  back(){
    this.spaceShipService.listSpaceShips(this.listSpaceShip.previous).subscribe(
      listSpaceShip => this.listSpaceShip = listSpaceShip);
  }

}
