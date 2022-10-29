<script lang="ts">
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="logo-container">
	<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
		<g>
			<title>Layer 1</title>
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
	<div class="dylan">ylan</div>
	<div class="dupasquier">upasquier</div>
	<div class="role">Front-End Developer</div>
</div>

<style lang="scss">
	@use 'src/styles/imports/colors.scss' as colors;

	.logo-container {
		width: fit-content;
		height: fit-content;
		margin: 0 auto;
		position: relative;
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
		animation: appear 1s ease-in-out forwards;
	}

	.dupasquier {
		position: absolute;
		top: 60%;
		left: 78%;
		width: fit-content;
		font-size: 70px;
		font-family: 'Noto Sans JP';
		color: colors.$black;
		animation: appear 1.4s ease-in-out forwards;
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
		animation: appear 1.6s ease-in-out forwards;
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
		animation: appear 1.6s ease-in-out forwards;
	}

	@keyframes appear {
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
