<script lang="ts">
  export let commitData: ContributionData;

  $: console.log(commitData);

  function getNumWeeks(dailyContributions: string | any[]) {
    return Math.ceil(dailyContributions.length / 7);
  }

  $: numWeeks = getNumWeeks(commitData.dailyContributions);
</script>

<div class="calendar" style="grid-template-columns: repeat({numWeeks}, 1fr);">
  {#each commitData.dailyContributions as { date, contributionCount }, i}
    <div
      class="day"
      data-count={Math.min(contributionCount, 4)}
      style="grid-row: {(i % 7) + 1}; grid-column: {Math.floor(i / 7) + 1};">
      <span class="tooltip">{contributionCount}</span>
    </div>
  {/each}
</div>

<style>
  .calendar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    gap: 4px;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: #bb35dc;
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
    filter: brightness(.4);
  }

  .day[data-count='2'] {
    opacity: 1;
    filter: brightness(.6);
  }

  .day[data-count='3'] {
    opacity: 1;
    filter: brightness(.8);
  }

  .day[data-count='4'] {
    opacity: 1;
    filter: brightness(1);
  }

  .tooltip {
    font-size: 12px;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .day:hover .tooltip {
    opacity: 1;
  }
</style>
