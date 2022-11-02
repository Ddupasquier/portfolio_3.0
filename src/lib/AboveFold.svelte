<script lang="ts">
	import Logo from './Logo/Logo.svelte';
	let scroll: number = 0;
	$: visible = scroll < 670;
</script>

<svelte:window bind:scrollY={scroll} />

<header>
	{#if visible}
		<div>
			<Logo />
		</div>
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
</style>
