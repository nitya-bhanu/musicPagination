import { TestBed } from '@angular/core/testing';

import { SongImportService } from './song-import.service';

describe('SongImportService', () => {
  let service: SongImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
