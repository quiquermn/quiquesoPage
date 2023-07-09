<script>
	import SocialMediaCard from '$lib/SocialMediaCard.svelte'
</script>

<svelte:head>
	<title>Quique</title>

	<meta name="description" content="Perfil de Quique" />
	<meta name="og:title" content="Quique 🤓☝️" />
	<meta name="og:description" content="Perfil de Quique" />
	<meta name="og:image" content="/favicon.svg" />
	<meta name="og:image:alt" content="Emoji Nerd" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Quique ☝️🤓" />
	<meta name="twitter:description" content="Perfil de Quique" />
	<meta name="twitter:image" content="/favicon.svg" />
	<meta name="twitter:image:alt" content="Emoji Nerd" />
</svelte:head>

<div class="flex flex-col gap-4 container max-w-md mx-auto">
	<div
		class="flex flex-col items-center content-center justify-center mx-auto w-max rounded-xl mt-4 mb-4"
	>
		<img src="/imgs/sillymilly.webp" alt="Gato Milly" class="h-20 w-20 rounded-[50%]" />
		<h1 class="font-bold text-2xl mb-2">Quique R.</h1>

		<p>Hola, soy Quique 🤓🤓🤓</p>
		<p class="font-thin">No se que poner aquí, aún está en desarrollo</p>
	</div>

	<SocialMediaCard socialMedia="instagram" username="quique.rmn" />
	<SocialMediaCard socialMedia="threads" username="quique.rmn" />
	<SocialMediaCard socialMedia="twitter" username="quique_rmn" />
	<SocialMediaCard socialMedia="discord" username="quique.rmn" discordid="491683305897459722" />
	<SocialMediaCard socialMedia="github" username="ZorvShadow" />
</div>
