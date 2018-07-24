import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsMovieService } from './details-movie.service';
import { Movie } from '../movie.module';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  movie: Movie;
  url: string;

  constructor(private route: ActivatedRoute, private movieService: DetailsMovieService) {
    this.route.params.subscribe(res => this.url = res.id);
   }

  ngOnInit() {
    this.loadMovies();
  }
  loadMovies(): any{
    this.movieService.detailsMovie(this.url).subscribe(
      (movie) => {
        this.movie = movie;
        console.log(movie);
      });
  }

}

