<script lang="ts">
</script>

<h3>
	<slot />
</h3>

<style lang="scss">
	@use 'src/styles/imports/fonts' as font;
	h3 {
		font-size: 1.1rem;
		font-weight: 800;
		text-transform: uppercase;
		font-family: font.$sub-banner;
		color: rgb(183, 68, 255);
		width: 100%;
	}
</style>
