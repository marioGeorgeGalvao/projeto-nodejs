import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListPlanets } from './list-planets.module';

@Injectable()
export class PlanetsService{
    constructor(private http: HttpClient){}

    listPlanets(url:string): Observable<ListPlanets>{
        return this.http.get<ListPlanets>(url,
            { withCredentials: false, responseType: 'json' });
    }
}