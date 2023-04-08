<script lang="ts">
	import { onMount } from 'svelte';
	import { recommendations } from '$lib/data/recommendations';
	import type { Recommendation } from '$lib/data/recommendations';

	let recommendationsList: Recommendation[] = [];

	onMount(async () => {
		recommendationsList = recommendations;
	});
</script>

<div class="recommendations">
	{#each recommendationsList as recommendation}
		<div class="recommendation">
			<div class="who">
				{recommendation.who} - {recommendation.where}
			</div>
			<div class="when">
				{recommendation.when}
			</div>
			<div class="description">
				<span class="quote">“</span>
				{recommendation.description}
				<span class="quote">”</span>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	@use 'src/styles/imports/fonts' as font;

	.recommendations {
		display: flex;
		flex-direction: column;
		align-self: center;
		gap: 3rem;
		max-width: 1000px;
		margin: auto;
	}

	.recommendation {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.who {
		font-family: font.$montserrat;
		font-weight: bold;
	}

	.when {
		position: relative;
		left: 1rem;
		font-style: italic;
		font-family: font.$montserrat;
	}

	.description {
		font-size: 1.4rem;
		font-family: font.$noto-sans;
		padding: 0 3rem;
		text-align: justify;
	}

	.quote {
		position: relative;
		top: 1.1rem;
		left: -0.4rem;
		font-size: 3rem;
		font-weight: bold;
		font-style: italic;
		line-height: 0;
		text-align: justify;
	}

	@media (max-width: 480px) {
		.recommendations {
			max-width: 90%;
		}
		.description {
			font-size: 1.2rem;
			padding: 1.1rem;
		}
	}
</style>
