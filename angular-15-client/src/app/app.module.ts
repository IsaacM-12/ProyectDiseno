import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { BoardParticipanteComponent } from './board-participante/board-participante.component';
import { BoardJuezComponent } from './board-juez/board-juez.component';
import { BoardOrganizadorGlobalComponent } from './board-organizadorglobal/board-organizadorglobal.component';
import { BoardOrganizadorLocalComponent } from './board-organizadorlocal/board-organizadorlocal.component';
import { BoardUploadZipComponent } from './board-upload-zip/board-upload-zip.component';
import { BoardTeamsComponent } from './board-teams/board-teams.component';
import { BoardSolicitudSerOrganizadorComponent } from './board-solicitud-ser-organizador/board-solicitud-ser-organizador.component';
import { BoardEntregableZipComponent } from './board-entregable-zip/board-entregable-zip.component';
import { BoardEntregableVideoComponent } from './board-entregable-video/board-entregable-video.component';
import { BoardCalificarComponent } from './board-calificar/board-calificar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardParticipanteComponent,
    BoardJuezComponent,
    BoardOrganizadorGlobalComponent,
    BoardOrganizadorLocalComponent,
    BoardUploadZipComponent,
    BoardTeamsComponent,
    BoardSolicitudSerOrganizadorComponent,
    BoardEntregableZipComponent,
    BoardEntregableVideoComponent,
    BoardCalificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
