import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardParticipanteComponent } from './board-participante/board-participante.component';
import { BoardOrganizadorGlobalComponent } from './board-organizadorglobal/board-organizadorglobal.component';
import { BoardJuezComponent } from './board-juez/board-juez.component';
import { BoardUploadZipComponent } from './board-upload-zip/board-upload-zip.component';
import { BoardTeamsComponent } from './board-teams/board-teams.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'participante', component: BoardParticipanteComponent },
  { path: 'uploadFile', component: BoardUploadZipComponent },
  { path: 'organizadorglobal', component: BoardOrganizadorGlobalComponent },
  { path: 'juez', component: BoardJuezComponent },

  { path: 'teams', component: BoardTeamsComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
