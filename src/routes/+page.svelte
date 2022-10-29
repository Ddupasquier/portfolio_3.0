<script lang="ts">
	import Projects from '$lib/Projects.svelte';
	import BottomSpacer from '$lib/BottomSpacer.svelte';

	let scroll: number = 0;
</script>

<svelte:window on:scroll={(e) => (scroll = window.scrollY)} />

<div class="container" style:transform={`translateY(${scroll / 3}px)`}>
	<Projects />
	<BottomSpacer />
</div>

<style lang="scss">
	.container {
		position: relative;
		width: 90%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
