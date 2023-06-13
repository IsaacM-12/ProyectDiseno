import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEntregableVideoComponent } from './board-entregable-video.component';

describe('BoardEntregableVideoComponent', () => {
  let component: BoardEntregableVideoComponent;
  let fixture: ComponentFixture<BoardEntregableVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardEntregableVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardEntregableVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
