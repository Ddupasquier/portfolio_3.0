<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { Project } from '$lib/data/projects';
	import WideButton from '$lib/WideButton.svelte';

	export let project: Project;

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
	const descShown = () => {
		more = 'shown';
		console.log(more);
	};

	const descHidden = () => {
		more = '';
		console.log(more);
	};
</script>

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
		<button class="more-btn" on:click={descShown}>Details</button>
	</div>
	<div class="description {more}" in:fade={{ delay: 400, duration }} out:fade={{ duration }}>
		<div class="less-btn">
			<WideButton onClick={descHidden}>Close</WideButton>
		</div>
		{project.description}
		<ul class="tech">
			{#each project.tech as tech}
				<li class="tech-item" in:fade={{ delay: 400, duration }} out:fade={{ duration }}>
					{tech}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	@use 'src/styles/imports/colors' as colors;

	.gallery-item {
		position: relative;
		cursor: pointer;
		max-height: 30rem;
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
		border-radius: 0 0 0.3rem 0;
		.title {
			padding: 0.5rem 0.5rem 0 0.5rem;
		}
		.when {
			padding: 0 0.5rem;
		}
	}

	.description {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0);
		color: #fff;
		font-size: 1.2rem;
		padding: 0.5rem;
		border-radius: 0.3rem;
		transition: transform 0.6s;
		transform-origin: right;
		transform: scaleX(0);
	}

	.shown {
		transform: scaleX(100%);
	}

	.more-btn {
		color: colors.$purple;
		font-size: 0.9rem;
		font-weight: 800;
		padding: 0.5rem;
		margin-top: 0.5rem;
		background-color: rgba(0, 0, 0);
		border-radius: 0 0 0.3rem 0;
		border: none;
		cursor: pointer;
		transition: background-color 0.6s;
		&:hover {
			background-color: rgba(255, 255, 255, 0.5);
		}
	}

	.less-btn {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
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
		margin-bottom: 1rem;
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

		@media (max-width: 768px) {
			.tech-item {
				font-size: 0.7rem;
				font-weight: 400;
				text-align: center;
				margin: 0.2rem;
				padding: 0;
				border-radius: 5px;
				background: none;
				box-shadow: none;
				transition: none;
				cursor: default;
				transition: all 0.6s;
				&:nth-child(odd) {
					&:hover {
						transform: none;
					}
				}
				&:nth-child(even) {
					&:hover {
						transform: none;
					}
				}
			}
		}
	}
</style>
