import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "../_models/user";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl = environment.apiBaseUrl + '/user/';

    constructor(private http: HttpClient){}

    public getUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.apiServerUrl + 'all');
    }

    public deleteUser(userId: number): Observable<void>{
        return this.http.delete<void>(this.apiServerUrl + 'delete/' + userId);
    }
}