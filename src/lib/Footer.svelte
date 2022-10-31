<script lang="ts">
	import { fade } from 'svelte/transition';
	import { socialMedias } from '$lib/data/socialMedia';

	let scroll: number;
	$: visible = scroll > 800;

	const thisYear = new Date().getFullYear();
	const copyrite = String.fromCharCode(169);
	const year = `${thisYear} ${copyrite}`;
</script>

<svelte:window bind:scrollY={scroll} />

{#if visible}
	<footer in:fade={{ delay: 0 }} out:fade={{ duration: 200 }}>
		{#each socialMedias as { name, link, icon }}
			<a href={link} target="_blank" rel="noopener noreferrer">
				<!-- <img src={icon} alt={name} /> -->
			</a>
		{/each}
		Dylan Dupasquier - {year}
	</footer>
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
		text-align: center;
		z-index: 4;
	}
</style>
