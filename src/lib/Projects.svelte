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
</script>

<svelte:window bind:scrollY={scroll} />

{scroll}
<div class="gallery">
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-1"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/300" alt="1" class="gallery-image" />
			<div class="gallery-item-info">
				<ul>
					<li class="gallery-item-likes">
						<span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true" />
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
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-2"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/400" alt="2" class="gallery-image" />
			<div class="gallery-item-type">
				<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true" />
			</div>
		</div>
	{/if}
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-3"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/1000" alt="3" class="gallery-image" />
			<div class="gallery-item-type">
				<span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true" />
			</div>
		</div>
	{/if}
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-4"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/600" alt="4" class="gallery-image" />
			<div class="gallery-item-info">
				<ul>
					<li class="gallery-item-likes">
						<span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true" />
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
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-5"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/700" alt="5" class="gallery-image" />
			<div class="gallery-item-type">
				<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true" />
			</div>
		</div>
	{/if}
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-6"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/800" alt="6" class="gallery-image" />
			<div class="gallery-item-type">
				<span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true" />
			</div>
		</div>
	{/if}
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-7"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/900" alt="7" class="gallery-image" />
			<div class="gallery-item-info">
				<ul>
					<li class="gallery-item-likes">
						<span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true" />
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
	{#if visible}
		<div
			class="gallery-item"
			id="gallery-item-8"
			in:fade={{ delay: random(minFadeDelay, maxFadeDelay), duration: duration }}
			out:fade={{ duration: random(minFadeDelay, maxFadeDelay) }}
		>
			<img src="https://picsum.photos/100" alt="8" class="gallery-image" />
			<div class="gallery-item-type">
				<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true" />
			</div>
		</div>
	{/if}
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

	.gallery-item-type {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		padding: 0.5rem;
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

	.gallery-item-likes {
		color: #e25555;
	}

	.gallery-item-comments {
		color: #009688;
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
