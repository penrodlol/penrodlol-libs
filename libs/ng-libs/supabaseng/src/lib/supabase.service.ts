import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class Supabase {
  client!: SupabaseClient;

  get auth() {
    return this.client.auth;
  }

  get storage() {
    return this.client.storage;
  }

  from<T>(table: string) {
    return this.client.from<T>(table);
  }
}
