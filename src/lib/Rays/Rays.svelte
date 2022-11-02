<script lang="ts">
	let scroll: number = 0;
</script>

<svelte:window on:scroll={(e) => (scroll = window.scrollY)} />

<div class="rays-container">
	<svg
		viewBox="0 0 900 600"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
		style:transform={`translateY(${scroll / 10}px)`}
	>
		<path d="M0 325 900 10 900 215 0 350Z" fill="#4d0073" class="layer1" />
		<path d="M0 350 900 100 900 255 0 370Z" fill="#4d2273" class="layer2" />
		<path d="M0 370 900 150 900 275 0 390Z" fill="#4d4473" class="layer3" />
		<path d="M0 390 900 200 900 295 0 410Z" fill="#4d6673" class="layer4" />
		<path d="M0 410 900 250 900 315 0 430Z" fill="#4d8873" class="layer5" />
		<path d="M0 430 900 300 900 335 0 450Z" fill="#4daa73" class="layer6" />
	</svg>
</div>

<style lang="scss">
	.rays-container {
		position: absolute;
		top: 150rem;
		overflow: hidden;
		z-index: 1;
		min-height: 1000px;
		width: 100%;
		svg {
			min-height: 1400px;
		}
	}
</style>
