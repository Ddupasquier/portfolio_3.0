<!-- create styled about me component -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { scale } from 'svelte/transition';
	import { crossfade } from 'svelte/transition';
</script>

<div class="about">
	<div class="about-container">
		<div class="about-container-left">
			<div class="about-container-left-img">
				<img src="https://picsum.photos/421" alt="about me" />
			</div>
		</div>
		<div class="about-container-right">
			<div class="about-container-right-text">
				<div>
					<h1>About Me</h1>
					<p>
						Hello, I'm <span class="name">Dylan</span> and I'm a
						<span class="name">Frontend Developer</span>
						from Portland, Oregon. Besides my time in bootcamp, I'm a <span class="name">self-taught</span> developer and I love to create
						things that live on the web. I specialize in creating
						<span class="name">animations</span> and web apps.
					</p>
				</div>
				<p>Here are a few technologies I've been working with recently:</p>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>Redux</li>
					<li>Node.js</li>
					<li>Express</li>
					<li>MongoDB</li>
					<li>Git</li>
					<li>GitHub</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.about {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: none;
		padding: 2rem 0;
	}

	.about-container {
		width: 90%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 0 auto;
	}

	.about-container-left {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
	}

	.about-container-left-img {
		width: 80%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.about-container-right {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-container-right-text {
		width: 100%;
		height: 100%;
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		div {
			background: #3a3a3a;
			border-radius: 0.3rem;
			padding: 1rem;
		}
		h1 {
			font-size: 2.5rem;
			font-weight: 700;
			text-align: center;
			margin-bottom: 1rem;
			color: rgb(255, 255, 255);
		}
		p {
			font-size: 1rem;
			font-weight: 600;
			text-align: center;
			color: rgb(240, 240, 240);
		}
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			list-style: none;
			padding: 0;
			li {
				font-size: 1.2rem;
				font-weight: 400;
				text-align: center;
				margin: 0 1rem 1rem 0;
				padding: 0.5rem 1rem;
				border-radius: 5px;
				background: #3a3a3a;
				color: rgb(196, 196, 196);
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                        transition: .5s;
				cursor: default;
				&:hover {
					transform: scale(1.2) rotate(5deg);
					color: white;
				}
			}
		}
	}

	.name {
		color: #00ff22;
            font-size: larger;
	}

	@media screen and (min-width: 768px) {
		.about-container {
			width: 80%;
		}

		.about-container-left {
			width: 50%;
		}

		.about-container-right {
			width: 50%;
		}
	}

	@media screen and (min-width: 1024px) {
		.about-container {
			width: 70%;
		}

		.about-container-left {
			width: 50%;
		}

		.about-container-right {
			width: 50%;
		}
	}

	@media screen and (min-width: 1440px) {
		.about-container {
			width: 60%;
		}

		.about-container-left {
			width: 50%;
		}

		.about-container-right {
			width: 50%;
		}
	}

	@media screen and (min-width: 2560px) {
		.about-container {
			width: 50%;
		}

		.about-container-left {
			width: 50%;
		}

		.about-container-right {
			width: 50%;
		}
	}

	@media screen and (min-width: 3840px) {
		.about-container {
			width: 40%;
		}

		.about-container-left {
			width: 50%;
		}

		.about-container-right {
			width: 50%;
		}
	}

	// @media screen and (min-width: 768px) {
	// 	.about-container-left-img {
	// 		width: 50%;
	// 		height: 50%;
	// 	}
	// }

	// @media screen and (min-width: 1024px) {
	// 	.about-container-left-img {
	// 		width: 50%;
	// 		height: 50%;
	// 	}
	// }

	// @media screen and (min-width: 1440px) {
	// 	.about-container-left-img {
	// 		width: 50%;
	// 		height: 50%;
	// 	}
	// }

	// @media screen and (min-width: 2560px) {
	// 	.about-container-left-img {
	// 		width: 50%;
	// 		height: 50%;
	// 	}
	// }

	// @media screen and (min-width: 3840px) {
	// 	.about-container-left-img {
	// 		width: 50%;
	// 		height: 50%;
	// 	}
	// }
</style>
