<script lang="ts">
	import Projects from '$lib/Projects/Projects.svelte';
	import BottomSpacer from '$lib/BottomSpacer.svelte';
	import About from '$lib/About.svelte';
	import Banner from '$lib/Banner.svelte';
	import Contact from '$lib/Contact.svelte';

	let scroll: number = 0;
</script>

<svelte:window on:scroll={(e) => (scroll = window.scrollY)} />

<div class="container" style:transform={`translateY(${scroll / 3}px)`}>
	<About />
	<Banner isSubBanner={false}>Some Stuff That I've Done:</Banner>
	<Projects />
	<Banner isSubBanner={true}>Want To Work Together?</Banner>
	<Contact />
	<!-- <BottomSpacer /> -->
</div>

<style lang="scss">
	.container {
		position: relative;
		top: 15rem;
		width: 90%;
		margin: auto;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
