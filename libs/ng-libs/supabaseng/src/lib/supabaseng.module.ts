import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { SuprabaseClientConfig } from './supabase-config.interface';
import { Supabase } from './supabase.service';

@NgModule()
export class SupabasengModule {
  static initClient(
    config: SuprabaseClientConfig
  ): ModuleWithProviders<SupabasengModule> {
    return {
      ngModule: SupabasengModule,
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
