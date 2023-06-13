import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-board-upload-zip',
  templateUrl: './board-upload-zip.component.html',
  styleUrls: ['./board-upload-zip.component.css'],
})
export class BoardUploadZipComponent implements OnInit {
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
    const{ name } = this.form;
    const { url } = this.form;
    this.teamName = this.storageService.getUser().team;
    const state: string = "Pendiente";

    this.authService.uploadGameZip(name,  this.teamName, url, state).subscribe({
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
