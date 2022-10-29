<script lang="ts">
	import { fade } from 'svelte/transition';

	let scroll: number;
	$: visible = scroll > 550;

	const random = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const duration = 3000;
	const minFadeDelay = 100;
	const maxFadeDelay = 1000;

	const photos = [450, 451, 452, 453, 454, 455, 456, 457];
</script>

<svelte:window bind:scrollY={scroll} />

<div class="gallery">
	{#each photos as photo}
		{#if visible}
			<div
				class="gallery-item"
				id="gallery-item-4"
				in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
				out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
			>
				<img src="https://picsum.photos/{photo}" alt="4" class="gallery-image" />
				<div class="gallery-item-info">
					<ul>
						<li class="gallery-item-likes">
							<span class="visually-hidden">Likes:</span><i
								class="fas fa-heart"
								aria-hidden="true"
							/>
							56
						</li>
						<li class="gallery-item-comments">
							<span class="visually-hidden">Comments:</span><i
								class="fas fa-comment"
								aria-hidden="true"
							/> 2
						</li>
					</ul>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
	}

	.gallery-item {
		position: relative;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.gallery-item-info {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		padding: 0.5rem;
	}

	.gallery-item-likes,
	.gallery-item-comments {
		display: inline-block;
		margin-right: 1rem;
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
