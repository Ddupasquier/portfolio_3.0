<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import WideButton from '$lib/WideButton.svelte';
	import { createLoadObserver } from '$lib/utils';
	import Loading from '$lib/Loading.svelte';

	export let project: Project;

	$: loading = true;
	const onLoad = createLoadObserver(() => {
		loading = false;
	});

	$: more = '';
	const descShown = () => {
		more = 'shown';
	};

	const descHidden = () => {
		more = '';
	};
</script>

<div class="gallery-item">
	<img
		src={project.src}
		alt={project.title}
		class="gallery-image"
		style="visibility: {loading ? 'hidden' : 'visible'}"
		use:onLoad
		loading="lazy"
	/>

	<div class="gallery-item-info">
		<div class="title">
			{project.title}
		</div>
		<div class="when">
			{project.when}
		</div>
		<button class="more-btn" on:click={descShown}>Details</button>
	</div>
	<div class="description {more}">
		<div class="less-btn">
			<WideButton onClick={descHidden}>Close</WideButton>
		</div>
		<section>
			<div class="links">
				{#if project.links.github}
					<a href={project.links.github} target="_blank" rel="noopener noreferrer"> Github </a> |
				{/if}
				{#if project.links.live}
				<a href={project.links.live} target="_blank" rel="noopener noreferrer">Live</a>
				{/if}
			</div>

			<div class="description-text">
				{project.description}
			</div>
		</section>
		<ul class="tech">
			{#each project.tech as tech}
				<li class="tech-item">
					{tech}
				</li>
			{/each}
		</ul>
	</div>
	{#if loading}
		<Loading />
	{/if}
</div>

<style lang="scss">
	@use 'src/styles/imports/colors' as colors;
	@use 'src/styles/imports/fonts' as font;

	.gallery-item {
		position: relative;
		font-family: font.$noto-sans;
		width: 25rem;
		aspect-ratio: 8/5;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.3rem;
		filter: grayscale(100%);
		transition: filter 0.6s;
		cursor: pointer;
		&:hover {
			filter: grayscale(0) saturate(200%);
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
		border-radius: 0.3rem 0 0.3rem 0;
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
		cursor: default;
		section {
			margin-top: 3rem;
		}
	}

	.shown {
		transform: scaleX(100%);
	}

	.more-btn {
		color: rgb(199, 0, 199);
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
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin-bottom: 1rem;
		.tech-item {
			font-size: 0.7rem;
			font-weight: 400;
			text-align: center;
			margin: 0.2rem;
			border-radius: 5px;
			cursor: default;
			transition: all 0.6s;
		}
	}

	.links {
		margin-bottom: 1rem;
		a {
			color: colors.$purple;
			font-size: 1.2rem;
			font-weight: 800;
			padding: 0.5rem;
			background-color: rgba(0, 0, 0);
			border-radius: 0.3rem;
			border: none;
			cursor: pointer;
			text-transform: uppercase;
			text-decoration: none;
			transition: background-color 0.6s;
			&:hover {
				background-color: rgba(255, 255, 255, 0.5);
			}
		}
	}

	@media screen and (max-width: 1557px) {
		.description-text {
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 960px) {
		.gallery-item {
			width: 100%;
		}
		.description {
			border-radius: 0;
		}
		.description-text {
			font-size: 1.2rem;
		}
	}
</style>
