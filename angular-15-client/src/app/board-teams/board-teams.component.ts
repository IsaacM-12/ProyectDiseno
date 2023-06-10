import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-board-teams',
  templateUrl: './board-teams.component.html',
  styleUrls: ['./board-teams.component.css']
})
export class BoardTeamsComponent {
  form: any = {
    team: null,
  };
  isSuccessful = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

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
