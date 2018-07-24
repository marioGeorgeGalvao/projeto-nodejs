import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListMoviesService } from './movies.service';

import { Subscription } from 'rxjs';
import { ListMovies } from './list-movies.module';
import { API_MOVIE } from '../../app-api';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  public listMovies: ListMovies;

  constructor(private listMoviesService: ListMoviesService) { }

  ngOnInit() {
    this.listMoviesService.listMovies(API_MOVIE).subscribe(
      (listMovies) => {
        this.listMovies = listMovies;
        console.log(this.listMovies);
    });
  }
  next(){
    this.listMoviesService.listMovies(this.listMovies.next).subscribe(
      listMovies =>this.listMovies = listMovies);
  }
  back(){
    this.listMoviesService.listMovies(this.listMovies.previous).subscribe(
      listMovies =>this.listMovies = listMovies);
  }
}
