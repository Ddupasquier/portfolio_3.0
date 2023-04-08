<script lang="ts">
	import { onMount } from 'svelte';
	import Commit from './Commit.svelte';

	export let color: string = '#bb35dc';
	export let commitData: ContributionData;
	export let background: string = 'rgba(69, 69, 69, .5)';

	let popoverShown: boolean = true;

	function getNumWeeks(dailyContributions: string | any[]) {
		return Math.ceil(dailyContributions.length / 7);
	}

	$: numWeeks = getNumWeeks(commitData.dailyContributions);

	const checkWidth = () => {
		if (window.innerWidth < 640) {
			popoverShown = false;
		}
	};

	onMount(() => {
		checkWidth();
	});
</script>

<svelte:window
	on:resize={() => {
		checkWidth();
	}}
/>

<div class="wrapper">
	<p class="above-calendar">
		Github commits to date: <span>
			{commitData.totalContributions}
		</span>
	</p>
	<div
		class="calendar"
		style="grid-template-columns: repeat({numWeeks}, 1fr); background-color: {background}"
	>
		{#each commitData.dailyContributions as { date, contributionCount }, i}
			<Commit {contributionCount} {date} {color} {i} />
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.calendar {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(7, 1fr);
		gap: 4px;
		width: fit-content;
		padding: 10px;
		border-radius: 0.5rem;
	}

	@media screen and (max-width: 640px) {
		.calendar {
			overflow: auto;
			direction: rtl;
			width: 75%;
		}
	}

	.above-calendar {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 500;
		text-transform: uppercase;
		span {
			color: #00ff22;
		}
	}
</style>
