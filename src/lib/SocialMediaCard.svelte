<script lang="ts">
	import Instagram from '~icons/bxl/instagram'
	import Twitter from '~icons/bxl/twitter'
	import Threads from '~icons/quiqueip/threads'
	import Github from '~icons/bxl/github'
	import Discord from '~icons/bxl/discord'
	import Twitch from '~icons/bxl/twitch'
	import Tiktok from '~icons/bxl/tiktok'

	export let socialMedia:
		| 'instagram'
		| 'twitter'
		| 'threads'
		| 'github'
		| 'discord'
		| 'twitch'
		| 'tiktok'

	export let username: string
	export let discordid: string | null = null

	const socialMediaStyles = {
		instagram: {
			css: 'iggradient',
			icon: Instagram,
			link: `https://instagram.com/${username}`
		},
		twitter: {
			css: 'bg-gradient-to-r from-stone-900 to-stone-950',
			icon: Twitter,
			link: `https://twitter.com/${username}`
		},
		threads: {
			css: 'bg-threadsPattern bg-no-repeat bg-center bg-cover bg-neutral-900',
			icon: Threads,
			link: `https://threads.net/@${username}`
		},
		github: {
			css: 'bg-gradient-to-r from-neutral-700 to-neutral-800',
			icon: Github,
			link: `https://github.com/${username}`
		},
		discord: {
			css: 'bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600',
			icon: Discord,
			link: `https://discordapp.com/users/${discordid}`
		},
		twitch: {
			css: 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600',
			icon: Twitch,
			link: `https://twitch.tv/${username}`
		},
		tiktok: {
			css: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
			icon: Tiktok,
			link: `https://tiktok.com/@${username}`
		}
	}

	const { css, icon, link } = socialMediaStyles[socialMedia]
</script>

<a
	href={link}
	class={`w-full h-20 rounded-2xl flex flex-row items-center shadow-lg content-center gap-2 justify-center hover:scale-[1.02] duration-500 transition-transform ${css}`}
	target="_blank"
>
	{#if socialMedia === 'twitter'}
		<svg
			class="h-8 w-8 z-10 text-white"
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 512 512"
		>
			<path
				fill="currentColor"
				d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
			/></svg
		>
	{:else}
		<svelte:component this={icon} class="h-8 w-8 z-10 text-white" />
	{/if}

	<span class="font-semibold z-10 text-white">@{username}</span>
</a>
