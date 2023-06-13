import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//export const AUTH_API = 'http://127.0.0.1:8080/api/auth/';
export const AUTH_API = 'http://138.2.231.71:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // -------------------------------
  // post
  // ------------------------------

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

  uploadLink(url: string, team: String): Observable<any> {
    return this.http.post(
      AUTH_API + 'uploadLink',
      {
        url,
        team,
      },
      httpOptions
    );
  }

  uploadGameZip(name: String, team: String, url: String, state: String): Observable<any> {
    return this.http.post(
      AUTH_API + 'uploadGameZip',
      {
        name,
        team,
        url,
        state,
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

  solicitarSerOrganizador(
    name: String,
    email: String,
    place: String,
    description: String
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'solicitarSerOrganizador',
      {
        name,
        email,
        place,
        description,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
