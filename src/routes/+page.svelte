<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	let username = 'random user';

	async function handleSubmit(data: any) {
		await fetch('/api/auth/callback', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
			credentials: 'same-origin'
		});
		await invalidateAll();
	}
</script>

{#if $page.data.session.username}
	<form action="?/signout" use:enhance>
		<button type="submit">Sign out (action)</button>
		<button type="submit" on:click|preventDefault={() => handleSubmit({ type: 'signout' })}
			>Sign out (fetch)</button
		>
	</form>
{:else}
	<form action="?/signin" use:enhance>
		<input name="username" type="text" bind:value={username} />
		<button type="submit">Signin (action)</button>
		<button type="submit" on:click|preventDefault={() => handleSubmit({ type: 'signin', username })}
			>Signin (fetch)</button
		>
	</form>
{/if}

<pre>{JSON.stringify($page.data, null, 2)}</pre>
