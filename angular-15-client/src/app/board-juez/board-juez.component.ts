import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-juez',
  templateUrl: './board-juez.component.html',
  styleUrls: ['./board-juez.component.css']
})
export class BoardJuezComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getJuezBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
}
