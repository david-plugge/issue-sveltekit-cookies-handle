import type { Actions } from './$types';

export const actions: Actions = {
	async signin({ cookies, request }) {
		console.log('action signin');
		const formData = await request.formData();
		const username = formData.get('username') as string;

		cookies.set('username', username, {
			maxAge: 3600,
			path: '/'
		});

		return { success: true };
	},
	async signout({ cookies }) {
		console.log('action signout');
		cookies.delete('username', {
			path: '/'
		});

		return { success: true };
	}
};
