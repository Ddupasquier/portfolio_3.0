<script lang="ts">
	let scroll: number = 0;
</script>

<svelte:window on:scroll={(e) => (scroll = window.scrollY)} />

<h1 style:transform={`translateY(${scroll / 3}px)`}>Under Construction.</h1>

<style lang="scss">
	h1 {
		display: flex;
		align-self: center;
		position: absolute;
		top: 34rem;
		z-index: 10;
		font-size: 5rem;
	}
</style>
