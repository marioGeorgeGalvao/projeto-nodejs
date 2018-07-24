import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specie } from '../specie.module';

@Injectable()
export class DetailsSpecieService{
    
    
    constructor(private http: HttpClient){}

    DetailsSpecie(url: string): Observable<Specie>{

        return this.http.get<Specie>(url,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}