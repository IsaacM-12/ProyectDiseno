import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOrganizadorglobalComponent } from './board-organizadorglobal.component';

describe('BoardOrganizadorglobalComponent', () => {
  let component: BoardOrganizadorglobalComponent;
  let fixture: ComponentFixture<BoardOrganizadorglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOrganizadorglobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardOrganizadorglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
