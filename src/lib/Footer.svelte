<script lang="ts">
	import { fade } from 'svelte/transition';
	let scroll: number;
	$: visible = scroll > 800;
</script>

<svelte:window bind:scrollY={scroll} />

{#if visible}
	<footer in:fade={{ delay: 0 }} out:fade={{ duration: 200 }}>footer</footer>
{/if}

<style lang="scss">
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		background-color: #000;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 4;
	}
</style>
