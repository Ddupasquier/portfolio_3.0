<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data/projects';
	import type { Project } from '$lib/data/projects';
	import ProjectItem from '$lib/Projects/ProjectItem.svelte';
	import { Loader } from 'mysvelte-ui';
	import { parseDateString } from '$lib/utils';

	let scroll: number;
	let projectsList: Project[] = [];

	const itemsPerPage = 6;
	let currentPage = 1;
	let loading = false;

	onMount(() => {
		projectsList = projects;
	});

	$: sortedProjects = projectsList.sort((a, b) => {
		if (a.when.includes('Present')) {
			return -1;
		} else if (b.when.includes('Present')) {
			return 1;
		} else {
			const dateA = parseDateString(a.when);
			const dateB = parseDateString(b.when);
			return dateB.getTime() - dateA.getTime();
		}
	});

	$: paginatedProjects = sortedProjects.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);
	$: totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

	async function updatePage(page: number) {
		loading = true;
		await new Promise((resolve) => setTimeout(resolve, 300));
		currentPage = page;
		loading = false;
	}
</script>

<svelte:window bind:scrollY={scroll} />

<div class="pagination">
	<button on:click={() => updatePage(1)} disabled={currentPage === 1}>Newest</button>
	{#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
		{#if page !== 1 && page !== totalPages}
			<button on:click={() => updatePage(page)} class:selected={page === currentPage}>{page}</button
			>
		{/if}
	{/each}
	<button on:click={() => updatePage(totalPages)} disabled={currentPage === totalPages}
		>Oldest</button
	>
</div>

{#if loading}
	<div class="loader">
		<Loader />
	</div>
{:else}
	<div class="gallery">
		{#each paginatedProjects as project}
			<ProjectItem {project} />
		{/each}
	</div>
{/if}

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        width: 95%;
    }
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
    }
    .pagination {
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 1rem 0;
    }
    .pagination button {
        background-color: #4DAA73;
        border: 2px solid #4DAA73;
        border-radius: 20px;
        color: #ffffff;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    .pagination button:hover:not(:disabled) {
        background-color: #f3f3f3;
        color: #333;
    }
    .pagination button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .pagination button.selected {
        background-color: #4DAA73;
        color: #ffffff;
    }
</style>

