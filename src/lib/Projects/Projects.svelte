<script lang="ts">
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

	// $: sortedProjects if project.when includes 'Present' keep at beginning of list, otherwise, sort by date
	$: sortedProjects = projectsList.sort((a, b) => {
		if (a.when.includes('Present')) {
			return -1;
		} else if (b.when.includes('Present')) {
			return 1;
		} else {
			return a.when.localeCompare(b.when);
		}
	});
</script>

<svelte:window bind:scrollY={scroll} />

	<div class="gallery">
		{#each sortedProjects as project}
			<ProjectItem {project} />
		{/each}
	</div>

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
