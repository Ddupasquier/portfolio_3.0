<script lang="ts">
	import AboveFold from '$lib/AboveFold.svelte';
	import GlobalStylesProvider from '$lib/GlobalStylesProvider.svelte';
	import FrontWaves from '$lib/Waves/FrontWaves.svelte';
	import BackWaves from '$lib/Waves/BackWaves.svelte';
	import Rays from '$lib/Rays/Rays.svelte';
	import Footer from '$lib/Footer.svelte';
	import Snow from '$lib/Snow/Snow.svelte';

	let hideScroll = true;
	let scroll: number = 0;
	$: aboveVisible = scroll < 2000;
</script>

<svelte:window bind:scrollY={scroll} />

<GlobalStylesProvider>
	<div class="main-container" class:hideScroll>
		<div class="behindfold" />
		<AboveFold />
		{#if aboveVisible}
			<Snow />
			<BackWaves />
			<FrontWaves />
		{/if}
		<main class="hidescroll">
			<slot />
		</main>
		<Rays />
		<Footer />
	</div>
</GlobalStylesProvider>

<style lang="scss">
	.main-container {
		position: relative;
		top: 0;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: space-between;
	}

	.hideScroll::-webkit-scrollbar {
		display: none;
	}
	.hidescroll {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	main {
		z-index: 3;
	}

	.behindfold {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 40rem;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(255, 255, 255, 0.5) 100%
		);
		z-index: -1;
	}
</style>
