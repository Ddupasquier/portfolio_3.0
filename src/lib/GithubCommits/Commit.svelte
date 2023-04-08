<script lang="ts">
	import { onMount } from 'svelte';

	export let contributionCount: number;
	export let color: string = '#bb35dc';
	export let date: string;
	export let i: number;
	
	const sizeValues: Record<typeof size, string> = {
		small: '7px',
		medium: '12px',
		large: '20px'
	};
	
	let size: 'small' | 'medium' | 'large' = 'medium';
	let showTooltip: boolean = false;
	let tooltipToMount: boolean = true;

	const checkSize = () => {
		if (window.innerWidth < 900) {
			size = 'small';
		} else if (window.innerWidth < 1300) {
			size = 'medium';
		} else {
			size = 'large';
		}

		if (window.innerWidth < 640) {
			tooltipToMount = false;
		}
	};

	onMount(() => {
		checkSize();
	});
</script>

<svelte:window
	on:resize={() => {
		checkSize();
	}}
/>

<div class="popover">
	<div
		class="day"
		data-count={Math.min(contributionCount, 4)}
		style="grid-row: {(i % 7) + 1}; grid-column: {Math.floor(i / 7) +
			1}; background: {color}; width: {sizeValues[size]}; height: {sizeValues[size]};"
		on:mouseover={() => (showTooltip = true)}
		on:mouseout={() => (showTooltip = false)}
		on:focus={() => (showTooltip = true)}
		on:blur={() => (showTooltip = false)}
	/>
	{#if showTooltip && tooltipToMount}
		<div class="tooltip">
			<p>
				<span>{contributionCount} commits</span>
				{date}
			</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.day {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 2px;
		opacity: 0;
		cursor: pointer;
		transition: transform 0.3s;
	}

	.day:hover {
		transform: scale(1.1);
	}

	.day[data-count='0'] {
		opacity: 0;
	}

	.day[data-count='1'] {
		opacity: 1;
		filter: brightness(0.4);
	}

	.day[data-count='2'] {
		opacity: 1;
		filter: brightness(0.6);
	}

	.day[data-count='3'] {
		opacity: 1;
		filter: brightness(0.8);
	}

	.day[data-count='4'] {
		opacity: 1;
		filter: brightness(1);
	}

	.popover {
		position: relative;
	}

	.tooltip {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		padding: 5px;
		border-radius: 3px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		white-space: nowrap;
		z-index: 10;
	}

	p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: black;
		margin: 0;
		padding: 0;
	}
</style>
