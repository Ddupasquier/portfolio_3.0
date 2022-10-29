<script>
	import Projects from '$lib/Projects.svelte';
	import Spacer from '$lib/Spacer.svelte';
</script>

<div class="container">
	<Projects />
	<Spacer />	
</div>

<style lang="scss">
	.container {
		position: relative;
		top: 140vh;
		width: 90%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
