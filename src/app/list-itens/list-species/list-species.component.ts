import { Component, OnInit } from '@angular/core';
import { ListSpecies } from './list-species.module';
import { SpeciesService } from './species.service';
import { API_SPECIE } from '../../app-api';

@Component({
  selector: 'app-list-species',
  templateUrl: './list-species.component.html',
  styleUrls: ['./list-species.component.css']
})
export class ListSpeciesComponent implements OnInit {

  listSpecies: ListSpecies
  
  constructor(private listSpeciesService: SpeciesService) { }

  ngOnInit() {
    this.listSpeciesService.listSpecies(API_SPECIE).subscribe(
      (listSpecies) => {
        this.listSpecies = listSpecies
        console.log(this.listSpecies);
      });
  }
  next(){
    this.listSpeciesService.listSpecies(this.listSpecies.next).subscribe(
      listSpecies => this.listSpecies = listSpecies);
  }
  back(){
    this.listSpeciesService.listSpecies(this.listSpecies.previous).subscribe(
      listSpecies => this.listSpecies = listSpecies);
  }

}
