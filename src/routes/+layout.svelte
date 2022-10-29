<script lang="ts">
	import AboveFold from '$lib/AboveFold.svelte';
	import GlobalStylesProvider from '$lib/GlobalStylesProvider.svelte';
	import FrontWaves from '$lib/Waves/FrontWaves.svelte';
	import BackWaves from '$lib/Waves/BackWaves.svelte';
	import Footer from '$lib/Footer.svelte';
	import Rain from '$lib/Rain/Rain.svelte';
</script>

<GlobalStylesProvider>
	<div class="main-container">
		<AboveFold />
		<BackWaves />
		<FrontWaves />
		<Rain />
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
</style>
