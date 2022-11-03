<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Logo from './Logo/Logo.svelte';
	let scroll: number = 0;
	let screenWidth: number = 0;
	$: visible = scroll < 640;
	$: mobileWidth = screenWidth < 640;
	console.log(screenWidth)
</script>

<svelte:window bind:scrollY={scroll} bind:innerWidth={screenWidth} />

<header>
	{#if visible}
		{#if mobileWidth}
			<div out:fade={{ duration: 10 }}>
				<Logo />
			</div>
		{:else}
			<div out:fly={{ duration: 10 }}>
				<Logo />
			</div>
		{/if}
	{/if}
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 70rem;
		text-align: center;
		background: none;
		z-index: 1;
		div {
			position: fixed;
			top: 0;
		}
	}

	@media screen and (max-width: 768px) {
		header {
			z-index: 2;
		}
	}
</style>
