import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTeamsComponent } from './board-teams.component';

describe('BoardTeamsComponent', () => {
  let component: BoardTeamsComponent;
  let fixture: ComponentFixture<BoardTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
