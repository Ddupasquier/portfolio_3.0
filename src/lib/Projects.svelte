<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	let scroll: number;
	// $: visible = scroll > 550;
	const nums = [421, 422, 423, 424, 425, 426, 427, 428];
	const duration = 3000;
	const minFadeDelay = 100;
	const maxFadeDelay = 1000;
	let loaded = false;

	const random = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	interface Photos {
		src: string;
		fadeDelay: number;
	}

	let photos: Photos[] = [];

	onMount(async () => {
		const promises = nums.map(async (num) => {
			const src = `https://picsum.photos/${num}`;
			const fadeDelay = random(minFadeDelay, maxFadeDelay);
			return { src, fadeDelay };
		});
		photos = await Promise.all(promises);
		loaded = true;
	});
</script>

<svelte:window bind:scrollY={scroll} />

<div class="proj-header">Projects</div>
<div class="gallery" in:scale={{ duration }}>
	{#each photos as { src, fadeDelay }}
		<div class="gallery-item" id="gallery-item-4">
			<img
				{src}
				alt="random"
				class="gallery-image"
				in:fade={{ delay: fadeDelay, duration }}
				out:fade={{ duration }}
			/>
			{#if loaded}
				<div
					class="gallery-item-info"
					in:fade={{ delay: fadeDelay + 400, duration }}
					out:fade={{ duration }}
				>
					Placeholder
					<!-- <ul>
						<li class="gallery-item-likes">
							<span class="visually-hidden">Likes:</span>
							<i class="fas fa-heart" aria-hidden="true" /> 56
						</li>
						<li class="gallery-item-comments">
							<span class="visually-hidden">Comments:</span>
							<i class="fas fa-comment" aria-hidden="true" /> 3
						</li>
					</ul> -->
				</div>
			{/if}
		</div>
	{:else}
		Loading...
	{/each}
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
		min-height: 800px;
	}

	.gallery-item {
		position: relative;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.3rem;
	}

	.gallery-item-info {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		padding: 0.5rem;
		border-radius: 0 0 0.3rem 0;
	}

	// .gallery-item-likes,
	// .gallery-item-comments {
	// 	display: inline-block;
	// 	margin-right: 1rem;
	// }

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

	.proj-header {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
</style>
