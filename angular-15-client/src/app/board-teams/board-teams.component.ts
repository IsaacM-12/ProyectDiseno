import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AUTH_API } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Component({
  selector: 'app-board-teams',
  templateUrl: './board-teams.component.html',
  styleUrls: ['./board-teams.component.css'],
})
export class BoardTeamsComponent {
  form: any = {
    team: null,
  };
  isSuccessful = false;
  errorMessage = '';
  nombresEquipos: any;
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
        this.nombresEquipos = data.map((equipo) => equipo.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelectTeam(equipo: string): void {
    this.currentUser = this.storageService.getUser().id;
    const id: string = this.currentUser;
  
    this.http
      .put(
        AUTH_API + 'changeUserTeam',
        {
          equipo,
          id
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
