<script lang="ts">
	import Projects from '$lib/Projects/Projects.svelte';
	import BottomSpacer from '$lib/BottomSpacer.svelte';
	import About from '$lib/About.svelte';
	import Banner from '$lib/Banner.svelte';
	import Contact from '$lib/Contact.svelte';
	import Recommendations from '$lib/Recommendations.svelte';
	import CommitCalculator from '$lib/GithubCommits/CommitCalculator.svelte';
	import type { ContributionData } from './+page';

	export let data: ContributionData;
	let scroll: number = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="container" style:transform={`translateY(${scroll / 3}px)`}>
	<About />
	<CommitCalculator commitData={data} />
	<section>
		<Banner isSubBanner={false}>Some Stuff That I've Done:</Banner>
		<Projects />
	</section>
	<section>
		<Banner isSubBanner={true}>Want To Work Together?</Banner>
		<Contact />
	</section>
	<section>
		<Recommendations />
	</section>
	<BottomSpacer />
</div>

<style lang="scss">
	.container {
		position: relative;
		top: 15rem;
		width: 90%;
		margin: auto;
		display: flex;
		gap: 5rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
