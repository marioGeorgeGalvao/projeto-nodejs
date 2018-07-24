import { Component, OnInit } from '@angular/core';
import { ListVehicles } from './list-vehicles.module';
import { VehiclesService } from './vehicles.service';
import { API_VEHICLE } from '../../app-api';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  listVehicles: ListVehicles

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehiclesService.listVehicles(API_VEHICLE).subscribe(
      (listVehicles) => {
        this.listVehicles = listVehicles;
        console.log(this.listVehicles);
      });
  }
  next(){
    this.vehiclesService.listVehicles(this.listVehicles.next).subscribe(
      listVehicles => this.listVehicles = listVehicles);
  }
  back(){
    this.vehiclesService.listVehicles(this.listVehicles.previous).subscribe(
      listVehicles => this.listVehicles = listVehicles);
  }

}
