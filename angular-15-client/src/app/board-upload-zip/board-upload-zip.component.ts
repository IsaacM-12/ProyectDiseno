import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-board-upload-zip',
  templateUrl: './board-upload-zip.component.html',
  styleUrls: ['./board-upload-zip.component.css']
})
export class BoardUploadZipComponent implements OnInit {
  form: any = {
    team: null,
    url: null
  };
  isSuccessful = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { url } = this.form;
    const { team } = this.form;

    this.authService.uploadGameZip(team, url).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
      
}
}
