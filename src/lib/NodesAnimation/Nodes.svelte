<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	onMount(() => {
		if (canvas) {
			const parentContainer = canvas.parentElement as HTMLElement;
			ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
			canvas.width = parentContainer.clientWidth;
			canvas.height = window.innerHeight;

			class Node {
				x: number;
				y: number;
				size: number;
				color: string;
				weight: number;

				constructor(x: number, y: number) {
					this.x = x;
					this.y = y;
					this.size = Math.random() * 5 + 1;
					this.color = 'rgba(77, 170, 115)';
					this.weight = Math.random() * 0.5 - 0.25;
				}

				update() {
					this.size += this.weight;
					if (this.size < 0 || this.size > 5) this.weight *= -1;
					this.size = Math.max(Math.min(this.size, 5), 0);
				}

				draw() {
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
					ctx.closePath();
					ctx.fillStyle = this.color;
					ctx.fill();
				}
			}

			let nodesArray: Node[] = [];

			const setup = () => {
				nodesArray = [];
				const nodesCount = (canvas.width * canvas.height) / 9000;

				for (let i = 0; i < nodesCount; i++) {
					const x = Math.random() * canvas.width;
					const y = Math.random() * canvas.height;
					nodesArray.push(new Node(x, y));
				}
			};

			const animate = () => {
				ctx.fillStyle = 'transparent';
				ctx.fillRect(0, 0, canvas.width, canvas.height);

				for (let i = 0; i < nodesArray.length; i++) {
					nodesArray[i].update();
					nodesArray[i].draw();

					for (let j = i; j < nodesArray.length; j++) {
						const dx = nodesArray[i].x - nodesArray[j].x;
						const dy = nodesArray[i].y - nodesArray[j].y;
						const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < 100) {
							ctx.beginPath();
							ctx.strokeStyle = 'rgba(77, 170, 115)';
							ctx.lineWidth = 2;
							ctx.moveTo(nodesArray[i].x, nodesArray[i].y);
							ctx.lineTo(nodesArray[j].x, nodesArray[j].y);
							ctx.stroke();
						}
					}
				}

				requestAnimationFrame(animate);
			};

			window.addEventListener('resize', () => {
				canvas.width = parentContainer.clientWidth;
				canvas.height = window.innerHeight;
				setup();
			});

			setup();
			animate();
		}
	});
</script>

<div class="container">
    <canvas bind:this={canvas} />
</div>

<style>
	.container {
		position: absolute;
        bottom: -50rem;
		width: 100%;
        z-index: -1;
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
	}

</style>
