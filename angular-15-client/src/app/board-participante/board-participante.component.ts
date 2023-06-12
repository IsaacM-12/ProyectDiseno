import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-board-participante',
  templateUrl: './board-participante.component.html',
  styleUrls: ['./board-participante.component.css'],
})
export class BoardParticipanteComponent implements OnInit {
  form: any = {
    url: null,
  };
  isSuccessful = false;
  errorMessage = '';

  //el equipo del usuario
  teamName: any;


  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { url } = this.form;
    this.teamName = this.storageService.getUser().team;

    this.authService.uploadLink(url, this.teamName).subscribe({
      next: (data) => {
        this.isSuccessful = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
