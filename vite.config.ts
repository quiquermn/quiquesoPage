import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				quiqueip: {
					threads: `
					<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
<path d="m141.54 88.988c-0.827-0.3964-1.667-0.7779-2.518-1.1432-1.482-27.307-16.403-42.94-41.457-43.1-0.1135-7e-4 -0.2264-7e-4 -0.3399-7e-4 -14.986 0-27.449 6.3966-35.12 18.036l13.779 9.4521c5.7306-8.6945 14.724-10.548 21.348-10.548 0.0765 0 0.1533 0 0.229 7e-4 8.2494 0.0526 14.474 2.4511 18.503 7.1285 2.932 3.4053 4.893 8.111 5.864 14.05-7.314-1.2431-15.224-1.6253-23.68-1.1405-23.82 1.3721-39.134 15.265-38.105 34.569 0.5219 9.792 5.4001 18.216 13.735 23.719 7.0474 4.652 16.124 6.927 25.557 6.412 12.458-0.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-0.169-40.06-7.484-51.275-21.742-10.503-13.351-15.93-32.635-16.133-57.317 0.2025-24.682 5.6303-43.966 16.133-57.317 11.216-14.258 28.466-21.573 51.275-21.742 22.975 0.1708 40.526 7.5209 52.171 21.848 5.71 7.0256 10.015 15.861 12.853 26.162l16.147-4.3081c-3.44-12.68-8.853-23.606-16.219-32.668-14.929-18.367-36.763-27.779-64.896-27.974h-0.1126c-28.075 0.19447-49.665 9.6418-64.169 28.079-12.906 16.407-19.564 39.236-19.788 67.853l-7e-4 0.0675 7e-4 0.0675c0.2237 28.616 6.8812 51.446 19.788 67.854 14.504 18.437 36.093 27.885 64.169 28.079h0.1126c24.96-0.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553zm-43.096 40.519c-10.44 0.588-21.286-4.098-21.821-14.135-0.3964-7.442 5.2962-15.746 22.462-16.735 1.9658-0.1134 3.8948-0.1688 5.7898-0.1688 6.235 0 12.068 0.6057 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274z" fill="currentColor"></path>
</svg>

					`
				}
			}
		})
	]
})
