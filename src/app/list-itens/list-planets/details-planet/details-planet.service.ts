
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../planet.module';

@Injectable()
export class DetailsPlanetService{
    
    
    constructor(private http: HttpClient){}

    DetailsPlanet(url: string): Observable<Planet>{

        return this.http.get<Planet>(url,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}