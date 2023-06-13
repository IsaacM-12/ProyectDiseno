import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCalificarComponent } from './board-calificar.component';

describe('BoardCalificarComponent', () => {
  let component: BoardCalificarComponent;
  let fixture: ComponentFixture<BoardCalificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCalificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
