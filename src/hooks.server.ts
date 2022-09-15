import { json, type Handle, type RequestEvent } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	if (event.url.pathname === '/api/auth/callback') {
		return handleCallback(event);
	}

	event.locals.session = {
		username: event.cookies.get('username') ?? null
	};

	return resolve(event);
};

async function handleCallback({ cookies, request }: RequestEvent) {
	const { type, username } = await request.json();

	if (type === 'signin') {
		console.log('callback signin');
		cookies.set('username', username, {
			path: '/',
			maxAge: 3600
		});
	} else if (type === 'signout') {
		console.log('callback signout');
		cookies.delete('username', {
			path: '/'
		});
	}

	return json({ success: true });
}
