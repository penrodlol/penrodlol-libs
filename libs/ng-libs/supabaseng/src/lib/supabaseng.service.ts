import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import {
  DeleteParams,
  SelectParams,
  UpdateParams,
  UpsertParams,
} from './supabaseng.types';

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

  select<T>(table: string, ...params: SelectParams) {
    return this.from<T>(table).select(...params);
  }

  upsert<T>(table: string, ...params: UpsertParams) {
    return this.from<T>(table).upsert(...params);
  }

  update<T>(table: string, ...params: UpdateParams) {
    return this.from<T>(table).update(...params);
  }

  delete<T>(table: string, ...params: DeleteParams) {
    return this.from<T>(table).delete(...params);
  }
}
