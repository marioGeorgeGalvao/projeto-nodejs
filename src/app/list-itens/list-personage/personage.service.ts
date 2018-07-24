import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListPersonage } from './list-personage.module';

@Injectable()
export class PersonageService{

    constructor(private http: HttpClient){}

    listPersonage(url: string): Observable<ListPersonage>{
        return this.http.get<ListPersonage>(url,{ withCredentials: false, responseType: 'json' });
    }
}