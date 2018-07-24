import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListSpecies } from "./list-species.module";

@Injectable()
export class SpeciesService{

    constructor(private http: HttpClient){}

    listSpecies(url: string): Observable<ListSpecies>{
        return this.http.get<ListSpecies>(url, {
            withCredentials: false, responseType: 'json' });
    }
}