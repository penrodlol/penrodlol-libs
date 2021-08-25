import { SupabaseClient, SupabaseClientOptions } from '@supabase/supabase-js';

export interface SuprabaseClientConfig extends SupabaseClientOptions {
  url: string;
  key: string;
}

export type SupabaseQueryBuilder = ReturnType<SupabaseClient['from']>;
export type SelectParams = Parameters<SupabaseQueryBuilder['select']>;
export type UpsertParams = Parameters<SupabaseQueryBuilder['upsert']>;
export type UpdateParams = Parameters<SupabaseQueryBuilder['update']>;
export type DeleteParams = Parameters<SupabaseQueryBuilder['delete']>;
