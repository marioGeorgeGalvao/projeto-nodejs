import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personage } from '../personage.module';
import { Planet } from '../../list-planets/planet.module';
import { Specie } from '../../list-species/specie.module';

@Injectable()
export class DetailsPersonageService{
    
    
    constructor(private http: HttpClient){}

    detailsPersonage(url: string): Observable<Personage>{

        return this.http.get<Personage>(url,
            { withCredentials: false, responseType: 'json' }
          );        
    }
    getPlanet(url: string): Observable<Planet>{
        return this.http.get<Planet>(url,
            { withCredentials: false, responseType: 'json' });
    }

}