// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface MySession {
		username: string | null;
	}

	interface Locals {
		session: MySession;
	}
	interface PageData {
		session: MySession;
	}
	// interface PageError {}
	// interface Platform {}
}
