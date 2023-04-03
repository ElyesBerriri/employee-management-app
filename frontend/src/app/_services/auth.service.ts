import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl+'/auth/';
  
  constructor(private http: HttpClient){}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiServerUrl + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.apiServerUrl + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
