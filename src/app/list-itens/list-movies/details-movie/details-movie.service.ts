import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.module';

@Injectable()
export class DetailsMovieService{
    
    constructor(private http: HttpClient){}

    detailsMovie(url: string): Observable<Movie>{

        return this.http.get<Movie>(url,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}