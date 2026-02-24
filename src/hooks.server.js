/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = ({ error, event, status, message }) => {
	const errorId = crypto.randomUUID?.() ?? String(Date.now());

	console.error('SvelteKit error', {
		errorId,
		status,
		message,
		path: event?.url?.pathname,
		stack: error?.stack
	});

	if (status && status < 500) {
		return { message };
	}

	return {
		message: 'Unexpected error. Please try again.'
	};
};
