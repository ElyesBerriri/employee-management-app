import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoadingService{
    private apiServerUrl = environment.apiBaseUrl + '/health';

    constructor(private http: HttpClient){}

    public getHealth(): Observable<any>{
        return this.http.get(this.apiServerUrl, { responseType: 'text' });
    }
}