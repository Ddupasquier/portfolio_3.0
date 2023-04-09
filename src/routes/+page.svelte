<script lang="ts">
	import Projects from '$lib/Projects/Projects.svelte';
	import BottomSpacer from '$lib/BottomSpacer.svelte';
	import About from '$lib/About.svelte';
	import Banner from '$lib/Banner.svelte';
	import Contact from '$lib/Contact.svelte';
	import Recommendations from '$lib/Recommendations.svelte';
	import CommitCalendar from '$lib/GithubCommits/CommitCalendar.svelte';
	import Nodes from '$lib/NodesAnimation/Nodes.svelte';

	let scroll: number = 0;
	let calendarSize: 'small' | 'medium' | 'large' = 'medium';
</script>

<svelte:window bind:scrollY={scroll} 
	on:resize={() => {
		if (window.innerWidth < 900) {
			calendarSize = 'small';
		} else if (window.innerWidth < 1300) {
			calendarSize = 'medium';
		} else {
			calendarSize = 'large';
		}
	}}
/>

<div class="container" style:transform={`translateY(${scroll / 3}px)`}>
	<About />
	<CommitCalendar gitToken={import.meta.env.VITE_GITHUB_TOKEN} gap={4} size={calendarSize} />
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
<!-- <Nodes /> -->

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
