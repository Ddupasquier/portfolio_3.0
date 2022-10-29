<script lang="ts">
	import Logo from './Logo/Logo.svelte';
	let scroll: number = 0;
	$: visible = scroll < 700;
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
		position: fixed;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		margin-top: 3rem;
		text-align: center;
		background: none;
		z-index: 1;
	}
</style>
