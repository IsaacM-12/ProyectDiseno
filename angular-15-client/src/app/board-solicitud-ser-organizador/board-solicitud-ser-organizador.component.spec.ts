import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSolicitudSerOrganizadorComponent } from './board-solicitud-ser-organizador.component';

describe('BoardSolicitudSerOrganizadorComponent', () => {
  let component: BoardSolicitudSerOrganizadorComponent;
  let fixture: ComponentFixture<BoardSolicitudSerOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSolicitudSerOrganizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardSolicitudSerOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
