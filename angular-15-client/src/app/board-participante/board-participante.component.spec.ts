import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardParticipanteComponent } from './board-participante.component';

describe('BoardParticipanteComponent', () => {
  let component: BoardParticipanteComponent;
  let fixture: ComponentFixture<BoardParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardParticipanteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
