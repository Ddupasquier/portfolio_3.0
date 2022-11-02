<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';
	import type { Project } from '$lib/data/projects';
	import ProjectItem from '$lib/Projects/ProjectItem.svelte';

	let scroll: number;
	let loaded = false;
	$: visible = scroll > 1000 && scroll < 5000;

	let projectsList: Project[] = [];

	onMount(() => {
		projectsList = projects;
		loaded = true;
	});
</script>

<svelte:window bind:scrollY={scroll} />

<!-- {#if visible && loaded} -->
	<div class="gallery">
		{#each projectsList.sort(() => Math.random() - 0.5) as project}
			<ProjectItem {project} />
		{/each}
	</div>
<!-- {/if} -->

<style lang="scss">
	@use 'src/styles/imports/colors.scss' as colors;
	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
		width: 95%;
	}

	@media (max-width: 968px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
