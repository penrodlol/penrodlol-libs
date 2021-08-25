import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Supabase } from './supabaseng.service';
import { SuprabaseClientConfig } from './supabaseng.types';

@NgModule()
export class SupabaseModule {
  static initClient(
    config: SuprabaseClientConfig
  ): ModuleWithProviders<SupabaseModule> {
    return {
      ngModule: SupabaseModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [Supabase],
          useFactory: (supabase: Supabase) => () => {
            const url = config.url;
            const key = config.key;
            supabase.client = createClient(url, key, { ...config });
          },
        },
      ],
    };
  }
}
