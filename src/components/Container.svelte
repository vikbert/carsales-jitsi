<script>
  import { fade } from 'svelte/transition';
  export let color = 'orange';
  export let classes = '';
  let classAnimation = '';
  let classDiv = '';

  $: classDiv = 'container ' + classes + ' ' + classAnimation;
  function handleMouseOver() {
    classAnimation = 'shadow-pop-tr';
  }

  function handleMouseOut() {
    classAnimation = '';
  }
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    /* border-radius: 8px; */
    margin: 1px 4px;
  }
  .empty {
    color: white;
    height: 10px !important;
    padding: 0 !important;
  }
</style>

<div
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
  transition:fade
  class={classDiv}
  style={'background: ' + color}>
  <slot />
</div>
