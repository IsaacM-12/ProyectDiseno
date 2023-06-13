import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AUTH_API } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Component({
  selector: 'app-board-organizadorlocal',
  templateUrl: './board-organizadorlocal.component.html',
  styleUrls: ['./board-organizadorlocal.component.css'],
})
export class BoardOrganizadorLocalComponent {
  form: any = {
    game: null,
  };
  isSuccessful = false;
  errorMessage = '';
  nombresJuegos: any;
  currentUser: any;
  accepted = false;
  state = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.viewGames();
  }

  viewGames(): void {
    this.http.get<any[]>(AUTH_API + 'viewGames').subscribe(
      (data) => {
        this.nombresJuegos = data.map((juego) => juego.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelectStateAceptar(name: string): void {
    this.state = true;
    this.http
      .put(
        AUTH_API + 'changeGameState',
        {
          name,
          state: 'Aceptar',
        },
        httpOptions
      )
      .subscribe(
        (data) => {
          this.accepted = true;
        },
        (error) => {
          console.log('API call error');
          console.log(error);
        }
      );
  }

  onSelectStateRechazar(name: string): void {
    this.state = true;
    this.http
      .put(
        AUTH_API + 'changeGameState',
        {
          name,
          state: 'Rechazar',
        },
        httpOptions
      )
      .subscribe(
        (data) => {
          this.accepted = true;
        },
        (error) => {
          console.log('API call error');
          console.log(error);
        }
      );
  }
}
