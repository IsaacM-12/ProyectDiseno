import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { url } = this.form;

    this.authService.uploadLink(url).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
