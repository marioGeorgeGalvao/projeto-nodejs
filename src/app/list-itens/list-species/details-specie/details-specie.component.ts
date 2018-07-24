import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsSpecieService } from './details-specie.service';
import { Specie } from '../specie.module'; 

@Component({
  selector: 'app-details-specie',
  templateUrl: './details-specie.component.html',
  styleUrls: ['./details-specie.component.css']
})
export class DetailsSpecieComponent implements OnInit {

  specie: Specie;
  url: string;

  constructor(private route: ActivatedRoute, private specieService: DetailsSpecieService) { 
    this.route.params.subscribe(res => this.url = res.id);
  }

  ngOnInit() {
    this.specieService.DetailsSpecie(this.url).subscribe(
      (specie) => {
        this.specie = specie;
        console.log(specie);
      });
  }

}
