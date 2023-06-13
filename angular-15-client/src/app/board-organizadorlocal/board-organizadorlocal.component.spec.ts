import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOrganizadorLocalComponent } from './board-organizadorlocal.component';

describe('BoardOrganizadorLocalComponent', () => {
  let component: BoardOrganizadorLocalComponent;
  let fixture: ComponentFixture<BoardOrganizadorLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOrganizadorLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardOrganizadorLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
