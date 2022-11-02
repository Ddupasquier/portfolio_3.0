<script lang="ts">
	export let onClick: () => void;
</script>

<button on:click={() => onClick()}>
	<slot />
</button>

<style lang="scss">
	@use 'src/styles/imports/colors' as colors;

	button {
		background-color: colors.$gray;
		border: none;
		border-radius: 0.3rem 0.3rem 0 0;
		color: colors.$white;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 600;
		width: 100%;
		height: fit-content;
		padding: .3rem;
		transition: all 0.2s ease-in-out;
		&:hover {
			background: colors.$white;
			color: black;
		}
	}
</style>
