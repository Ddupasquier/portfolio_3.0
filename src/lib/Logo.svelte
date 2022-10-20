<script lang="ts">
	import Logo from '$lib/assets/Logo.webp';
	let scroll: number
</script>

<svelte:window bind:scrollY={scroll} />

<div class="blur-border">
	<img src={Logo} alt="Svelte logo" /><br />
</div>

<style lang="scss">
	@use 'src/styles/imports/colors.scss' as colors;

	.blur-border {
		border-radius: 50%;
		z-index: 0;
	}

	img {
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
	}
</style>
