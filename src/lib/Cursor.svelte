<script lang="ts">
	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'

	export let specialElements = ['a', 'button', 'input', 'textarea']

	let circulo: HTMLDivElement

	let size = spring(10)

	let mouseCoords = { x: -50, y: -50 }

	let coords = spring(
		{ x: -50, y: -50 },
		{
			stiffness: 0.17,
			damping: 0.64
		}
	)

	const checkElement = () => {
		const elements = document.querySelectorAll(':hover')
		const element = elements[elements.length - 1] as HTMLElement

		if (
			specialElements.includes(element.tagName.toLowerCase()) ||
			element.dataset?.cursor === '' ||
			element.dataset?.cursor
		) {
			size.set(17)
		} else {
			size.set(10)
		}
	}

	const handleClick = (e: MouseEvent) => {
		coords.set({ x: e.clientX, y: e.clientY })
		mouseCoords = { x: e.clientX, y: e.clientY }
		checkElement()
	}

	onMount(() => {
		//Si el JavaScript está activado, entonces el cursor por defecto se oculta de todos los elementos
		const style = document.createElement('style')
		style.innerHTML = '* { cursor: none; }'
		document.head.appendChild(style)
	})
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:document
	on:mousedown={() => size.set(12)}
	on:mouseup={() => size.set(10)}
	on:mousemove={handleClick}
/>

<div
	class="w-8 h-8 rounded-2xl top-0 left-0 fixed border border-black dark:border-white select-none pointer-events-none z-40 hidden md:block"
	style="transform: translate(calc({$coords.x}px - 50%), calc({$coords.y}px - 50%)) scale({$size /
		10})"
	bind:this={circulo}
/>

<svg
	viewBox="235.295 235.295 29.41 29.41"
	width="29.41"
	height="29.41"
	class="top-0 left-0 rounded-full fixed select-none pointer-events-none hidden text-black dark:text-white z-50 md:block"
	style="transform: translate(calc({mouseCoords.x}px - 50%), calc({mouseCoords.y}px - 50%))"
>
	<ellipse
		class="stroke-black dark:stroke-white fill-black dark:fill-white"
		cx="250"
		cy="250"
		rx="1"
		ry="1"
	/>
</svg>
