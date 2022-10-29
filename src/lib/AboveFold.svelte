<script lang="ts">
	import { fade } from 'svelte/transition';

	import Logo from './Logo.svelte';
	let scroll: number;
	$: visible = scroll < 800;
</script>

<svelte:window bind:scrollY={scroll} />

<header>
	{#if visible}
		<div in:fade={{ delay: 0 }} out:fade={{ duration: 200 }}>
			<Logo />
		</div>
	{/if}
	{#if scroll < 700}
		<h1>Dylan Dupasquier</h1>
		<h2>Front-End Developer</h2>
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
		h1 {
			font-size: 6rem;
			margin: 0;
			z-index: 1;
		}
		h2 {
			font-size: 2rem;
			margin: 0;
			z-index: 1;
		}
	}
</style>
