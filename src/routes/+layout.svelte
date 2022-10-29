<script lang="ts">
	import AboveFold from '$lib/AboveFold.svelte';
	import GlobalStylesProvider from '$lib/GlobalStylesProvider.svelte';
	import FrontWaves from '$lib/Waves/FrontWaves.svelte';
	import BackWaves from '$lib/Waves/BackWaves.svelte';
	import Footer from '$lib/Footer.svelte';
	import Rain from '$lib/Snow/Snow.svelte';
	import Banner from '$lib/Banner.svelte';

	let hideScroll = true;
</script>

<GlobalStylesProvider>
	<div class="main-container" class:hideScroll>
		<AboveFold />
		<Rain />
		<BackWaves />
		<FrontWaves />
		<Banner />
		<main>
			<slot />
		</main>
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
</style>
