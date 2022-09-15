import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		session: {
			username: locals.session.username
		}
	};
};
