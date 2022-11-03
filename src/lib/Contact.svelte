<script script>
</script>

<div class="contact">
	<ul>
		<li>dylandupasquier@gmail.com</li>
		<li>
			<a
				href="https://www.linkedin.com/in/dylan-dupasquier/"
				target="_blank"
				rel="noopener noreferrer">Linkedin</a
			>
		</li>
		<li>
			<a href="https://github.com/Ddupasquier" target="_blank" rel="noopener noreferrer">Github</a>
		</li>
	</ul>
</div>

<style lang="scss">
	@use 'src/styles/imports/fonts' as font;
	.contact {
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: center;
		flex-direction: column;
		height: 100%;
		width: 80%;
		max-width: 500px;
		text-align: center;
		padding: 2rem;
		margin: auto;
		background: rgb(0, 0, 0, 0.75);
		border-radius: 0.5rem;
	}

	ul {
		list-style: none;
	}

	li {
		font-size: 1.3rem;
		font-weight: 800;
		text-transform: uppercase;
		font-family: font.$noto-sans;
		color: #22ff7e;
		margin: 1rem;
	}

	a {
		color: #22ff7e;
		text-decoration: none;
		transition: all 0.6s;
		&:hover {
			color: #b744ff;
		}
	}
	@media (max-width: 500px) {
		li {
			font-size: 1rem;
		}
		a {
			color: #22ff7e;
			text-decoration: none;
			transition: all 0.6s;
			&:hover {
				color: #b744ff;
			}
		}
	}
</style>
