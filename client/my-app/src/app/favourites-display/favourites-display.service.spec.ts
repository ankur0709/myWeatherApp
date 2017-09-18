import { TestBed, inject } from '@angular/core/testing';

import { FavouritesDisplayService } from './favourites-display.service';

describe('FavouritesDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouritesDisplayService]
    });
  });

  it('should be created', inject([FavouritesDisplayService], (service: FavouritesDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
