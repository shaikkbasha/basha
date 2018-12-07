import { TestBed, async, inject } from '@angular/core/testing';

import { AutzGuard } from './autz.guard';

describe('AutzGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutzGuard]
    });
  });

  it('should ...', inject([AutzGuard], (guard: AutzGuard) => {
    expect(guard).toBeTruthy();
  }));
});
