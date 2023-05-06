import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardJuezComponent } from './board-juez.component';

describe('BoardJuezComponent', () => {
  let component: BoardJuezComponent;
  let fixture: ComponentFixture<BoardJuezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardJuezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardJuezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
