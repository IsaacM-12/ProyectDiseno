import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEntregableZipComponent } from './board-entregable-zip.component';

describe('BoardEntregableZipComponent', () => {
  let component: BoardEntregableZipComponent;
  let fixture: ComponentFixture<BoardEntregableZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardEntregableZipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardEntregableZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
