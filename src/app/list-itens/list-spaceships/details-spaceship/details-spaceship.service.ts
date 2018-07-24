import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceShip } from '../spaceship.module';

@Injectable()
export class DetailsSpaceshipService{
    
    
    constructor(private http: HttpClient){}

    DetailsSpaceship(url: string): Observable<SpaceShip>{

        return this.http.get<SpaceShip>(url,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}