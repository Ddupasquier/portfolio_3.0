<script lang="ts">
	let scroll: number;

</script>

<svelte:window bind:scrollY={scroll} />

<div class="front-waves" style:transform={`translateY(${scroll / 3}px)`}>
	<div class="top-wave">
		<svg
			viewBox="0 0 900 600"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><rect x="0" y="0" />

			<path
				d="M0 517L30 507.2C60 497.3 120 477.7 180 475C240 472.3 300 486.7 360 496.8C420 507 480 513 540 498.2C600 483.3 660 447.7 720 432.5C780 417.3 840 422.7 870 425.3L900 428L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
				fill="#4d0073"
				class="layer5"
			/>
			<path
				d="M0 559L30 554C60 549 120 539 180 535.7C240 532.3 300 535.7 360 528.3C420 521 480 503 540 493C600 483 660 481 720 483.2C780 485.3 840 491.7 870 494.8L900 498L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
				fill="#000000"
				class="layer6"
			/>
		</svg>
	</div>
	<div class="bottom-wave">
		<svg
			viewBox="0 0 900 600"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			class="flip"
			><rect x="0" y="0" />

			<path
				d="M0 517L30 507.2C60 497.3 120 477.7 180 475C240 472.3 300 486.7 360 496.8C420 507 480 513 540 498.2C600 483.3 660 447.7 720 432.5C780 417.3 840 422.7 870 425.3L900 428L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
				fill="#4d0073"
				class="layer5"
			/>
			<path
				d="M0 559L30 554C60 549 120 539 180 535.7C240 532.3 300 535.7 360 528.3C420 521 480 503 540 493C600 483 660 481 720 483.2C780 485.3 840 491.7 870 494.8L900 498L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
				fill="#000000"
				class="layer6"
			/>
		</svg>
	</div>
	<div class="hide-artifact" />
</div>

<style lang="scss">
	.hide-artifact {
		position: absolute;
		top: 91rem;
		left: 0;
		width: 100%;
		height: 2rem;
		z-index: 10;
		background: rgb(0, 0, 0);
	}
	.front-waves {
		position: absolute;
		top: -30em;
		width: 100%;
		overflow: hidden;
		z-index: 1;
		.top-wave {
			svg {
				height: 1500px;
			}
		}
		.bottom-wave {
			position: relative;
			top: -2rem;
			svg {
				min-height: 1000px;
				max-height: 2200px;
			}
		}
	}

	.flip {
		transform: scale(-1, -1);
	}

	.layer5 {
		animation: wave 7s infinite 4s;
	}

	.layer6 {
		animation: wave 7s infinite 5s;
	}

	@keyframes wave {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, 1rem);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
