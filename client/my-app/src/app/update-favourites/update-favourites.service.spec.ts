import { TestBed, inject } from '@angular/core/testing';

import { UpdateFavouritesService } from './update-favourites.service';

describe('UpdateFavouritesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateFavouritesService]
    });
  });

  it('should be created', inject([UpdateFavouritesService], (service: UpdateFavouritesService) => {
    expect(service).toBeTruthy();
  }));
});
