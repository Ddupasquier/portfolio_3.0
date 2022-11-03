<script lang="ts">
	import Snow from '$lib/Snow/Snow.svelte';
	import frontwaves from './frontwaves.svg';
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="front-waves" style:transform={`translateY(${scroll / 5}px)`}>
	<img src={frontwaves} alt="front waves" />
</div>
<div  style:transform={`translateY(${scroll / 5}px)`} height="100%" width="100%">
	<Snow />
</div>

<style lang="scss">
	.front-waves {
		position: absolute;
		top: 35rem;
		left: 0;
		width: 100%;
		overflow: hidden;
		z-index: 1;
		img {
			height: 100%;
			min-width: 100rem;
			max-height: 100rem;
		}
	}
</style>
