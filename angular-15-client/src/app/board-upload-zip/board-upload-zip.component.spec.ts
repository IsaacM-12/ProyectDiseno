import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUploadZipComponent } from './board-upload-zip.component';

describe('BoardUploadZipComponent', () => {
  let component: BoardUploadZipComponent;
  let fixture: ComponentFixture<BoardUploadZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardUploadZipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardUploadZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
