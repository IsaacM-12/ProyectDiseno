import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AUTH_API } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Component({
  selector: 'app-board-solicitud-ser-organizador',
  templateUrl: './board-solicitud-ser-organizador.component.html',
  styleUrls: ['./board-solicitud-ser-organizador.component.css'],
})
export class BoardSolicitudSerOrganizadorComponent {
  isSuccessful = false;
  errorMessage = '';
  form: any = {
    name: null,
  };

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  onSubmit(): void {
    const { name } = this.form;

    this.authService.solicitarSerOrganizador(name).subscribe({
      next: (data) => {
        this.isSuccessful = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
