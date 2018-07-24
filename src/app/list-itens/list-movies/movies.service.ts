import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListMovies } from './list-movies.module';

@Injectable({
    providedIn: 'root'
})
export class ListMoviesService {

    constructor(
        private http: HttpClient
    ){}

    public listMovies(url: string): Observable<ListMovies>{
        return this.http.get<ListMovies>(url,
            { withCredentials: false, responseType: 'json' });
    }
}