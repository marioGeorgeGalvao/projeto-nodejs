import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListSpaceShips } from "./list-spaceships.module";


@Injectable()
export class SpaceShipsService{
    constructor(private http: HttpClient){}

    listSpaceShips(url: string): Observable<ListSpaceShips>{
        return this.http.get<ListSpaceShips>(url,
            { withCredentials: false, responseType: 'json' });
    }
}