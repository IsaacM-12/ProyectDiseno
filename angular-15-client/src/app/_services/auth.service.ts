import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://127.0.0.1:8080/api/auth/';
//const AUTH_API = 'http://138.2.231.71:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  uploadLink(url: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'uploadLink',
      {
        url,
      },
      httpOptions
    );
  }

  uploadGameZip(team: String, url: String): Observable<any> {
    return this.http.post(
      AUTH_API + 'uploadGameZip',
      {
        team,
        url,
      },
      httpOptions
    );
  }

  createTeam(team: String): Observable<any> {
    return this.http.post(
      AUTH_API + 'createTeam',
      {
        team,
      },
      httpOptions
    );
  }
  
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
  
  viewTeams(): Observable<any> {
    return this.http.get(AUTH_API + 'viewTeams', { responseType: 'text' });
  }
}
