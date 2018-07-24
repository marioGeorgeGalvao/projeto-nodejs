import { Component, OnInit } from '@angular/core';

import { API } from '../../app-api';
import { ListPersonage } from './list-personage.module';
import { PersonageService } from './personage.service';

@Component({
  selector: 'app-list-personage',
  templateUrl: './list-personage.component.html',
  styleUrls: ['./list-personage.component.css']
})
export class ListPersonageComponent implements OnInit {

  list: ListPersonage

  constructor(private personageService: PersonageService) { }

  ngOnInit() {
    this.personageService.listPersonage(API).subscribe(
      (list) => {
        this.list = list;
        console.log(this.list);
    });
    
  }

  next(){
    this.personageService.listPersonage(this.list.next).subscribe(list => this.list = list);
  }

  back(){
    this.personageService.listPersonage(this.list.previous).subscribe(list => this.list = list);
  }

}
