<h1 align="center">
	SupabaseNg - Angular/Supabase Client
</h1>
<p align="center">
	<img
		src="https://avatars.githubusercontent.com/u/54469796"
		alt="Supabase Logo"
		width="80"
		height="80"
		style="margin-right: 50px"
	>
	<img
		src="https://angular.io/assets/images/logos/angular/angular.svg"
		alt="Angular Logo"
		width="80"
		height="80"
	>
	<br><br>
	<i>
		A simple Angular wrapper for the Supabase Client.
	</i>
</p>
<hr>

## Setup

```
npm install @penrodlol/supabaseng
```

Initialize Supabase Client once during Angular application startup.
<br>
Supports all *SupabaseClientOptions* as well.
```ts
@NgModule({
  imports: [
    SupabasengModule.initClient({
      url: 'https://xyzcompany.supabase.co',
      key: 'public-anon-key',
			...
    }),
  ],
})
export class AppModule {}
```
<hr>

## Usage

<br>
Access Supabase clients:

```ts
@Component({...})
export class AppComponent {
  constructor(private supabase: Supabase) {
    this.supabase.client;  // -> SupabaseClient
    this.supabase.auth;    // -> SupabaseAuthClient
    this.supabase.storage; // -> SupabaseStorageClient
  }
}
```

Performing table operations:

```ts
@Component({...})
export class AppComponent {
  constructor(private supabase: Supabase) {
    this.supabase.from<...>('...') // -> SupabaseQueryBuilder<...>
  }
}
```