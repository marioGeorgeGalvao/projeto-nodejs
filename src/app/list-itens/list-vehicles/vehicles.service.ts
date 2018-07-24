import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListVehicles } from "./list-vehicles.module";

@Injectable()
export class VehiclesService{

    constructor(private http: HttpClient){}
    
    listVehicles(url: string): Observable<ListVehicles>{
        return this.http.get<ListVehicles>(url, 
            { withCredentials: false, responseType: 'json' });
    }
}