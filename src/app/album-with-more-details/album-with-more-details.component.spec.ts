import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumWithMoreDetailsComponent } from './album-with-more-details.component';

describe('AlbumWithMoreDetailsComponent', () => {
  let component: AlbumWithMoreDetailsComponent;
  let fixture: ComponentFixture<AlbumWithMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumWithMoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumWithMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
