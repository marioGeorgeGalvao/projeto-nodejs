import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsVehicleService{
    constructor(private http: HttpClient){}

    detailsVehicle(url: string): Observable<string>{
        return this.http.get<string>(url,
            { withCredentials: false, responseType: 'json' }
          );        
    }

}