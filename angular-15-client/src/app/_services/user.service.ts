import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8080/api/test/';
//const API_URL = 'http://138.2.231.71:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getParticipanteBoard(): Observable<any> {
    return this.http.get(API_URL + 'participante', { responseType: 'text' });
  }

  getOrganizadorGlobalBoard(): Observable<any> {
    return this.http.get(API_URL + 'organizadorglobal', { responseType: 'text' });
  }

  getOrganizadorlLocal(): Observable<any> {
    return this.http.get(API_URL + 'organizadorlocal', { responseType: 'text' });
  }

  getJuezBoard(): Observable<any> {
    return this.http.get(API_URL + 'juez', { responseType: 'text' });
  }

}
