<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';
	import ProjectItem from '$lib/Projects/ProjectItem.svelte';

	let scroll: number;
	$: visible = scroll > 1000 && scroll < 5000;
	const duration = 3000;
	const minFadeDelay = 100;
	const maxFadeDelay = 1000;
	let loaded = false;

	const random = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	onMount(() => {
		loaded = true;
	});

	$: more = '';
	const toggleMore = () => {
		more = 'shown' || '';
	};
</script>

<svelte:window bind:scrollY={scroll} />

{#if visible && loaded}
	<div class="gallery">
		{#each projects.sort(() => Math.random() - 0.5) as project}
		<!-- TODO Make this into reusable component -->
			<!-- <div class="gallery-item">
				<img
					src={project.src}
					alt={project.title}
					class="gallery-image"
					in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration }}
					out:fade={{ duration }}
				/>
				
					<div class="gallery-item-info" in:fade={{ delay: 400, duration }} out:fade={{ duration }}>
						<div class="title">
							{project.title}
						</div>
						<div class="when">
							{project.when}
						</div>
						<button class="more-less" on:click={toggleMore}>
							More
						</button>
					</div>
					<ul class="tech">
						{#each project.tech as tech}
							<li class="tech-item" in:fade={{ delay: 400, duration }} out:fade={{ duration }}>
								{tech}
							</li>
						{/each}
					</ul>
					<div class="description {more}" in:fade={{ delay: 400, duration }} out:fade={{ duration }}>
						{project.description}
					</div>
			</div> -->
			<ProjectItem {project} />
		{/each}
	</div>
{/if}

<style lang="scss">
	@use 'src/styles/imports/colors.scss' as colors;
	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
		min-height: 800px;
	}

	@media (max-width: 768px) {
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
