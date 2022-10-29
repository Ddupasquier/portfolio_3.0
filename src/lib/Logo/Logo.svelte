<script lang="ts">
	let scroll: number = 0;
	$: scale = 1 - scroll / 1000;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="logo-container" style="transform: scale({scale});">
	<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
		<g>
			<title>Dylan Dupasquier</title>
			<ellipse
				stroke-width="15"
				ry="127"
				rx="127"
				id="svg_1"
				cy="150"
				cx="150"
				stroke="#fff"
				fill="#ffffff00"
			/>
			<text
				xml:space="preserve"
				text-anchor="start"
				font-family="Noto Sans JP"
				font-size="190"
				stroke-width="0"
				id="svg_3"
				y="195"
				x="70"
				stroke="#fff"
				fill="#fff">D</text
			>
			<text
				xml:space="preserve"
				text-anchor="start"
				font-family="Noto Sans JP"
				font-size="190"
				stroke-width="0"
				id="svg_4"
				y="248"
				x="115"
				stroke="#fff"
				fill="#00000080">D</text
			>
		</g>
	</svg>
	<div class="dylan">
		<ul>
			<li class="placeholder" />
			<li>y</li>
			<li>l</li>
			<li>a</li>
			<li>n</li>
		</ul>
	</div>
	<div class="dupasquier">
		<ul>
			<li class="placeholder" />
			<li>u</li>
			<li>p</li>
			<li>a</li>
			<li>s</li>
			<li>q</li>
			<li>u</li>
			<li>i</li>
			<li>e</li>
			<li>r</li>
		</ul>
	</div>
	<div class="role">
		<ul>
			<li>F</li>
			<li>r</li>
			<li>o</li>
			<li>n</li>
			<li>t</li>
			<li>-</li>
			<li>E</li>
			<li>n</li>
			<li>d</li>
			<li />
			<li>D</li>
			<li>e</li>
			<li>v</li>
			<li>e</li>
			<li>l</li>
			<li>o</li>
			<li>p</li>
			<li>e</li>
			<li>r</li>
		</ul>
	</div>
</div>

<style lang="scss">
	@use 'src/styles/imports/colors.scss' as colors;

	@mixin center-transform {
		left: 50%;
		transform: translateX(-50%);
	}

	.logo-container {
		position: relative;
		top: 25vh;
		width: fit-content;
		height: fit-content;
		margin: 0 auto;
		z-index: 0;
	}

	.dylan {
		position: absolute;
		top: 45%;
		left: 63%;
		width: fit-content;
		font-size: 70px;
		font-family: 'Noto Sans JP';
		color: colors.$black;
		ul {
			display: flex;
			list-style: none;
			@for $i from 1 through 5 {
				li:nth-child(#{$i}) {
					$value: $i * 0.1;
					opacity: 0;
					animation: appearY 1s ease-in-out forwards;
					animation-delay: #{$value + 0.5}s;
				}
			}
		}
	}

	.dupasquier {
		position: absolute;
		top: 60%;
		left: 78%;
		width: fit-content;
		font-size: 70px;
		font-family: 'Noto Sans JP';
		color: colors.$black;
		ul {
			display: flex;
			list-style: none;
			@for $i from 1 through 10 {
				li:nth-child(#{$i}) {
					$value: $i * 0.1;
					opacity: 0;
					animation: appearY 1s ease-in-out forwards;
					animation-delay: #{$value + 1}s;
				}
			}
		}
	}

	.role {
		position: absolute;
		top: 85%;
		left: 75%;
		white-space: nowrap;
		width: fit-content;
		font-size: 30px;
		font-family: 'Noto Sans JP';
		font-weight: 500;
		color: colors.$black;
		ul {
			display: flex;
			list-style: none;
			@for $i from 1 through 19 {
				li:nth-child(#{$i}) {
					$value: $i * 0.1;
					opacity: 0;
					animation: appearY 0.9s ease-in-out forwards;
					animation-delay: #{$value + 1.5}s;
				}
			}
			// 1. loop through 19 times
			// 2. for each loop, set the opacity to 0
			// 3. set the animation to appearY
			// 4. set the animation to 1s
			// 5. set the animation to ease-in-out
			// 6. set the animation to forwards
			// 7. set the animation delay to 0.1s * the current loop number + 1.7s
		}
	}

	.role::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: colors.$white;
		z-index: -1;
		animation: appearX 1.6s ease-in-out forwards;
	}

	@media screen and (max-width: 768px) {
		@mixin mobile-logo {
			ul {
				li.placeholder {
					&::before {
						content: 'D';
					}
				}
			}
		}

		.dylan {
			top: 17.8rem;
			color: white;
			@include center-transform;
			@include mobile-logo;
		}
		.dupasquier {
			top: 21rem;
			color: white;
			@include center-transform;
			@include mobile-logo;
		}
		.role {
			top: 26rem;
			color: white;
			@include center-transform;
		}
	}

	@keyframes appearY {
		0% {
			opacity: 0;
			transform: translateY(-100%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes appearX {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
