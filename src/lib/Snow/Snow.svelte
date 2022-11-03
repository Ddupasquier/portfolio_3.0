<script lang="ts">
	import {
		css,
		figma,
		git,
		github,
		html,
		js,
		netlify,
		npm,
		postgresql,
		rails,
		ruby,
		react,
		sass,
		stackoverflow,
		svelte,
		typescript,
		vscode
	} from '$lib/assets/techIcons';

	const icons = [
		html,
		css,
		js,
		react,
		ruby,
		rails,
		postgresql,
		svelte,
		typescript,
		sass,
		git,
		github,
		netlify,
		npm,
		figma,
		vscode,
		stackoverflow
	];

	let screenWidth: number = 0;

	$: iconNumber = Math.floor(screenWidth / 30);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="snow-container">
	<ul>
		{#each Array(iconNumber) as _, i}
			<li class="snowflake">
				<img
					src={icons[Math.floor(Math.random() * icons.length)]}
					alt="icon"
					width="40px"
					height="40px"
				/>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.snow-container {
		position: absolute;
		// top: 55rem;
		width: 100%;
		height: 50rem;
		align-self: center;
		overflow: hidden;
		ul {
			height: 100%;
			margin: 0;
			padding: 0;
			.snowflake {
				--size: 0.6rem;
				position: absolute;
				top: -5vh;
				width: var(--size);
				height: var(--size);
				cursor: default;
				filter: invert(1);
			}
		}
	}

	@media (min-width: 2600px) {
		.snow-container {
			top: 70rem;
		}
	}

	@keyframes snowfall {
		0% {
			transform: translate3d(var(--left-ini), 0, 0);
			opacity: 1;
		}
		100% {
			transform: translate3d(var(--left-end), 47rem, 0);
			opacity: 0;
		}
	}

	@for $i from 1 through 50 {
		.snowflake:nth-child(#{$i}) {
			--size: #{random(5) * 2}vw;
			--left-ini: #{random(20) - 10}vw;
			--left-end: #{random(20) - 10}vw;
			left: #{random(100)}vw;
			animation: snowfall #{5 + random(10)}s linear infinite;
			animation-delay: -#{random(10)}s;
			// explain the above for loop
			// 1. the nth-child(#{$i}) is the nth child of the ul
			// 2. the --size is the size of the snowflake
			// 3. the --left-ini is the initial position of the snowflake
			// 4. the --left-end is the end position of the snowflake
			// 5. the left is the left position of the snowflake
			// 6. the animation is the animation of the snowflake
			// 7. the animation-delay is the delay of the snowflake
		}
	}
</style>
