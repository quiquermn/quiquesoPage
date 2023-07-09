<script>
	import Cursor from '$lib/Cursor.svelte'
	import { page } from '$app/stores'
	import '../app.postcss'

	const baseDomain = 'quiqueso.com'
	const canonicalUrl = `https://${baseDomain}${$page.url.pathname}`
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Cursor />

<div
	class="flex flex-col items-stretch justify-between p-4 min-h-[100svh] bg-white dark:bg-stone-900 dark:text-white"
>
	<slot />
	<footer class="w-full mt-16 text-center">
		<span>Desarrollo y diseño por: <span class="font-bold">Quique</span> ☝️🤓</span>
	</footer>
</div>
