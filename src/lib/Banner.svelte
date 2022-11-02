<script lang="ts">
	import SubBanner from './SubBanner.svelte';
	export let isSubBanner: boolean = false;
</script>

<div class="banner-container">
	<h2>
		<slot />
	</h2>
	{#if isSubBanner}
		<SubBanner>Here's How You Can Get In Touch!!!</SubBanner>
	{/if}
</div>

<style lang="scss">
	.banner-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100%;
		width: fit-content;
	}
	// h2 {
	// 	font-size: 4rem;
	// 	font-weight: 800;
	// 	text-transform: uppercase;
	// 	font-family: 'Open Sans Pro', sans-serif;
	// 	// background: url('https://img.wattpad.com/1549ce624c74e30b486b6602831b282e1d5d7d00/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4b6e66724e4b676e6d79767a77773d3d2d3637363330373531312e313537363735316331343663336238313638353838303330323132382e676966')
	// 	// 	no-repeat;
	// 	background: url('https://d2w9rnfcy7mm78.cloudfront.net/4082506/original_7791a72ccf38947740dfd6aeec940ff1.gif?1555338882')
	// 		no-repeat;
	// 	background-size: cover;
	// 	background-clip: text;
	// 	background-position: center;
	// 	-webkit-background-clip: text;
	// 	-webkit-text-fill-color: transparent;
	// 	transition: all 0.6s;
	// }

	h2 {
		font-size: 3rem;
		font-weight: 800;
		text-transform: uppercase;
		font-family: 'Open Sans Pro', sans-serif;
		color: white;
	}
</style>
