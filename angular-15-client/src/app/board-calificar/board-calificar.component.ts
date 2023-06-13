import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AUTH_API } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Component({
  selector: 'app-board-calificar',
  templateUrl: './board-calificar.component.html',
  styleUrls: ['./board-calificar.component.css'],
})
export class BoardCalificarComponent {
  form: any = {
    team: null,
  };
  isSuccessful = false;
  errorMessage = '';
  nombresEquipos: any;
  nombresId: any;
  currentUser: any;
  joinTeam = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.viewTeams();
  }

  viewTeams(): void {
    this.http.get<any[]>(AUTH_API + 'viewTeams').subscribe(
      (data) => {
        this.nombresEquipos = data.map((equipo) => ({ id: equipo._id, name: equipo.name }));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelectTeam(id: string, comentario: string, calificacion: number): void {

    this.http
      .put(
        AUTH_API + 'changeCalificationTeam',
        {
          id,
          comentario,
          calificacion
        },
        httpOptions
      )
      .subscribe(
        (data) => {
          this.joinTeam = true;
        },
        (error) => {
          console.log('API call error');
          console.log(error);
        }
      );
  }

  onSubmit(): void {
    const { team } = this.form;

    this.authService.createTeam(team).subscribe({
      next: (data) => {
        this.isSuccessful = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
