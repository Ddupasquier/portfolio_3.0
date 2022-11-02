<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';

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
</script>

<svelte:window bind:scrollY={scroll} />

{#if visible && loaded}
	<div class="gallery">
		{#each projects.sort(() => Math.random() - 0.5) as project}
			<div class="gallery-item">
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
					</div>
					<ul class="tech">
						{#each project.tech as tech}
							<li class="tech-item" in:fade={{ delay: 400, duration }} out:fade={{ duration }}>
								{tech}
							</li>
						{/each}
					</ul>
				
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
		min-height: 800px;
	}

	.gallery-item {
		position: relative;
		cursor: pointer;
		max-height: 30rem;
	}

	@media (min-width: 768px) {
		.gallery-item:hover .tech {
			transform: scaleY(1);
		}
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.3rem;
		filter: grayscale(100%);
		transition: filter 0.6s;
		&:hover {
			filter: grayscale(0);
		}
	}

	.gallery-item-info {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		font-size: 1.2rem;
		padding: 0.5rem;
		border-radius: 0 0 0.3rem 0;
	}

	.tech {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		background: rgba(0, 0, 0, 0.5);
		transform-origin: bottom;
		transform: scaleY(0);
		transition: all 0.6s;
		.tech-item {
			font-size: 0.8rem;
			font-weight: 400;
			text-align: center;
			margin: 0.2rem;
			padding: 0.5rem 1rem;
			border-radius: 5px;
			background: #3a3a3a;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
			transition: 0.5s;
			cursor: default;
			transition: all 0.6s;
			&:nth-child(odd) {
				&:hover {
					transform: scale(1.2) rotate(5deg);
				}
			}
			&:nth-child(even) {
				&:hover {
					transform: scale(1.2) rotate(-5deg);
				}
			}
		}
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
