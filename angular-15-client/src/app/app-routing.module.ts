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
import { BoardSolicitudSerOrganizadorComponent } from './board-solicitud-ser-organizador/board-solicitud-ser-organizador.component';
import { BoardEntregableZipComponent } from './board-entregable-zip/board-entregable-zip.component';
import { BoardEntregableVideoComponent } from './board-entregable-video/board-entregable-video.component';
import { BoardCalificarComponent } from './board-calificar/board-calificar.component';
import { BoardOrganizadorLocalComponent } from './board-organizadorlocal/board-organizadorlocal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'participante', component: BoardParticipanteComponent },
  { path: 'uploadFile', component: BoardUploadZipComponent },
  { path: 'organizadorglobal', component: BoardOrganizadorGlobalComponent },
  { path: 'organizadorlocal', component: BoardOrganizadorLocalComponent},
  { path: 'juez', component: BoardJuezComponent },

  { path: 'teams', component: BoardTeamsComponent },
  { path: 'solicitudSerOrganizador', component: BoardSolicitudSerOrganizadorComponent },
  { path: 'entregableZip', component: BoardEntregableZipComponent },
  { path: 'entregableVideo', component: BoardEntregableVideoComponent },
  { path: 'calificar', component: BoardCalificarComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
