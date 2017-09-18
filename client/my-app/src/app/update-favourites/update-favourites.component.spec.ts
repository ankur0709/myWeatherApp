import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFavouritesComponent } from './update-favourites.component';

describe('UpdateFavouritesComponent', () => {
  let component: UpdateFavouritesComponent;
  let fixture: ComponentFixture<UpdateFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
