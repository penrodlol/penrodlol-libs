import { SupabaseClientOptions } from '@supabase/supabase-js';

export interface SuprabaseClientConfig extends SupabaseClientOptions {
  url: string;
  key: string;
}
