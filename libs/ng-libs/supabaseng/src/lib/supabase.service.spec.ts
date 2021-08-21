import { TestBed } from '@angular/core/testing';
import { Supabase } from './supabase.service';

describe('SupabaseService', () => {
  let service: Supabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Supabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
