<script lang="ts">
	import backwaves from './backwaves.svg';
</script>

<div class="back-waves">
	<img src={backwaves} alt="backwaves" />
</div>

<style lang="scss">
	.back-waves {
		position: absolute;
		left: 0;
		width: 100%;
		overflow: hidden;
		z-index: -1;
		img {
			height: 100%;
			min-width: 100rem;
			max-height: 220rem;
		}
	}
</style>
