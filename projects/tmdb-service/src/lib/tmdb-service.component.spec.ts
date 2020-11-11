import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbServiceComponent } from './tmdb-service.component';

describe('TmdbServiceComponent', () => {
  let component: TmdbServiceComponent;
  let fixture: ComponentFixture<TmdbServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
