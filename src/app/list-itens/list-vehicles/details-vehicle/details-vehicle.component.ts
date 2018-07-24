import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsVehicleService } from './details-vehicle.service';
import { Vehicle } from '../vehicle.module';


@Component({
  selector: 'app-details-vehicle',
  templateUrl: './details-vehicle.component.html',
  styleUrls: ['./details-vehicle.component.css']
})
export class DetailsVehicleComponent implements OnInit {

  vehicle: Vehicle;
  url: string;

  constructor(private route: ActivatedRoute, private vehicleService: DetailsVehicleService) {
    this.route.params.subscribe(res => this.url = res.id);
   }

  ngOnInit() {
    this.vehicleService.detailsVehicle(this.url).subscribe(
      (vehicle) => {
        this.vehicle = vehicle;
        console.log(vehicle);
      });
  }

}