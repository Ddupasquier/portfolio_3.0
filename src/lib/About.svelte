<script lang="ts">
	const skills = [
		'Javascript',
		'Typescript',
		'Svelte',
		'Vercel',
		'Supabase',
		'Postgres',
		'React',
		'HTML',
		'SCSS/Sass',
		'Ruby on Rails',
		'Git',
		'Github',
		'Figma'
	];
</script>

<div class="about">
	<div class="about-container">
		<div class="about-container-left">
			<div class="about-container-left-img">
				<img src="https://i.ibb.co/Vwk6P89/1639413868041.webp" alt="about me" />
			</div>
		</div>
		<div class="about-container-right">
			<div class="about-container-right-text">
				<div>
					<h1>TLDR; About Me</h1>
					<p>
						Hello, I'm <span class="name">Dylan</span> and I'm a
						<span class="name">Frontend Developer</span>
						from Portland, Oregon. Besides my time in bootcamp, I'm a
						<span class="name">self-taught</span>
						developer and I love to create things that live on the web. I specialize in creating
						<span class="name">animations</span> and <span class="name">web apps</span>.
					</p>
				</div>
				<p>Here are a few technologies I've been working with recently:</p>
				<ul>
					{#each skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'src/styles/imports/fonts' as font;
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
			font-family: font.$league-gothic;
			font-size: 2.5rem;
			font-weight: 700;
			text-align: center;
			margin-bottom: 1rem;
			color: rgb(255, 255, 255);
		}
		p {
			font-family: font.$montserrat;
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
				font-family: font.$noto-sans;
				font-size: 1.2rem;
				font-weight: 400;
				text-align: center;
				margin: 0 1rem 1rem 0;
				padding: 0.5rem 1rem;
				border-radius: 5px;
				background: #3a3a3a;
				color: rgb(196, 196, 196);
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
				transition: 0.5s;
				cursor: default;
				&:nth-child(odd) {
					&:hover {
						transform: scale(1.2) rotate(5deg);
						color: white;
					}
				}
				&:nth-child(even) {
					&:hover {
						transform: scale(1.2) rotate(-5deg);
						color: white;
					}
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
			width: 60%;
		}

		.about-container-right {
			width: 80%;
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
</style>
